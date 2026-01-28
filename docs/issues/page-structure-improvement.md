# [改善] 用語ページの構造改善とデモ配置ルールの確立

## 目的

文字が多いイメージを避け、ユーザーが「理解できた感覚」を得られるように、ページ構造とデモ配置のルールを確立する。

## 基本方針

### ページ構造の原則
1. **概要**（必須・最初）
2. **デモ**（概要の直後、文字が多いイメージを避けるため）
3. **詳細説明**（ページごとにカスタマイズ可）
4. **FAQ**（任意）
5. **関連用語**（必須・最後）

### デモ配置ルール
- **基本デモ**: 概要の直後に配置（推奨）
  - 目的: 文字が多いイメージを避ける
  - 内容: シンプルで「理解できた感覚」が残るもの
  
- **詳細デモ**: 必要に応じて詳細説明セクションに配置（オプション）
  - 目的: より深い理解のため
  - 内容: より詳細な機能や応用例

## 改善対象ページ

各ページを個別にレビューし、以下の基準で改善：

### チェックリスト
- [ ] 概要の直後にデモがあるか（推奨）
- [ ] デモがシンプルで「理解できた感覚」が得られるか
- [ ] 文字が多いイメージになっていないか
- [ ] デモの説明が分かりやすいか

### 改善例

#### 良い例（JSONページ）
```
1. 概要
2. デモ（概要の直後）← これが重要
3. JSONとCSVの比較
4. 日常生活でのJSONの例
5. FAQ
6. 関連用語
```

#### 改善が必要な例
```
1. 概要
2. 詳細説明（文字が多い）
3. デモ（後半）
4. 関連用語
```

## 実装方法

### 1. テンプレートの更新
- `docs/templates/page-template.tsx`にデモ配置ルールを明記済み
- コメントで「概要の直後にデモを配置」と記載
- **具体的な場所**: 
  - 304-312行目: 【補助デモ】概要の下に配置（任意）のコメント
  - 428-467行目: 【セクション3】体験デモ（任意）のコメント
  - 「文字が多いイメージを避けるため、概要の直後に配置するのが効果的」と明記

### 2. 既存ページの改善
- 各ページをレビュー
- デモが後半にある場合は、概要の直後に移動を検討
- デモがない場合は、シンプルなデモを作成・追加を検討

**現在の状況（2026-01-24時点）**:

#### ✅ デモが概要の直後に配置されているページ（良い例）
- `app/terms/json/page.tsx` - JsonDemoが概要の直後
- `app/terms/html/page.tsx` - HTMLDemoが概要の直後
- `app/terms/javascript/page.tsx` - JavaScriptDemoが概要の直後
- `app/terms/css/page.tsx` - CSSStepByStepDemoが概要の直後
- `app/terms/queue/page.tsx` - QueueDemoが概要の直後
- `app/terms/stack/page.tsx` - StackDemoが概要の直後
- `app/terms/http/page.tsx` - HTTPDemoが概要の直後
- `app/terms/api/page.tsx` - APIDemoが概要の直後
- `app/terms/localstorage/page.tsx` - LocalStorageDemoが概要の直後
- `app/terms/github/page.tsx` - GitHubDemoが概要の直後（ただし、Octocatセクションの後）

#### ⚠️ デモが後半にあるページ（改善検討）
- `app/terms/github/page.tsx` - GitHubDemoが「GitとGitHubの違い」セクションの後（概要の直後ではない）

#### ❌ デモがないページ（デモ追加を検討）
- `app/terms/smtp/page.tsx` - デモなし（2026-01-24作成）
- `app/terms/ip-address/page.tsx` - デモなし
- `app/terms/domain/page.tsx` - デモなし
- `app/terms/dns/page.tsx` - デモなし
- `app/terms/server/page.tsx` - デモなし
- `app/terms/framework/page.tsx` - デモなし
- `app/terms/cookie/page.tsx` - CookieDemoコンポーネントはあるが、ページに配置されていない可能性
- `app/terms/vercel/page.tsx` - VercelDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/npm/page.tsx` - NpmDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/webhook/page.tsx` - WebhookDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/foolproof/page.tsx` - FoolProofDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/validation/page.tsx` - ValidationDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/sql/page.tsx` - デモなし
- `app/terms/aes/page.tsx` - AESDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/zero-day/page.tsx` - ZeroDayDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/exploit/page.tsx` - ExploitDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/white-hat-hacker/page.tsx` - WhiteHatDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/cve/page.tsx` - CVEDemoコンポーネントはあるが、配置位置を確認が必要
- `app/terms/ssl-tls/page.tsx` - デモなし
- `app/terms/bootstrap/page.tsx` - デモなし
- `app/terms/poka-yoke/page.tsx` - デモなし
- `app/terms/repository/page.tsx` - デモなし
- `app/terms/cli-gui/page.tsx` - デモなし
- `app/terms/hosting-service/page.tsx` - デモなし
- `app/terms/https/page.tsx` - デモなし

**デモ追加の優先順位**:
1. **高優先度**: SMTP、IPアドレスとポート番号（新規作成したページ）
2. **中優先度**: DNS、ドメイン、サーバー（インフラ系で理解しやすいデモが作れそう）
3. **低優先度**: 概念系（フールプルーフ、ポカヨケなど、デモが難しい可能性）

### 3. 新規ページ作成時のルール
- テンプレートに従い、概要の直後にデモを配置
- デモは「理解できた感覚」が残るシンプルなもの

## 完了条件

- [ ] テンプレートにデモ配置ルールが明記されている（完了）
- [ ] 主要ページ（10ページ以上）でデモが概要の直後に配置されている
- [ ] デモがシンプルで「理解できた感覚」が得られる内容になっている
- [ ] 文字が多いイメージのページが減っている

## 参考

- 改善済みページ例: `app/terms/json/page.tsx`
- デモコンポーネント例: `components/JsonDemo.tsx`, `components/ApiDemo.tsx`
