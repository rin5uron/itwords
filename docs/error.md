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

---

# 2026-01-12: Vercelビルドエラー対応

## 発生した問題

Vercelでのビルド時に2つのエラーが発生し、デプロイが失敗した。

### エラー1: TypeScriptコンパイルエラー
```
Type error: Cannot find module './components/GoogleAnalytics' or its corresponding type declarations.
  at docs/templates/layout-template.tsx:6:29
```

**原因**:
- `docs/templates/`ディレクトリにテンプレートファイル（`layout-template.tsx`）が配置されていた
- このファイルは開発用のテンプレートで、存在しないパスへのimportを含んでいた
- `tsconfig.json`の設定で`docs`ディレクトリが除外されていなかったため、TypeScriptがビルド対象として認識してしまった

**解決策**:
`tsconfig.json`の`exclude`配列に`docs`を追加
```json
"exclude": ["node_modules", "docs"]
```

### エラー2: Next.js 15の要件違反
```
useSearchParams() should be wrapped in a suspense boundary at page "/search".
```

**原因**:
- Next.js 15では、`useSearchParams()`などの動的な値を扱うフックは、Suspense境界内で使用する必要がある
- `app/search/page.tsx`で`useSearchParams()`を直接使用していたため、ビルド時にエラーが発生
- これはNext.js 15の厳格化により、事前レンダリング可能なページと動的なページを明確に区別するための要件

**解決策**:
1. `useSearchParams()`を使用する部分を`SearchResults`コンポーネントに分離
2. そのコンポーネントを`<Suspense>`で囲んで使用
```tsx
<Suspense fallback={<p>検索中...</p>}>
  <SearchResults />
</Suspense>
```

## なぜエラーが顕在化したか

1. **`node_modules`の削除と再インストール**
   - クリーンインストールにより、依存関係が最新の状態に更新された
   - Next.js 15の厳格なチェックが有効になった

2. **今まで見逃されていた問題**
   - テンプレートファイルは開発中は問題なかったが、本番ビルド時に初めてエラーが検出された
   - 検索ページも開発サーバーでは動作していたが、静的生成時にエラーが発生

## 学び

- **テンプレートやドキュメントファイルは明示的に除外する**: `tsconfig.json`や`.gitignore`で適切に管理する
- **Next.js 15の新しい要件を理解する**: `useSearchParams()`などの動的フックは必ずSuspense内で使用
- **本番ビルドを定期的に実行する**: `npm run build`でローカルでも本番環境と同じチェックを行う
- **クリーンインストールは問題を顕在化させる**: 隠れていたエラーを発見する良い機会