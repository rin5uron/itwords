# エラーログ

## 2026-01-09: インデックス登録されない問題（URL不一致）

### 問題の概要
Google Search Console でインデックス登録されない問題が発生。原因調査の結果、sitemap.xml と robots.txt の URL が実際のサイト URL（www あり）と不一致であることが判明。

### エラー詳細

#### 症状
- Google Search Console でインデックス登録されない
- sitemap.xml が正しく認識されていない可能性
- robots.txt の sitemap の URL が実際のサイト URL と異なる

#### 調査結果

1. **URL の不一致** ❌
   - 実際のサイト URL: `https://www.itwords.jp`（www あり）
   - `robots.ts` の sitemap URL: `https://itwords.jp/sitemap.xml`（www なし）
   - `sitemap.ts` の baseUrl: `https://itwords.jp`（www なし）
   - `https://itwords.jp` は `https://www.itwords.jp` に 307 リダイレクトされている

2. **メタデータの設定不足** ❌
   - `layout.tsx` に `metadataBase` が設定されていない
   - 正規 URL（canonical URL）が明確に指定されていない

#### エラー確認コマンド

```bash
# robots.txt の確認
curl -s https://www.itwords.jp/robots.txt
# 結果: Sitemap: https://itwords.jp/sitemap.xml（www なし）

# sitemap.xml の確認
curl -s https://www.itwords.jp/sitemap.xml | head -5
# 結果: <loc>https://itwords.jp</loc>（www なし）

# リダイレクトの確認
curl -I https://itwords.jp/
# 結果: location: https://www.itwords.jp/（307 リダイレクト）
```

### 原因
Google Search Console で `https://www.itwords.jp`（www あり）を登録している場合、sitemap.xml が `https://itwords.jp`（www なし）を指していると、URL の不一致によりインデックス登録が正しく行われない可能性がある。

### 解決方法

#### 実施した修正

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

#### 修正後のコード

**`app/layout.tsx`**:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.itwords.jp'),  // 追加
  // ... 既存の設定 ...
  openGraph: {
    // ... 既存の設定 ...
    url: 'https://www.itwords.jp',  // 追加
  },
  // ... 既存の設定 ...
  alternates: {
    canonical: 'https://www.itwords.jp',  // 追加
  },
}
```

### 検証方法

デプロイ完了後（1-2分後）に以下のコマンドで確認:

```bash
# robots.txt の sitemap URL を確認
curl -s https://www.itwords.jp/robots.txt | grep Sitemap
# 期待される出力: Sitemap: https://www.itwords.jp/sitemap.xml

# sitemap.xml の URL を確認
curl -s https://www.itwords.jp/sitemap.xml | grep -o '<loc>https://[^<]*</loc>' | head -3
# 期待される出力: <loc>https://www.itwords.jp</loc>
```

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
✅ **修正完了** - デプロイ完了後に検証が必要

---

## 2026-01-09: Google Analytics インデックス登録問題

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
