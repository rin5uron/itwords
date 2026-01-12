# DALL-E 3 画像生成プロジェクトルール

**対象**: itwords プロジェクト用語解説ページのヒーロー画像
**ツール**: DALL-E 3
**更新日**: 2026-01-11

---

## 📐 技術仕様

### 画像サイズ
- **必須サイズ**: 1792×1024px (DALL-E 3の横長フォーマット)
- **目標比率**: 約1.75:1（横長バナー形式）
- **出力後**: 1800×500px にリサイズして使用
- **理由**: Retinaディスプレイ対応、レスポンシブ最適化

### ファイル形式
- **形式**: PNG
- **命名規則**: `{用語名}-hero.png`（例: `zero-day-hero.png`, `aes-hero.png`）

---

## 🎨 デザイン統一ルール

### キャラクター設定
**メインキャラクター（必須）:**
- 日本人女性、20代前半
- 茶色のショートヘア（肩くらいの長さ）
- 親しみやすい笑顔または真剣な表情
- 服装: 白またはパステルカラーのカジュアルな服（Tシャツ、ブラウス）
- ポーズ: ノートPC/タブレット操作中、正面または斜め向き
- アニメ/イラスト調のスタイル

**その他の人物（制限付き）:**
- 原則として入れない
- どうしても必要な場合:
  - 後ろ向き、または顔が見えない構図
  - 存在感を消す（シルエット、ぼかし等）
  - **事前に確認を仰ぐこと**

### 配色ルール
- **ベース**: 青系（ネイビー、スカイブルー、紺色）
  - セキュリティ、技術、信頼性を連想
- **アクセント**: 用語の性質に応じて変更可
  - セキュリティ系: 赤/オレンジ（警告）、緑（安全）
  - 暗号化系: 金/黄（鍵）、青（ロック）
  - データ系: 紫、緑
- **背景**: デジタルなグラデーション、またはぼかし
  - 複雑な背景は避ける
  - 明度差を確保（文字やアイコンが埋もれない）

### ライティング
- 柔らかい自然光
- 影は控えめ
- 全体的に明るく、ポジティブな印象

---

## 🚫 禁止事項

### 文字・テキスト
- **一切入れない**
  - DALL-E 3は文字のレンダリングが不正確
  - 文字化け、スペルミスが発生
  - 例外なし

### 複雑な要素
- 小さすぎるアイコン（潰れる）
- 細かいコード画面（読めない）
- 複雑な図表（簡略化すること）
- 実在ブランドのロゴ（著作権）

### 人物表現
- 複数の顔が見える人物（メインキャラ以外）
- 実在人物の模倣
- 不適切な表現

---

## ✅ コンテンツ品質ルール

### シンボルの数
- **最大3つまで**
  - 例: ゼロデイ攻撃 → ①Day 0カレンダー ②警告マーク ③盾/鍵
  - それ以上は煩雑になる

### 抽象度
- **初心者向け**: わかりやすいメタファーを使用
  - ○: 鍵=暗号化、盾=防御、南京錠=セキュリティ
  - ×: 抽象的すぎるシンボル、専門家向けの表現

### トーン&マナー
- 親しみやすく、教育的
- プロフェッショナルだが堅苦しくない
- ポジティブな印象（恐怖を煽らない）

---

## 📝 プロンプト作成テンプレート

```
Create a wide banner illustration (1792x1024px) in anime/manga style for an IT terminology educational website.

**Main Subject:**
- A young Japanese woman in her early 20s with shoulder-length brown hair
- Wearing a casual white/pastel t-shirt
- Sitting with a laptop, friendly smile
- Positioned on the left or center of the composition

**Background:**
- Soft gradient background with digital/tech theme
- Blue tones (navy, sky blue)
- Subtle tech patterns or soft blur

**Symbols/Icons (max 3):**
[用語に応じた具体的なシンボルを記載]
- Example: For "Zero-day Attack" → Calendar showing "Day 0", warning icons, shield icon

**Style:**
- Soft lighting, positive atmosphere
- Clean, modern, professional but approachable
- NO text, NO letters, NO words anywhere in the image
- Simple, not overly complex

**Composition:**
- Wide horizontal banner format
- Main character on left/center
- Symbols/icons arranged naturally in the scene
- Plenty of breathing room, not cluttered
```

---

## 🔄 ワークフロー

1. **用語の理解**: まず用語の意味を把握
2. **シンボル選定**: 3つ以内のわかりやすいシンボルを決定
3. **プロンプト作成**: 上記テンプレートを使用
4. **生成**: DALL-E 3で生成（4バリエーション確認）
5. **選定**: ベストな画像を選択
6. **リサイズ**: 1800×500px にリサイズ
7. **確認**: Claudeに実装を依頼する前に、画像を確認

---

## 📋 チェックリスト

生成前に確認:
- [ ] サイズは1792×1024px指定？
- [ ] メインキャラクター（茶髪の女性）が含まれている？
- [ ] 他の人物の顔は見えない？（または存在しない）
- [ ] シンボルは3つ以内？
- [ ] 文字・テキストを入れないよう指定した？
- [ ] 背景はシンプル？
- [ ] 配色は青系ベース？

生成後に確認:
- [ ] 文字化けやバグった要素がない？
- [ ] メインキャラの顔や服装が自然？
- [ ] シンボルが認識可能？
- [ ] 全体的に明るく、ポジティブな印象？
- [ ] 用語のイメージと合致している？

---

## 🎯 用語別プロンプト例

### ゼロデイ攻撃 (Zero-day Attack)
**シンボル**: Day 0カレンダー、警告アイコン、盾/工具
**配色**: 青ベース + 赤/オレンジ（警告）
**雰囲気**: 緊張感があるが恐怖を煽らない

### AES (暗号化)
**シンボル**: 鍵、南京錠、暗号化されたメッセージ（封筒に鍵マーク）
**配色**: 青ベース + 金/黄色（鍵）
**雰囲気**: 安全、信頼、プライバシー保護

---

**重要**: このルールは厳守すること。不明点があればClaudeに確認してください。
