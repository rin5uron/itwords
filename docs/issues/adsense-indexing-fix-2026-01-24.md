# アドセンス通過後：不合格3URLの対策（2026-01-24）

**タグ**: `インデックス登録エラー`, `adsense`  
**記録日**: 2026年1月24日  
**背景**: アドセンス通過後、以下の3URLが約3日前に不合格になっていた

---

## 不合格だったURL（3件）

| URL | 備考 |
|-----|------|
| https://itwords.jp/icon.ico | 2026/01/22 時点で不合格 |
| https://itwords.jp/json/ | 2026/01/04 時点で不合格 |
| https://itwords.jp/api/ | 2025/08/23 以降で不合格 |

※ 実際のコンテンツURLは `https://itwords.jp/terms/json` および `https://itwords.jp/terms/api` の可能性あり（末尾スラッシュの有無で二重化していた場合の対策）

---

## 実施した対策

### 1. next.config.ts

- **trailingSlash: false** を明示  
  - `/terms/json` と `/terms/json/` の二重化を防ぎ、正規URLを1つに統一
- **リダイレクト追加**  
  - ` /icon.ico` → `/icon.png` へ 301 リダイレクト  
  - favicon 要求で 404 にならないようにし、不合格要因を減らす

### 2. 今後の確認・推奨

- **public にアイコンを配置**  
  - `public/icon.png` または `public/icon.ico` が存在しない場合、本番で 404 になる可能性あり  
  - 本番（Vercel 等）で別途配置している場合はそのまま運用で可
- **Search Console**  
  - 上記3URLについて「URL 検査」→「インデックス登録をリクエスト」で再クロールを依頼
- **/terms/json・/terms/api**  
  - canonical・メタは既存で問題なさそうなため、リダイレクトと正規URL統一後の再評価を待つ

---

## 更新履歴

- 2026-01-24: 初版（不合格3URLの記録と next.config 対策の反映）
