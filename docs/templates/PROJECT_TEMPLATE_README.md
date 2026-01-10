# Next.jsサイト作成テンプレート - AdSense & SEO対応版

このテンプレートは、**Google AdSense申請要件**と**SEO対策**を網羅したNext.jsプロジェクトのテンプレートです。
生成AIを使ってサイトを作成する際に、このテンプレートを参照することで、自動的に要件を満たしたサイトを構築できます。

---

## 📋 目次

1. [必須要件チェックリスト](#必須要件チェックリスト)
2. [プロジェクト構造](#プロジェクト構造)
3. [セットアップ手順](#セットアップ手順)
4. [AdSense要件の実装](#adsense要件の実装)
5. [SEO対策の実装](#seo対策の実装)
6. [テンプレートファイル一覧](#テンプレートファイル一覧)

---

## ✅ 必須要件チェックリスト

サイト作成時に、以下の項目を**必ず確認・実装**してください。

### AdSense要件

- [ ] **プライバシーポリシーページ** (`/privacy`) が存在し、AdSenseに関する記載がある
- [ ] **利用規約ページ** (`/terms`) が存在する
- [ ] **お問い合わせページ** (`/contact`) が存在する
- [ ] **コンテンツが10ページ以上**ある（推奨：20ページ以上）
- [ ] **各ページが最低500文字以上**（推奨：1,000文字以上）
- [ ] **すべてのコンテンツがオリジナル**である（コピーコンテンツがない）
- [ ] **モバイル対応**ができている（レスポンシブデザイン）
- [ ] **Google Analytics**が設定されている
- [ ] **AdSenseコード**が実装されている（申請後）

### SEO要件

- [ ] **メタデータ**（title, description, keywords）が全ページに設定されている
- [ ] **Open Graph**タグが設定されている
- [ ] **Twitter Card**が設定されている
- [ ] **構造化データ**（JSON-LD）が実装されている
- [ ] **robots.txt**が設定されている
- [ ] **sitemap.xml**が自動生成されている
- [ ] **canonical URL**が設定されている
- [ ] **パンくずリスト**が実装されている（任意）
- [ ] **alt属性**がすべての画像に設定されている

### 技術要件

- [ ] **Next.js 15**（App Router）を使用
- [ ] **TypeScript**を使用
- [ ] **Vercel**でデプロイ可能
- [ ] **HTTPS**が有効になっている
- [ ] **独自ドメイン**が設定されている

---

## 📁 プロジェクト構造

```
project-name/
├── app/
│   ├── layout.tsx              # ルートレイアウト（メタデータ、AdSense、GA設定）
│   ├── page.tsx                # トップページ
│   ├── globals.css             # グローバルスタイル
│   ├── robots.ts               # robots.txt生成
│   ├── sitemap.ts              # sitemap.xml生成
│   ├── privacy/
│   │   └── page.tsx            # プライバシーポリシー（AdSense記載必須）
│   ├── terms/
│   │   └── page.tsx            # 利用規約
│   ├── contact/
│   │   └── page.tsx            # お問い合わせページ
│   └── [content-pages]/        # コンテンツページ（10ページ以上）
│       └── page.tsx
├── components/
│   ├── GoogleAnalytics.tsx     # Google Analyticsコンポーネント
│   ├── GoogleAdSense.tsx       # Google AdSenseコンポーネント
│   └── StructuredData.tsx     # 構造化データコンポーネント
├── docs/
│   ├── templates/              # テンプレートファイル
│   └── checklists/             # チェックリスト
├── public/                     # 静的ファイル
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 セットアップ手順

### 1. プロジェクトの初期化

```bash
npx create-next-app@latest project-name --typescript --app --tailwind=false
cd project-name
```

### 2. 必要なパッケージのインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.local`ファイルを作成：

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google AdSense（申請後に設定）
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX
```

### 4. 必須ファイルの作成

以下のファイルをテンプレートからコピーして作成：
- `app/layout.tsx`（メタデータ、AdSense、GA設定）
- `app/robots.ts`
- `app/sitemap.ts`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/contact/page.tsx`
- `components/GoogleAnalytics.tsx`
- `components/GoogleAdSense.tsx`
- `components/StructuredData.tsx`

---

## 📝 AdSense要件の実装

### 1. プライバシーポリシー（必須）

`app/privacy/page.tsx`に、以下の内容を含める：

```typescript
// AdSenseに関する記載例
<section>
  <h2>Google AdSenseについて</h2>
  <p>
    当サイトでは、広告配信サービス「Google AdSense」を利用しています。
    Google AdSenseは、ユーザーの興味関心に基づいた広告を表示するため、Cookieを使用します。
  </p>
  <p>
    広告のパーソナライズを無効にする方法については、
    <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
      広告設定
    </a>をご確認ください。
  </p>
</section>
```

### 2. 利用規約（必須）

`app/terms/page.tsx`を作成し、適切な利用規約を記載。

### 3. お問い合わせページ（必須）

`app/contact/page.tsx`を作成し、お問い合わせフォームまたは連絡先を記載。

### 4. AdSenseコードの実装

`app/layout.tsx`に以下を追加：

```typescript
import GoogleAdSense from './components/GoogleAdSense'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const AD_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_ID

  return (
    <html lang="ja">
      <body>
        {AD_CLIENT_ID && <GoogleAdSense adClientId={AD_CLIENT_ID} />}
        {children}
      </body>
    </html>
  )
}
```

### 5. コンテンツ要件

- **最低10ページ以上**（推奨：20ページ以上）
- **各ページ最低500文字以上**（推奨：1,000文字以上）
- **すべてオリジナルコンテンツ**

---

## 🔍 SEO対策の実装

### 1. メタデータの設定

`app/layout.tsx`でグローバルメタデータを設定：

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'サイトタイトル | サブタイトル',
  description: 'サイトの説明文（120-160文字）',
  keywords: ['キーワード1', 'キーワード2', 'キーワード3'],
  openGraph: {
    title: 'サイトタイトル',
    description: 'サイトの説明文',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://your-domain.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サイトタイトル',
    description: 'サイトの説明文',
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
}
```

### 2. 各ページのメタデータ

各コンテンツページで個別のメタデータを設定：

```typescript
export const metadata: Metadata = {
  title: 'ページタイトル | サイト名',
  description: 'ページの説明文（120-160文字）',
  keywords: ['ページ固有のキーワード'],
  openGraph: {
    title: 'ページタイトル',
    description: 'ページの説明文',
    type: 'article',
  },
}
```

### 3. 構造化データ（JSON-LD）

`components/StructuredData.tsx`を使用：

```typescript
<StructuredData
  type="Article"
  title="ページタイトル"
  description="ページの説明"
  datePublished="2026-01-01"
  dateModified="2026-01-01"
/>
```

### 4. robots.txt

`app/robots.ts`で設定：

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://your-domain.com/sitemap.xml',
  }
}
```

### 5. sitemap.xml

`app/sitemap.ts`で自動生成：

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // 各ページを追加
  ]
}
```

---

## 📄 テンプレートファイル一覧

以下のテンプレートファイルを参照してください：

### 基本ファイル
- **`docs/templates/PROJECT_TEMPLATE_README.md`** - このファイル（全体像）
- **`docs/templates/AI_PROMPT_TEMPLATE.md`** - 生成AI向けプロンプト
- **`docs/templates/checklists/site-creation-checklist.md`** - 詳細チェックリスト

### コードテンプレート
1. **`docs/templates/layout-template.tsx`** - ルートレイアウト
2. **`docs/templates/page-template.tsx`** - コンテンツページ
3. **`docs/templates/privacy-template.tsx`** - プライバシーポリシー（AdSense記載必須）
4. **`docs/templates/terms-template.tsx`** - 利用規約
5. **`docs/templates/contact-template.tsx`** - お問い合わせページ
6. **`docs/templates/robots-template.ts`** - robots.txt生成
7. **`docs/templates/sitemap-template.ts`** - sitemap.xml生成
8. **`docs/templates/components/GoogleAnalytics-template.tsx`** - Google Analytics
9. **`docs/templates/components/GoogleAdSense-template.tsx`** - Google AdSense
10. **`docs/templates/components/StructuredData-template.tsx`** - 構造化データ

詳細は **`docs/templates/README.md`** を参照してください。

---

## 🤖 生成AI向けプロンプト例

このテンプレートを使用してサイトを作成する際のプロンプト例：

```
以下の要件を満たしたNext.js 15（App Router）サイトを作成してください：

1. AdSense要件：
   - プライバシーポリシー（AdSense記載含む）
   - 利用規約
   - お問い合わせページ
   - コンテンツ10ページ以上（各500文字以上）

2. SEO対策：
   - メタデータ（title, description, keywords）
   - Open Graph、Twitter Card
   - 構造化データ（JSON-LD）
   - robots.txt、sitemap.xml
   - canonical URL

3. 技術要件：
   - Next.js 15（App Router）
   - TypeScript
   - Vercelデプロイ対応

テンプレートファイル（docs/templates/）を参照して実装してください。
```

---

## 📚 参考ドキュメント

- [AdSense申請ガイド](../adsense-application-guide.md)
- [SEO対策ガイド](../phases/seo-roadmap.md)
- [サイト作成チェックリスト](checklists/site-creation-checklist.md)
- [SEOチェックシート](checklists/seo-check-sheet.md) - 定期的なSEO確認
- [SEOキーワード追跡シート](checklists/seo-keyword-tracking-sheet.md) - キーワード別順位記録

---

**最終更新**: 2026年1月9日

