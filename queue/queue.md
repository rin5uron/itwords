---
title: "キュー (Queue) - 実践型IT用語辞典"
description: "先に入れたものが先に出ていく「キュー構造」について、FIFOの原則や具体的な使われ方を、インタラクティブなデモを通じて分かりやすく解説します。"
keywords: ["キュー", "Queue", "FIFO", "データ構造", "プログラミング", "JavaScript"]
category: "データ構造"
tags: ["データ構造", "アルゴリズム", "JavaScript"]
difficulty: "初級"
reading_time: "5分"
author: "IT用語辞典"
date: "2025-07-21"
slug: "queue"
canonical_url: "https://itwords.example.com/queue"
featured_image: "https://itwords.example.com/images/queue.jpg"
ga_measurement_id: "G-XXXXXXXXXX"
gtm_container_id: "GTM-XXXXXXX"
---

# キュー (Queue)
読み方: きゅー
アイコン: fas fa-users

## 概要
先に入れたものが、先に出ていくという仕組みのデータ構造のこと。「**FIFO (First In, First Out)**」とも呼ばれます。レジの行列のように、並んだ順番通りに処理されるのが特徴です。

## ポイント
- **Enqueue (エンキュー)**: 列の末尾にデータを追加すること。
- **Dequeue (デキュー)**: 列の先頭からデータを取り出すこと。
- 印刷ジョブの管理やタスク処理など、**順番が重要な場面**で使われます。

## 体験デモ
### デモタイトル
キューの「先入れ先出し」を体験

### ボタンテキスト
Enqueue (追加),Dequeue (取り出し)

### デモ処理名
`enqueueItem`, `dequeueItem`

## コード例
### 言語
JavaScript

### 説明
JavaScriptの配列を使えば、`push`で追加し、`shift`で取り出すことで簡単に「先入れ先出し」のキューを実装できます。

### サンプルコード
```javascript
// 配列を使った簡単なキュー
const queue = [];

// Enqueue: 後ろに追加
queue.push('タスク1');
queue.push('タスク2');

// Dequeue: 先頭から取り出し
const firstTask = queue.shift();

console.log(firstTask); // "タスク1"
```

### JavaScript処理
```javascript
let queue = [];
let personCount = 0;
const visualizer = document.getElementById('queue-visualizer');
const message = document.getElementById('demo-message');

function enqueueItem() {
  if (queue.length >= 5) {
    message.textContent = "行列が長すぎます！";
    return;
  }
  personCount++;
  const newPerson = `客${personCount}`;
  queue.push(newPerson);
  renderQueue();
  message.textContent = `"${newPerson}" が列に並びました。`;
}

function dequeueItem() {
  if (queue.length === 0) {
    message.textContent = "誰も並んでいません。";
    return;
  }
  const servedPerson = queue.shift();
  renderQueue();
  message.textContent = `"${servedPerson}" がレジを終えました。`;
}

function renderQueue() {
  visualizer.innerHTML = '';
  queue.forEach(item => {
    const div = document.createElement('div');
    div.className = 'queue-item';
    div.textContent = item;
    visualizer.appendChild(div);
  });
}
// Initial state
enqueueItem();
enqueueItem();
```

## 関連用語・比較
| 用語名 | 構造 | 特徴 |
|---|---|---|
| [キュー](./queue.html) | 先入れ先出し (FIFO) | レジの列のように、順番通りに処理する。 |
| [スタック](../stack/stack.html) | 後入れ先出し (LIFO) | お皿の山のように、後から置いたものを先に取る。 |