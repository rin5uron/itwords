# 生成AI向けプロンプトテンプレート

このテンプレートを使用して、生成AIにAdSense要件とSEO対策を網羅したNext.jsサイトを作成させることができます。

---

## 🎯 基本プロンプト

```
以下の要件を満たしたNext.js 15（App Router）サイトを作成してください。

【プロジェクト情報】
- プロジェクト名: [プロジェクト名]
- ドメイン: [ドメイン名]
- サイトの目的: [サイトの目的]

【技術要件】
- Next.js 15（App Router）
- TypeScript
- Vercelデプロイ対応

【AdSense要件（必須）】
1. プライバシーポリシーページ（/privacy）
   - AdSenseに関する記載を含む
   - Cookieの使用について記載
   - Google Analyticsの使用について記載

2. 利用規約ページ（/terms）
   - サイトの利用条件を記載
   - 免責事項を記載

3. お問い合わせページ（/contact）
   - お問い合わせフォームまたは連絡先を記載

4. コンテンツ要件
   - コンテンツページ10ページ以上（各500文字以上）
   - すべてオリジナルコンテンツ
   - モバイル対応（レスポンシブデザイン）

【SEO対策（必須）】
1. メタデータ
   - グローバルメタデータ（app/layout.tsx）
   - 各ページのメタデータ（title, description, keywords）
   - Open Graph、Twitter Card

2. 構造化データ
   - JSON-LD構造化データ（Article, FAQ）
   - components/StructuredData.tsxを使用

3. 技術的SEO
   - robots.txt（app/robots.ts）
   - sitemap.xml（app/sitemap.ts）
   - canonical URL

【実装ファイル】
以下のテンプレートファイルを参照して実装してください：
- docs/templates/layout-template.tsx
- docs/templates/page-template.tsx
- docs/templates/privacy-template.tsx
- docs/templates/terms-template.tsx
- docs/templates/contact-template.tsx
- docs/templates/components/GoogleAnalytics.tsx
- docs/templates/components/GoogleAdSense.tsx
- docs/templates/components/StructuredData.tsx

【チェックリスト】
docs/templates/checklists/site-creation-checklist.mdを参照して、
すべての項目を確認してください。
```

---

## 📝 詳細プロンプト（カスタマイズ版）

### カスタマイズ項目

プロンプト内の以下の部分を実際のプロジェクト情報に置き換えてください：

- `[プロジェクト名]`: 実際のプロジェクト名
- `[ドメイン名]`: 実際のドメイン名
- `[サイトの目的]`: サイトの目的やコンセプト

### 例：IT用語辞典サイト

```
以下の要件を満たしたNext.js 15（App Router）サイトを作成してください。

【プロジェクト情報】
- プロジェクト名: IT用語辞典
- ドメイン: itwords.jp
- サイトの目的: IT用語を初心者向けにわかりやすく解説する実践型IT用語辞典

【技術要件】
- Next.js 15（App Router）
- TypeScript
- Vercelデプロイ対応

【AdSense要件（必須）】
1. プライバシーポリシーページ（/privacy）
   - AdSenseに関する記載を含む
   - Cookieの使用について記載
   - Google Analyticsの使用について記載

2. 利用規約ページ（/terms）
   - サイトの利用条件を記載
   - 免責事項を記載

3. お問い合わせページ（/contact）
   - お問い合わせフォームまたは連絡先を記載

4. コンテンツ要件
   - IT用語解説ページ20ページ以上（各500文字以上）
   - すべてオリジナルコンテンツ
   - モバイル対応（レスポンシブデザイン）

【SEO対策（必須）】
1. メタデータ
   - グローバルメタデータ（app/layout.tsx）
   - 各ページのメタデータ（title, description, keywords）
   - Open Graph、Twitter Card

2. 構造化データ
   - JSON-LD構造化データ（Article, FAQ）
   - components/StructuredData.tsxを使用

3. 技術的SEO
   - robots.txt（app/robots.ts）
   - sitemap.xml（app/sitemap.ts）
   - canonical URL

【実装ファイル】
以下のテンプレートファイルを参照して実装してください：
- docs/templates/layout-template.tsx
- docs/templates/page-template.tsx
- docs/templates/privacy-template.tsx
- docs/templates/terms-template.tsx
- docs/templates/contact-template.tsx
- docs/templates/components/GoogleAnalytics.tsx
- docs/templates/components/GoogleAdSense.tsx
- docs/templates/components/StructuredData.tsx

【チェックリスト】
docs/templates/checklists/site-creation-checklist.mdを参照して、
すべての項目を確認してください。
```

---

## 🔄 段階的プロンプト（推奨）

生成AIに一度にすべてを実装させるのではなく、段階的に実装させることもできます。

### ステップ1: プロジェクトセットアップ

```
Next.js 15（App Router）プロジェクトを作成してください。
- TypeScriptを使用
- プロジェクト名: [プロジェクト名]
- 基本的なディレクトリ構造を作成
```

### ステップ2: 基本レイアウト

```
app/layout.tsxを作成してください。
以下の要件を満たしてください：
- グローバルメタデータ（metadataBase, title, description, keywords）
- Open Graph、Twitter Card
- canonical URL
- Google Analyticsコンポーネントの読み込み
- Google AdSenseコンポーネントの読み込み（環境変数から）

テンプレート: docs/templates/layout-template.tsx
```

### ステップ3: 必須ページ

```
以下の必須ページを作成してください：
1. プライバシーポリシー（/privacy）
   - AdSenseに関する記載を含む
   - テンプレート: docs/templates/privacy-template.tsx

2. 利用規約（/terms）
   - テンプレート: docs/templates/terms-template.tsx

3. お問い合わせ（/contact）
   - テンプレート: docs/templates/contact-template.tsx
```

### ステップ4: SEO対策

```
以下のSEO対策を実装してください：
1. robots.txt（app/robots.ts）
2. sitemap.xml（app/sitemap.ts）
3. 構造化データコンポーネント（components/StructuredData.tsx）

テンプレート: docs/templates/components/StructuredData.tsx
```

### ステップ5: コンテンツページ

```
コンテンツページを10ページ以上作成してください。
各ページは以下の要件を満たしてください：
- 最低500文字以上（推奨：1,000文字以上）
- メタデータ（title, description, keywords）
- Open Graph、Twitter Card
- 構造化データ（Article, FAQ）

テンプレート: docs/templates/page-template.tsx
```

---

## ✅ 確認プロンプト

実装後、以下のプロンプトで確認してください：

```
作成したサイトが以下の要件を満たしているか確認してください：

【チェックリスト】
docs/templates/checklists/site-creation-checklist.mdのすべての項目を確認してください。

特に以下を重点的に確認：
1. AdSense要件（必須ページ、コンテンツ要件）
2. SEO対策（メタデータ、構造化データ、技術的SEO）
3. モバイル対応
4. パフォーマンス

不足している項目があれば、追加実装してください。
```

---

## 📚 参考ドキュメント

生成AIに参照させるドキュメント：

1. **PROJECT_TEMPLATE_README.md** - プロジェクトテンプレートの全体像
2. **site-creation-checklist.md** - 詳細なチェックリスト
3. **各テンプレートファイル** - 実装の参考

---

**最終更新**: 2026年1月9日

