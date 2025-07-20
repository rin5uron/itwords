# 🎯 実践型IT用語辞典テンプレート

このディレクトリには、IT用語解説ページを量産するためのテンプレートファイルが格納されています。

---

## 📁 ファイル構成

```
templates/
├── README.md           ← このファイル（使い方説明）
└── term-page/
    ├── template.html   ← HTMLテンプレート（変数置換対応）
    ├── styles.css      ← CSSスタイルファイル  
    └── sample.md       ← Markdownテンプレート（記入例付き）
```

---

## 🚀 使い方

### 1️⃣ 新しい用語の.mdファイルを作成
`sample.md`をコピーして、新しい用語名で.mdファイルを作成します。

```bash
cp templates/term-page/sample.md git-stash.md
```

### 2️⃣ .mdファイルに内容を記入
`sample.md`の構造に従って、用語の詳細情報を記入します。

**必須項目：**
- 用語名
- 読み方
- アイコン（Font Awesomeクラス）
- 概要
- ポイント
- 体験デモ内容
- コード例

### 3️⃣ AIに変換を依頼
Cursorで以下のように依頼します：

```
○○.mdから用語ページ生成して
```

または

```
git-stash.mdからHTMLページ作成して
```

### 4️⃣ 生成されたファイルを配置
生成されたHTMLファイルを適切な場所（`samplepage/`配下など）に配置します。

---

## 🔧 変数一覧

`template.html`で使用される変数と対応するMarkdown項目：

| 変数名 | 説明 | Markdown対応箇所 |
|--------|------|------------------|
| `{{term_name}}` | 用語名 | `# 用語名` |
| `{{reading}}` | 読み方 | `読み方: よみかた` |
| `{{icon_class}}` | Font Awesomeアイコン | `アイコン: fas fa-example-icon` |
| `{{description}}` | 概要・説明 | `## 概要` |
| `{{points}}` | ポイントリスト | `## ポイント` |
| `{{demo_title}}` | デモタイトル | `### デモタイトル` |
| `{{demo_button_text}}` | ボタンテキスト | `### ボタンテキスト` |
| `{{demo_function}}` | デモ関数名 | `### デモ処理名` |
| `{{code_language}}` | プログラミング言語 | `### 言語` |
| `{{code_description}}` | コード説明 | `### 説明` |
| `{{sample_code}}` | サンプルコード | `### サンプルコード` |
| `{{javascript_code}}` | JavaScript処理 | `### JavaScript処理` |
| `{{related_terms_section}}` | 関連用語セクション | `## 関連用語` |

---

## 🎨 カスタマイズ

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

## 💡 Tips

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

---

## 📚 参考例

既存の用語ページ：
- `/samplepage/foolproof/foolproof.html` - フールプルーフの実装例
- このテンプレートの元となった完成形

---

## 🔄 更新履歴

- **2025-07-20**: 初回作成
  - HTMLテンプレート、CSS、Markdownサンプルを作成
  - 変数置換システムの構築
  - 使い方ドキュメントの整備

---

**最終更新**: 2025年7月20日 