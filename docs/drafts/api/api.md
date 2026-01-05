---
title: "API - IT用語辞典"
description: "ソフトウェアやWebサービスの機能を外部から利用するための窓口であるAPIについて、基本的な仕組みからGitHub APIを使った実践例までを解説します。"
keywords: ["API", "REST API", "Webサービス連携", "GitHub API", "curl"]
category: "Web技術"
tags: ["API", "Web開発", "連携", "自動化"]
difficulty: "初級"
reading_time: "7分"
author: "IT用語辞典"
date: "2025-07-23"
slug: "api"
canonical_url: "{{site_url}}/api"
featured_image: "{{image_path}}"
ga_measurement_id: "{{ga_id}}"
gtm_container_id: "{{gtm_id}}"
---

# API
読み方: えーぴーあい
アイコン: fas fa-link

## 概要
API（Application Programming Interface）とは、一言でいうと**「ソフトウェアやWebサービスの機能を、外部から利用するための窓口（インターフェース）」**です。

レストランに例えてみましょう。
あなたが客席から厨房に直接「この肉を焼いてくれ」と頼むことはできません。代わりに、「ウェイター」に注文を伝えますよね。ウェイターはあなたの注文（リクエスト）を厨房に伝え、完成した料理（レスポンス）をあなたの元へ運んできます。

この**「ウェイター」の役割を果たすのがAPI**です。

- **あなた**: APIを利用する開発者やプログラム
- **ウェイター**: API
- **厨房**: 連携したいサービス（例: X(旧Twitter), Google Map, GitHub）
- **注文**: リクエスト（例: 「ツイートして」「この場所の地図を見せて」）
- **料理**: レスポンス（例: 投稿結果、地図データ）

APIがあるおかげで、私たちはサービスの内部構造（厨房の中）を知らなくても、決められたルール（メニューと注文方法）に従うだけで、その機能を利用できるのです。

## ポイント
APIを利用する上で、いくつか決まった「お作法」があります。代表的なものを紹介します。

- **エンドポイント (Endpoint)**: 「どの窓口に話しかけるか」を指定するURLです。例えば、GitHub APIでIssueを操作するための窓口、ユーザー情報を取得するための窓口など、機能ごとに異なるURLが用意されています。
- **リクエスト (Request)**: APIに対して「何をしてほしいか」を伝える情報です。
    - **メソッド**: `GET`（情報取得）、`POST`（新規作成）、`PUT`（更新）、`DELETE`（削除）といった動詞で、どんな操作をしたいかを示します。
    - **ヘッダー**: 認証情報やデータの形式など、リクエストに関する補足情報を入れます。
    - **ボディ**: `POST`や`PUT`で何かを作成・更新する際に、その具体的な内容（例: Issueのタイトルや本文）をJSON形式などで記述します。
- **レスポンス (Response)**: リクエストの結果としてAPIから返ってくる情報です。成功したか失敗したかを示すステータスコードや、要求したデータ（ユーザー情報など）がJSON形式で含まれています。
- **認証 (Authentication)**: 「誰がリクエストしているのか」を証明するための仕組みです。誰でも自由に操作できては困る機能（例: ツイート投稿、Issue作成）には、APIキーやトークンといった「身分証明書」が必要になります。

## 体験デモ
### デモタイトル
GitHub APIでIssueを自動作成！

### デモ説明
コマンドラインからGitHubのIssueを自動で作成するデモです。APIの認証とデータ送信の仕組みを体験できます。

### ボタンテキスト
Issueを作成

### デモ処理名
createGitHubIssue

## コード例
### 言語
Bash (curlコマンド)

### 説明
ここでは、開発者にとって最も身近なサービスの1つであるGitHubを題材に、**コマンドラインから自分のリポジトリにIssueを立てる**という、非常に実用的でパワフルな体験をします。

### サンプルコード
```bash
# 【注意】以下の3点を、ご自身のものに書き換えてください。
# - YOUR_GITHUB_USERNAME: あなたのGitHubユーザー名
# - YOUR_REPOSITORY_NAME: Issueを立てたいリポジトリ名
# - YOUR_PERSONAL_ACCESS_TOKEN: ステップ1でコピーしたトークン

curl -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN" \
  -d '{"title":"API経由でIssueを作成するテスト","body":"curlコマンドからIssueを作成できました！🎉"}' \
  https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME/issues
```

### JavaScript処理
```javascript
// このデモではJavaScript処理は直接実行されませんが、
// 実際のWebアプリケーションではJavaScriptからAPIを呼び出すことが一般的です。
// 例: fetch('https://api.github.com/...')
function createGitHubIssue() {
  alert('このデモはコマンドラインでの実行を想定しています。\n上記「サンプルコード」をターミナルで実行してください。');
}
```

## 関連用語
### REST API
Webサービスで広く利用されるAPIの設計原則の一つ。HTTPメソッド（GET, POSTなど）とURLを使ってリソースを操作します。

### Webhook
特定のイベントが発生した際に、指定されたURLに自動的にHTTPリクエストを送信する仕組み。APIとは逆方向の通信で、リアルタイムな連携に利用されます。

### JSON
JavaScript Object Notationの略。軽量なデータ交換フォーマットで、APIのリクエストやレスポンスで広く利用されます。

## 関連用語・比較
| 用語名 | 特徴 |
|--------|------|
| API | サービス間の連携窓口 |
| Webhook | イベント駆動型の通知メカニズム |
| ライブラリ | 特定の機能を提供するコードの集合体 |

## 参考資料

- [GitHub Docs: Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub Docs: REST API v3 Issues](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28)