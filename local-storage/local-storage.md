---
title: "ローカルストレージ - IT用語辞典"
description: "ブラウザにデータを永続的に保存する仕組み、ローカルストレージについて、JSONを使ったオブジェクトの保存方法などを分かりやすく解説します。"
keywords: ["ローカルストレージ", "JSON", "Webストレージ", "JavaScript", "データ永続化"]
category: "Web開発"
tags: ["JavaScript", "データ保存", "フロントエンド", "JSON"]
difficulty: "初級"
reading_time: "7分"
author: "IT用語辞典"
date: "2025-07-21"
slug: "local-storage"
canonical_url: "https://itwords.example.com/local-storage"
featured_image: "https://itwords.example.com/images/local-storage.jpg"
ga_measurement_id: "G-XXXXXXXXXX"
gtm_container_id: "GTM-XXXXXXX"
---

# ローカルストレージ
読み方: ろーかるすとれーじ
アイコン: fas fa-database

## 概要
ブラウザに**小さなデータを保存しておける場所**のこと。<br>
JavaScriptからアクセスできて、**ページを閉じても情報が残る**のが特徴。

## ポイント
- ブラウザ内に保存される（サーバーには送られない）
- `localStorage.setItem()` と `getItem()` で読み書きできる
- 文字列しか保存できないため、オブジェクトを保存するには<a href="#">JSON</a>形式への変換が必須

## 体験デモ
### デモタイトル
ユーザー情報をJSONで保存

### ボタンテキスト
保存,クリア

### デモ処理名
`saveData`, `clearData`

## コード例
### 言語
JavaScript

### 説明
<a href="#">JSON</a>形式に変換することで、オブジェクトや配列のような複雑なデータも`localStorage`に保存できます。

### サンプルコード
```javascript
// ユーザーオブジェクトを作成
const user = {
  name: "山田",
  age: 30
};

// オブジェクトをJSON文字列に変換して保存
localStorage.setItem('userData', JSON.stringify(user));

// JSON文字列を取得してオブジェクトに変換
const jsonData = localStorage.getItem('userData');
const savedUser = JSON.parse(jsonData);

console.log(savedUser.name); // "山田"
```

### JavaScript処理
```javascript
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');
const savedDataSpan = document.getElementById('saved-data');

function saveData() {
  const user = {
    name: nameInput.value,
    age: ageInput.value
  };
  // オブジェクトをJSON文字列に変換して保存
  localStorage.setItem('userData', JSON.stringify(user));
  displayData();
}

function displayData() {
  // JSON文字列を取得
  const jsonData = localStorage.getItem('userData');
  if (jsonData) {
    // JSON文字列をオブジェクトにパース
    const user = JSON.parse(jsonData);
    savedDataSpan.textContent = `名前: ${user.name}, 年齢: ${user.age}`;
  } else {
    savedDataSpan.textContent = 'なし';
  }
}

function clearData() {
  localStorage.removeItem('userData');
  nameInput.value = '山田';
  ageInput.value = '30';
  displayData();
}

// ページ読み込み時に保存されたデータを表示
window.onload = displayData;
```

## 関連用語・比較
| 用語名 | 特徴 |
|---|---|
| localStorage | ページを閉じても残る、永続的 |
| sessionStorage | 同じタブ内だけ。閉じると消える |
| クッキー | サーバーにも送れる、小さい、やや古い |
