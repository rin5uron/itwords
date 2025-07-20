# 📦 ローカルストレージとは？

**よみかた**：ろーかるすとれーじ

---

## 意味

ブラウザに**小さなデータを保存しておける場所**のこと。  
JavaScriptからアクセスできて、**ページを閉じても情報が残る**のが特徴。

---

## ポイント

- ブラウザ内に保存される（サーバーには送られない）
- `localStorage.setItem()` と `getItem()` で読み書きできる
- 文字列しか保存できない（JSONとの組み合わせが必須）

---

## よく使う用途

- ログイン状態の保存
- テーマのダークモード設定
- 入力フォームの一時保存
- カウンターやメモなどの小さなWebアプリ

---

## 実例：カウントを保存する

```js
// 保存
localStorage.setItem("count", 5);

// 取得
const saved = localStorage.getItem("count");
console.log(saved); // → "5"
```

---

## JSONと一緒に使うとこうなる

```js
const user = { name: "Taro", age: 25 };

// 保存するとき
localStorage.setItem("user", JSON.stringify(user));

// 読み込むとき
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // → "Taro"
```

---

## 注意点

- 容量はだいたい5MB程度（大量保存には向かない）
- セキュリティ上の理由で、**個人情報やパスワードは保存NG**
- 複数ページ・アプリ間で共有不可（同じドメイン内だけ）

---

## 似ているものとの違い

| 名前 | 特徴 |
|------|------|
| `localStorage` | ページを閉じても残る、永続的 |
| `sessionStorage` | 同じタブ内だけ。閉じると消える |
| クッキー | サーバーにも送れる、小さい、やや古い |

---

## 関連用語

- [JSON](./json.md)
- [セッションストレージ（sessionStorage）](#)
- [フールプルーフ](./foolproof.md)

---

> 「なんか動いてるけど、よくわからない」を「なるほど！」に変えよう✌️  
