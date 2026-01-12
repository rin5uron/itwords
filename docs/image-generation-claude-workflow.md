# Claude用 画像生成ワークフロールール

**対象**: Claude Code Agent
**目的**: ユーザーから「画像生成して」と言われた時の対応フロー
**更新日**: 2026-01-11

---

## 🎯 基本方針

ユーザーが「画像生成して」「この用語の画像作って」と言った場合、以下の手順で対応する。

---

## 📋 ステップ1: プロジェクトルールの確認

まず、以下のファイルを読み込む:
```
docs/image-generation-dalle3-rules.md
```

このファイルには:
- 画像サイズ (1792×1024px)
- キャラクター設定（茶髪の女性、20代）
- デザインルール（青系ベース、シンボル3つまで）
- 禁止事項（文字なし、複雑な要素なし）

が記載されている。これを必ず参照すること。

---

## 📋 ステップ2: 用語の理解

対象となるIT用語について:
1. **ページを読む**: `app/terms/{用語名}/page.tsx` を確認
2. **概要を把握**: その用語が何を意味するのか理解
3. **ユーザーに確認**: 不明点があれば質問

例:
- 「ゼロデイ攻撃の画像を作りたいんですね。概要は『脆弱性発見から修正までの日数がゼロの状態で行われる攻撃』ですが、この理解で合っていますか？」

---

## 📋 ステップ3: シンボルの提案

用語に適したビジュアルシンボルを**最大3つ**提案する。

### 提案フォーマット:
```
この用語のビジュアル表現として、以下のシンボルを提案します：

1. [シンボル1]: [理由]
2. [シンボル2]: [理由]
3. [シンボル3]: [理由]

配色: [ベース色] + [アクセント色]
雰囲気: [キーワード]

この内容でよろしいですか？変更があれば教えてください。
```

### 例（ゼロデイ攻撃）:
```
1. Day 0 カレンダー: 「ゼロデイ」を視覚的に表現
2. 警告アイコン（赤い三角）: 危険性を示す
3. 盾/工具: 防御と脆弱性の修正を象徴

配色: 青系ベース + 赤/オレンジ（警告）
雰囲気: 緊張感があるが教育的
```

---

## 📋 ステップ4: DALL-E 3プロンプトの生成

ユーザーの承認後、`docs/image-generation-dalle3-rules.md` のテンプレートを元にプロンプトを作成。

### 必須要素:
- **サイズ指定**: "1792x1024px"
- **キャラクター**: 茶髪の女性、20代、白/パステル服、ラップトップ操作中
- **背景**: 青系グラデーション、シンプル
- **シンボル**: 提案した3つ以内
- **禁止事項明記**: "NO text, NO letters, NO words"
- **スタイル**: "anime/manga style", "soft lighting", "professional but approachable"

### プロンプト例（ゼロデイ攻撃）:
```
Create a wide banner illustration (1792x1024px) in anime/manga style for an IT terminology educational website about "Zero-day Attack".

Main Subject:
- A young Japanese woman in her early 20s with shoulder-length brown hair
- Wearing a casual white t-shirt
- Sitting with a laptop, showing a serious but approachable expression
- Positioned on the right side of the composition, facing slightly toward the left

Background:
- Deep blue digital gradient background with subtle tech patterns
- Navy and dark blue tones suggesting cybersecurity theme
- Soft, mysterious atmosphere but not scary

Symbols/Icons (exactly 3):
1. A calendar showing "Day 0" prominently displayed in the scene
2. Red/orange warning triangular icons with exclamation marks floating in the digital space
3. A shield icon or wrench/tool symbol representing defense and vulnerability

Style:
- Soft dramatic lighting creating depth
- Clean, modern, professional but approachable
- NO text, NO letters, NO words anywhere in the image
- Simple composition, not overly complex
- Positive educational tone, not fear-mongering

Composition:
- Wide horizontal banner format
- Character on the right third
- Symbols arranged naturally on the left and center
- Plenty of breathing room, balanced layout
```

---

## 📋 ステップ5: プロンプトの提示

作成したプロンプトをユーザーに提示:

```
以下のプロンプトをDALL-E 3で使用してください：

[プロンプト全文]

---

**生成後の確認ポイント:**
- [ ] メインキャラクター（茶髪の女性）が自然に描かれている
- [ ] シンボルが3つ認識できる
- [ ] 文字化けやバグがない
- [ ] 青系の配色になっている
- [ ] 全体的に明るく、教育的な雰囲気

生成できたら、画像を `images/` ディレクトリに保存して教えてください。
ファイル名は `{用語名}-hero.png` でお願いします。
```

---

## 📋 ステップ6: 画像の実装

ユーザーが画像を生成・保存したら:

1. **画像の確認**:
   ```bash
   ls -lh images/
   ```

2. **publicディレクトリにコピー**:
   ```bash
   cp images/{用語名}-hero.png public/images/terms/{用語名}-hero.png
   ```

3. **ページファイルの更新**:
   - `app/terms/{用語名}/page.tsx` に以下を追加:
     - `import Image from 'next/image'`
     - OGPメタデータに画像追加
     - TermHeader直下にヒーロー画像コンポーネント追加

4. **実装テンプレート**:
```tsx
// メタデータに追加
openGraph: {
  images: [
    {
      url: '/images/terms/{用語名}-hero.png',
      width: 1200,
      height: 630,
      alt: '{用語の説明}',
    },
  ],
},
twitter: {
  images: ['/images/terms/{用語名}-hero.png'],
},

// TermHeaderの直後に追加
<div style={{
  width: '100%',
  maxWidth: '900px',
  margin: '2rem auto',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  maxHeight: '300px'
}}>
  <Image
    src="/images/terms/{用語名}-hero.png"
    alt="{用語の説明}"
    width={1200}
    height={630}
    priority
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block'
    }}
  />
</div>
```

5. **確認メッセージ**:
```
画像の実装が完了しました！

実装内容:
✅ 画像をpublicディレクトリに配置
✅ OGPメタデータに追加（SNSシェア対応）
✅ ページにヒーロー画像を追加（高さ300px、レスポンシブ対応）

開発サーバーで確認してください:
http://localhost:3006/terms/{用語名}

問題があれば教えてください。
```

---

## 🚨 特殊ケース対応

### ケース1: 他の人物を入れたい場合
ユーザーが「2人の人物」などを要求した場合:

```
プロジェクトルールでは、メインキャラクター（茶髪の女性）以外の人物は原則として入れないことになっています。

もし必要であれば:
- 後ろ向き/シルエット/ぼかし で存在感を消す
- 顔が見えない構図

この対応でよろしいですか？それとも別の表現方法を検討しましょうか？
```

### ケース2: 複雑な図表を入れたい場合
```
プロジェクトルールでは、DALL-E 3の制約により複雑な図表は避けることになっています。
代わりに、シンプルなアイコンやシンボルで表現することをおすすめします。

例: フローチャート → 矢印とシンプルなボックス3つまで
```

### ケース3: 文字を入れたい場合
```
プロジェクトルールでは、DALL-E 3の文字レンダリング精度の問題により、一切の文字を禁止しています。
文字なしのビジュアル表現で対応させてください。
```

---

## 📊 完了後のタスク

画像実装後、以下を確認:
- [ ] 開発サーバーで表示確認
- [ ] PC表示で高さが適切（300px）
- [ ] モバイルでも問題ないか確認を促す
- [ ] OGP画像が正しく設定されているか

---

## 🔄 反復改善

ユーザーが「もっとこうしたい」と言った場合:
1. **具体的な要望を聞く**
2. **プロジェクトルール内で対応可能か確認**
3. **新しいプロンプトを提案**
4. **再生成を促す**

---

**重要**: このワークフローに従い、常に `docs/image-generation-dalle3-rules.md` を参照すること。
