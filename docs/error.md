# エラーログ

## 2026-01-09（夜）: Google AdSense審査に落ちた問題

### 問題の概要
Google AdSenseの審査申請を行ったが、審査に落ちた（不承認）。

### エラー詳細

#### 症状
- AdSense申請を提出したが、審査結果が「不承認」となった
- 具体的な不承認理由は、AdSenseダッシュボードまたはメールで確認する必要がある

#### 一般的なAdSense審査に落ちる原因

1. **コンテンツの文字数が不足している** ⚠️
   - **推奨**: 各ページ1,000文字以上
   - **最低**: 各ページ500文字以上
   - **現状**: 一部のページ（キュー、スタックなど）が500文字未満の可能性がある
   - **確認が必要**: すべてのページが最低500文字以上あるか確認

2. **コンテンツの質や独自性が不足している**
   - ✅ オリジナルコンテンツである（確認済み）
   - ✅ 体験デモが実装されている（複数ページ）
   - ⚠️ 一部のページが簡潔すぎる可能性

3. **サイトの運営期間が短い**
   - ⚠️ サイト開設から最低3ヶ月以上経過していることが望ましい
   - ⚠️ 定期的な更新が行われているか確認が必要

4. **トラフィックが少ない**
   - ⚠️ Google Search Consoleでインデックス登録状況を確認
   - ⚠️ 実際のアクセス数が少ない可能性

5. **ナビゲーションの問題**
   - ✅ トップページから各用語ページにアクセスできる（確認済み）
   - ✅ フッターにプライバシーポリシーへのリンクがある（確認済み）

6. **必須ページの不備**
   - ✅ プライバシーポリシーがある（`/privacy`）
   - ✅ 利用規約がある（`/terms`）
   - ✅ お問い合わせページがある（`/contact`）

### 原因分析

#### 最も可能性が高い原因

1. **コンテンツの文字数不足**（高確率）
   - 一部のページ（キュー、スタック、ローカルストレージなど）が500文字未満の可能性
   - AdSenseは各ページが最低500文字以上（推奨1,000文字以上）であることを求めている

2. **サイトの運営期間が短い**（中確率）
   - サイトが開設されてから3ヶ月未満の場合、審査に落ちる可能性が高い
   - 定期的な更新が行われているか確認が必要

3. **トラフィックが少ない**（中確率）
   - Google Search Consoleでインデックス登録されているページ数が少ない
   - 実際のアクセス数が極端に少ない場合、審査に落ちる可能性がある

### 解決方法

#### 1. コンテンツの文字数を増やす（最優先）

**短いページを特定して拡充する必要があるページ**:
- `/terms/queue`（キュー）
- `/terms/stack`（スタック）
- `/terms/localstorage`（ローカルストレージ）
- その他、500文字未満のページ

**改善方法**:
- 各ページを最低500文字以上（推奨1,000文字以上）に拡充
- 具体例、実用例、関連用語の説明を追加
- 体験デモの説明をより詳しく記載

#### 2. サイトの運営期間を延ばす

- サイトを継続的に運営し、定期的にコンテンツを追加
- 最低3ヶ月以上経過してから再申請

#### 3. トラフィックを増やす

- Google Search Consoleでサイトマップを再送信
- SEO対策を強化（メタデータ、構造化データの最適化）
- SNSやブログでサイトを紹介

#### 4. 再申請前のチェックリスト

- [ ] すべてのページが最低500文字以上ある
- [ ] サイトが開設されてから3ヶ月以上経過している
- [ ] 定期的にコンテンツを追加している
- [ ] Google Search Consoleでインデックス登録されているページ数が十分にある
- [ ] プライバシーポリシー、利用規約、お問い合わせページが適切に設置されている
- [ ] オリジナルコンテンツである（コピーコンテンツがない）
- [ ] モバイル対応ができている
- [ ] AdSenseコードが正しく実装されている

### 次のステップ

1. **AdSenseダッシュボードで不承認理由を確認**
   - AdSenseダッシュボードにログイン
   - 不承認理由の詳細を確認（メールでも通知される可能性がある）

2. **短いページを拡充**
   - 500文字未満のページを特定
   - 各ページを最低500文字以上（推奨1,000文字以上）に拡充

3. **サイトの運営を継続**
   - 定期的にコンテンツを追加
   - 最低3ヶ月以上経過してから再申請

4. **再申請**
   - 改善後、30日後に再申請可能
   - 改善点を明確にして再申請

### 参考情報

#### AdSense審査の一般的な基準
- **コンテンツの文字数**: 各ページ最低500文字以上（推奨1,000文字以上）
- **サイトの運営期間**: 最低3ヶ月以上（推奨6ヶ月以上）
- **ページ数**: 最低10ページ以上（現在19ページ ✅）
- **オリジナルコンテンツ**: 必須（現在満たしている ✅）
- **必須ページ**: プライバシーポリシー、利用規約、お問い合わせ（現在すべて設置済み ✅）

#### 関連ファイル
- `/Users/rin5uron/github-local/personal/itwords/app/terms/queue/page.tsx`
- `/Users/rin5uron/github-local/personal/itwords/app/terms/stack/page.tsx`
- `/Users/rin5uron/github-local/personal/itwords/app/terms/localstorage/page.tsx`

#### 関連リソース
- [AdSense プログラム ポリシー](https://support.google.com/adsense/answer/48182)
- [AdSense 申請のベストプラクティス](https://support.google.com/adsense/answer/1704508)
- [AdSense 審査に落ちた場合の対処法](https://support.google.com/adsense/answer/1704508)

### ステータス
⚠️ **原因分析完了** - 改善作業が必要

---

## 2026-01-09: 1日の作業まとめ

### 時系列の流れ

1. **午前**: インデックス登録されない問題を発見・修正（wwwありに統一）
2. **午後**: Google Analyticsが本番環境で読み込まれない問題を発見・修正
3. **夕方**: Vercelでwwwサブドメインを削除し、wwwなしに統一

---

## 2026-01-09（夕方）: Vercelでwwwサブドメインを削除したため、URLをwwwなしに統一

### 変更内容
Vercelのドメイン設定でwwwサブドメインを削除したため、正規URLが`https://itwords.jp`（wwwなし）に変更されました。それに伴い、以下のファイルを修正してURLを統一しました。

### 修正したファイル

1. **`app/robots.ts`**
   ```diff
   - sitemap: 'https://www.itwords.jp/sitemap.xml',
   + sitemap: 'https://itwords.jp/sitemap.xml',
   ```

2. **`app/sitemap.ts`**
   ```diff
   - const baseUrl = 'https://www.itwords.jp'
   + const baseUrl = 'https://itwords.jp'
   ```

3. **`app/layout.tsx`**
   ```diff
   - metadataBase: new URL('https://www.itwords.jp'),
   - url: 'https://www.itwords.jp',
   - canonical: 'https://www.itwords.jp',
   + metadataBase: new URL('https://itwords.jp'),
   + url: 'https://itwords.jp',
   + canonical: 'https://itwords.jp',
   ```

### 次のステップ
- Google Search Consoleで`https://itwords.jp`（wwwなし）を登録していることを確認
- デプロイ後にsitemap.xmlとrobots.txtが正しく生成されているか確認

### 検証方法
デプロイ完了後（1-2分後）に以下のコマンドで確認:

```bash
# robots.txt の sitemap URL を確認
curl -s https://itwords.jp/robots.txt | grep Sitemap
# 期待される出力: Sitemap: https://itwords.jp/sitemap.xml

# sitemap.xml の URL を確認
curl -s https://itwords.jp/sitemap.xml | grep -o '<loc>https://[^<]*</loc>' | head -3
# 期待される出力: <loc>https://itwords.jp</loc>
```

### ステータス
✅ **修正完了** - デプロイ完了後に検証が必要

---

## 2026-01-09（午後）: Google Analytics が本番環境で読み込まれない問題

### 問題の概要
Google Analytics のスクリプトタグが本番環境（`https://itwords.jp`）で読み込まれていないことが判明。

### エラー詳細

#### 症状
- Google Analytics のトラッキングが機能していない
- 本番サイトの HTML ソースに gtag スクリプトが出力されていない
- `GA_ID="G-BEWDYZKGLH"` は JSON データとして埋め込まれているが、実際の `<script>` タグが存在しない

#### 調査結果

1. **環境変数は正しく設定されている** ✅
   - Vercel の環境変数 `NEXT_PUBLIC_GA_ID=G-BEWDYZKGLH` は設定済み
   - HTML に `GA_ID="G-BEWDYZKGLH"` が JSON データとして埋め込まれている

2. **Next.js Script コンポーネントの問題** ❌
   - `app/components/GoogleAnalytics.tsx` で `strategy="lazyOnload"` を使用していた
   - Next.js 15 の App Router でこの strategy が期待通りに動作していない可能性
   - React Server Components のハイドレーション時にスクリプトが出力されない

#### エラー確認コマンド

```bash
# 本番サイトの HTML ソースを確認
curl -s https://itwords.jp/ | grep "googletagmanager"
# 結果: スクリプトタグが見つからない

# GA_ID が埋め込まれているか確認
curl -s https://itwords.jp/ | grep -o "G-BEWDYZKGLH" | wc -l
# 結果: 1（JSON データ内にのみ存在）

# gtag 関数の存在確認
curl -s https://itwords.jp/ | grep -E "(gtag|dataLayer)"
# 結果: 見つからない
```

### 原因
Next.js 15 の App Router で `next/script` の `strategy="lazyOnload"` が正しく動作せず、Server Components のレンダリング時にスクリプトタグが出力されない問題。

### 解決方法

#### 実施した修正
`app/components/GoogleAnalytics.tsx` のコード変更:

```diff
- strategy="lazyOnload"
+ strategy="afterInteractive"
```

#### 修正後のコード
```typescript
'use client'

import Script from 'next/script'

export default function GoogleAnalytics({ GA_ID }: { GA_ID: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"  // 変更点
      />
      <Script id="google-analytics" strategy="afterInteractive">  // 変更点
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
```

### 検証方法

デプロイ完了後（1-2分後）に以下のコマンドで確認:

```bash
# Google Analytics スクリプトが読み込まれているか確認
curl -s https://itwords.jp/ | grep "googletagmanager"

# 期待される出力:
# <script src="https://www.googletagmanager.com/gtag/js?id=G-BEWDYZKGLH"></script>
```

### 参考情報

#### Next.js Script の strategy オプション
- `beforeInteractive`: ページがインタラクティブになる前に読み込み（最優先）
- `afterInteractive`: ページがインタラクティブになった後に読み込み（推奨）
- `lazyOnload`: ブラウザのアイドル時に遅延読み込み
- `worker`: Web Worker で読み込み（実験的機能）

#### 関連ファイル
- `/Users/rin5uron/github-local/personal/itwords/app/components/GoogleAnalytics.tsx`
- `/Users/rin5uron/github-local/personal/itwords/app/layout.tsx`

#### 関連リソース
- Next.js Script コンポーネント: https://nextjs.org/docs/app/api-reference/components/script
- Google Analytics 4 設定: https://support.google.com/analytics/answer/9304153
- Vercel 環境変数設定: https://vercel.com/docs/concepts/projects/environment-variables

### ステータス
✅ **修正完了** - デプロイ完了後に検証が必要

---

## 2026-01-09（午前）: インデックス登録されない問題（URL不一致）

### 問題の概要
Google Search Console でインデックス登録されない問題が発生。原因調査の結果、sitemap.xml と robots.txt の URL が実際のサイト URL（www あり）と不一致であることが判明。

**注意**: この問題は、後にVercelでwwwサブドメインを削除したため、現在はwwwなしに統一されています。

### エラー詳細

#### 症状
- Google Search Console でインデックス登録されない
- sitemap.xml が正しく認識されていない可能性
- robots.txt の sitemap の URL が実際のサイト URL と異なる

#### 調査結果（当時の状況）

1. **URL の不一致** ❌
   - 実際のサイト URL: `https://www.itwords.jp`（www あり）
   - `robots.ts` の sitemap URL: `https://itwords.jp/sitemap.xml`（www なし）
   - `sitemap.ts` の baseUrl: `https://itwords.jp`（www なし）
   - `https://itwords.jp` は `https://www.itwords.jp` に 307 リダイレクトされていた

2. **メタデータの設定不足** ❌
   - `layout.tsx` に `metadataBase` が設定されていない
   - 正規 URL（canonical URL）が明確に指定されていない

### 原因
Google Search Console で `https://www.itwords.jp`（www あり）を登録している場合、sitemap.xml が `https://itwords.jp`（www なし）を指していると、URL の不一致によりインデックス登録が正しく行われない可能性がある。

### 解決方法（当時実施した修正）

1. **`app/robots.ts` の修正**
   ```diff
   - sitemap: 'https://itwords.jp/sitemap.xml',
   + sitemap: 'https://www.itwords.jp/sitemap.xml',
   ```

2. **`app/sitemap.ts` の修正**
   ```diff
   - const baseUrl = 'https://itwords.jp'
   + const baseUrl = 'https://www.itwords.jp'
   ```

3. **`app/layout.tsx` の修正**
   - `metadataBase` を追加して正規 URL を明確化
   - `openGraph.url` を追加
   - `alternates.canonical` を追加

### その後
- 夕方にVercelでwwwサブドメインを削除したため、再度wwwなしに統一されました
- 現在は `https://itwords.jp`（wwwなし）が正規URLです

### 参考情報

#### URL の正規化について
- Google Search Console では、www ありと www なしは別のプロパティとして扱われる
- sitemap.xml の URL は、Google Search Console で登録している URL と一致させる必要がある
- `metadataBase` を設定することで、相対 URL が自動的に絶対 URL に変換される

#### 関連ファイル
- `/Users/rin5uron/github-local/personal/itwords/app/robots.ts`
- `/Users/rin5uron/github-local/personal/itwords/app/sitemap.ts`
- `/Users/rin5uron/github-local/personal/itwords/app/layout.tsx`

#### 関連リソース
- Next.js metadataBase: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
- Google Search Console ガイド: https://support.google.com/webmasters/answer/7552505

### ステータス
✅ **修正完了** - その後、Vercelでwwwを削除したため、現在はwwwなしに統一済み

### 問題の概要
Google Search Console でインデックス登録されない問題が発生。原因調査の結果、Google Analytics のスクリプトタグが本番環境で読み込まれていないことが判明。

### エラー詳細

#### 症状
- Google Analytics のトラッキングが機能していない
- 本番サイト (`https://www.itwords.jp/`) の HTML ソースに gtag スクリプトが出力されていない
- `<link rel="preload">` タグは存在するが、実際の `<script>` タグが存在しない

#### 調査結果

1. **環境変数は正しく設定されている** ✅
   - Vercel の環境変数 `NEXT_PUBLIC_GA_ID=G-BEWDYZKGLH` は設定済み
   - HTML に `GA_ID="G-BEWDYZKGLH"` が JSON データとして埋め込まれている

2. **Next.js Script コンポーネントの問題** ❌
   - `app/components/GoogleAnalytics.tsx` で `strategy="afterInteractive"` を使用
   - Next.js 15 の App Router でこの strategy が期待通りに動作していない
   - React Server Components のハイドレーション時にスクリプトが出力されない

#### エラー再現コマンド

```bash
# 本番サイトの HTML ソースを確認
curl -s https://www.itwords.jp/ | grep "googletagmanager"
# 結果: スクリプトタグが見つからない（preload タグのみ）

# GA_ID が埋め込まれているか確認
curl -s https://www.itwords.jp/ | grep -o "G-BEWDYZKGLH" | wc -l
# 結果: 2（JSON データ内にのみ存在）

# gtag 関数の存在確認
curl -s https://www.itwords.jp/ | grep -E "(gtag|dataLayer)"
# 結果: 見つからない
```

### 原因
Next.js 15 の App Router で `next/script` の `strategy="afterInteractive"` が正しく動作せず、Server Components のレンダリング時にスクリプトタグが出力されない問題。

### 解決方法

#### 実施した修正
`app/components/GoogleAnalytics.tsx` のコード変更:

```diff
- strategy="afterInteractive"
+ strategy="lazyOnload"
```

#### 修正後のコード
```typescript
'use client'

import Script from 'next/script'

export default function GoogleAnalytics({ GA_ID }: { GA_ID: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"  // 変更点
      />
      <Script id="google-analytics" strategy="lazyOnload">  // 変更点
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
```

#### Git コミット
```bash
git add app/components/GoogleAnalytics.tsx
git commit -m "Fix: Google Analytics script not loading"
git push origin main
```

コミット ID: `dc4e05a`

### 検証方法

デプロイ完了後（1-2分後）に以下のコマンドで確認:

```bash
# Google Analytics スクリプトが読み込まれているか確認
curl -s https://www.itwords.jp/ | grep "googletagmanager"

# 期待される出力:
# <script src="https://www.googletagmanager.com/gtag/js?id=G-BEWDYZKGLH"></script>
```

### 参考情報

#### Next.js Script の strategy オプション
- `beforeInteractive`: ページがインタラクティブになる前に読み込み（最優先）
- `afterInteractive`: ページがインタラクティブになった後に読み込み
- `lazyOnload`: ブラウザのアイドル時に遅延読み込み（推奨）
- `worker`: Web Worker で読み込み（実験的機能）

#### 関連ファイル
- `/Users/rin5uron/github-local/personal/itwords/app/components/GoogleAnalytics.tsx`
- `/Users/rin5uron/github-local/personal/itwords/app/layout.tsx`
- `/Users/rin5uron/github-local/personal/itwords/.env.local`

#### 関連リソース
- Next.js Script コンポーネント: https://nextjs.org/docs/app/api-reference/components/script
- Google Analytics 4 設定: https://support.google.com/analytics/answer/9304153
- Vercel 環境変数設定: https://vercel.com/docs/concepts/projects/environment-variables

### ステータス
✅ **修正完了** - デプロイ完了後に検証が必要

---

## その他のエラーログ

今後発生したエラーはこちらに追記してください。
