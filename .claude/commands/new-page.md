# 新規ページ作成

新規用語ページを作成する。テンプレート準拠チェック・トップページ追加・インデックス更新までを一貫して行う。

## 実行前に読むファイル（必須）

1. `docs/WORKFLOW.md` - 新規ページ作成フロー（PHASE 1-4）とルール
2. `docs/templates/page-template.tsx` - ページテンプレート
3. `app/components/TermPageHeader.tsx` - ヘッダーコンポーネント
4. 既存ページ1つ（例：`app/terms/dns/page.tsx`）- 構成の参考

## 実行手順

1. ユーザーから「用語名」を受け取る
2. 上記5つのファイルを読む
3. 以下の構成で `app/terms/[用語名]/page.tsx` と `app/terms/[用語名]/layout.tsx` を作成
   - `'use client'` を使う場合は layout.tsx に metadata を置く
   - `'use client'` を使わない場合は page.tsx に metadata を置く
4. ページ構成の順序を守る：
   - 概要 → 日常生活での実例（or 実務での使われ方） → 体験デモ（任意） → 補足 → 関連用語 → FAQAccordion
5. テンプレート準拠チェック（必須）：
   - TermPageHeader を使っている（個別コンポーネントでない）
   - `className="term-comparison"` と `className="comparison-table"` がある
   - インライン目次・ヘッダースタイルを書いていない
   - StructuredData（FAQPage + Article）がある
   - summaryItems が設定されている
6. `app/page.tsx`（トップ）に適切なカテゴリに追加
7. `npm run build-index` を実行
8. `npx next build` で確認
9. dateModified を今日の日付にする

## チェックリスト（作成後に確認）

- [ ] テンプレート構成と一致しているか
- [ ] layout.tsx の metadata に title・description・keywords・canonical が設定されているか
- [ ] ビルドが成功するか
- [ ] トップページに表示されるか
- [ ] インデックス更新済みか
