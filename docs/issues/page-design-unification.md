# [統一] 用語ページのデザイン統一（TermHeader・動線・構造）

## 問題点

### 1. ヘッダーの不統一
- **問題**: 一部のページで`<header>`タグを直接使用し、「実践型IT用語辞典」が大きく表示されている
- **正しい状態**: `TermHeader`コンポーネントを使用し、左上にトップへの動線（パンくずリスト）を表示

### 2. トップへの動線がないページ
- **問題**: 古い`<header>`タグを使っているページには、左上の「TOP › 用語一覧 › 用語名」のパンくずリストがない
- **影響**: ユーザーがトップページに戻りにくい

### 3. 基本構造の不統一
- **現状**: ページごとに構造がバラバラ
- **正しい構造**: `TermHeader` → `TableOfContents`（必要に応じて） → `main` → `FAQAccordion` → 関連用語

## 対象ページ

### TermHeader未使用のページ（要修正・11ページ）
- `app/terms/cookie/page.tsx`
- `app/terms/foolproof/page.tsx`
- `app/terms/framework/page.tsx`
- `app/terms/html/page.tsx`
- `app/terms/http/page.tsx`
- `app/terms/javascript/page.tsx`
- `app/terms/localstorage/page.tsx`
- `app/terms/npm/page.tsx`
- `app/terms/queue/page.tsx`
- `app/terms/stack/page.tsx`
- `app/terms/vercel/page.tsx`
- `app/terms/webhook/page.tsx`

### 既にTermHeaderを使用しているページ（参考・18ページ）
- `app/terms/api/page.tsx`
- `app/terms/json/page.tsx`
- `app/terms/github/page.tsx`
- `app/terms/exploit/page.tsx`
- など

## 対応内容

1. **TermHeaderコンポーネントへの統一**
   - 全ての用語ページで`TermHeader`コンポーネントを使用
   - 古い`<header>`タグを削除

2. **動線の統一**
   - 全てのページで「TOP › 用語一覧 › 用語名」のパンくずリストを表示

3. **基本構造の統一**
   - `TermHeader` → `TableOfContents`（必要に応じて） → `main` → `FAQAccordion` → 関連用語

## 完了条件

- [ ] 全ての用語ページで`TermHeader`コンポーネントを使用
- [ ] 全てのページでトップへの動線（パンくずリスト）が表示される
- [ ] 古い`<header>`タグが全て削除されている
- [ ] ページ構造が統一されている

## 参考

- テンプレート: `docs/templates/page-template.tsx`
- TermHeaderコンポーネント: `app/components/TermHeader.tsx`
- 統一済みページ例: `app/terms/api/page.tsx`, `app/terms/json/page.tsx`
