# Issue作成ガイド

## 作成したIssue内容

### 1. ページデザイン統一
**ファイル**: `docs/issues/page-design-unification.md`

**内容**:
- 用語ページのデザイン統一（TermHeader・動線・構造）
- 対象: TermHeader未使用の11ページ
- ラベル: `ux`, `next`, `仕組み作り`

**GitHubで作成する方法**:
1. GitHubリポジトリの「Issues」タブを開く
2. 「New issue」をクリック
3. `docs/issues/page-design-unification.md`の内容をコピー&ペースト
4. ラベル `ux`, `next`, `仕組み作り` を追加
5. 「Submit new issue」をクリック

### 2. ページ構造改善
**ファイル**: `docs/issues/page-structure-improvement.md`

**内容**:
- 用語ページの構造改善とデモ配置ルールの確立
- 概要の直後にデモを配置するルール
- ラベル: `ux`, `仕組み作り`

**GitHubで作成する方法**:
1. GitHubリポジトリの「Issues」タブを開く
2. 「New issue」をクリック
3. `docs/issues/page-structure-improvement.md`の内容をコピー&ペースト
4. ラベル `ux`, `仕組み作り` を追加
5. 「Submit new issue」をクリック

## ラベルについて

### 既存ラベル
- `seo`: 記事のSEO改善
- `ux`: UI/導線/読みやすさ改善
- `next`: Next.js実装タスク
- `bug`: エラー/不具合
- `todo`: 未解決の課題メモ

### 新規追加ラベル
- `仕組み作り`: ワークフロー・ルール・テンプレートの整備

## Issue運用ルール

1. **1 Issue = 1テーマ**: 1つのIssueには1つのテーマのみ
2. **ラベルを必ず付ける**: どのカテゴリか明確にする
3. **完了したらClose**: メモでもCloseしてOK
4. **関連Issueはリンク**: 関連するIssueがあればリンクを貼る

## 今回作成したIssueの関係

```
[統一] ページデザイン統一（TermHeader・動線・構造）
  ↓ 完了後
[改善] ページ構造改善とデモ配置ルールの確立
  ↓ 完了後
各ページの個別改善（記事を見ながら）
```
