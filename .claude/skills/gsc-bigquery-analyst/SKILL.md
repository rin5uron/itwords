---
name: gsc-bigquery-analyst
description: itwords.jp の Google Search Console（検索パフォーマンス）と BigQuery（GA4生データ）を統合分析する。検索キーワード・順位・CTR・インデックス状況の分析、GA4生データの日別比較・トレンド・ページ別PV・流入分析まで対応。「Search Consoleで」「検索順位」「CTR」「BigQueryで」「GA4の生データ」「アクセス分析」「SEO分析」などのキーワードで自動起動。
---

# GSC × BigQuery Analyst Skill（itwords.jp）

itwords.jp の検索パフォーマンス（GSC）とユーザー行動（GA4生データ）を、**コピペではなく API で自動取得**して分析する統合 skill。

> このリポジトリの `/seo-check` は「人間が GSC の画面からデータを手で貼り付ける」前提で動く。この skill はその手作業をなくし、サービスアカウント1つで GSC と BigQuery の両方を直接叩いて分析まで完結させる。

## この skill でやること

### GSC（Google Search Console）側

- クエリ（検索キーワード）別のクリック・表示回数・CTR・平均掲載順位
- ページ（/terms/* 等）別の検索パフォーマンス
- 「表示は多いがクリック0」=損失キーワードの抽出（`/seo-check` の自動版）
- 順位4〜10位=TOP3入り候補の発見
- 期間比較（今週 vs 先週、今月 vs 先月）と急増/急減の検知

### BigQuery（GA4生データ）側

- 日別 PV / UU / セッションの比較・過去30日トレンド
- ページ別 PV ランキング（GA4 API では取りにくい深掘り）
- 流入元・ランディングページ分析
- 異常検知（ボット除外を前提にした正味数値）

### 統合分析（この skill の主役）

- **GSC（流入の入口）× BigQuery（流入後の行動）を突き合わせる**
  例: 「検索で表示は伸びてるのに PV が伸びない」→ CTR 問題か離脱問題かを切り分け
- 用語ページ単位で「検索順位 → クリック → PV → 滞在」のファネルを1枚で見る

## ⚠️ 前提（初回は必ず SETUP を読む）

この skill は **Google Cloud のサービスアカウント（SA）** で認証する。**初回は必ず以下を読んで環境を整える**こと。

➡️ [references/setup.md](./references/setup.md)（サービスアカウント発行・GA4→BigQueryエクスポート有効化・権限付与・env設定・依存インストール）

セットアップが終わると以下が揃う:

| 環境変数 | 例 | 用途 |
|---|---|---|
| `GOOGLE_APPLICATION_CREDENTIALS` | `.secrets/itwords-analytics-sa.json` | SA鍵ファイルのパス |
| `GSC_SITE_URL` | `https://itwords.jp/`（または `sc-domain:itwords.jp`）| GSC プロパティ |
| `GCP_PROJECT_ID` | `itwords-analytics` | BigQuery 実行プロジェクト |
| `GA4_DATASET` | `analytics_123456789` | GA4 エクスポート先データセット |

> ⚠️ **ハードコード禁止**: サイトURL・プロジェクトID・データセット名は **必ず env から読む**。skill 内・スクリプト内に `itwords.jp` 等を直書きしない（別サイトへ流用できるようにするため）。

## 基本フロー

1. 分析テーマと期間を決める（曖昧なら最初に1つだけ確認）
2. 必要なら `references/setup.md` で env が揃っているか確認
3. GSC は `scripts/gsc.mjs`、BigQuery は `scripts/bq.mjs` を実行してデータ取得
4. レポート形式（下記雛形）で差分・示唆・次アクションを返す

## 実行コマンド早見表

```bash
# --- GSC: 過去28日のクエリ別パフォーマンス TOP30 ---
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=query --days=28 --limit=30

# --- GSC: 「表示が多くてクリック0」の損失キーワード（/seo-check の自動版）---
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=query --days=28 --limit=1000 --min-impressions=10 --zero-clicks

# --- GSC: ページ別 ---
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=page --days=28 --limit=50

# --- GSC: 期間比較（今28日 vs 前28日）---
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs \
  --dimensions=query --days=28 --compare

# --- BigQuery: 過去30日の日別 PV/UU トレンド ---
node .claude/skills/gsc-bigquery-analyst/scripts/bq.mjs --preset=daily-trend --days=30

# --- BigQuery: 昨日のページ別 PV TOP20 ---
node .claude/skills/gsc-bigquery-analyst/scripts/bq.mjs --preset=top-pages --limit=20

# --- BigQuery: 任意SQL（コスト注意・必要なカラム/日付だけ）---
node .claude/skills/gsc-bigquery-analyst/scripts/bq.mjs --sql="SELECT ..."
```

詳しいクエリ・ディメンション・SQL例は [references/queries.md](./references/queries.md)。

## レポート雛形

```markdown
# itwords.jp 分析レポート: [テーマ]

## 期間
[開始] 〜 [終了]（[日数]日間）／比較対象: [前期間]

## サマリー
| 指標 | 今期 | 前期 | 変化 | 変化率 |
| --- | --- | --- | --- | --- |
| クリック数（GSC） | | | | |
| 表示回数（GSC） | | | | |
| 平均CTR（GSC） | | | | |
| 平均掲載順位（GSC） | | | | |
| PV（BigQuery/GA4） | | | | |
| UU（BigQuery/GA4） | | | | |

## 検索パフォーマンス（GSC）
- 損失キーワード（表示多・クリック0）: …
- TOP3入り候補（順位4〜10位）: …

## ユーザー行動（BigQuery/GA4）
- 伸びた/落ちたページ: …

## 統合所見（GSC × GA4）
- [入口（検索）と中身（行動）を突き合わせた示唆]

## 次アクション
1. [施策] → [期待効果]
```

## 実行時の優先ルール

- **当日データ**が要るなら BigQuery（前日まで）ではなく GSC か GA4 API を検討する
- **ボット除外を必ず入れる**（BigQuery クエリ。`references/queries.md` 参照）
- `SELECT *` を避ける／必要な日付・カラムだけ読む（BigQuery コスト対策）
- GSC は **3日前以降のデータは未確定**（リアルタイムではない）。最新日は誤読しない
- 数値は**スクリプトの実出力**を必ず根拠にする（LLM が数字を創作しない）

## itwords ならではの使いどころ

- `/seo-check` の手貼りを廃し、損失キーワードを**自動で**リストアップ → metadata 修正へ
- `/new-page` で作った用語ページが、公開後に**実際どのクエリで拾われたか**を追跡
- 「IT用語」系の強い競合キーワードで、表示はあるが取れていない語を発見 → 新規ページ候補に

## 関連

- 手動版の SEO チェック: `/seo-check`（`.claude/commands/seo-check.md`）
- 毎日の作業ルーチン: `docs/WORKFLOW.md`（Phase1 データ分析をこの skill で自動化できる）
