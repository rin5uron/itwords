// 共有ユーティリティ: env 読み込み・引数パース・表示
// 依存ゼロ（Node 標準のみ）。gsc.mjs / bq.mjs から import する。
import fs from 'node:fs';
import path from 'node:path';

// .env.local → .env の順で読み込み、process.env に未設定のものだけ補完する。
// （既に環境変数があればそれを優先＝CI/シェルでの上書きを尊重）
export function loadEnv(cwd = process.cwd()) {
  for (const file of ['.env.local', '.env']) {
    const p = path.join(cwd, file);
    if (!fs.existsSync(p)) continue;
    const text = fs.readFileSync(p, 'utf8');
    for (const rawLine of text.split('\n')) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eq = line.indexOf('=');
      if (eq === -1) continue;
      const key = line.slice(0, eq).trim();
      let val = line.slice(eq + 1).trim();
      // 前後のクォートを剥がす
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (!(key in process.env)) process.env[key] = val;
    }
  }
}

// --key=value と --flag を解釈する。
export function parseArgs(argv = process.argv.slice(2)) {
  const args = {};
  for (const a of argv) {
    if (!a.startsWith('--')) continue;
    const body = a.slice(2);
    const eq = body.indexOf('=');
    if (eq === -1) args[body] = true;
    else args[body.slice(0, eq)] = body.slice(eq + 1);
  }
  return args;
}

// 必須 env を取り出す。無ければ手順を案内して終了。
export function requireEnv(name, hint = '') {
  const v = process.env[name];
  if (!v || !String(v).trim()) {
    console.error(`❌ 環境変数 ${name} が未設定です。`);
    if (hint) console.error(`   → ${hint}`);
    console.error('   セットアップ: .claude/skills/gsc-bigquery-analyst/references/setup.md');
    process.exit(1);
  }
  return String(v).trim();
}

// YYYY-MM-DD で日付を返す（UTCベース。GSC/BQ とも日付粒度なので十分）
export function ymd(date) {
  return date.toISOString().slice(0, 10);
}
export function daysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d;
}

// 配列(オブジェクト)を簡易テーブルで標準出力する。
export function printTable(rows, columns) {
  if (!rows || rows.length === 0) {
    console.log('(0 行)');
    return;
  }
  const cols = columns || Object.keys(rows[0]);
  const widths = cols.map((c) =>
    Math.max(c.length, ...rows.map((r) => String(r[c] ?? '').length))
  );
  const sep = (ch = '─') => cols.map((_, i) => ch.repeat(widths[i])).join('─┼─');
  const fmt = (r) =>
    cols.map((c, i) => String(r[c] ?? '').padEnd(widths[i])).join(' │ ');
  console.log(cols.map((c, i) => c.padEnd(widths[i])).join(' │ '));
  console.log(sep());
  for (const r of rows) console.log(fmt(r));
  console.log(`\n(${rows.length} 行)`);
}

// 動的 import を試み、未インストールなら案内して終了。
export async function importOrHint(mod) {
  try {
    return await import(mod);
  } catch {
    console.error(`❌ パッケージ ${mod} が見つかりません。`);
    console.error('   → npm i -D googleapis @google-cloud/bigquery');
    console.error('   セットアップ: .claude/skills/gsc-bigquery-analyst/references/setup.md');
    process.exit(1);
  }
}
