# 実践型IT用語辞典 - itwords

**AI（Claude・Cursor）と人間がパッと理解するためのプロジェクトガイド**

---

## 目次

- [このサイトの本質](#このサイトの本質)
- [毎日の作業](#毎日の作業)
- [スラッシュコマンド](#スラッシュコマンド)
- [重要Issue](#-重要issue)
- [全ドキュメント一覧](#全ドキュメント一覧)

---

## このサイトの本質

| 観点 | 内容 |
|------|------|
| **Will** | 門外漢だった人間が、IT業界の楽しさを伝える。小中高生に「諦めないでほしい」と届ける |
| **Need** | 初心者向けの教材が少ない。Wikipedia的な難解な説明しかない |
| **Can** | 門外漢視点で「つまずくポイント」が分かる。理解までのプロセスを言語化できる |
| **Skill** | SEO・Next.js・デザインを学びながら、技術で届ける |

---

## 毎日の作業

### 30分チャレンジを開始

`/start-daily` で以下が順番に実行されます：

1. **データ分析（5分）** - Search Console/Analytics確認、Issue提案
2. **用語ページ改善（10分）** - 既存用語ページ1本を改善
3. **新規用語ページ（10分）** - 新しい用語ページを1本作成
4. **Next.js課題（5分）** - 学習項目を1つ実装

**詳細**: [毎日の作業ルーチン](./docs/DAILY-ROUTINE.md)

---

## スラッシュコマンド

Claude Codeで使えるコマンド一覧。`.claude/commands/` の各ファイルが `/コマンド名` になる。

| コマンド | 何をする | 詳細 |
|----------|----------|------|
| `/start-daily` | 30分チャレンジを開始（DAILY-ROUTINE に沿って Phase 1→4 を順に実行） | [start-daily.md](./.claude/commands/start-daily.md) |
| `/new-page [用語名]` | 新規用語ページを作成（テンプレート準拠・インデックス更新まで） | [new-page.md](./.claude/commands/new-page.md) |
| `/improve-page [ページ名]` | 既存ページのコンテンツ・テンプレート準拠を改善 | [improve-page.md](./.claude/commands/improve-page.md) |
| `/seo-check` | Search Consoleのキーワードデータを貼り付けて title・description を確認・修正 | [seo-check.md](./.claude/commands/seo-check.md) |

**補足**: `/start-daily` は他のコマンドを呼び出さない。DAILY-ROUTINE の Phase に沿って AI が作業する。個別作業は各コマンドを直接使う。

---

## 🔥 重要Issue

進行中の重要なIssueを把握するための一覧。完了したらこのリストから削除する。

### 仕組み作り（継続管理）
- [#7](https://github.com/rin5uron/itwords/issues/7): 品質管理ガイドライン作成
- [#12](https://github.com/rin5uron/itwords/issues/12): 用語ページテンプレート - デザイン統一
- [#13](https://github.com/rin5uron/itwords/issues/13): 用語ページテンプレート - 構造改善
- [#20](https://github.com/rin5uron/itwords/issues/20): Issue管理ルール整備

### 収益化（AdSense）
- [#17](https://github.com/rin5uron/itwords/issues/17): AdSense - 広告表示バグ調査

### SEO（全体最適化）
- [#18](https://github.com/rin5uron/itwords/issues/18): 全用語ページ - SEOメタデータ改善

### コンテンツ拡充（優先度順）
- [#21](https://github.com/rin5uron/itwords/issues/21): queue - コンテンツ拡充（2,500→3,500文字）
- [#22](https://github.com/rin5uron/itwords/issues/22): localstorage - コンテンツ拡充（2,700→3,500文字）
- [#23](https://github.com/rin5uron/itwords/issues/23): zero-day - コンテンツ拡充（2,700→3,500文字）
- [#24](https://github.com/rin5uron/itwords/issues/24): json - コンテンツ拡充（2,800→3,500文字）
- [#25](https://github.com/rin5uron/itwords/issues/25): exploit - コンテンツ拡充（2,900→3,500文字）
- [#26](https://github.com/rin5uron/itwords/issues/26): html - コンテンツ拡充（3,100→4,000文字）
- [#27](https://github.com/rin5uron/itwords/issues/27): cve - コンテンツ拡充（3,200→4,000文字）
- [#28](https://github.com/rin5uron/itwords/issues/28): white-hat-hacker - コンテンツ拡充（3,600→4,000文字）
- [#29](https://github.com/rin5uron/itwords/issues/29): stack - コンテンツ拡充（3,600→4,000文字）

---

## 全ドキュメント一覧

### 運用・ルール（詳細はここから）
- [作業進捗管理](./docs/ISSUE-MANAGEMENT.md) - Issueタイトル・ラベル・状態管理・作業の流れ
- [ワークフロー](./docs/WORKFLOW.md) - 新規用語ページ追加の手順（PHASE 1〜4）
- [基本原則・プロジェクト構造・UI/UX](./docs/PRINCIPLES.md) - AI運用原則・ディレクトリ構成・表示ルール

### 運用・ワークフロー
- [毎日の作業ルーチン](./docs/DAILY-ROUTINE.md) - 30分チャレンジの詳細
- [画像生成ワークフロー](./docs/image-generation-claude-workflow.md) - AI補助による画像生成手順
- [DALL-E 3ルール](./docs/image-generation-dalle3-rules.md) - 画像生成プロジェクトルール

### プロジェクト概要
- [ビジョン](./docs/vision.md) - サイトのコンセプト・ペルソナ
- [技術仕様](./docs/spec.md) - ディレクトリ構成・CSS設計

### 学習管理
- [Next.js学習進捗](./docs/learning/nextjs-progress.md) - 学習項目と進捗状況

### テンプレート
- [用語ページテンプレート](./docs/templates/page-template.tsx) - 新規ページ作成時の雛形
- [SEOチェックシート](./docs/templates/checklists/seo-check-sheet.md) - SEO品質確認
- [SEOトラッキングシート](./docs/templates/checklists/seo-keyword-tracking-sheet.md) - キーワード追跡

### アイデア
- [インフラ用語計画](./docs/ideas/infrastructure-terms-plan.md) - 追加予定の用語リスト
- [Next.js学習システム提案](./docs/ideas/nextjs-learning-system-proposal.md) - 学習管理の提案
- [Claude Skills評価](./docs/ideas/CLAUDE-SKILLS-EVALUATION.md) - AI支援ツールの評価

---

**最終更新**: 2026-02-06
