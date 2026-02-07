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
10. **Issue作成（完成度管理用）**：
    - 以下のフォーマットでIssueを作成
    - タイトル：`【ページ完成度管理】[用語名] - [一言説明]`
    - ラベル：`コンテンツ`, `SEO`
    - 本文テンプレート：
      ```markdown
      ## ページ情報
      - **URL**: https://itwords.jp/terms/[スラッグ]
      - **作成日**: YYYY-MM-DD
      - **カテゴリ**: [カテゴリ名]

      ## 実装内容
      - [x] [実装した内容1]
      - [x] [実装した内容2]
      - ...

      ## 現在の状態
      - [ ] 完璧（問題なし）
      - [x] 改善が必要

      ## 改善点・TODO（レビュー予定）

      ### 1. 内容の正確性
      - [ ] 説明、計算式は正しいか？
      - [ ] 技術的な誤りはないか？

      ### 2. デモの分かりやすさ（デモがある場合）
      - [ ] デモは理解しやすいか？
      - [ ] 直感的に操作できるか？

      ### 3. 説明の明確さ
      - [ ] 初心者にとって分かりやすいか？
      - [ ] 説明の順序は適切か？

      ### 4. 実用性
      - [ ] 実務や試験対策に役立つ内容か？
      - [ ] 具体的な例は適切か？

      ### 5. SEO対策
      - [ ] キーワード選定は適切か？
      - [ ] 検索意図に合った内容か？
      - [ ] 競合調査と差別化はできているか？

      ## ステータス
      これから作成者がレビューして、改善点を具体化する予定。
      ```

## チェックリスト（作成後に確認）

- [ ] テンプレート構成と一致しているか
- [ ] layout.tsx の metadata に title・description・keywords・canonical が設定されているか
- [ ] ビルドが成功するか
- [ ] トップページに表示されるか
- [ ] インデックス更新済みか
- [ ] 完成度管理用のIssueが作成されているか
