# クイックスタートガイド

新しいサイトを作成する際の、最短手順ガイドです。

---

## 🚀 5分で始める

### ステップ1: プロジェクトテンプレートを確認

**[PROJECT_TEMPLATE_README.md](PROJECT_TEMPLATE_README.md)** を開いて、全体像を把握してください。

### ステップ2: チェックリストで要件確認

**[checklists/site-creation-checklist.md](checklists/site-creation-checklist.md)** を開いて、必須項目を確認してください。

### ステップ3: テンプレートファイルをコピー

以下のファイルをコピーして、プロジェクトに実装してください：

1. **`layout-template.tsx`** → `app/layout.tsx`
2. **`privacy-template.tsx`** → `app/privacy/page.tsx`
3. **`terms-template.tsx`** → `app/terms/page.tsx`
4. **`contact-template.tsx`** → `app/contact/page.tsx`
5. **`robots-template.ts`** → `app/robots.ts`
6. **`sitemap-template.ts`** → `app/sitemap.ts`
7. **`components/GoogleAnalytics-template.tsx`** → `app/components/GoogleAnalytics.tsx`
8. **`components/GoogleAdSense-template.tsx`** → `app/components/GoogleAdSense.tsx`
9. **`components/StructuredData-template.tsx`** → `app/components/StructuredData.tsx`

### ステップ4: プレースホルダーを置き換え

テンプレート内の以下のプレースホルダーを実際の値に置き換えてください：

- `[サイト名]` → 実際のサイト名
- `[ドメイン名]` → 実際のドメイン名（`https://your-domain.com`）
- `[制定日]` → 実際の制定日

### ステップ5: コンテンツページを作成

**`page-template.tsx`** を参考に、コンテンツページを10ページ以上作成してください。

各ページは：
- 最低500文字以上（推奨：1,000文字以上）
- メタデータ（title, description, keywords）を設定
- 構造化データを実装

### ステップ6: チェックリストで最終確認

**[checklists/site-creation-checklist.md](checklists/site-creation-checklist.md)** のすべての項目にチェックが入っていることを確認してください。

---

## 🤖 生成AIを使う場合

### 方法1: プロンプトテンプレートを使用

**[AI_PROMPT_TEMPLATE.md](AI_PROMPT_TEMPLATE.md)** のプロンプトをコピーして、生成AIに送信してください。

### 方法2: 段階的に実装

1. プロジェクトセットアップ
2. 基本レイアウト
3. 必須ページ
4. SEO対策
5. コンテンツページ

各ステップで、対応するテンプレートファイルを参照させてください。

---

## ✅ 必須確認項目（簡易版）

サイト作成時に、最低限以下を確認してください：

### AdSense要件
- [ ] プライバシーポリシー（AdSense記載含む）
- [ ] 利用規約
- [ ] お問い合わせページ
- [ ] コンテンツ10ページ以上（各500文字以上）

### SEO要件
- [ ] メタデータ（全ページ）
- [ ] 構造化データ
- [ ] robots.txt
- [ ] sitemap.xml

詳細は **[checklists/site-creation-checklist.md](checklists/site-creation-checklist.md)** を参照してください。

---

## 📚 参考ドキュメント

- [プロジェクトテンプレートREADME](PROJECT_TEMPLATE_README.md) - 詳細な実装方法
- [テンプレートファイル一覧](README.md) - すべてのテンプレート
- [AdSense申請ガイド](../adsense-application-guide.md) - AdSense申請手順
- [SEO対策ロードマップ](../phases/seo-roadmap.md) - SEO対策の詳細

---

**最終更新**: 2026年1月9日

