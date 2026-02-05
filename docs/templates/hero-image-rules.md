# ヒーロー画像の命名・配置ルール

用語ページのヒーロー画像について、命名と配置を統一するためのルールです。

## ファイル配置

| 種類 | 配置先 | 例 |
|------|--------|-----|
| 用語ページのヒーロー画像 | `public/images/terms/` | `public/images/terms/ssh-hero.png` |
| 用語一覧ページのヒーロー画像 | `public/images/terms/` | `public/images/terms/it-terms-hero.png` |

**重要**: 用語ページのヒーロー画像は必ず `public/images/terms/` に配置する。`public/images/` 直下には置かない。

## 命名ルール

| 形式 | 説明 | 例 |
|------|------|-----|
| `[用語スラッグ]-hero.[拡張子]` | 用語ページのヒーロー画像 | `foolproof-hero.jpeg`、`ssh-hero.png`、`aes-hero.jpg` |
| `it-terms-hero.[拡張子]` | 用語一覧ページ用（汎用） | `it-terms-hero.png` |

- **用語スラッグ**: ページのURLパスと同じ（例: `/terms/ssh` → `ssh`、`/terms/zero-day` → `zero-day`）
- **拡張子**: `jpg`、`jpeg`、`png` のいずれか

## コード内での参照

```tsx
// パス（先頭に / をつける）
src="/images/terms/[用語スラッグ]-hero.[拡張子]"

// 例
src="/images/terms/foolproof-hero.jpeg"
src="/images/terms/ssh-hero.png"
src="/images/terms/aes-hero.jpg"
```

## メタデータ（Open Graph / Twitter）での参照

```tsx
openGraph: {
  images: [{ url: '/images/terms/[slug]-hero.[ext]', width: 1536, height: 1024, alt: '...' }],
},
twitter: {
  images: ['/images/terms/[slug]-hero.[ext]'],
},
```

## 画像の推奨仕様

- **アスペクト比**: 3:2 推奨（横長）
- **サイズ**: width 1200〜1536px 程度
- **形式**: JPEG（写真系）、PNG（イラスト・透過あり）

## チェックリスト（新規追加時）

- [ ] ファイルを `public/images/terms/` に配置した
- [ ] ファイル名が `[slug]-hero.[ext]` 形式である
- [ ] ページ内の `heroImage` の `src` が `/images/terms/[slug]-hero.[ext]` を指している
- [ ] メタデータ（openGraph、twitter）の画像パスも同じパスを指定している
