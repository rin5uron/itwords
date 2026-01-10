# Next.jsにおけるサイト内検索機能の実装

## 課題
当初、サイト内検索としてGoogle検索にリダイレクトする簡易的な機能を実装したが、ユーザーの期待する「サイト内で完結する検索体験」とは異なっていた。

## 解決策
クライアントサイドで完結する、より本格的なサイト内検索機能をNext.js App Router環境で実装した。

1.  **検索インデックスの作成 (`public/search-index.json`)**
    - サイト内のコンテンツ（用語）の「タイトル」「説明」「パス」を含むJSONファイルを作成。
    - このファイルを`public`ディレクトリに配置することで、フロントエンドから`fetch` APIを通じて直接アクセスできるようにした。
    - これが簡易的なデータベースとして機能する。

2.  **検索結果ページの作成 (`app/search/page.tsx`)**
    - `'use client'`ディレクティブを使用し、このページをクライアントコンポーネントとして定義。
    - React Hooks (`useSearchParams`, `useEffect`, `useState`) を活用。
    - `useSearchParams`でURLから検索クエリを取得。
    - `useEffect`内で、取得したクエリを元に`search-index.json`を`fetch`し、`title`と`description`に対して絞り込み（フィルタリング）処理を実行。
    - `useState`で検索結果の状態を管理し、UIに反映させる。

3.  **検索フォームの修正 (`app/page.tsx`)**
    - トップページの検索フォームの`action`属性を、Googleから新しく作成した`/search`ページに変更。
    - `method`を`get`に設定することで、ユーザーの検索クエリがURLパラメータとして`search`ページに渡されるようにした。

## 学び
- Next.js App Router環境でも、`public`フォルダにJSONを配置し`fetch`することで、DBなしで静的な検索インデックスを利用できる。
- `'use client'`とReact Hooksを組み合わせることで、動的な検索・フィルタリング機能をクライアントサイドで効率的に実装可能。
- ユーザー体験を考慮し、サイト内で完結するシームレスな機能を提供することの重要性。