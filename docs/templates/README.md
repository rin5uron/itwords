# テンプレートファイル一覧

このディレクトリには、AdSense要件とSEO対策を網羅したNext.jsサイト作成用のテンプレートファイルが含まれています。

---

## 📋 テンプレートファイル

### 基本ファイル

1. **`PROJECT_TEMPLATE_README.md`**
   - プロジェクトテンプレートの全体像
   - AdSense要件とSEO対策の実装方法
   - セットアップ手順

2. **`AI_PROMPT_TEMPLATE.md`**
   - 生成AI向けプロンプトテンプレート
   - サイト作成時のプロンプト例

3. **`checklists/site-creation-checklist.md`**
   - サイト作成時の詳細チェックリスト
   - 必須確認項目

### コードテンプレート

#### レイアウト・設定

- **`layout-template.tsx`** - ルートレイアウト（メタデータ、AdSense、GA設定）
- **`robots-template.ts`** - robots.txt生成
- **`sitemap-template.ts`** - sitemap.xml生成

#### 必須ページ

- **`privacy-template.tsx`** - プライバシーポリシー（AdSense記載必須）
- **`terms-template.tsx`** - 利用規約
- **`contact-template.tsx`** - お問い合わせページ

#### コンテンツページ

- **`page-template.tsx`** - コンテンツページのテンプレート（SEO対策含む）

#### コンポーネント

- **`components/GoogleAnalytics-template.tsx`** - Google Analyticsコンポーネント
- **`components/GoogleAdSense-template.tsx`** - Google AdSenseコンポーネント
- **`components/StructuredData-template.tsx`** - 構造化データコンポーネント

---

## 🚀 使い方

### 1. 新しいサイトを作成する場合

1. **`PROJECT_TEMPLATE_README.md`**を読む
2. **`checklists/site-creation-checklist.md`**を参照
3. テンプレートファイルをコピーして実装

### 2. 生成AIにサイトを作成させる場合

1. **`AI_PROMPT_TEMPLATE.md`**のプロンプトを使用
2. テンプレートファイルを参照させる
3. チェックリストで確認

---

## ✅ 必須要件

すべてのテンプレートは、以下の要件を満たしています：

### AdSense要件

- ✅ プライバシーポリシー（AdSense記載含む）
- ✅ 利用規約
- ✅ お問い合わせページ
- ✅ コンテンツ10ページ以上（各500文字以上）

### SEO要件

- ✅ メタデータ（title, description, keywords）
- ✅ Open Graph、Twitter Card
- ✅ 構造化データ（JSON-LD）
- ✅ robots.txt、sitemap.xml
- ✅ canonical URL

---

## 📝 注意事項

- テンプレート内の`[サイト名]`、`[ドメイン名]`などのプレースホルダーは、実際の値に置き換えてください
- 各テンプレートは最小限の実装例です。プロジェクトに応じてカスタマイズしてください
- チェックリストを必ず確認して、すべての項目を実装してください

---

**最終更新**: 2026年1月9日
