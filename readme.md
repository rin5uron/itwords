# 実践型IT用語辞典 - itwords

**AI（Claude・Cursor）と人間がパッと理解するためのプロジェクトガイド**

---

## 目次

### Part 1: 概要
- [このサイトについて](#このサイトについて)
- [重要Issue](#重要issue)

### Part 2: クイックスタート & ドキュメントの使い方
- [Skills & コマンド](#skills--コマンド)
- [毎日の作業フロー](#毎日の作業フロー)
- [全ドキュメント一覧](#全ドキュメント一覧)
- [ドキュメントポリシー](#ドキュメントポリシー)

---

## Part 1: 概要

### このサイトについて

**ITに馴染みのなかった私が、ITの楽しさ・面白さ・ワクワクを伝えるサイト**

難しい専門知識ばかりじゃなく、少しでも仕組みを知ると世界が広がる。生活が豊かになる。そんな体験を共有したい。

| 観点 | 内容 |
|------|------|
| **Will** | ITに馴染みのなかった私が、ITをわかりやすく楽しく魅力的に、ワクワクする感じで伝えたい。同じようにIT知識や意識が少ない人にも「ITって楽しい」「面白い」と思ってほしい |
| **Need** | Wikipedia的な難解な説明ばかりで、わかりやすい教材が少ない。少しでも仕組みを知ると世界が広がることを伝える場所がない |
| **Can** | IT門外漢視点で「つまずくポイント」が分かる。理解までのプロセスを言語化できる。自分が理解した言葉で伝えられる |
| **Skill** | SEO・Next.js・デザインを学びながら、技術で届ける |

---

### 重要Issue

進行中の重要なIssueを把握するための一覧。完了したらこのリストから削除する。

#### 仕組み作り（継続管理）
- [#7](https://github.com/rin5uron/itwords/issues/7): 品質管理ガイドライン作成
- [#12](https://github.com/rin5uron/itwords/issues/12): 用語ページテンプレート - デザイン統一
- [#13](https://github.com/rin5uron/itwords/issues/13): 用語ページテンプレート - 構造改善
- [#20](https://github.com/rin5uron/itwords/issues/20): Issue管理ルール整備

#### 収益化（AdSense）
- [#17](https://github.com/rin5uron/itwords/issues/17): AdSense - 広告表示バグ調査

#### SEO（全体最適化）
- [#18](https://github.com/rin5uron/itwords/issues/18): 全用語ページ - SEOメタデータ改善

#### アイデア
- [#30](https://github.com/rin5uron/itwords/issues/30): Next.js学習システムの構築
- [#31](https://github.com/rin5uron/itwords/issues/31): インフラ・ネットワーク関連用語ページの作成計画

---

## Part 2: クイックスタート & ドキュメントの使い方

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

**詳細**: [ワークフロー](./docs/WORKFLOW.md) - 各コマンドの実行フローと手順

---

### 毎日の作業フロー

#### 推奨ワークフロー（30分）

1. **データ分析（5分）** - Search Console/Analytics確認、Issue提案
2. **用語ページ改善（10分）** - Skills でレビュー → Issue 記録 → 修正
3. **新規用語ページ（10分）** - `/new-page` で新しい用語ページを1本作成
4. **Next.js課題（5分）** - 学習項目を1つ実装

#### ポイント
- Skills でレビュー → 改善点を Issue に記録（手動 or 自動化検討中）
- Issue ラベルで分類（`SEO`, `コンテンツ`, `UI/UX`, `仕組み作り`, `next`）
- 完了したら Issue をクローズ

---

### 全ドキュメント一覧

#### 運用・ルール（必読）
- [ワークフロー](./docs/WORKFLOW.md) - 新規用語ページ追加の手順（PHASE 1〜4）、コマンド詳細
- [作業進捗管理](./docs/ISSUE-MANAGEMENT.md) - Issueタイトル・ラベル・状態管理・作業の流れ
- [基本原則・プロジェクト構造](./docs/PRINCIPLES.md) - AI運用原則・ディレクトリ構成・UI/UXルール

#### テンプレート（ページ作成時に使用）
- [用語ページテンプレート](./docs/templates/page-template.tsx) - 新規ページ作成時の雛形
- [レイアウトテンプレート](./docs/templates/layout-template.tsx) - metadata設定用
- [ヒーロー画像ルール](./docs/templates/hero-image-rules.md) - 画像生成時のルール

#### 画像生成
- [Claude画像生成ワークフロー](./docs/image-generation-claude-workflow.md) - AI補助による画像生成手順
- [DALL-E 3ルール](./docs/image-generation-dalle3-rules.md) - 画像生成プロジェクトルール

---

### ドキュメントポリシー

**原則: これ以上ドキュメントを増やさない**

- **新しいアイデア・改善案**: GitHub Issue で管理
- **作業履歴・進捗**: GitHub Issue のコメントで記録
- **ルール変更**: 既存の3ファイル（WORKFLOW.md, ISSUE-MANAGEMENT.md, PRINCIPLES.md）を更新

**理由**:
- ドキュメントが増えると管理コストが高くなる
- Issue で管理すれば時系列で追いやすい
- 人間もAIも迷わない

---

**最終更新**: 2026-02-07
