# セットアップ手順（初回のみ）

この skill は **Google Cloud のサービスアカウント（SA）1つ** で、Google Search Console（GSC）と BigQuery（GA4生データ）の両方にアクセスする。下の 6 ステップで動くようになる。

> 所要時間: 15〜30分。GA4→BigQuery エクスポートのデータが溜まるまでは半日〜1日かかる（GSC 側は即日使える）。

---

## 全体像

```
                ┌─────────────────────────────┐
   サービス      │  itwords-analytics-sa.json   │  ← この1ファイルで両方を認証
   アカウント →  └──────────────┬──────────────┘
                                │
            ┌───────────────────┴───────────────────┐
            ▼                                        ▼
   Search Console API                         BigQuery
   (itwords.jp の検索データ)            (GA4 エクスポート: analytics_XXXX)
```

---

## ステップ1: Google Cloud プロジェクトを用意

1. [Google Cloud Console](https://console.cloud.google.com/) を開く
2. 既存プロジェクトを使うか、新規作成（例: `itwords-analytics`）
3. プロジェクトID をメモ（後で `GCP_PROJECT_ID` に入れる）
4. 「APIとサービス」→「ライブラリ」で以下を**有効化**:
   - **Google Search Console API**
   - **BigQuery API**

---

## ステップ2: サービスアカウント（SA）を発行

1. 「IAMと管理」→「サービスアカウント」→「サービスアカウントを作成」
2. 名前: 例 `itwords-analytics-sa`
3. ロール: **BigQuery ジョブユーザー**（`roles/bigquery.jobUser`）と **BigQuery データ閲覧者**（`roles/bigquery.dataViewer`）を付与
4. 作成後、その SA の「鍵」タブ →「鍵を追加」→「新しい鍵」→ **JSON** をダウンロード
5. ダウンロードした JSON を、このリポジトリの **`.secrets/itwords-analytics-sa.json`** に置く

```bash
mkdir -p .secrets
mv ~/Downloads/itwords-analytics-sa-XXXX.json .secrets/itwords-analytics-sa.json
```

> 🔒 **`.secrets/` は絶対に commit しない**（ステップ6で `.gitignore` に追加する）。

SA のメールアドレス（`xxx@itwords-analytics.iam.gserviceaccount.com` の形）をメモする。次のステップで使う。

---

## ステップ3: SA に Search Console の閲覧権限を渡す

1. [Google Search Console](https://search.google.com/search-console) を開く
2. itwords.jp のプロパティを選択
3. 「設定」→「ユーザーと権限」→「ユーザーを追加」
4. ステップ2でメモした **SA のメールアドレス** を追加し、権限は **「制限付き」（閲覧のみ）** でOK

> GSC プロパティが「URLプレフィックス」なら `GSC_SITE_URL=https://itwords.jp/`、「ドメイン」なら `GSC_SITE_URL=sc-domain:itwords.jp` を使う（ステップ5）。どちらか分からなければ Search Console のプロパティ名を見れば判別できる。

---

## ステップ4: GA4 → BigQuery エクスポートを有効化

> ⚠️ itwords はまだこのエクスポートが**無効**。これを有効にしないと BigQuery 側（PV/トレンド分析）はデータ0になる。GSC 側だけ先に使う場合はこのステップは後回しでOK。

1. [Google Analytics](https://analytics.google.com/) → 対象プロパティ →「管理」
2. 「BigQuery のリンク」→「リンク」
3. ステップ1のプロジェクト（`itwords-analytics`）を選択
4. データのエクスポート:
   - **毎日**（Daily）を有効化（無料枠で十分）
   - 必要なら「ストリーミング」も（当日データが要る場合。課金対象なので任意）
5. リンク完了後、BigQuery に **`analytics_<GA4プロパティID>`** というデータセットが作られる
   - 例: `analytics_123456789` ← この名前を `GA4_DATASET` に入れる
   - データセット名は BigQuery コンソール、または下のコマンドで確認できる:

```bash
# SA で見えるデータセット一覧（gcloud不要、ステップ6の依存を入れた後）
node .claude/skills/gsc-bigquery-analyst/scripts/bq.mjs --list-datasets
```

> 反映には数時間〜翌日かかる。`events_YYYYMMDD`（前日分）や `events_intraday_YYYYMMDD`（当日分・ストリーミング時）テーブルができていれば成功。

---

## ステップ5: 環境変数を設定

リポジトリ直下の `.env.local`（無ければ作る）に追記する。`.env.example` をコピーすると早い:

```bash
cp .claude/skills/gsc-bigquery-analyst/.env.example .env.local
# → 値を自分のものに書き換える
```

`.env.local` の中身（例）:

```bash
GOOGLE_APPLICATION_CREDENTIALS=.secrets/itwords-analytics-sa.json
GSC_SITE_URL=https://itwords.jp/
GCP_PROJECT_ID=itwords-analytics
GA4_DATASET=analytics_123456789
```

> スクリプトは `.env.local` → `.env` の順で自動読み込みする（`process.env` に既にあればそれを優先）。
> **値の末尾に改行やクォートを混ぜない**（`KEY=value` の素の形で書く）。

---

## ステップ6: 依存インストールと `.gitignore`

分析スクリプトは Google 公式ライブラリを使う（**Next.js のバンドルには含まれない解析専用ツール**なので devDependencies で入れる）:

```bash
npm i -D googleapis @google-cloud/bigquery
```

秘密ファイルを誤って commit しないよう `.gitignore` に追記:

```bash
printf '\n# analytics service account & local env\n.secrets/\n.env.local\n' >> .gitignore
```

---

## 動作確認

```bash
# 1) GSC が通るか（過去7日のクエリTOP5）
node .claude/skills/gsc-bigquery-analyst/scripts/gsc.mjs --dimensions=query --days=7 --limit=5

# 2) BigQuery が通るか（データセット一覧）
node .claude/skills/gsc-bigquery-analyst/scripts/bq.mjs --list-datasets

# 3) GA4 トレンド（エクスポート有効化後）
node .claude/skills/gsc-bigquery-analyst/scripts/bq.mjs --preset=daily-trend --days=7
```

それぞれ表が出れば成功。あとは skill 本体（[../SKILL.md](../SKILL.md)）の用途で分析していく。

---

## よくあるエラー

| 症状 | 原因 | 対処 |
|---|---|---|
| `GOOGLE_APPLICATION_CREDENTIALS が未設定` | env 未設定 | ステップ5。`.env.local` のパスを確認 |
| GSC `403 / permission` | SA を GSC に追加していない | ステップ3。SAメールを「ユーザーと権限」に追加 |
| GSC `403 forbidden`（API） | Search Console API 未有効化 | ステップ1で API を有効化 |
| BigQuery `404 dataset not found` | `GA4_DATASET` 名違い / エクスポート未反映 | `--list-datasets` で正しい名前を確認。エクスポート直後は翌日まで待つ |
| BigQuery `Access Denied` | SA のロール不足 | ステップ2で `bigquery.jobUser` + `bigquery.dataViewer` |
| GSC データが空 | 期間が新しすぎ | GSC は3日前以降は未確定。`--days` を広げる |

---

## セキュリティ注意

- `.secrets/*.json` と `.env.local` は **絶対に commit しない**（`.gitignore` 済みを確認）
- SA の権限は **閲覧系のみ**（書き込み・編集ロールは付けない）
- 鍵が漏れたら Cloud Console で当該鍵を**無効化 → 再発行**する
