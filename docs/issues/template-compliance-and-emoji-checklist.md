# テンプレ準拠・崩れ・絵文字 チェック一覧

**作成日**: 2026-01-24  
**用途**: 目次レスポンシブ適用状況、テンプレ未準拠ページ、絵文字残存ページの把握

---

## 1. ページ全体に適用されたもの（全ページ共通）

| 項目 | 適用範囲 | 内容 |
|------|----------|------|
| **目次のスマホレスポンシブ** | 全ページ | `app/globals.css` の `.toc-wrapper` / `.table-of-contents` / `.toc-title` を修正。スマホで崩れないように `max-width: 100%`、`min-width: 0`、`line-clamp` 等を追加済み。目次を使っている全ページに自動適用。 |
| **目次の表示位置** | server / dns / aes を修正済み | 目次が「main の最後」にあったページは、すべて「ヘッダー直後・main の前」に 1 つだけ表示する形に統一済み。他ページはもともと正しい位置。 |

---

## 2. テンプレ未準拠（要対応）

### 2.1 日付ブロックが `date-info-toc` になっていないページ

テンプレでは「日付＋目次」を `date-info-toc` でまとめて表示。以下はまだ **`date-info` + インライン style** のまま。

| パス | ファイル |
|------|----------|
| `/terms/npm` | npm/page.tsx |
| `/terms/webhook` | webhook/page.tsx |
| `/terms/hosting-service` | hosting-service/page.tsx |
| `/terms/data-center` | data-center/page.tsx |
| `/terms/vercel` | vercel/page.tsx |
| `/terms/http` | http/page.tsx |
| `/terms/ip-address` | ip-address/page.tsx |
| `/terms/smtp` | smtp/page.tsx |
| `/terms/https` | https/page.tsx |
| `/terms/github` | github/page.tsx |
| `/terms/cookie` | cookie/page.tsx |
| `/terms/css` | css/page.tsx |
| `/terms/html` | html/page.tsx |
| `/terms/javascript` | javascript/page.tsx |
| `/terms/api` | api/page.tsx |
| `/terms/foolproof` | foolproof/page.tsx |
| `/terms/zero-day` | zero-day/page.tsx |
| `/terms/validation` | validation/page.tsx |
| `/terms/sql` | sql/page.tsx |
| `/terms/cli-gui` | cli-gui/page.tsx |
| `/terms/domain` | domain/page.tsx |
| `/terms/exploit` | exploit/page.tsx |
| `/terms/repository` | repository/page.tsx |
| `/terms/bootstrap` | bootstrap/page.tsx |
| `/terms/ssl-tls` | ssl-tls/page.tsx |
| `/terms/poka-yoke` | poka-yoke/page.tsx |
| `/terms/localstorage` | localstorage/page.tsx |
| `/terms/json` | json/page.tsx |
| `/terms/dns` | dns/page.tsx（※TOC位置は修正済みだが、main 内にまだ date-info が残っている可能性あり） |

**※ すでに `date-info-toc` にしているページ（8ページ）**  
cve, server, aes, framework, queue, stack, white-hat-hacker, github-workflow

---

### 2.2 PageSummary（「このページでわかること」）がないページ

テンプレ必須の PageSummary が未実装のページ。

| パス | 備考 |
|------|------|
| `/terms/bootstrap` | 任意（目次・FAQ あり） |
| `/terms/exploit` | 任意 |
| `/terms/hosting-service` | 任意 |
| `/terms/json` | 任意 |
| `/terms/server` | 任意（目次位置は修正済み） |
| `/terms/ssl-tls` | 任意 |
| `/terms/validation` | 任意 |
| `/terms/domain` | 推奨 |
| `/terms/localstorage` | 推奨 |
| `/terms/webhook` | 推奨 |
| `/terms/npm` | テンプレ表にはなし（要確認） |
| `/terms/poka-yoke` | 推奨 |
| `/terms/repository` | 任意 |
| `/terms/cli-gui` | 要確認 |
| `/terms/sql` | 要確認 |

---

## 3. 絵文字が残っているページ（Font Awesome に置き換え推奨）

**ルール**: 絵文字は使わず、Font Awesome（オサム）に統一。  
**対応方針**: 1 ページずつ、該当箇所を `<i className="fas fa-xxx" aria-hidden />` 等に置き換える。

件数は「該当絵文字の出現回数」の目安。実際の置換はファイルを開いて検索して対応。

| 件数目安 | パス | 主な絵文字（例） |
|----------|------|------------------|
| 57 | `/terms/aes` | aes/page.tsx |
| 28 | `/terms/repository` | repository/page.tsx |
| 25 | `/terms/ssl-tls` | ssl-tls/page.tsx |
| 15 | `/terms/https` | https/page.tsx, https/layout.tsx |
| 13 | `/terms/github` | github/page.tsx |
| 13 | `/terms/validation` | validation/page.tsx |
| 12 | `/terms/bootstrap` | bootstrap/page.tsx |
| 7 | `/terms/npm` | npm/page.tsx |
| 7 | `/terms/vercel` | vercel/page.tsx |
| 7 | `/terms/css` | css/page.tsx |
| 5 | `/terms/smtp` | smtp/page.tsx |
| 4 | `/terms/http` | http/page.tsx |
| 4 | `/terms/cli-gui` | cli-gui/page.tsx |
| 3 | `/terms/server` | server/page.tsx |
| 3 | `/terms/dns` | dns/page.tsx |
| 3 | `/terms/sql` | sql/page.tsx |
| 3 | `/terms/cookie` | cookie/page.tsx |
| 2 | `/terms/framework` | framework/page.tsx |
| 2 | `/terms/white-hat-hacker` | white-hat-hacker/page.tsx |
| 2 | `/terms/ip-address` | ip-address/page.tsx |
| 2 | `/terms/localstorage` | localstorage/page.tsx |
| 1 | `/terms/queue` | queue/page.tsx |
| 1 | `/terms/webhook` | webhook/page.tsx |
| 1 | `/terms/zero-day` | zero-day/page.tsx |
| 1 | `/terms/foolproof` | foolproof/page.tsx |
| 1 | `/terms/poka-yoke` | poka-yoke/page.tsx |

**絵文字の主な種類（置換例）**  
- 💡 → `fas fa-lightbulb`  
- ✅ → `fas fa-check-circle`  
- ❌ → `fas fa-times-circle`  
- 🔍 → `fas fa-search`  
- ⚠️ → `fas fa-exclamation-triangle`  
- ⚡ → `fas fa-bolt`  
- 🔒 → `fas fa-lock`  
- 📋 → `fas fa-clipboard-list`  
- その他 → `docs/templates/page-template.tsx` のコメント参照

---

## 4. 崩れ・レイアウトで気になる可能性があるところ

- **目次**: スマホ用スタイルは全ページ共通適用済み。特定ページだけで崩れる場合は、そのページの `main` 内の h2 数やラップ要素を確認。
- **date-info のままのページ**: スマホで日付エリアのレイアウトが他と違う可能性あり。統一するなら `date-info-toc` への変更を推奨。

---

## 5. 更新履歴

- 2026-01-24: 初版作成（目次レスポンシブ・目次位置・date-info-toc／PageSummary／絵文字の一覧）
