# Nanobanana 画像生成ガイド｜StudioJinsei

**作成日：2025/12/20**

StudioJinseiのビジュアル制作に特化したNanobanana使い方ガイドです。

---

## 📁 プロジェクトディレクトリ構成

```
your-project/
├── nanobanana-base/                      # ベースディレクトリ（コピー）
│   ├── brand-foundation.md
│   ├── kotone-character.md
│   └── ...
├── [用途]_prompt.txt                     # 追加プロンプト（用途がわかる名前にする）
│   ├── logo_prompt.txt                   # 例：ロゴ制作用
│   ├── kotone_prompt.txt                 # 例：コトネちゃん制作用
│   └── site_prompt.txt                   # 例：サイトビジュアル用
├── generate_[用途].py                    # 生成スクリプト（必要に応じて）
└── images/
    └── output/                           # 生成画像の保存先
```

---

## 🔄 推奨ワークフロー（二段階生成）

**重要：** 画像生成は必ず二段階で行うことを推奨します。

### Step 1: DALL-E 3で確認（無料/低コスト）

1. `sample/[用途]_dalle3.txt`ファイルを作成
2. ChatGPTにコピペして生成（ChatGPT Plusで無料）
3. デザインを確認・調整
4. 満足いくまで調整を繰り返す

**メリット：**
- ✅ 無料または低コストで確認できる
- ✅ デザインの方向性を素早く確認できる
- ✅ プロンプトの改善ポイントがわかる

### Step 2: Imagen（nanobanana）で本番生成

1. DALL-E 3で確認したデザインを基にプロンプトを作成
2. nanobanana.pyで高品質な画像を生成
3. 本番使用

**メリット：**
- ✅ 高品質な画像が得られる
- ✅ デザインが決まった状態で生成できる
- ✅ コストを最小限に抑えられる

---

## 📝 プロンプトファイルの作り方

**重要：** すべてのプロンプトは `@docs/manuals/nanobanana/nanobanana-base` を参照します。追加プロンプトファイルには用途固有の指示のみを記述してください。

### 基本テンプレート

**追加プロンプトファイル名：** 用途がわかる名前にする（例：`logo_prompt.txt`, `kotone_prompt.txt`）

```markdown
# このファイルは[用途]専用のプロンプトです
# ベースプロンプト（nanobanana-base/brand-foundation.md）は自動的に読み込まれます
# ここには[用途]固有の指示のみを記述してください

[ここに用途固有の具体的な指示を記述]
```

**プロンプトファイル名の例：**
- `logo_prompt.txt` - ロゴ制作用
- `kotone_prompt.txt` - コトネちゃん制作用
- `site_prompt.txt` - サイトビジュアル用
- `banner_prompt.txt` - バナー制作用

### ロゴ生成用追加プロンプト例

**ファイル名：** `logo_prompt.txt`

```markdown
# このファイルはロゴ専用のプロンプトです
# ベースプロンプト（nanobanana-base/brand-foundation.md）は自動的に読み込まれます
# ここにはロゴ固有の指示のみを記述してください

Professional wordmark logo for "StudioJinsei".
Text-only design, no symbols or icons.
Typography: Modern sans-serif, Poppins or similar clean font.
"Studio" in light/thin weight, "Jinsei" in medium/semibold weight.
Visual hierarchy through font weight contrast showing structure.
Color scheme: Dark teal (#1D4E4A) for main text, soft mint green (#A8D5BA) subtle accent.
Minimalist, sophisticated, professional yet approachable.
Clean letterforms with generous letter spacing.
Plenty of white space around the text, breathing room.
Avoid: decorative elements, complicated ligatures, overly stylized fonts.
Modern, trustworthy, warm aesthetic.
Scalable design, works at any size.
Vector style, high quality.
```

### コトネちゃん生成用プロンプト例

```markdown
# コトネちゃん アイコン

## 設定
- resolution: 1k
- name: kotone_icon_v1

## 参照画像
- images/studiojinsei/kotone_reference.png

## プロンプト
[StudioJinsei Brand Foundation]

---

A soft, hand-drawn style illustration of Kotone-chan.
Young Japanese woman with dark long hair.
Mint green bucket hat with subtle leaf pattern.
White elegant clothing.
Gentle, warm illustration style with soft lines.
Muted, sophisticated color palette (soft mint #A8D5BA, dark teal #1D4E4A).
Calm, professional, trustworthy expression with a gentle smile.
Minimal background, plenty of white space.
Apple-inspired clean aesthetic.
She embodies "making invisible thoughts visible" concept.
```

---

## 🚀 実行コマンド例

### ロゴを生成する

```bash
# プロジェクトディレクトリで実行
cd your-project-directory

# 追加プロンプトファイルを作成（用途がわかる名前にする）
nano logo_prompt.txt

# 生成実行
python scripts/nanobanana.py prompts/studiojinsei/logo_wordmark.md \
  -r 1k \
  --output-dir images/studiojinsei \
  --flat
```

### コトネちゃんを生成する

```bash
# 参照画像付きで生成（絵柄統一）
python scripts/nanobanana.py prompts/studiojinsei/kotone_icon.md \
  -r 1k \
  -i "images/studiojinsei/kotone_reference.png" \
  --output-dir images/studiojinsei \
  --flat
```

### サイトヘッダーを生成する

```bash
python scripts/nanobanana.py prompts/studiojinsei/site_header.md \
  -r 16:9 \
  --output-dir images/studiojinsei \
  --flat
```

---

## 💡 プロンプト作成のコツ

### 1. 必ず含めるべき要素
- `[StudioJinsei Brand Foundation]` セクション
- カラーパレット指定（#A8D5BA, #1D4E4A）
- ビジュアル方向性（Simple yet warm等）
- 避けるべきスタイル（Avoid:）

### 2. 絵柄を統一したい場合
- 必ず参照画像を指定（`-i` オプション）
- 同じスタイル指定を使う
- 既存の生成画像を参照画像にする

### 3. 高品質な出力のために
- プロンプトは具体的に
- 曖昧な表現を避ける
- 「high quality」「professional」を明記

### 4. StudioJinseiらしさを出す
- 「シンプル、でも冷たくない」を意識
- 余白・ミニマルを強調
- Apple-inspired aesthetic を含める

---

## 📐 解像度の選び方

| 用途 | 推奨解像度 | 理由 |
|------|-----------|------|
| ロゴ | 1k → 4k | 1kで確認後、最終版は4k |
| アイコン（LINE等） | 1k | 十分な品質 |
| サイトヘッダー | 16:9 | 横長レイアウト |
| SNS投稿画像 | 1k | 正方形 |
| OGP画像 | 16:9 | 1200×630相当 |
| 名刺 | 2k または 4k | 印刷品質 |

---

## 🎯 StudioJinsei用生成パターン

### パターン1：ロゴ生成
1. brand-foundation.md を確認
2. ロゴ用プロンプトファイル作成
3. 1kで複数案生成（3パターン程度）
4. 気に入ったものを4kで再生成

### パターン2：コトネちゃん生成
1. kotone-character.md を確認
2. 既存画像を参照画像に指定
3. 1kで生成
4. 必要に応じて2k/4k

### パターン3：サイトビジュアル生成
1. brand-foundation.md + kotone-character.md を確認
2. 16:9または1kで生成
3. コトネちゃんを含める場合は参照画像指定

---

## ⚠️ 注意事項

### コスト管理
- 基本は1k（約21円）
- 確定した最終版のみ4k（約85円）
- テストは必ず1kで

### 品質管理
- 生成後は必ずチェックリスト確認
- StudioJinseiのNGデザインになっていないか
- カラーパレットが正しいか

### バージョン管理
- ファイル名に連番をつける（v1, v2, ...）
- プロンプトファイルも保存しておく
- 参照画像のパスを記録

---

## 📋 生成後のチェックリスト

- [ ] カラーパレットが正しく使われているか（#A8D5BA, #1D4E4A）
- [ ] 「シンプル、でも冷たくない」が表現されているか
- [ ] 余白がたっぷりあるか
- [ ] StudioJinseiの核心コンセプトが伝わるか
- [ ] NGデザイン（キラキラ、スピリチュアル、冷たい、チープ）になっていないか
- [ ] 判断軸（構造・迷いが減る・展望がひらく）に沿っているか

---

## 💰 料金目安

### ロゴ制作の場合
```
1. 3パターン生成（1k） = 約63円
2. 最終版（4k） = 約85円
合計：約150円
```

### サイト用ビジュアル一式
```
1. ヘッダー（16:9） = 約21円
2. コトネちゃん（1k） = 約21円
3. セクション画像×3（1k） = 約63円
4. OGP画像（16:9） = 約21円
合計：約126円
```

---

## 🔗 関連資料

- [ブランド共通デザイン土台](./brand-foundation.md)
- [コトネちゃん設定](./kotone-character.md)
- [セットアップガイド](./setup-guide.md)
