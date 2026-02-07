# 実践型IT用語辞典 - itwords.jp

**AIと人間が協働し、ミニマムな仕組みの中で最大の力を発揮するためのプロジェクトガイド**

---

## ABOUT


### このサイトについて

**ITに馴染みのなかった私が、ITの楽しさ・面白さ・ワクワクを伝えるサイト**

難しい専門知識ばかりじゃなく、少しでも仕組みを知ると世界が広がる。生活が豊かになる。そんな体験を共有したい。

<br>
### 制作背景と目指す姿

| 観点 | 内容 |
|------|------|
| **Will** | ITに馴染みのなかった私が、ITをわかりやすく楽しく魅力的に、ワクワクする感じで伝えたい。同じようにIT知識や意識が少ない人にも「ITって楽しい」「面白い」と思ってほしい |
| **Need** | Wikipedia的な難解な説明ばかりで、わかりやすい教材が少ない。少しでも仕組みを知ると世界が広がることを伝える場所がない |
| **Can** | IT門外漢視点で「つまずくポイント」が分かる。理解までのプロセスを言語化できる。自分が理解した言葉で伝えられる |
| **Skill** | SEO・Next.js・デザインを学びながら、技術で届ける |

---
<br><br><br>

## 🌱クイックスタート & ドキュメントの使い方


- [Skills & コマンド](#skills--コマンド)
- [毎日の作業フロー](#毎日の作業フロー)
- [Issue管理](#issue管理)
- [ドキュメント構成](#ドキュメント構成)
### Skills & コマンド

#### Skills

Claude Code Skills を使って用語ページの改善レビューを実行できます。

| Skill | 何をする |
|-------|----------|
| `itwords-content-review` | 用語ページの内容改善レビュー（テンプレート準拠チェック、コンテンツ品質確認） |

**使い方**:
```
skill: itwords-content-review
```

#### スラッシュコマンド

Claude Codeで使えるコマンド一覧。`.claude/commands/` の各ファイルが `/コマンド名` になる。

| コマンド | 何をする |
|----------|----------|
| `/new-page [用語名]` | 新規用語ページを作成（テンプレート準拠・インデックス更新まで） |
| `/seo-check [用語名]` | Search Consoleのデータを元に title・description を確認・修正 |

**詳細**: [ワークフロー](./docs/WORKFLOW.md)

---

### 毎日の作業フロー

#### 推奨ワークフロー（30分）

1. **データ分析（5分）** - Search Console/Analytics確認、Issue提案
2. **用語ページ改善（10分）** - Skills でレビュー → Issue 記録 → 修正
3. **新規用語ページ（10分）** - `/new-page` で新しい用語ページを1本作成
4. **Next.js課題（5分）** - 学習項目を1つ実装

#### ポイント
- Skills でレビュー → 改善点を Issue に記録
- Issue ラベルで分類・検索
- 完了したら Issue をクローズ

---

### Issue管理

**原則: アイデア・作業履歴・進捗は全てIssueで管理**

#### ラベル体系

| ラベル | 用途 | 検索方法 |
|--------|------|----------|
| `SEO` | 検索エンジン最適化（title/description/キーワード） | [label:SEO](https://github.com/rin5uron/itwords/labels/SEO) |
| `description` | title・descriptionのメタ情報 | [label:description](https://github.com/rin5uron/itwords/labels/description) |
| `コンテンツ` | 記事の執筆・品質管理 | [label:コンテンツ](https://github.com/rin5uron/itwords/labels/コンテンツ) |
| `UI/UX` | デザイン・使いやすさ | [label:UI/UX](https://github.com/rin5uron/itwords/labels/UI%2FUX) |
| `仕組み作り` | ワークフロー・ルール・テンプレート整備 | [label:仕組み作り](https://github.com/rin5uron/itwords/labels/仕組み作り) |
| `next` | Next.js実装タスク | [label:next](https://github.com/rin5uron/itwords/labels/next) |
| `bug` | 不具合 | [label:bug](https://github.com/rin5uron/itwords/labels/bug) |

#### Issue作成ルール

- **タイトル**: `[用語名] - [作業内容]` または `[カテゴリ] - [作業内容]`
  - 例: `api - テンプレート準拠チェック`
  - 例: `全用語ページ - SEOメタデータ改善`
- **ラベル**: 必ず1つ以上付ける（複数可）
- **本文**: 具体的な改善内容、完了条件を記載
- **コメント**: 作業履歴は Issue コメントで記録（時系列で自動的に並ぶ）

**詳細**: [作業進捗管理](./docs/ISSUE-MANAGEMENT.md)

#### 重要Issue一覧

| カテゴリ | Issue | 状態 |
|---------|-------|------|
| 仕組み作り | [#7 品質管理ガイドライン](https://github.com/rin5uron/itwords/issues/7) | 進行中 |
| 仕組み作り | [#12 テンプレート - デザイン統一](https://github.com/rin5uron/itwords/issues/12) | 進行中 |
| 仕組み作り | [#13 テンプレート - 構造改善](https://github.com/rin5uron/itwords/issues/13) | 進行中 |
| 仕組み作り | [#20 Issue管理ルール整備](https://github.com/rin5uron/itwords/issues/20) | 進行中 |
| AdSense | [#17 広告表示バグ調査](https://github.com/rin5uron/itwords/issues/17) | 進行中 |
| SEO | [#18 全用語ページ - メタデータ改善](https://github.com/rin5uron/itwords/issues/18) | 進行中 |
| アイデア | [#30 Next.js学習システム構築](https://github.com/rin5uron/itwords/issues/30) | 提案 |
| アイデア | [#31 インフラ用語ページ作成計画](https://github.com/rin5uron/itwords/issues/31) | 提案 |

---

### ドキュメント構成

**原則: ドキュメントは `docs/` に集約。これ以上増やさない。それ以外は Issue で管理。**

#### docs/ 構成

```
docs/
├── WORKFLOW.md                         # 実践的な作業手順
├── ISSUE-MANAGEMENT.md                 # Issue運用ルール
├── PRINCIPLES.md                       # 設計思想・判断基準
├── image-generation-claude-workflow.md # 画像生成ワークフロー
├── image-generation-dalle3-rules.md    # 画像生成ルール
└── templates/                          # 実際のファイル生成用
    ├── page-template.tsx               # 用語ページテンプレート
    ├── layout-template.tsx             # metadata設定用
    ├── hero-image-rules.md             # 画像生成ルール
    └── ...
```

#### ドキュメント vs Issue の使い分け

| 項目 | 管理場所 |
|------|----------|
| **ワークフロー・ルール** | `docs/` の3ファイル（WORKFLOW.md, ISSUE-MANAGEMENT.md, PRINCIPLES.md） |
| **テンプレート** | `docs/templates/` |
| **画像生成ルール** | `docs/image-generation-*.md` |
| **アイデア・改善案** | GitHub Issue |
| **作業履歴・進捗** | GitHub Issue のコメント |

#### ドキュメント一覧

**運用・ルール（必読）**
- [ワークフロー](./docs/WORKFLOW.md) - 新規用語ページ追加の手順（PHASE 1〜4）、コマンド詳細
- [作業進捗管理](./docs/ISSUE-MANAGEMENT.md) - Issueタイトル・ラベル・状態管理・作業の流れ
- [基本原則・プロジェクト構造](./docs/PRINCIPLES.md) - AI運用原則・ディレクトリ構成・UI/UXルール

**テンプレート（ページ作成時に使用）**
- [用語ページテンプレート](./docs/templates/page-template.tsx) - 新規ページ作成時の雛形
- [レイアウトテンプレート](./docs/templates/layout-template.tsx) - metadata設定用
- [ヒーロー画像ルール](./docs/templates/hero-image-rules.md) - 画像生成時のルール

**画像生成**
- [Claude画像生成ワークフロー](./docs/image-generation-claude-workflow.md) - AI補助による画像生成手順
- [DALL-E 3ルール](./docs/image-generation-dalle3-rules.md) - 画像生成プロジェクトルール

---

**最終更新**: 2026-02-07
