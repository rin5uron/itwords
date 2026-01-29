# [AdSense] ads.txt ファイルが見つからない問題

**タグ**: `adsense`, `bug`, `infrastructure`, `nextjs`

**作成日**: 2026-01-29  
**ステータス**: ✅ 解決済み

---

## 初心者向け：ads.txt とは？

**ads.txt** は、Google AdSense が「このサイトの広告は正規のものです」と確認するためのファイルです。

- **役割**: 広告の不正利用を防ぐための「身分証明書」のようなもの
- **置く場所**: サイトのトップ（`https://itwords.jp/ads.txt`）に置く必要がある
- **内容**: AdSense からもらった決まった文字列を1行書くだけ

---

## どんなエラーが出たか？

### AdSense 管理画面に表示されたメッセージ

```
ads.txt ファイルが見つかりませんでした

itwords.jp で ads.txt ファイルを検索しましたが、見つかりませんでした。
ファイルが正しくアップロードされ、Google AdSense クローラから
アクセス可能であることを確認してください。
```

### つまり何が起きていたか？

- **Google のロボット（クローラ）** が `https://itwords.jp/ads.txt` にアクセスした
- でも **「ページが見つかりません（404）」** と返ってきた
- だから AdSense が「ads.txt がない」と判断した

---

## なぜ起きたか？原因の説明

### 普通ならこう動くはず

Next.js では、`public` フォルダに入れたファイルは、そのままサイトのトップに置かれるはずです。

- 例：`public/ads.txt` → `https://itwords.jp/ads.txt` で見られる（はず）

### 実際には

- `public/ads.txt` はちゃんとあった
- Git にもコミットされていた
- なのに本番環境（itwords.jp）では **404 が返っていた**

### 考えられる原因

Next.js の App Router と Vercel の組み合わせで、`public` フォルダ内の一部のファイル（`.txt` など）が、本番環境で正しく配信されない場合があるようです。

- ローカルでは動くこともある
- 本番デプロイ後だけ 404 になる、というケースがある

---

## どう対処したか？解決策

### やったこと：Route Handler で「ads.txt を返すページ」を作った

`public` に置くのではなく、**「ads.txt の内容を返す専用のページ」** をプログラムで作る方法に変えました。

### 具体的な変更

1. **新しく作ったファイル**: `app/ads.txt/route.ts`
2. **役割**: 誰かが `https://itwords.jp/ads.txt` にアクセスしたら、ads.txt の内容を返す
3. **結果**: 404 ではなく、正しい内容が表示されるようになった

### 仕組みを簡単に言うと

- 今まで：ファイルを置いて「読んでね」と待っていた → 本番で読めなかった
- 今：アクセスされたら「はい、これが ads.txt の内容です」と返す → 確実に届く

---

## 対処後の確認方法（初心者向け）

### ステップ1：ブラウザで確認する

1. ブラウザ（Chrome など）を開く
2. アドレスバーに `https://itwords.jp/ads.txt` と入力して Enter
3. 次のような1行が表示されれば OK：
   ```
   google.com, pub-6439411211038936, DIRECT, f08c47fec0942fa0
   ```

### ステップ2：AdSense 管理画面で確認する

1. [Google AdSense](https://www.google.com/adsense/) にログイン
2. サイトの設定や「サイト」の項目を開く
3. 「ads.txt が見つかりました」と表示されるか確認
4. **注意**: 反映までに数時間〜数日かかることがある

---

## 技術者向け：実装の詳細

### 実装ファイル
- **ファイル**: `app/ads.txt/route.ts`（新規作成）

### 実装内容

```typescript
// AdSense用 ads.txt を配信するRoute Handler
// public/ads.txt が本番で404になるため、Route Handlerで明示的に配信

export async function GET() {
  const adsContent = `google.com, pub-6439411211038936, DIRECT, f08c47fec0942fa0`

  return new Response(adsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
```

### ポイント
1. Next.js App Router では、`app/ads.txt/route.ts` で `/ads.txt` のルートが作成される
2. `Content-Type: text/plain` を明示的に指定
3. `public/ads.txt` はバックアップとして残しておく（Route Handler が優先される）

### ビルド確認
- `npm run build` で `/ads.txt` がルートとして出力されることを確認済み
- ビルド出力例: `├ ƒ /ads.txt  193 B  102 kB`

---

## 参考リンク

- [Google AdSense - ads.txt について](https://support.google.com/adsense/answer/7532444)
- [Next.js - Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
