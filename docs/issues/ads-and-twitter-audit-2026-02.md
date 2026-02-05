# 広告・X（Twitter）一括設定 監査レポート

**タグ**: `adsense`, `twitter`, `seo`, `audit`  
**記録日**: 2026年2月1日

---

## 1. 広告が消えた問題（adFormat=auto）

### 現象
「広告を自動にしたら消えた」とのこと。

### 原因
`AdBelowRelatedTerms` が `AdSenseUnit` を **adFormat 指定なし**で呼んでいるため、デフォルトの `adFormat='auto'` が使われている。

```tsx
// app/components/AdBelowRelatedTerms.tsx
return <AdSenseUnit adSlot={slot} />  // adFormat 未指定 → 'auto' が使われる
```

`adFormat='auto'` の場合、Google が最適な形式（rectangle / horizontal / vertical）を自動選択するが、以下の理由で表示されないことがある：

- 表示エリアのサイズが小さい
- 広告在庫がない
- レスポンシブでレイアウトが変わり、Google が「表示しない」と判断する

### 対比：表示されている広告
`AdSubtleHorizontal`（terms/layout.tsx の記事下部）は **adFormat="horizontal"** を明示しているため、確実に表示される。

```tsx
// app/components/AdSubtleHorizontal.tsx
<AdSenseUnit
  adSlot={adSlot}
  adFormat="horizontal"   // ← 明示指定
  responsive={true}
  adStyle={{ minHeight: 50 }}
/>
```

### 推奨修正
`AdBelowRelatedTerms` で `adFormat` を明示する。

- **案A**: `adFormat="rectangle"` … 四角形ユニット、表示されやすい
- **案B**: `adFormat="horizontal"` … 横長、AdSubtleHorizontal と統一

---

## 2. X（Twitter）メタデータ 一括設定のエラー

### 2.1 twitter が欠けているページ（openGraph はある）

| ファイル | 状態 |
|----------|------|
| `app/page.tsx` | openGraph あり、**twitter なし** |
| `app/terms/github/page.tsx` | openGraph あり、**twitter なし** |
| `app/terms/json/page.tsx` | openGraph あり、**twitter なし** |
| `app/terms/javascript/page.tsx` | openGraph あり、**twitter なし** |
| `app/terms/smtp/page.tsx` | openGraph あり、**twitter なし** |
| `app/terms/http/page.tsx` | openGraph あり、**twitter なし** |
| `app/terms/ip-address/page.tsx` | openGraph あり、**twitter なし** |
| `app/terms/github-workflow/layout.tsx` | openGraph あり、**twitter なし** |
| `app/terms/api/metadata.ts` | openGraph あり、**twitter なし** |

**影響**: X でシェアしたときに、card（summary_large_image）が正しく表示されない可能性がある。

### 2.2 openGraph も twitter も無いページ（layout のみ）

以下の layout は `title` と `description` のみで、openGraph・twitter が未設定：

- `app/terms/sql/layout.tsx`
- `app/terms/terms/page.tsx`（用語一覧）
- `app/terms/memory/layout.tsx`
- `app/terms/cpu/layout.tsx`
- `app/terms/data-center/layout.tsx`
- `app/terms/validation/layout.tsx`
- `app/terms/cookie/layout.tsx`
- `app/terms/server/layout.tsx`
- `app/terms/cli-gui/layout.tsx`
- `app/terms/hosting-service/layout.tsx`
- `app/terms/framework/layout.tsx`
- `app/terms/css/layout.tsx`
- `app/terms/webhook/layout.tsx`
- `app/terms/domain/layout.tsx`
- `app/terms/html/layout.tsx`
- `app/terms/dns/layout.tsx`
- `app/terms/api/layout.tsx`（api は metadata.ts を参照）

※ これらのページは layout の metadata が使われる。子の page.tsx で上書きされていれば、その page の metadata が優先される。

### 2.3 twitter:images の不整合

`summary_large_image` を使っているが、`twitter.images` を指定していないページが多い。

- **images あり**: ssh, aes, white-hat-hacker, zero-day（ヒーロー画像を明示）
- **images なし**: その他多数

Next.js の metadata では、`twitter.images` を指定しない場合、`openGraph.images` がフォールバックされる。ルート `layout.tsx` の openGraph に `images` があるため、多くのページではデフォルトのアイコン画像が使われる想定。

**推奨**: ヒーロー画像があるページは `twitter.images` を明示（既に実施済みのページあり）。それ以外は openGraph の継承に任せてよい。

### 2.4 ルート layout の twitter

`app/layout.tsx` の `twitter` には `images` が無い。`openGraph.images` はあるため、フォールバックで使われる可能性はあるが、明示した方が確実。

---

## 3. 修正の優先度

| 優先度 | 項目 | 対象 |
|--------|------|------|
| 高 | 広告の adFormat 修正 | AdBelowRelatedTerms |
| 高 | twitter 追加（主要ページ） | page.tsx, github, json, javascript, smtp, http, ip-address, github-workflow, api |
| 中 | トップページの twitter | app/page.tsx |
| 低 | layout のみのページ | sql, memory, cpu など（必要に応じて） |

---

## 4. 推奨する修正内容

### 4.1 広告（AdBelowRelatedTerms）
```tsx
return <AdSenseUnit adSlot={slot} adFormat="rectangle" responsive={true} />
```
または
```tsx
return <AdSenseUnit adSlot={slot} adFormat="horizontal" responsive={true} />
```

### 4.2 twitter 追加のテンプレート
既存ページ（例: bootstrap）を参考に、以下を追加：
```tsx
twitter: {
  card: 'summary_large_image',
  title: '【ページタイトル】',
  description: '【説明文】',
  // ヒーロー画像がある場合のみ
  // images: ['/images/terms/xxx-hero.jpg'],
},
```

---

## 更新履歴

- 2026-02-01: 初版（広告・Twitter 一括監査）
