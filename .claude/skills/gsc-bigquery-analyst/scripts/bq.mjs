#!/usr/bin/env node
// BigQuery 上の GA4 エクスポートデータを分析する。
// 認証: GOOGLE_APPLICATION_CREDENTIALS (サービスアカウントJSON)
// 対象: GCP_PROJECT_ID（実行プロジェクト）/ GA4_DATASET（例 analytics_123456789）
//
// 使い方:
//   node scripts/bq.mjs --list-datasets
//   node scripts/bq.mjs --preset=tables
//   node scripts/bq.mjs --preset=daily-trend --days=30
//   node scripts/bq.mjs --preset=top-pages --limit=20
//   node scripts/bq.mjs --preset=source-medium --limit=20
//   node scripts/bq.mjs --sql="SELECT 1"
//
// オプション:
//   --preset=...   daily-trend | top-pages | source-medium | tables
//   --days=N       期間（daily-trend、既定30）
//   --limit=N      行数（top-pages/source-medium、既定20）
//   --terms-only   page_location を /terms/ 配下に絞る（top-pages）
//   --sql="..."    任意SQL（__PROJECT__/__DATASET__ は自動置換）
//   --json         生JSONで出力
import { loadEnv, parseArgs, requireEnv, importOrHint, printTable } from './_lib.mjs';

loadEnv();
const args = parseArgs();

const creds = requireEnv('GOOGLE_APPLICATION_CREDENTIALS', 'SA鍵JSONのパス');
const projectId = requireEnv('GCP_PROJECT_ID', 'BigQuery 実行プロジェクトID');

const { BigQuery } = await importOrHint('@google-cloud/bigquery');
const bq = new BigQuery({ projectId, keyFilename: creds });

// データセット一覧（GA4_DATASET 不要・セットアップ確認用）
if (args['list-datasets']) {
  const [datasets] = await bq.getDatasets();
  console.log(`# ${projectId} のデータセット`);
  printTable(datasets.map((d) => ({ dataset: d.id })), ['dataset']);
  process.exit(0);
}

const dataset = requireEnv('GA4_DATASET', 'GA4エクスポート先（例 analytics_123456789）。--list-datasets で確認');
const events = `\`${projectId}.${dataset}.events_*\``;
const botFilter = `(geo.country = 'Japan' OR geo.country IS NULL)`;
const days = Number(args.days || 30);
const limit = Number(args.limit || 20);

const presets = {
  tables: `
    SELECT table_name
    FROM \`${projectId}.${dataset}.INFORMATION_SCHEMA.TABLES\`
    WHERE table_name LIKE 'events_2%'
    ORDER BY table_name DESC
    LIMIT 15`,
  'daily-trend': `
    SELECT
      PARSE_DATE('%Y%m%d', event_date) AS date,
      COUNTIF(event_name = 'page_view') AS page_views,
      COUNT(DISTINCT user_pseudo_id) AS users,
      COUNTIF(event_name = 'session_start') AS sessions
    FROM ${events}
    WHERE _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL ${days} DAY))
                            AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
      AND ${botFilter}
    GROUP BY date
    ORDER BY date ASC`,
  'top-pages': `
    SELECT
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') AS page,
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_title')    AS title,
      COUNT(*) AS page_views,
      COUNT(DISTINCT user_pseudo_id) AS users
    FROM ${events}
    WHERE _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
      AND event_name = 'page_view'
      AND ${botFilter}
      ${args['terms-only'] ? `AND (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/terms/%'` : ''}
    GROUP BY page, title
    ORDER BY page_views DESC
    LIMIT ${limit}`,
  'source-medium': `
    SELECT
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'source') AS source,
      (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'medium') AS medium,
      COUNT(*) AS sessions
    FROM ${events}
    WHERE _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
      AND event_name = 'session_start'
    GROUP BY source, medium
    ORDER BY sessions DESC
    LIMIT ${limit}`,
};

let sql;
if (args.sql) {
  sql = String(args.sql).replaceAll('__PROJECT__', projectId).replaceAll('__DATASET__', dataset);
} else if (args.preset && presets[args.preset]) {
  sql = presets[args.preset];
} else {
  console.error('❌ --preset=(daily-trend|top-pages|source-medium|tables) か --sql="..." を指定してください。');
  process.exit(1);
}

const [job] = await bq.createQueryJob({ query: sql });
const [rows] = await job.getQueryResults();

// BigQuery の日付/数値オブジェクトを文字列化
const norm = rows.map((r) => {
  const o = {};
  for (const [k, v] of Object.entries(r)) {
    o[k] = v && typeof v === 'object' && 'value' in v ? v.value : v;
  }
  return o;
});

if (args.json) {
  console.log(JSON.stringify(norm, null, 2));
} else {
  console.log(`# BigQuery ${args.preset || 'custom'}  ${projectId}.${dataset}`);
  printTable(norm);
}
