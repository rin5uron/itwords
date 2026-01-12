# 📚 ドキュメントディレクトリ

このディレクトリには、「実践型IT用語辞典」プロジェクトに関する設計書・仕様書・進捗管理ドキュメントが格納されています。

---

## 📂 ディレクトリ構造

```
docs/
├── README.md              # このファイル（ナビゲーション）
├── vision.md              # プロジェクトビジョン・コンセプト
├── spec.md                # 技術仕様書・設計方針
├── error.md               # エラーログ・トラブルシューティング
├── phases/                # フェーズ別実装計画
│   ├── content-phase.md          # コンテンツ制作フェーズ管理
│   ├── phase2-adsense.md         # AdSense申請フェーズ
│   ├── seo-roadmap.md            # SEO実装ロードマップ
│   └── seo-phase1-completed.md   # SEOフェーズ1完了レポート
├── templates/             # テンプレート関連
│   ├── README.md          # テンプレート利用マニュアル
│   └── term-page/         # 用語ページテンプレート
│       ├── template.html  # HTMLテンプレート
│       ├── sample.md      # Markdownサンプル
│       └── rules.md       # AI自動生成ルール
└── images/                # ドキュメント用画像
    ├── process1_1.png
    └── process1_2.png
```

---

## 📖 各ドキュメントの概要

### 🎯 コア設計書

| ファイル | 内容 | 用途 |
|---------|------|------|
| **vision.md** | プロジェクトのビジョン・ペルソナ・コンセプト | サイトの方向性を確認したい時 |
| **spec.md** | 技術仕様書・ディレクトリ構成・CSS設計 | 実装方針を確認したい時 |
| **error.md** | エラーログ・トラブルシューティング履歴 | 過去のエラーと解決方法を参照したい時 |

### 📅 フェーズ管理

| ファイル | 内容 | 用途 |
|---------|------|------|
| **phases/content-phase.md** | コンテンツ制作のフェーズ別タスク管理 | 用語ページ作成の進捗確認 |
| **phases/phase2-adsense.md** | AdSense申請に向けたフェーズ計画 | 収益化準備の確認 |
| **phases/seo-roadmap.md** | SEO実装の優先順位・工数見積もり | SEO施策の段階的実装 |
| **phases/seo-phase1-completed.md** | SEOフェーズ1完了レポート | SEO初期実装の振り返り |


### 🎨 テンプレート

| ディレクトリ | 内容 | 用途 |
|------------|------|------|
| **templates/term-page/** | 用語ページの自動生成テンプレート | 新しい用語ページを作成する時 |
| **templates/checklists/** | SEO・サイト作成のチェックリスト | 品質確認・SEO施策の実施時 |

### 🖼️ 画像生成ルール

| ファイル | 内容 | 用途 |
|---------|------|------|
| **image-generation-dalle3-rules.md** | DALL-E 3用画像生成プロジェクトルール | 用語ページのヒーロー画像を生成する時 |
| **image-generation-claude-workflow.md** | Claude用画像生成ワークフロー | AI Agentが画像実装を支援する時 |

---

## 🔄 更新ルール

### ドキュメント更新時のルール

1. **vision.md** - サイトの方向性が大きく変わった時のみ更新
2. **spec.md** - 技術的な設計方針変更時に更新
3. **error.md** - エラーが発生した時に症状・原因・解決方法を記録
4. **phases/*.md** - 各フェーズのタスク完了時にステータス更新

---

## 🔗 関連リンク

- **リポジトリ**: https://github.com/rin5uron/itwords
- **デプロイ環境**: Vercel
- **作成者**: @rin5uron

---

## 📌 Tips

- **新しい用語を作成したい** → `templates/term-page/README.md` を参照
- **用語ページの画像を生成したい** → `image-generation-dalle3-rules.md` を参照
- **AI Agentに画像実装を依頼したい** → 「画像生成して」と指示（自動で `image-generation-claude-workflow.md` を参照）
- **SEO対策を実装したい** → `phases/seo-roadmap.md` の優先順位を確認
- **過去のエラー解決法を探したい** → `error.md` を検索
- **サイトの方向性を再確認したい** → `vision.md` を読み直す

---

**最終更新**: 2026-01-11
