# テンプレ準拠・崩れ・絵文字 チェック一覧

**作成日**: 2026-01-24  
**用途**: 目次・ヘッダー一括スタイル、テンプレ準拠状況、絵文字残存ページの把握

---

## 1. 用語ページ共通テンプレ（一括スタイル）

**全用語ページで、タイトル・日付・「このページでわかること」・目次は `TermPageHeader` で一括表示する。**

| 項目 | 適用範囲 | 内容 |
|------|----------|------|
| **ヘッダー構成** | 全用語ページ | **TermPageHeader** を使用。表示順は **タイトル（TermHeader）→ 作成日/最終更新日 → このページでわかること（PageSummary）→ 目次（TableOfContents）**。`app/components/TermPageHeader.tsx` を参照。 |
| **一括スタイル** | 全用語ページ | `app/globals.css` の **`.term-page-header`** 系で一括指定。`.term-page-header`（ラッパー）、`.term-page-header__date`（日付）、`.term-page-header__summary`（このページでわかること）、`.term-page-header__toc`（目次）。スタイル変更は globals.css のみで全ページに反映。 |
| **目次のスタイル** | 全用語ページ | 目次は `.table-of-contents` / `.toc-wrapper` / `.table-of-contents-header` / `.toc-title` 等で globals.css に定義。スマホでは `max-height: 45vh`・`overflow-y: auto` で見切れ防止。全ページに自動適用。 |
| **新規・修正時のルール** | 用語ページ作成・更新時 | TermHeader・PageSummary・TableOfContents・date-info を**個別に書かない**。必ず **TermPageHeader** を 1 つ使い、`termName` / `reading` / `icon` / `dateCreated` / `dateModified` / `summaryItems`（任意）を渡す。main 内に目次・日付ブロックを置かない。 |

---

## 2. テンプレ準拠状況

**全用語ページは TermPageHeader に移行済み**（2026-01 時点）。  
日付・目次・「このページでわかること」の表示位置・スタイルはテンプレに準拠。

### 2.1 「このページでわかること」（summaryItems）について

- **TermPageHeader** の `summaryItems` を渡すと「このページでわかること」が表示される。
- `summaryItems` を省略または空配列にすると、当該ブロックは表示されない（任意）。
- 目次は TermPageHeader 内に常に 1 つ表示される。

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

- **目次**: スマホ用スタイルは globals.css で全ページ共通適用済み。特定ページだけで崩れる場合は、そのページの `main` 内の h2 数やラップ要素を確認。
- **ヘッダー・目次のスタイル変更**: 用語ページ共通の見た目は `app/globals.css` の `.term-page-header` 系・`.table-of-contents` 系を編集する。個別ページにインラインで書かない。

---

## 5. 更新履歴

- 2026-01-24: 初版作成（目次レスポンシブ・目次位置・date-info-toc／PageSummary／絵文字の一覧）
- 2026-01: テンプレを TermPageHeader 一括に更新。セクション1を「用語ページ共通テンプレ（一括スタイル）」に変更。2.1 日付ブロック・2.2 PageSummary を「全ページ TermPageHeader 準拠」に合わせて整理。
