# 用語名
読み方: よみかた
アイコン: fas fa-example-icon

## 概要
用語の説明文をここに記載する。**重要な部分は太字**で強調できる。
初心者でも理解できるよう、簡潔で分かりやすい表現を心がける。

## ポイント
- 重要なポイント1
- 重要なポイント2  
- 重要なポイント3

## 体験デモ
### デモタイトル
デモの説明文をここに記載します。どんな体験ができるかを説明します。

### ボタンテキスト
実行ボタン

### デモ処理名
startDemo

## コード例
### 言語
JavaScript

### 説明
コードの説明文を記載します。サンプルコードで何を学べるかを説明します。

### サンプルコード
```javascript
function startDemo() {
  // ここにサンプルコードを記載
  console.log("デモ実行");
}
```

### JavaScript処理
```javascript
function startDemo() {
  const msg = document.getElementById('demo-message');
  msg.textContent = 'デモが実行されました！';
}
```

## 関連用語
### 関連する用語名
関連用語との関係性や違いを説明する。

---

# 記入例（フールプルーフの場合）

# フールプルーフ  
読み方: ふーるぷるーふ  
アイコン: fas fa-shield-alt

## 概要
**利用者の操作ミスや予期せぬ使い方をしても、システムに重大な影響が出ないように設計する**考え方。<br>
英語の「fool-proof（愚か者にも耐える）」が語源で、誰が使っても安全な仕組みを目指すもの。

## ポイント
- 利用者のミスを未然に防ぐための設計思想
- 危険な操作の前には警告や確認を複数回行うなどの工夫がされる
- 物理的な設計（例：電子レンジはドアを閉めないと動かない）にも適用される

## 体験デモ
### デモタイトル
重要なファイルを削除しようとしています...

### ボタンテキスト  
削除を実行

### デモ処理名
startDemo

## コード例
### 言語
JavaScript

### 説明
JavaScriptの`confirm`関数を使うと、簡単な確認ダイアログを実装できます。以下のサンプルコードで、その実装方法を確認してみましょう。統合版テンプレートをテキストエディタにコピペして、実行してみましょう。

### サンプルコード
```javascript
function startDemo() {
  const msg = document.getElementById('demo-message');
  const confirm1 = confirm("本当に削除しますか？");
  
  if (confirm1) {
    const confirm2 = confirm("最終確認です。よろしいですか？");
    if (confirm2) {
      // 2回の確認を経て初めて実行される処理
      console.log("削除処理を実行しました。");
    } else {
      console.log("処理を中止しました。");
    }
  } else {
    console.log("処理を中止しました。");
  }
}
```

### JavaScript処理
```javascript
function startDemo() {
  const msg = document.getElementById('demo-message');
  msg.textContent = ''; // メッセージをリセット

  const confirm1 = confirm("本当にこのファイルを削除しますか？この操作は取り消せません。");
  if (!confirm1) {
    msg.textContent = "キャンセルされました。";
    msg.style.color = "#4a4a4a";
    return;
  }

  const confirm2 = confirm("最終確認です。関連するデータもすべて失われますが、よろしいですか？");
  if (confirm2) {
    msg.textContent = "削除しました！ (という想定です)";
    msg.style.color = "#d9534f";
  } else {
    msg.textContent = "削除を中止しました。";
    msg.style.color = "#4a4a4a";
  }
}
```

## 関連用語
### バリデーション
フールプルーフと概念は違うが、併せて実装されることが多い
- フールプルーフは間違いを防ぐ、バリデーションは正しいかどうかのチェック
- 2つが併用、フールプルーフが包含している場面多数 