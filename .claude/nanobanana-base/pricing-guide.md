# 料金ガイド｜Nanobanana Base

**作成日：2025/12/20**

Nanobanana（Google Gemini API）の料金とコスト管理についてのガイドです。

---

## 💰 料金目安

### モデル選択
| モデル | 特徴 | 料金（1k） | 用途 |
|--------|------|----------|------|
| **Gemini 3 Pro Image** | 高品質 | 約21-30円 | ロゴ、メインビジュアル |
| Gemini 2.5 Flash Image | 高速・低コスト | 約6円 | テスト、確認用 |

### 制作例
**ロゴ制作：**
- 3パターン（1k） = 約63円
- 最終版（4k） = 約85円
- **合計：約150円**

**サイトビジュアル一式：**
- ヘッダー + コトネちゃん + セクション画像×3 + OGP画像
- **合計：約126円**

---

## 💳 API代金の確認方法と注意点

### ⚠️ 支払い設定前の確認

**Gemini APIを使うには、Google Cloud Platformで支払い設定（billing）が必要です。**

#### 1. 支払い設定の手順
1. [Google Cloud Console](https://console.cloud.google.com/billing) にアクセス
2. 「請求先アカウントを作成」をクリック
3. クレジットカード情報を登録
4. [Gemini API](https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com) を有効化

#### 2. 無料枠について
- **月間無料枠**: 毎月一定量まで無料
- 詳細は [Google AI Studio 料金ページ](https://ai.google.dev/pricing) を確認

---

### 📊 API使用量の確認方法

#### 方法1：Google Cloud Consoleで確認（推奨）

```
1. https://console.cloud.google.com/billing にアクセス
2. 左メニュー「請求」→「レポート」
3. 「サービス」で「Generative Language API」を選択
4. 使用量と料金を確認
```

#### 方法2：リアルタイムモニタリング

```
1. https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/metrics にアクセス
2. リクエスト数とエラー率をモニタリング
```

---

### 🚨 支払いでびっくりしないための注意点

#### 1. 予算アラートを設定（必須）

```
手順：
1. https://console.cloud.google.com/billing にアクセス
2. 左メニュー「予算とアラート」
3. 「予算を作成」をクリック
4. 予算額を設定（例：月1,000円）
5. アラートのしきい値を設定（例：50%, 80%, 100%）
6. メール通知を有効化
```

**推奨設定例：**
- 予算額：月1,000円〜3,000円
- アラート：50%（500円）、80%（800円）、100%（1,000円）

#### 2. コスト管理のベストプラクティス

**テストは低解像度で：**
```python
# ❌ 最初から高解像度
model.generate_content("4K image...")  # 約85円

# ✅ まず低解像度でテスト
model.generate_content("1K image...")  # 約21円
# 気に入ったら高解像度で再生成
```

**プロンプトを保存：**
```python
# 同じプロンプトで何度も生成しない
# プロンプトファイルを保存してバージョン管理
```

**生成回数を記録：**
```python
# スクリプトに生成回数カウンターを追加
count = 0
for prompt in prompts:
    count += 1
    print(f"生成 {count} 枚目: 推定{count * 21}円")
    model.generate_content(prompt)
```

#### 3. 想定外の課金を防ぐチェックリスト

- [ ] Google Cloud Platformで予算アラートを設定した
- [ ] メール通知を有効にした
- [ ] 毎週金曜日に使用量を確認する習慣をつけた
- [ ] テストは必ず低解像度（1k）で行う
- [ ] 本番生成前に枚数と料金を計算する
- [ ] API使用量ダッシュボードをブックマークした

#### 4. 月間コスト予測

**StudioJinseiの想定使用量（月間）：**

| 用途 | 枚数/月 | 単価 | 月額 |
|------|---------|------|------|
| ロゴテスト | 10枚 | 21円 | 210円 |
| ロゴ最終版 | 2枚 | 85円 | 170円 |
| コトネちゃん | 5枚 | 21円 | 105円 |
| サイト画像 | 10枚 | 21円 | 210円 |
| **合計** | **27枚** | - | **約695円** |

**安全マージンを含めた推奨予算：月1,500円〜2,000円**

---

### 📱 Google AI Studio（無料・無制限）の活用

**支払い設定前、または予算を使いたくない場合：**

1. [Google AI Studio](https://aistudio.google.com/) にアクセス
2. プロンプトを貼り付けて生成
3. 生成画像をダウンロード

**メリット：**
- 完全無料（透かし入りの場合あり）
- 支払い設定不要
- クレジットカード登録不要

**デメリット：**
- 手動操作が必要
- 1日の生成枚数に制限あり
- スクリプト化できない

---

### 🔗 参考リンク

- [Google Cloud Billing Console](https://console.cloud.google.com/billing)
- [Gemini API Pricing](https://ai.google.dev/pricing)
- [Google AI Studio](https://aistudio.google.com/)
- [API使用量ダッシュボード](https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/metrics)

---

**最終更新：2025/12/20**

