# 実践型IT用語辞典テンプレート

このディレクトリには、IT用語解説ページを量産するためのテンプレートファイルが格納されています。

---

## ファイル構成

```
templates/
├── README.md           ← このファイル（使い方説明）
└── term-page/
    ├── template.html   ← HTMLテンプレート（変数置換対応）
    ├── sample.md       ← Markdownテンプレート（記入例付き）
    └── rules.md        ← 用語ページ生成の詳細ルール
```

**📝 重要**: CSSファイルは `itwords/styles.css` を使用します（テンプレートディレクトリにはCSSファイルはありません）

---

## 使い方

### 自動生成コマンド
以下のコマンドで完全自動生成：

```
「[用語名]のページを作成して」

必要情報:
- 用語名: API
- 読み方: エーピーアイ
- カテゴリ: 基礎知識・開発
- 難易度: 初級
- デモ内容: API呼び出しデモ
- 関連用語: REST API, JSON, HTTP
```

### 手動作成方法
1. `sample.md`をコピーして新しい用語名で.mdファイルを作成
2. 内容を記入
3. 「○○.mdから用語ページ生成して」で変換

---

## 変数一覧

`template.html`で使用される変数と対応するMarkdown項目：

### 基本情報
| 変数名 | 説明 | Markdown対応箇所 |
|--------|------|------------------|
| `{{term_name}}` | 用語名 | `# 用語名` |
| `{{reading}}` | 読み方 | `読み方: よみかた` |
| `{{icon_class}}` | Font Awesomeアイコン | `アイコン: fas fa-example-icon` |
| `{{description}}` | 概要・説明 | `## 概要` |
| `{{points}}` | ポイントリスト | `## ポイント` |

### デモ関連
| 変数名 | 説明 | Markdown対応箇所 |
|--------|------|------------------|
| `{{demo_content}}` | デモ説明文 | `### デモ説明` |
| `{{demo_title}}` | デモタイトル | `### デモタイトル` |
| `{{demo_button_text}}` | ボタンテキスト | `### ボタンテキスト` |
| `{{demo_function}}` | デモ関数名 | `### デモ処理名` |

### コード関連 
| 変数名 | 説明 | Markdown対応箇所 |
|--------|------|------------------|
| `{{code_language}}` | プログラミング言語 | `### 言語` |
| `{{code_language_class}}` | Prism.js用言語クラス | `### 言語クラス` |
| `{{code_description}}` | コード説明 | `### 説明` |
| `{{sample_code}}` | サンプルコード | `### サンプルコード` |
| `{{javascript_code}}` | JavaScript処理 | `### JavaScript処理` |
| `{{full_html_code}}` | 完全なHTMLコード | 自動生成 |

### 関連用語
| 変数名 | 説明 | Markdown対応箇所 |
|--------|------|------------------|
| `{{related_comparison_table}}` | 関連用語・比較テーブル | `## 関連用語・比較` |

### YAML Front Matter関連変数

| 変数名 | 説明 | YAML Front Matter対応箇所 |
|--------|------|---------------------------|
| `{{meta_title}}` | ページタイトル | `title: "用語名 - IT用語辞典"` |
| `{{meta_description}}` | メタディスクリプション | `description: "概要説明文"` |
| `{{meta_keywords}}` | SEOキーワード | `keywords: ["キーワード1", "キーワード2"]` |
| `{{category}}` | カテゴリ分類 | `category: "設計・UX"` |
| `{{difficulty_badge}}` | 難易度バッジ | `difficulty: "初級|中級|上級"` |
| `{{reading_time}}` | 読了時間表示 | `reading_time: "5分"` |
| `{{author}}` | 著者情報 | `author: "IT用語辞典"` |
| `{{creation_date}}` | 作成日 | `date: "YYYY-MM-DD"` |
| `{{url_slug}}` | URLスラッグ | `slug: "url-slug"` |
| `{{canonical_url}}` | 正規URL | `canonical_url: "https://example.com/slug"` |
| `{{featured_image}}` | アイキャッチ画像 | `featured_image: "https://example.com/image.jpg"` |
| `{{ga_measurement_id}}` | Google Analytics測定ID | `ga_measurement_id: "G-XXXXXXXXXX"` |
| `{{gtm_container_id}}` | Google Tag Managerコンテナ | `gtm_container_id: "GTM-XXXXXXX"` |

---

## 新機能

### ✨ シンタックスハイライト対応
- **Prism.js**自動読み込み
- **VS Code Tomorrow**テーマ適用
- **言語自動検出**機能

### ✨ 改善されたデモシステム
- より詳細なデモ制御変数
- 統一されたデモUI
- エラーハンドリング強化

### ✨ SEO最適化
- 完全なOpen Graph対応
- JSON-LD構造化データ
- Google Analytics/Tag Manager統合

---

## 文体・表現ルール

### 基本方針
- **対象読者**: 見習いエンジニア、IT用語を学習中の初心者
- **文体**: 普通の説明文（丁寧語は使用しない）
- **表現**: 小学生でも理解できる分かりやすい言葉遣い

### 絵文字使用ポリシー
- **基本原則**: デフォルトでは絵文字を使用しない
- **許可**: Font Awesome等の外部アイコンライブラリのみ
- **禁止**: 装飾絵文字の使用
- **例外**: ユーザーが明示的に指定した場合のみ

---

## カスタマイズ

### CSSの調整
`styles.css`を編集してデザインを調整できます：
- カラーテーマの変更
- フォントサイズの調整
- レスポンシブデザインの改善

### HTMLテンプレートの拡張
`template.html`に新しいセクションや機能を追加できます：
- 新しい変数の追加
- セクションの順序変更
- 追加のJavaScript機能

---

## Tips

### Font Awesomeアイコンの選び方
- セキュリティ関連: `fas fa-shield-alt`, `fas fa-lock`
- データベース関連: `fas fa-database`, `fas fa-server`  
- ネットワーク関連: `fas fa-network-wired`, `fas fa-wifi`
- 開発ツール関連: `fas fa-code`, `fas fa-terminal`

### デモアイデア
- ボタンクリックでの動作確認
- フォーム入力のバリデーション
- APIコールのシミュレーション
- データ変換の可視化

### Prism.js言語クラス対応表
| 言語名 | クラス名 |
|--------|----------|
| JavaScript | `language-javascript` |
| HTML | `language-html` |
| CSS | `language-css` |
| Python | `language-python` |
| Java | `language-java` |
| JSON | `language-json` |

---

## 詳細仕様

### 生成ルール詳細
`rules.md`に詳細な生成ルールが記載されています：
- コマンドトリガー仕様
- 変数置換処理の詳細
- エラーハンドリング方法
- 品質チェック項目

### 参考例
既存の用語ページ：
- `itwords/drafts/api/api.html` - API用語の実装例
- このテンプレートの元となった完成形

---

## 更新履歴

- **2025-07-23**: 大幅アップデート
  - Prism.jsシンタックスハイライト追加
  - デモシステム変数の詳細化
  - CSSファイル名統一（styles.css）
  - 自動生成システム完成

- **2025-07-20**: 初回作成・更新
  - HTMLテンプレート、CSS、Markdownサンプルを作成
  - 変数置換システムの構築
  - 使い方ドキュメントの整備
  - 文体ルール・絵文字ポリシーの策定
  - 生成ルール詳細の文書化

---

**最終更新**: 2025年7月23日 