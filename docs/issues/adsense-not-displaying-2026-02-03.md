# AdSense 広告が表示されない問題（2026-02-03）

**タグ**: `adsense`, `bug`  
**記録日**: 2026年2月3日  
**GitHub Issue**: [#17](https://github.com/rin5uron/itwords/issues/17)

---

## 現象

本番サイト（itwords.jp）で AdSense 広告が表示されない。SSH ページなどに配置した広告ユニットも表示されなかった。

---

## 原因

`layout.tsx` で `NEXT_PUBLIC_ADSENSE_ID` が未設定の場合、`GoogleAdSense` コンポーネントがレンダリングされず、AdSense のメインスクリプト（`adsbygoogle.js`）が読み込まれていなかった。
そのため、`AdSenseUnit` の `<ins>` 要素があっても、広告が表示されなかった。

---

## 実施した対策

### 1. app/layout.tsx

- `AD_CLIENT_ID` にフォールバック（`ca-pub-6439411211038936`）を追加
- 環境変数がなくても `GoogleAdSense` を常に読み込むように変更

### 2. app/terms/ssh/page.tsx

- 記事下部スロット（5647254283）を直接指定して `AdSenseUnit` を配置

### 3. Vercel 環境変数（推奨）

- `NEXT_PUBLIC_ADSENSE_ID`: `ca-pub-6439411211038936`
- `NEXT_PUBLIC_ADSENSE_SLOT`: `5647254283`
- 設定後は Redeploy が必要

---

## 今日学んだこと（2026-02-03）

```
【AdSense 広告配置の2パターン】

1. 全ページ
   - AdBelowRelatedTerms
   - NEXT_PUBLIC_ADSENSE_SLOT が設定されていれば全用語ページの「関連用語の直下」に表示

2. ユニットで一部
   - AdSenseUnit（adSlot を直接指定）
   - 特定ページだけに広告を置きたいときに使う（例：SSH、フールプルーフ）

【依存関係】
- ID（NEXT_PUBLIC_ADSENSE_ID）が土台 → これがないと SLOT もユニットも動かない
- SLOT（NEXT_PUBLIC_ADSENSE_SLOT）→ AdBelowRelatedTerms 用
- ユニット（AdSenseUnit + adSlot）→ ページごとに好きな位置に配置可能
```

---

## 更新履歴

- 2026-02-03: 初版（原因と対策の記録）
- 2026-02-03: 今日学んだこと（全ページ vs ユニットで一部）を追加
