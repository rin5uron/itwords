# 実践型IT用語辞典｜読んで、試して、理解する


「読んで終わり」じゃなく、「動かして理解する」ための IT用語辞典です。  
ITパスポートや基本情報技術者試験でよく出る用語を、**実際に手を動かして体験しながら学べる**ようにまとめています。

---

## 🪄 制作の背景と意図

この辞典は、**エンジニア見習いの私が“自分のつまづき”から生まれたプロジェクト**です。

プログラミングを学び始めて100日目。  
ITパスポートの勉強中に、「用語の意味はわかるけど、**実感として理解できない**」というモヤモヤをたくさん抱えました。

> たとえば「IPアドレスとは」「SQLとは」って言われても、  
> 実際に見たり、書いたり、動かしてみないと、**なんだか腑に落ちない。**

そう感じた私は、  
**「だったら、自分がつまづいた言葉を“実践付き”でまとめていこう！」**と決めました。

このサイトは、自分の学びを可視化する記録であり、  
同じように悩んだ誰かが、**“わかる”を体験できる場所**でありたいです。

---

## 🌟 この辞典の特長

- 📘 **用語ごとに専用ページあり**：1ページ1テーマのシンプル構成
- 🧪 **コード実行や体験要素**あり：JavaScriptやAPIで、見て・触れて・わかる！
- 🔍 **SEO対応済み**：検索から各用語ページにダイレクトアクセス可能

---

### ✍️ 新規用語の追加・運用ワークフロー

新しい用語ページを作成し、公開、評価するまでの一連の流れです。

---

#### **Step 1: 計画 (Plan)**

1.  **キーワード選定**:
    作成する用語のメインターゲットとなるキーワードを決めます。

2.  **SEO要件確認**:
    [SEOチェックシート](docs/templates/checklists/seo-check-sheet.md) を開き、「基本SEO」や「コンテンツSEO」の項目に目を通し、作成する記事で満たすべき要件を事前に確認します。

---

#### **Step 2: 実装 (Do)**

1.  **ディレクトリ作成**:
    `app/terms/` 内に、新しい用語名のディレクトリを作成します (例: `app/terms/new-term/`)。

2.  **ページ作成**:
    作成したディレクトリ内に `page.tsx` を作成し、記事の内容と `metadata` (title, description) を記述します。

3.  **検索インデックス更新**:
    **【重要】** ターミナルで以下のコマンドを実行し、サイト内検索のインデックスを更新します。
    ```bash
    npm run build-index
    ```

4.  **動作確認**:
    ローカル環境 (`npm run dev`) で新しい用語がサイトに追加され、検索対象に含まれていることを確認してください。

---

#### **Step 3: 評価 (Check & Act)**

1.  **検索順位の確認**:
    ページを公開後、数日経ったら、Step 1で選定したキーワードでGoogle検索（シークレットモード推奨）し、検索順位を確認します。

2.  **結果の記録**:
    [SEOキーワード追跡シート](docs/templates/checklists/seo-keyword-tracking-sheet.md) を開き、確認した順位やクリック数などを記録します。以下のフォーマットをコピーして使うと便利です。

    **記録用テンプレート:**
    ```
    | YYYY-MM-DD | 新規キーワード | [順位] | - | - | [クリック数] | [インプレッション数] | [CTR] | /terms/new-term | [メモ] |
    ```

3.  **分析と改善**:
    記録したデータを元に、順位が低い場合はリライト（記事の修正）やメタデータの見直しを検討します。`seo-check-sheet.md` の「改善アクション」セクションも活用してください。

---

## 🗂️ ドキュメント

### 📋 サイト作成テンプレート（重要）⭐

**新しいサイトを作成する際は、まずこちらを確認してください：**

#### 🎯 クイックスタート（5分）
1. **[クイックスタートガイド](docs/templates/QUICK_START.md)** を読む
2. **[プロジェクトテンプレートREADME](docs/templates/PROJECT_TEMPLATE_README.md)** で全体像を把握
3. **[サイト作成チェックリスト](docs/templates/checklists/site-creation-checklist.md)** で要件を確認
4. テンプレートファイルをコピーして実装

#### 🤖 生成AIでサイトを作成する場合
1. **[生成AI向けプロンプトテンプレート](docs/templates/AI_PROMPT_TEMPLATE.md)** のプロンプトを使用
2. テンプレートファイルを参照させる
3. チェックリストで確認

#### 📄 テンプレートファイル一覧
- [テンプレート一覧](docs/templates/README.md) - すべてのテンプレートファイル
- [レイアウトテンプレート](docs/templates/layout-template.tsx) - ルートレイアウト（メタデータ、AdSense、GA）
- [ページテンプレート](docs/templates/page-template.tsx) - コンテンツページ（SEO対策含む）
- [プライバシーポリシーテンプレート](docs/templates/privacy-template.tsx) - AdSense記載必須
- [利用規約テンプレート](docs/templates/terms-template.tsx)
- [お問い合わせテンプレート](docs/templates/contact-template.tsx)
- [robots.txtテンプレート](docs/templates/robots-template.ts)
- [sitemap.xmlテンプレート](docs/templates/sitemap-template.ts)
- [コンポーネントテンプレート](docs/templates/components/) - GoogleAnalytics, GoogleAdSense, StructuredData

### プロジェクト管理
- [フェーズ2: AdSense対応計画](docs/phases/phase2-adsense.md)
- [プロセスログ](docs/process/processlog.md)

### コンセプト・仕様
- [ビジョン](docs/vision.md) - サイトのコンセプトと目標
- [サイト仕様書](docs/spec.md)

### SEO・AdSense
- [SEO対策ロードマップ](docs/phases/seo-roadmap.md)
- [SEOチェックシート](docs/templates/checklists/seo-check-sheet.md) - 定期的なSEO確認
- [SEOキーワード追跡シート](docs/templates/checklists/seo-keyword-tracking-sheet.md) - キーワード別順位記録
- [AdSense申請ガイド](docs/adsense-application-guide.md)
- [AdSense要件チェック](docs/adsense-requirement-check.md)

---

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 15** (App Router)
- **TypeScript**
- **React 18**

### ホスティング・デプロイ
- **Vercel** (https://itwords.jp)
- **カスタムドメイン**: itwords.jp

### スタイリング
- グローバルCSS（体験デモ、コードハイライト対応）
- レスポンシブデザイン

---


## 🧠 対象読者

- ITパスポート／基本情報の受験者
- ITに興味があるけど、用語の意味がわからず困っている人
- ただ読むだけじゃなく「納得して覚えたい」人
- つまづきを“自分の教材”に変えたい学習者

---

## 🧑‍💻 作者について

> エンジニア見習い（学習開始100日〜）  
> HTML / CSS / JavaScript を中心に勉強中。  
> 「ワクワクを形にする」ことを目指して、日々コードを書いています。  
> この辞典は、自分の学びの集積であり、他の誰かへのプレゼントのようなものです。

---

## 📫 コンタクト・応援

- 用語リクエストは `/form/request.html` からお気軽にどうぞ
- X（旧Twitter）で更新報告予定 → `#実践型IT用語辞典` で検索！

---

> 💡 **このリポジトリは公開学習＆試行錯誤の場です。暖かく見守っていただけたら嬉しいです。**


---

## 📂 プロジェクト構造

```
itwords/
├── itwords-nextjs/          # Next.js アプリケーション
│   ├── app/
│   │   ├── page.tsx         # ホームページ
│   │   ├── globals.css      # グローバルスタイル
│   │   ├── layout.tsx       # レイアウト
│   │   ├── privacy/         # プライバシーポリシー
│   │   ├── terms/           # 利用規約
│   │   └── terms/           # 用語ページ
│   │       ├── api/
│   │       ├── css/
│   │       ├── foolproof/
│   │       ├── html/
│   │       ├── javascript/
│   │       ├── json/
│   │       ├── localstorage/
│   │       ├── queue/
│   │       └── stack/
│   ├── components/          # Reactコンポーネント
│   │   ├── StackDemo.tsx
│   │   ├── QueueDemo.tsx
│   │   ├── LocalStorageDemo.tsx
│   │   ├── JsonDemo.tsx
│   │   └── FoolProofDemo.tsx
│   └── public/              # 静的ファイル
├── docs/                    # ドキュメント
│   ├── process/             # プロジェクト管理
│   ├── seo/                 # SEO関連
│   └── spec/                # 仕様書
└── terms/                   # オリジナルHTML（phase1バックアップ）
```

---

最終更新：2026年1月6日