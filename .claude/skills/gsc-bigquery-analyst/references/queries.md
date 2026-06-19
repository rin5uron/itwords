# クエリ・SQL リファレンス

GSC のディメンション/指標と、BigQuery（GA4生データ）の SQL 例をまとめる。すべて itwords.jp 向け。

---

## GSC（Search Console API）

### ディメンション

| ディメンション | 説明 |
|---|---|
| `query` | 検索クエリ（キーワード） |
| `page` | ページURL（/terms/* など） |
| `device` | `DESKTOP` / `MOBILE` / `TABLET` |
| `country` | 国（ISO 3166-1 alpha-3、例 `JPN`） |
| `date` | 日付（YYYY-MM-DD） |

複数指定で組み合わせ集計（最大 query+page+device など）。`scripts/gsc.mjs --dimensions=query,page`。

### 指標（自動で付く）

`clicks`（クリック）/ `impressions`（表示）/ `ctr`（クリック率）/ `position`（平均掲載順位）

### 制約

- 最大16ヶ月前まで
- **3日前以降は未確定**（リアルタイムではない）
- 1回の取得は最大 25,000 行（スクリプトは `--limit` でページングせず先頭のみ取得）

### 順位別 CTR の目安（改善インパクト試算に使う）

| 順位 | CTR目安 |
|---|---|
| 1位 | 30〜40% |
| 2位 | 15〜20% |
| 3位 | 10〜15% |
| 4〜10位 | 5〜10% |

「順位は高いのに CTR が目安を大きく下回る」=title/description の改善余地。

### 典型シナリオ

```bash
# 損失キーワード（表示多・クリック0）= /seo-check の自動版
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=query --days=28 --limit=1000 --min-impressions=10 --zero-clicks

# TOP3入り候補（順位4〜10位を狙う）
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=query --days=28 --limit=1000 --min-position=4 --max-position=10

# ページ別 × デバイス別
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=page,device --days=28 --limit=50

# 期間比較（直近28日 vs その前28日）
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=query --days=28 --compare
```

---

## BigQuery（GA4 export: `<GCP_PROJECT_ID>.<GA4_DATASET>`）

> テーブルは `events_YYYYMMDD`（前日まで確定）/ `events_intraday_YYYYMMDD`（当日・ストリーミング時）。
> プロジェクトID・データセット名は **env から注入**され、スクリプトが `__PROJECT__` / `__DATASET__` を置換する。SQL を手書きするときは実際の値に置き換える。

### ボット除外（必ず入れる）

```sql
WHERE (geo.country = 'Japan' OR geo.country IS NULL)
-- itwords は日本語用語辞典なので、海外からの bot 的アクセスを落とす。
-- より厳密にするなら NOT IN ('Singapore','Hong Kong','China', ...) でも可。
```

### 過去30日の日別トレンド（`--preset=daily-trend`）

```sql
SELECT
  PARSE_DATE('%Y%m%d', event_date) AS date,
  COUNT(*) AS events,
  COUNTIF(event_name = 'page_view') AS page_views,
  COUNT(DISTINCT user_pseudo_id) AS users,
  COUNTIF(event_name = 'session_start') AS sessions
FROM `__PROJECT__.__DATASET__.events_*`
WHERE _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY))
                        AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
  AND (geo.country = 'Japan' OR geo.country IS NULL)
GROUP BY date
ORDER BY date ASC
```

### 昨日のページ別 PV TOP20（`--preset=top-pages`）

```sql
SELECT
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') AS page,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_title')    AS title,
  COUNT(*) AS page_views,
  COUNT(DISTINCT user_pseudo_id) AS users
FROM `__PROJECT__.__DATASET__.events_*`
WHERE _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
  AND event_name = 'page_view'
  AND (geo.country = 'Japan' OR geo.country IS NULL)
GROUP BY page, title
ORDER BY page_views DESC
LIMIT 20
```

### 用語ページ（/terms/*）だけに絞る

```sql
WHERE (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location') LIKE '%/terms/%'
```

### 流入元（session のソース/メディア）

```sql
SELECT
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'source') AS source,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'medium') AS medium,
  COUNT(*) AS events
FROM `__PROJECT__.__DATASET__.events_*`
WHERE _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
  AND event_name = 'session_start'
GROUP BY source, medium
ORDER BY events DESC
LIMIT 20
```

### 利用可能テーブルの確認

```sql
SELECT table_name
FROM `__PROJECT__.__DATASET__.INFORMATION_SCHEMA.TABLES`
WHERE table_name LIKE 'events_2%'
ORDER BY table_name DESC
LIMIT 15
```

### コスト・最適化

- 必要な**日付だけ**読む（`_TABLE_SUFFIX` で絞る）／必要な**カラムだけ**（`SELECT *` 禁止）
- まず `WHERE` で絞ってから集計する
- BigQuery は**前日まで**。当日が要るなら intraday テーブルか GA4 API
- VIEW があると `events_*` ワイルドカードが失敗することがある → その場合は対象日の `UNION ALL` で回避

---

## 統合分析（GSC × BigQuery）の考え方

| 観測 | GSC | BigQuery/GA4 | 解釈 |
|---|---|---|---|
| 表示↑・クリック横ばい | impressions↑, ctr↓ | — | title/description 改善余地（CTR問題） |
| クリック↑・PV横ばい | clicks↑ | page_views横ばい | 計測漏れ or 直帰（中身問題） |
| 特定ページの順位↓ | position悪化 | そのページのPV↓ | コンテンツ/競合要因。優先改善 |
| 新規ページが拾われない | impressions≈0 | PV≈0 | インデックス未/内部リンク不足 |

「**入口（検索）= GSC**」と「**中身（行動）= GA4**」を同じページ単位で並べると、どこを直すべきかが一意に決まる。
