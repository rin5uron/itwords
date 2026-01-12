#!/usr/bin/env python3
"""
StudioJinsei Nanobanana画像生成ツール
nanobanana-baseガイドに従った画像生成スクリプト
"""

import argparse
import os
import sys
from pathlib import Path
from datetime import datetime
from google import genai

def load_brand_foundation(base_dir=None):
    """ブランド基盤プロンプトを読み込む"""
    # スクリプトのディレクトリを基準にする
    if base_dir is None:
        script_dir = Path(__file__).parent
        base_file = script_dir / "brand-foundation.md"
    else:
        base_file = Path(base_dir) / "brand-foundation.md"

    if not base_file.exists():
        print(f"⚠️  警告: {base_file} が見つかりません")
        print(f"⚠️  フォールバックプロンプトを使用します")
        return get_fallback_brand_foundation()

    with open(base_file, "r", encoding="utf-8") as f:
        content = f.read()

    # 共通プロンプト基盤を抽出
    start_marker = "## 🔑 Nanobanana用 共通プロンプト基盤"
    if start_marker in content:
        start_idx = content.find(start_marker)
        section_content = content[start_idx:]
        code_start = section_content.find("```")
        if code_start != -1:
            code_end = section_content.find("```", code_start + 3)
            if code_end != -1:
                return section_content[code_start + 3:code_end].strip()

    # フォールバック
    return get_fallback_brand_foundation()

def get_fallback_brand_foundation():
    """フォールバック用のブランド基盤プロンプト"""
    return """[StudioJinsei Brand Foundation]

Concept: "Making invisible thoughts visible and tangible"

Visual direction:
- Simple yet warm (not cold)
- Organized yet approachable (not rigid)
- Sophisticated yet friendly (not intimidating)
- Professional yet personal (not distant)

Color palette: Soft mint green (#A8D5BA), dark teal (#1D4E4A), pale mint (#E8F5EE), white (#FFFFFF).
Main: soft mint green (#A8D5BA), accent: dark teal (#1D4E4A).

Typography: Modern sans-serif, Poppins or similar clean font style.

Design style:
- Minimalist, Apple-inspired clean aesthetic
- Plenty of white space, generous breathing room
- Simple, uncluttered, focused layout
- High quality, attention to detail

Avoid:
- Flashy, overly colorful, hyper-energetic styles
- Spiritual, abstract, mystical vibes
- Cold, corporate, distant aesthetics
- Cheap, low-quality appearance"""

def load_custom_prompt(prompt_file):
    """カスタムプロンプトファイルを読み込む"""
    if not Path(prompt_file).exists():
        print(f"❌ エラー: プロンプトファイル {prompt_file} が見つかりません")
        sys.exit(1)

    with open(prompt_file, "r", encoding="utf-8") as f:
        return f.read()

def generate_image(api_key, prompt, model="imagen-4.0-generate-001", reference_images=None):
    """画像を生成"""
    try:
        client = genai.Client(api_key=api_key)

        config = {
            "number_of_images": 1,
            "aspect_ratio": "4:3"
        }

        response = client.models.generate_images(
            model=model,
            prompt=prompt,
            config=config
        )
        return response
    except Exception as e:
        print(f"❌ 生成エラー: {e}")
        import traceback
        traceback.print_exc()
        return None

def save_image(response, output_dir, name):
    """画像を保存"""
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{name}_{timestamp}.png"
    filepath = output_path / filename

    # For new google-genai response
    if response and hasattr(response, 'generated_images'):
        try:
            # Get the first generated image
            image = response.generated_images[0]
            # Write image bytes directly
            filepath.write_bytes(image.image.image_bytes)
            return filepath
        except Exception as e:
            print(f"❌ 画像保存エラー: {e}")
            print(f"🔍 Response type: {type(response)}")
            print(f"🔍 Response: {response}")
            import traceback
            traceback.print_exc()
    return None

def main():
    parser = argparse.ArgumentParser(
        description='StudioJinsei Nanobanana画像生成ツール'
    )
    parser.add_argument(
        'prompt_file',
        help='プロンプトファイル (例: logo_prompt.txt)'
    )
    parser.add_argument(
        '-n', '--name',
        default='image',
        help='出力ファイル名'
    )
    parser.add_argument(
        '-o', '--output-dir',
        default='images/output',
        help='出力ディレクトリ'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='プロンプト確認のみ（生成しない）'
    )
    parser.add_argument(
        '-r', '--reference',
        action='store_true',
        help='コトネちゃん参考画像を使用'
    )

    args = parser.parse_args()

    # APIキー確認
    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("❌ エラー: GOOGLE_API_KEY 環境変数が設定されていません")
        print("以下のコマンドで設定してください:")
        print('export GOOGLE_API_KEY="your-api-key"')
        sys.exit(1)

    print("📋 StudioJinsei Nanobanana画像生成")
    print("=" * 60)

    # プロンプト読み込み
    print("📝 プロンプト読み込み中...")
    base_prompt = load_brand_foundation()
    print("  ✅ ブランド基盤プロンプト読み込み完了")

    custom_prompt = load_custom_prompt(args.prompt_file)
    print(f"  ✅ カスタムプロンプト読み込み完了: {args.prompt_file}")

    # プロンプト結合
    full_prompt = base_prompt + "\n\n---\n\n" + custom_prompt

    print(f"\n📊 プロンプト情報:")
    print(f"  - 全体の長さ: {len(full_prompt)} 文字")
    print(f"  - 出力先: {args.output_dir}/{args.name}_*.png")

    if args.dry_run:
        print("\n🔍 ドライラン: プロンプト内容（先頭500文字）")
        print("=" * 60)
        print(full_prompt[:500] + "...")
        print("=" * 60)
        print("\n✅ ドライラン完了（画像は生成されませんでした）")
        return

    # 参考画像の読み込み
    reference_images = None
    if args.reference:
        script_dir = Path(__file__).parent
        ref_dir = script_dir / "images" / "reference"
        if ref_dir.exists():
            print("\n📸 コトネちゃん参考画像を読み込み中...")
            # line-profile.jpgを参考画像として使用
            ref_image_path = ref_dir / "line-profile.jpg"
            if ref_image_path.exists():
                with open(ref_image_path, "rb") as f:
                    import base64
                    image_data = base64.b64encode(f.read()).decode('utf-8')
                    reference_images = [{"image_data": image_data}]
                    print(f"  ✅ 参考画像読み込み完了: {ref_image_path.name}")
            else:
                print(f"  ⚠️  参考画像が見つかりません: {ref_image_path}")

    # 画像生成
    print("\n🎨 画像生成中...")
    response = generate_image(api_key, full_prompt, reference_images=reference_images)

    if not response:
        print("❌ 画像生成に失敗しました")
        sys.exit(1)

    # 保存
    print("💾 画像保存中...")
    filepath = save_image(response, args.output_dir, args.name)

    if filepath:
        print(f"\n✅ 完了！")
        print(f"📁 保存先: {filepath.absolute()}")
        print(f"📏 ファイルサイズ: {filepath.stat().st_size / 1024:.1f} KB")
    else:
        print("❌ 画像保存に失敗しました")
        sys.exit(1)

if __name__ == "__main__":
    main()
