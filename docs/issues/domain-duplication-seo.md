# [SEO] ドメイン重複による検索エンジン評価分散問題

**タグ**: `seo`, `bug`, `infrastructure`

**作成日**: 2026-01-19  
**ステータス**: ✅ 解決済み

---

## 問題点

### 1. ドメイン重複による重複コンテンツ問題
- **現状**: `itwords.jp` と `itwords.vercel.app` の両方でサイトが公開されている
- **影響**: 検索エンジンが同じコンテンツを2つのURLとして認識し、評価が分散
- **SEOへの影響**: 
  - 検索順位が上がらない
  - インデックス登録が遅れる
  - 正規URLが不明確

### 2. OG URLの不一致
- **問題**: 一部のページで `openGraph.url` が `itwords.vercel.app` になっている
- **影響**: SNSシェア時に正しいURLが表示されない、検索エンジンが混乱

### 3. Canonical URL未設定
- **問題**: 多くのページでcanonical URLが設定されていない
- **影響**: 検索エンジンが正規URLを判断できない

### 4. サイトマップにページが漏れている
- **問題**: 35ページあるのに、サイトマップには15ページしか登録されていない
- **影響**: 未登録の20ページが検索エンジンに発見されにくい

---

## 解決策

### ✅ 実装済み

#### 1. ドメインリダイレクト実装
- **ファイル**: `middleware.ts` (新規作成)
- **内容**: `itwords.vercel.app` へのアクセスを `itwords.jp` に301リダイレクト
- **効果**: 
  - 重複コンテンツ問題の解消
  - 検索エンジンに正規URLを明確に伝える
  - ユーザー体験の維持

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  if (hostname.includes('vercel.app')) {
    url.hostname = 'itwords.jp'
    return NextResponse.redirect(url, 301)
  }
}
```

#### 2. サイトマップ拡充
- **ファイル**: `app/sitemap.ts`
- **内容**: 漏れていた20ページを追加
- **追加ページ**: aes, bootstrap, cli-gui, cve, dns, domain, exploit, github-workflow, hosting-service, ip-address, poka-yoke, repository, server, sql, ssl-tls, validation, webhook, white-hat-hacker, zero-day
- **効果**: 全35ページが検索エンジンに発見される

#### 3. Canonical URL追加
- **対象**: 全用語ページ（約30ページ以上）
- **実装方法**: 
  - `layout.tsx` があるページ: `metadata.alternates.canonical` を追加
  - `page.tsx` に直接metadataがあるページ: `metadata.alternates.canonical` を追加
- **例**:
```typescript
export const metadata: Metadata = {
  // ... 既存のメタデータ
  alternates: {
    canonical: 'https://itwords.jp/terms/api',
  },
}
```

#### 4. OG URL統一
- **修正ファイル**: 
  - `app/terms/github/page.tsx`
  - `app/terms/github-workflow/layout.tsx`
  - `app/terms/http/page.tsx`
- **変更内容**: `itwords.vercel.app` → `itwords.jp`

---

## 実装ファイル一覧

### 新規作成
- `middleware.ts`: ドメインリダイレクト実装

### 修正ファイル
- `app/sitemap.ts`: 20ページ追加
- `app/terms/github/page.tsx`: OG URL修正 + canonical追加
- `app/terms/github-workflow/layout.tsx`: OG URL修正 + canonical追加
- `app/terms/http/page.tsx`: OG URL修正 + canonical追加
- `app/terms/http/layout.tsx`: canonical追加
- `app/terms/api/layout.tsx`: canonical追加
- `app/terms/json/page.tsx`: canonical追加
- `app/terms/dns/layout.tsx`: canonical追加
- `app/terms/html/layout.tsx`: canonical追加
- `app/terms/domain/layout.tsx`: canonical追加
- `app/terms/foolproof/layout.tsx`: canonical追加
- `app/terms/webhook/layout.tsx`: canonical追加
- `app/terms/vercel/layout.tsx`: canonical追加
- `app/terms/css/layout.tsx`: canonical追加
- `app/terms/framework/layout.tsx`: canonical追加
- `app/terms/hosting-service/layout.tsx`: canonical追加
- `app/terms/cli-gui/layout.tsx`: canonical追加
- `app/terms/server/layout.tsx`: canonical追加
- `app/terms/cookie/layout.tsx`: canonical追加
- `app/terms/npm/layout.tsx`: canonical追加
- `app/terms/validation/layout.tsx`: canonical追加
- `app/terms/sql/layout.tsx`: canonical追加
- `app/terms/aes/page.tsx`: canonical追加
- `app/terms/javascript/page.tsx`: canonical追加
- `app/terms/localstorage/page.tsx`: canonical追加
- `app/terms/ip-address/page.tsx`: canonical追加
- `app/terms/zero-day/page.tsx`: canonical追加
- `app/terms/queue/page.tsx`: canonical追加
- `app/terms/stack/page.tsx`: canonical追加
- `app/terms/poka-yoke/page.tsx`: canonical追加
- `app/terms/cve/page.tsx`: canonical追加
- `app/terms/ssl-tls/page.tsx`: canonical追加
- `app/terms/bootstrap/page.tsx`: canonical追加
- `app/terms/repository/page.tsx`: canonical追加
- `app/terms/exploit/page.tsx`: canonical追加
- `app/terms/white-hat-hacker/page.tsx`: canonical追加
- `app/terms/foolproof/page.tsx`: canonical追加

---

## 期待される効果

### 短期（1-2週間）
- 検索エンジンが正規URL（`itwords.jp`）を認識
- 重複コンテンツ警告の解消

### 中期（1-3ヶ月）
- 検索順位の向上
- インデックス登録率の向上
- クリック率（CTR）の改善

### 長期（3-6ヶ月）
- ドメイン権威の向上
- 検索流入の増加

---

## 補足: Vercelの設定でも対応可能

Vercelダッシュボードでも設定できます（オプション）:

1. Vercelダッシュボードにログイン
2. プロジェクトを選択
3. 「Settings」→「Domains」を開く
4. `itwords.vercel.app` を削除または無効化

ただし、middlewareによるリダイレクトの方が確実で、既存のリンクも保護できます。

---

## 参考リンク

- [Next.js Middleware Documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Google Search Central: Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Vercel Domain Configuration](https://vercel.com/docs/concepts/projects/domains)

---

**最終更新**: 2026-01-19
