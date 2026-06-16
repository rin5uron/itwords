#!/usr/bin/env node
// Google Search Console の検索パフォーマンスを取得する。
// 認証: GOOGLE_APPLICATION_CREDENTIALS (サービスアカウントJSON)
// 対象: GSC_SITE_URL (例 https://itwords.jp/ または sc-domain:itwords.jp)
//
// 使い方:
//   node scripts/gsc.mjs --dimensions=query --days=28 --limit=30
//   node scripts/gsc.mjs --dimensions=query --days=28 --limit=1000 --min-impressions=10 --zero-clicks
//   node scripts/gsc.mjs --dimensions=page,device --days=28 --limit=50
//   node scripts/gsc.mjs --dimensions=query --days=28 --compare
//
// 主なオプション:
//   --dimensions=query[,page,device,country,date]  集計軸（既定 query）
//   --days=28        期間（日数。既定28）
//   --lag=3          直近の未確定日を避けるラグ（既定3日。GSCは3日前以降が未確定）
//   --limit=30       取得行数（既定30）
//   --min-impressions=N  表示N回未満を除外（クライアント側フィルタ）
//   --min-position=N / --max-position=N  平均掲載順位で絞る
//   --zero-clicks    クリック0のみ（損失キーワード抽出）
//   --compare        直前の同期間と比較（サマリー差分）
//   --json           生JSONで出力
import { loadEnv, parseArgs, requireEnv, ymd, daysAgo, printTable, importOrHint } from './_lib.mjs';

loadEnv();
const args = parseArgs();

const creds = requireEnv('GOOGLE_APPLICATION_CREDENTIALS', 'SA鍵JSONのパス（例 .secrets/itwords-analytics-sa.json）');
const siteUrl = requireEnv('GSC_SITE_URL', 'GSCプロパティ（例 https://itwords.jp/ か sc-domain:itwords.jp）');

const dimensions = String(args.dimensions || 'query').split(',').map((s) => s.trim()).filter(Boolean);
const days = Number(args.days || 28);
const lag = Number(args.lag ?? 3);
const limit = Number(args.limit || 30);
const minImpressions = args['min-impressions'] != null ? Number(args['min-impressions']) : null;
const minPosition = args['min-position'] != null ? Number(args['min-position']) : null;
const maxPosition = args['max-position'] != null ? Number(args['max-position']) : null;
const zeroClicks = !!args['zero-clicks'];

const { google } = await importOrHint('googleapis');

const auth = new google.auth.GoogleAuth({
  keyFile: creds,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});
const searchconsole = google.searchconsole({ version: 'v1', auth });

async function query(startDate, endDate) {
  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions,
      rowLimit: Math.min(Math.max(limit, 1000), 25000), // フィルタ前提で広めに取り、後で絞る
    },
  });
  return res.data.rows || [];
}

function shape(rows) {
  return rows.map((r) => {
    const o = {};
    dimensions.forEach((d, i) => (o[d] = r.keys?.[i] ?? ''));
    o.clicks = r.clicks ?? 0;
    o.impressions = r.impressions ?? 0;
    o.ctr = `${((r.ctr ?? 0) * 100).toFixed(1)}%`;
    o.position = (r.position ?? 0).toFixed(1);
    return o;
  });
}

function applyFilters(rows) {
  let out = rows;
  if (minImpressions != null) out = out.filter((r) => (r.impressions ?? 0) >= minImpressions);
  if (zeroClicks) out = out.filter((r) => (r.clicks ?? 0) === 0);
  if (minPosition != null) out = out.filter((r) => (r.position ?? 0) >= minPosition);
  if (maxPosition != null) out = out.filter((r) => (r.position ?? 0) <= maxPosition);
  return out;
}

function summarize(rows) {
  const clicks = rows.reduce((a, r) => a + (r.clicks ?? 0), 0);
  const impressions = rows.reduce((a, r) => a + (r.impressions ?? 0), 0);
  const ctr = impressions ? (clicks / impressions) * 100 : 0;
  // 加重平均順位（表示回数で重み付け）
  const wpos = impressions
    ? rows.reduce((a, r) => a + (r.position ?? 0) * (r.impressions ?? 0), 0) / impressions
    : 0;
  return { clicks, impressions, ctr, position: wpos };
}

const endDate = ymd(daysAgo(lag));
const startDate = ymd(daysAgo(lag + days - 1));

const rawRows = await query(startDate, endDate);

if (args.compare) {
  const prevEnd = ymd(daysAgo(lag + days));
  const prevStart = ymd(daysAgo(lag + days * 2 - 1));
  const prevRows = await query(prevStart, prevEnd);
  const cur = summarize(rawRows);
  const prev = summarize(prevRows);
  const pct = (c, p) => (p ? `${(((c - p) / p) * 100).toFixed(1)}%` : '—');
  console.log(`# GSC 期間比較  ${siteUrl}`);
  console.log(`今期: ${startDate} 〜 ${endDate} / 前期: ${prevStart} 〜 ${prevEnd}\n`);
  printTable(
    [
      { 指標: 'クリック', 今期: cur.clicks, 前期: prev.clicks, 変化率: pct(cur.clicks, prev.clicks) },
      { 指標: '表示', 今期: cur.impressions, 前期: prev.impressions, 変化率: pct(cur.impressions, prev.impressions) },
      { 指標: 'CTR', 今期: `${cur.ctr.toFixed(1)}%`, 前期: `${prev.ctr.toFixed(1)}%`, 変化率: `${(cur.ctr - prev.ctr).toFixed(1)}pt` },
      { 指標: '平均順位', 今期: cur.position.toFixed(1), 前期: prev.position.toFixed(1), 変化率: `${(cur.position - prev.position).toFixed(1)}` },
    ],
    ['指標', '今期', '前期', '変化率']
  );
} else {
  const rows = applyFilters(shape(rawRows)).slice(0, limit);
  if (args.json) {
    console.log(JSON.stringify(rows, null, 2));
  } else {
    console.log(`# GSC ${dimensions.join(' × ')}  ${siteUrl}`);
    console.log(`期間: ${startDate} 〜 ${endDate}（${days}日／lag ${lag}）\n`);
    printTable(rows, [...dimensions, 'clicks', 'impressions', 'ctr', 'position']);
  }
}
