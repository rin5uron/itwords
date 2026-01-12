# Nanobanana セットアップガイド

**作成日：2025/12/20**

StudioJinseiでNanobanana（Google Gemini API）を使用して画像生成するためのセットアップガイドです。

---

## 📋 利用モデル

| モデル名 | API名 | 特徴 | 料金目安 |
|---------|-------|------|----------|
| **Imagen 4.0** | imagen-4.0-generate-001 | 高品質・安定版 | 約3-10円/枚 |
| Imagen 4.0 Ultra | imagen-4.0-ultra-generate-001 | 最高品質 | 約10-30円/枚 |
| Imagen 4.0 Fast | imagen-4.0-fast-generate-001 | 高速・低コスト | 約1-3円/枚 |
| Gemini 2.5 Flash Image | gemini-2.5-flash-image | テキスト+画像 | 約6円/枚 |

**推奨：** StudioJinseiのロゴやメインビジュアルは **Imagen 4.0** (`imagen-4.0-generate-001`) を使用

**重要：** Gemini 2.0 Flash (`gemini-2.0-flash-exp`) はテキスト生成専用で、画像生成には使用できません。

---

## 🔧 前提条件

### 必須
- Google API Key（`GOOGLE_API_KEY`）- Imagen APIが有効なキー
- opening-preparationリポジトリ
- Python 3.x
- google-genai パッケージ（新しいSDK、`google-generativeai`は非推奨）

### 環境変数
- `GOOGLE_API_KEY`: あなたのGoogle API Key

---

## ⚙️ セットアップ手順

### 1. opening-preparationリポジトリをクローン（初回のみ）

**GitHubリポジトリURL：** `https://github.com/StudioJinsei/opening-preparation`

```bash
cd ~/Desktop
git clone https://github.com/StudioJinsei/opening-preparation opening-preparation
```

**既にクローン済みの場合はスキップ**


### 2. nanobanana-baseディレクトリに移動

```bash
cd ~/Desktop/StudioJinsei/opening-preparation/manuals/nanobanana/nanobanana-base
```

**重要：** このディレクトリは `manuals/nanobanana/nanobanana-base/` にあります。

このディレクトリには以下が含まれています：
- `brand-foundation.md` - ブランド共通デザイン土台
- `kotone-character.md` - コトネちゃん設定
- `SKILL.md` - 画像生成スキル
- `setup-guide.md` - このファイル
- `usage-guide.md` - 使い方ガイド
- `README.md` - 概要
- `images/reference/` - 参照画像（コトネちゃんのプロフィール画像等）

### 3. Claudeスキルに参照画像を配置（推奨）

新しいリポジトリでClaudeスキルを使用する場合、参照画像をスキルディレクトリに配置します。

#### 3-1. スキルディレクトリを作成

```bash
# リポジトリのルートで実行
mkdir -p .claude/skills/kotone-business/images
mkdir -p .claude/skills/kotone-character/images
mkdir -p .claude/skills/kotone-personal/images
```

#### 3-2. 参照画像をコピー

```bash
# nanobanana-baseから参照画像をコピー
cp ~/Desktop/StudioJinsei/opening-preparation/manuals/nanobanana/nanobanana-base/images/reference/* .claude/skills/kotone-business/images/
cp ~/Desktop/StudioJinsei/opening-preparation/manuals/nanobanana/nanobanana-base/images/reference/* .claude/skills/kotone-character/images/
cp ~/Desktop/StudioJinsei/opening-preparation/manuals/nanobanana/nanobanana-base/images/reference/* .claude/skills/kotone-personal/images/
```

これで、各スキルから `images/line-profile.jpg` や `images/officialprofile.PNG` を参照できるようになります。

**注意：** スキルファイル（`SKILL.md`）内で参照画像のパスを `images/line-profile.jpg` のように相対パスで指定してください。

### 3-2. Claudeスキルにnanobananaを設定（推奨）

他のリポジトリでClaudeスキルとしてnanobananaを使用する場合：

```bash
# スキルディレクトリを作成
mkdir -p .claude/skills/nanobanana

# nanobanana-baseの内容をコピー
# 方法1：このリポジトリからコピー（既にクローン済みの場合）
cp -r ~/Desktop/StudioJinsei/opening-preparation/manuals/nanobanana/nanobanana-base/* .claude/skills/nanobanana/

# 方法2：リポジトリをクローンして取得
git clone https://github.com/StudioJinsei/opening-preparation temp
cp -r temp/manuals/nanobanana/nanobanana-base/* .claude/skills/nanobanana/
rm -rf temp

# SKILL.mdのnameを確認・修正
nano .claude/skills/nanobanana/SKILL.md
# メタデータ部分で name: nanobanana になっていることを確認
```

**設定確認：**
- `.claude/skills/nanobanana/SKILL.md` のメタデータで `name: nanobanana` になっているか
- すべてのファイル（brand-foundation.md, kotone-character.md等）がコピーされているか

**使い方：**
Claude Codeで `@nanobanana` とメンションすると、このスキルが使用できます。

### 4. 環境変数を設定

#### 推奨：.envファイルを使用（プロジェクト単位）

プロジェクトごとに異なるAPIキーを使う場合や、APIキーを安全に管理したい場合は.envファイルを使用します。

```bash
# nanobanana-baseディレクトリに.envファイルを作成
cd nanobanana-base
nano .env
```

`.env`ファイルの内容：
```
GOOGLE_API_KEY=your-api-key-here
```

**メリット：**
- ✅ プロジェクトごとにAPIキーを管理できる
- ✅ .gitignoreで除外すれば安全（APIキーをGitにコミットしない）
- ✅ スクリプトが自動的に読み込む（手動でexportする必要なし）

**注意：**
- `.env`ファイルは`.gitignore`に追加してください
- APIキーは絶対にGitにコミットしないこと

#### 方法2：グローバル環境変数（全プロジェクト共通）

すべてのプロジェクトで同じAPIキーを使う場合：

```bash
# ~/.zshrc を編集
nano ~/.zshrc

# 以下を追加
export GOOGLE_API_KEY="your-api-key-here"

# 設定を反映
source ~/.zshrc
```

#### 確認
```bash
echo $GOOGLE_API_KEY
```

### 5. Python仮想環境を作成（推奨）

プロジェクトごとに独立したPython環境を作成します。

```bash
# プロジェクトルートで仮想環境を作成
python3 -m venv venv

# 仮想環境を有効化
source venv/bin/activate

# パッケージをインストール
pip install google-genai
```

**重要：** 新しいSDKは`google-genai`です（`google-generativeai`は非推奨）。

#### グローバルインストール（非推奨）

システム全体にインストールする場合：

```bash
pip3 install google-genai
```

**注意：** macOSの場合、`--break-system-packages`フラグが必要な場合があります。仮想環境の使用を推奨します。

---

## 🚀 基本的な使い方

### 方法1：Pythonスクリプトで生成（推奨）

後述の「画像生成スクリプト例」を参照して、Pythonスクリプトを作成します。

### 方法2：Google AI Studioで生成（手動）

1. [Google AI Studio](https://aistudio.google.com/) にアクセス
2. プロンプトを入力して生成
3. 生成画像をダウンロード

**推奨：** スクリプトを使った方が効率的

---

## 💻 画像生成スクリプト例

### 基本的なスクリプト

`generate_image.py` を作成：

```python
from google import genai
import os
from pathlib import Path

# .envファイルから環境変数を読み込む（オプション）
env_file = Path("nanobanana-base/.env")
if env_file.exists():
    with open(env_file) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                key, value = line.split('=', 1)
                os.environ[key] = value

# API設定
api_key = os.environ.get("GOOGLE_API_KEY")
if not api_key:
    print("エラー: GOOGLE_API_KEY が設定されていません")
    exit(1)

# Imagen Client
client = genai.Client(api_key=api_key)

# プロンプトを読み込む
with open("prompt.txt", "r") as f:
    prompt = f.read()

# 画像生成
print("画像生成中...")
response = client.models.generate_images(
    model="imagen-4.0-generate-001",
    prompt=prompt,
    config={"number_of_images": 1, "aspect_ratio": "1:1"}
)

# 保存
output_path = Path("output.png")
if response and hasattr(response, 'generated_images') and response.generated_images:
    image = response.generated_images[0].image
    output_path.write_bytes(image.image_bytes)
    print(f"画像を保存しました: {output_path}")
else:
    print("画像生成に失敗しました")
```

### 使い方

```bash
# 仮想環境を有効化
source venv/bin/activate

# プロンプトファイルを作成
nano prompt.txt

# スクリプト実行
python3 generate_image.py
```

**詳細は [SKILL.md](./SKILL.md) を参照**

---

## 🔍 トラブルシューティング

### GOOGLE_API_KEY エラー
```bash
# 環境変数を確認
echo $GOOGLE_API_KEY

# 設定されていない場合
export GOOGLE_API_KEY="AIzaSyBs2FQS6FYWwx9LKQdyywkBFTEXt5tK9Z8"
```

### 画像生成失敗
- プロンプトが長すぎる場合は短くする
- 参照画像が多すぎる場合は減らす（最大14枚）
- APIレート制限の場合は少し待つ

### 絵柄が安定しない
- プロンプトにスタイル指定を詳細に含める
- 同じプロンプト基盤（[StudioJinsei Brand Foundation]）を使う

---

## 📊 API料金目安

| 解像度相当 | 1枚あたりの料金 |
|----------|----------------|
| 1K (1024x1024) | 約21円 |
| 2K (2048x2048) | 約42円 |
| 4K (4096x4096) | 約85円 |

**StudioJinseiのロゴ生成例：**
- ロゴ案3パターン = 約63円
- 気に入ったロゴを高解像度で再生成 = 約85円
- **合計：約150円**

---

## 📝 変更管理の流れ（プロジェクト → 大元）

### 役割分担

| 担当 | 作業 |
|-----|------|
| **AI** | プロジェクト内のnanobanana-baseを編集 + CHANGELOG.md更新 |
| **あなた** | 確認 → 手動で大元に差し替え → コミット |

### Step 1: AIがプロジェクト内で編集

1. プロジェクトで nanobanana-base を改善
2. CHANGELOG.md に変更内容を記録

### Step 2: あなたが手動で大元に差し替え

```bash
# 大元を差し替え
rm -rf ~/Desktop/StudioJinsei/opening-preparation/manuals/nanobanana/nanobanana-base
cp -r ~/Desktop/StudioJinsei/[プロジェクト]/nanobanana-base ~/Desktop/StudioJinsei/opening-preparation/manuals/nanobanana/

# 大元でコミット
cd ~/Desktop/StudioJinsei/opening-preparation
git add manuals/nanobanana/nanobanana-base/
git commit -m "feat(nanobanana): v[日付] - [変更内容]"
git push
```

---

### CHANGELOG.mdの記録について

**重要:** すべての変更は `CHANGELOG.md` に記録してください。

**場所:** プロジェクトルートの `CHANGELOG.md`（例：`brand/logo/CHANGELOG.md`）

**注意：** CHANGELOG.mdはプロジェクト固有のファイルなので、プロジェクトルートに配置します。`nanobanana-base/` 内ではありません。

---

## 📝 CHANGELOG.mdの作成方法

### 基本的な流れ

1. **AIが変更を記録** - プロジェクト内で編集 + CHANGELOG.md に追記
2. **あなたが確認** - 変更内容を確認
3. **あなたが手動で差し替え＆コミット** - 上記コマンドを実行

### CHANGELOG.mdのテンプレート

プロジェクトルートに `CHANGELOG.md` がない場合は、以下のテンプレートで作成してください：

```markdown
# Nanobanana 変更履歴・改善記録

**プロジェクト:** [プロジェクト名]
**作成者:** [あなたの名前]
**最終更新:** [日付]

---

## 📅 [日付] - [変更内容のタイトル]

### 変更理由
[なぜ変更したか]

### 変更ファイル
- `ファイル名` - [変更内容]
```

### 記録例

```markdown
## 📅 2025/12/22 - API修正（Imagen 4.1対応）

### 変更理由
新しいImagen 4.1モデルに対応するため

### 変更ファイル
- `nanobanana.py` - `generate_image`関数を修正
```

### 変更履歴ファイルのメリット

- ✅ 変更理由が明確に記録される
- ✅ バージョン管理しやすい
- ✅ 将来の参考資料になる
- ✅ AIが自動で処理できる

---

## 🔗 関連リンク

- [ブランド共通デザイン土台](./brand-foundation.md)
- [コトネちゃん設定](./kotone-character.md)
- [使い方ガイド](./usage-guide.md)
- [SKILL.md](./SKILL.md)
- [README](./README.md)
