# 用語ページ生成ルール

このファイルでは、Cursor AIアシスタントが「用語ページを作成して」コマンドを実行する際の詳細なルールと仕様を定義する。

---

## コマンド仕様

### トリガーコマンド
- `[用語名]のページを作成して`
- `○○.mdから用語ページ生成して`
- `○○.mdから用語ページ作成して`
- `用語ページを作成して`（対象ファイルが明確な場合）

### 動作フロー
1. **対象.mdファイルの読み取り**
   - 指定された.mdファイルの内容を解析
   - 構造化された情報を抽出

2. **HTML生成処理**
   - `template.html`を基準にHTMLを生成
   - 変数置換処理を実行
   - 外部CSSファイル（`styles.css`）との連携
   - Prism.jsシンタックスハイライト適用

3. **ファイル出力**
   - .mdファイルと**同じディレクトリ**に配置
   - .mdファイルと**同じファイル名**でHTML生成（拡張子のみ.html）
   - 例：`git-stash.md` → `git-stash.html`

---

## 変数置換ルール

### 基本置換パターン
| 変数名 | 対応Markdownセクション | 処理方法 |
|--------|----------------------|----------|
| `{{term_name}}` | `# 用語名` | H1見出しの文字列をそのまま使用 |
| `{{reading}}` | `読み方: よみかた` | コロン以降の文字列を抽出 |
| `{{icon_class}}` | `アイコン: fas fa-example-icon` | Font Awesomeクラス名を抽出 |
| `{{description}}` | `## 概要` | セクション内容をHTMLに変換 |
| `{{points}}` | `## ポイント` | リスト項目を`<li>`タグに変換 |

### デモ関連変数（強化版）
| 変数名 | 対応Markdownセクション | 処理方法 |
|--------|----------------------|----------|
| `{{demo_content}}` | `### デモ説明` | デモの説明文 |
| `{{demo_title}}` | `### デモタイトル` | 見出し直下のテキスト |
| `{{demo_button_text}}` | `### ボタンテキスト` | 見出し直下のテキスト |
| `{{demo_function}}` | `### デモ処理名` | 関数名として使用（例：startApiDemo） |

### コード関連変数（シンタックスハイライト対応）
| 変数名 | 対応Markdownセクション | 処理方法 |
|--------|----------------------|----------|
| `{{code_language}}` | `### 言語` | 言語名をそのまま使用（例：JavaScript） |
| `{{code_language_class}}` | `### 言語クラス` | Prism.js用クラス名（例：javascript） |
| `{{code_description}}` | `### 説明` | 説明文をHTMLに変換 |
| `{{sample_code}}` | `### サンプルコード` | コードブロックの内容を抽出 |
| `{{javascript_code}}` | `### JavaScript処理` | コードブロックの内容を抽出 |
| `{{full_html_code}}` | 生成されたHTML全体 | 完全なHTMLコードを挿入 |

### 関連用語・比較セクション
| 変数名 | 対応Markdownセクション | 処理方法 |
|--------|----------------------|----------|
| `{{related_comparison_table}}` | `## 関連用語・比較` | Markdownテーブルを HTML table rows に変換 |

### YAML Front Matter処理
| 変数名 | 対応YAMLフィールド | 処理方法 |
|--------|-------------------|----------|
| `{{meta_title}}` | `title` | HTMLタイトルタグに挿入 |
| `{{meta_description}}` | `description` | メタディスクリプションに設定 |
| `{{meta_keywords}}` | `keywords` | 配列をカンマ区切り文字列に変換 |
| `{{category}}` | `category` | カテゴリ表示、構造化データに使用 |
| `{{difficulty_badge}}` | `difficulty` | 難易度バッジのスタイル適用 |
| `{{reading_time}}` | `reading_time` | 読了時間表示 |
| `{{author}}` | `author` | 著者情報、構造化データに使用 |
| `{{creation_date}}` | `date` | 構造化データの日付情報 |
| `{{canonical_url}}` | `canonical_url` | 正規URL、OGタグに使用 |
| `{{featured_image}}` | `featured_image` | SNSシェア用画像 |
| `{{ga_measurement_id}}` | `ga_measurement_id` | Google Analytics設定 |
| `{{gtm_container_id}}` | `gtm_container_id` | Google Tag Manager設定 |

**YAML Front Matter処理詳細:**
- ファイル冒頭の`---`で囲まれた部分をYAMLとして解析
- 各フィールド値を対応するHTML変数に置換
- 構造化データ（JSON-LD）の自動生成
- SEOメタタグの自動設定
- Google Analytics・Tag Managerコードの自動挿入
- Open GraphタグによるSNS最適化

**関連用語・比較の処理詳細:**
- Markdownテーブル形式を解析してHTML table rowsを生成
- 用語名列には`class="term-name"`を適用
- 用語名の色は読み方の色（#666）と統一
- リンク判定：同一ディレクトリに`用語名.html`が存在する場合は`href="./用語名.html"`
- リンクなしの場合は`href=""`でスタイリング変更
- 特徴列はそのままテキストとして表示

---

## シンタックスハイライト仕様

### Prism.js設定
- **テーマ**: `prism-tomorrow`（VS Code風）
- **CDN**: Cloudflare CDN使用
- **機能**: 自動言語検出、コードハイライト

### 言語クラス対応表
| 言語名（Markdown） | Prism.jsクラス | 変数設定例 |
|-------------------|---------------|------------|
| JavaScript | `language-javascript` | `code_language_class: javascript` |  
| HTML | `language-html` | `code_language_class: html` |
| CSS | `language-css` | `code_language_class: css` |
| Python | `language-python` | `code_language_class: python` |
| Java | `language-java` | `code_language_class: java` |
| JSON | `language-json` | `code_language_class: json` |

### コードブロック生成例
```html
<pre><code class="language-javascript">
async function startApiDemo() {
  // コード内容
}
</code></pre>
```

---

## 文体・表現ルール

### 基本方針
- **対象読者**: 見習いエンジニア、IT用語を学習中の初心者
- **文体**: 普通の説明文（丁寧語は使用しない）
- **表現**: 小学生でも理解できる分かりやすい言葉遣い

### セクション別文体ルール
- **概要**: 「〜である」「〜する」調の説明文
- **ポイント**: 箇条書きで簡潔に
- **デモ説明**: 親しみやすい表現で体験内容を説明
- **コード説明**: 技術的内容を分かりやすく解説

### 絵文字使用ポリシー
- **基本原則**: デフォルトでは絵文字を使用しない
- **許可される絵文字**: Font Awesome等の外部アイコンライブラリのみ
- **禁止**: テキスト内での装飾絵文字（😊、🎉、⭐など）
- **例外**: ユーザーが明示的に指定した場合のみ使用可

---

## テンプレートファイル構成

### 必須ファイル
```
templates/term-page/
├── template.html    ← HTMLテンプレート
├── sample.md        ← Markdown記入例
└── rules.md         ← このファイル
```

**📝 重要**: CSSファイルは `itwords/styles.css` を使用（テンプレートディレクトリには配置しない）

### HTMLテンプレート仕様
- Font Awesome CDN読み込み済み
- **Prism.jsシンタックスハイライト対応**
- レスポンシブ対応
- アコーディオン式コード表示
- Google Analytics/Tag Manager統合

### CSS仕様
- **ファイル場所**: `itwords/styles.css`（プロジェクトルート）
- フールプルーフページと同一デザイン継承
- カラーテーマ: ベージュ系背景、茶系アクセント
- フォント: Noto Sans JP
- モバイル対応済み

---

## エラーハンドリング

### 必須項目チェック
生成前に以下の項目が.mdファイルに存在することを確認：
- 用語名（H1見出し）
- 読み方
- アイコン指定
- 概要セクション
- ポイントセクション

### 不足項目の対応
- 必須項目が不足している場合は、生成前にユーザーに確認
- デフォルト値の提案（アイコン: fas fa-question-circle など）

### シンタックスハイライト関連
- 対応していない言語の場合は`language-text`を適用
- コードブロックが空の場合はサンプルコードを提案

---

## 生成後の確認事項

### HTML品質チェック
- リンク切れの確認
- CSS読み込みパスの確認（`../../styles.css`）
- JavaScript動作確認
- レスポンシブデザイン確認
- **Prism.jsシンタックスハイライト**動作確認

### コンテンツ品質チェック
- 用語説明の正確性
- コード例の動作確認
- デモ機能の動作確認
- **シンタックスハイライト**適用確認

---

## 更新履歴

- **2025-07-23**: 大幅アップデート
  - Prism.jsシンタックスハイライト対応
  - デモ関連変数の詳細化
  - CSSファイル名統一（styles.css）
  - 言語クラス対応表追加
  - エラーハンドリング強化

- **2025-07-20**: 初回作成
  - 基本的な生成ルールを定義
  - 変数置換仕様の整備
  - 文体・絵文字ポリシーの策定

---

**最終更新**: 2025年7月23日 