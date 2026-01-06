'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function APIPage() {
  const [apiLoading, setApiLoading] = useState(false)
  const [apiData, setApiData] = useState<any>(null)
  const [apiError, setApiError] = useState('')

  const fetchGitHubUser = async () => {
    setApiLoading(true)
    setApiError('')
    setApiData(null)

    try {
      const response = await fetch('https://api.github.com/users/github')
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      const data = await response.json()
      setApiData(data)
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'エラーが発生しました')
    } finally {
      setApiLoading(false)
    }
  }

  return (
    <div className="container">
      <header>
        <h1><i className="fas fa-link"></i> API</h1>
        <p className="reading">エーピーアイ / Application Programming Interface</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>API</strong>（Application Programming Interface）とは、一言でいうと
            <strong>「ソフトウェアやWebサービスの機能を、外部から利用するための窓口（インターフェース）」</strong>です。
          </p>

          <p>
            レストランに例えてみましょう。
            あなたが客席から厨房に直接「この肉を焼いてくれ」と頼むことはできません。代わりに、「ウェイター」に注文を伝えますよね。
            ウェイターはあなたの注文（リクエスト）を厨房に伝え、完成した料理（レスポンス）をあなたの元へ運んできます。
          </p>

          <p>この<strong>「ウェイター」の役割を果たすのがAPI</strong>です。</p>

          <ul>
            <li><strong>あなた</strong>: APIを利用する開発者やプログラム</li>
            <li><strong>ウェイター</strong>: API</li>
            <li><strong>厨房</strong>: 連携したいサービス（例: X(旧Twitter), Google Map, GitHub）</li>
            <li><strong>注文</strong>: リクエスト（例: 「ツイートして」「この場所の地図を見せて」）</li>
            <li><strong>料理</strong>: レスポンス（例: 投稿結果、地図データ）</li>
          </ul>

          <p>
            APIがあるおかげで、私たちはサービスの内部構造（厨房の中）を知らなくても、
            決められたルール（メニューと注文方法）に従うだけで、その機能を利用できるのです。
          </p>
        </section>

        <section>
          <h2>APIの基本用語</h2>
          <p>APIを利用する上で、いくつか決まった「お作法」があります。代表的なものを紹介します。</p>

          <h3>エンドポイント（Endpoint）</h3>
          <p>
            「どの窓口に話しかけるか」を指定するURLです。
            例えば、GitHub APIでIssueを操作するための窓口、ユーザー情報を取得するための窓口など、機能ごとに異なるURLが用意されています。
          </p>

          <h3>リクエスト（Request）</h3>
          <p>APIに対して「何をしてほしいか」を伝える情報です。</p>
          <ul>
            <li><strong>メソッド</strong>: <code>GET</code>（情報取得）、<code>POST</code>（新規作成）、<code>PUT</code>（更新）、<code>DELETE</code>（削除）</li>
            <li><strong>ヘッダー</strong>: 認証情報やデータの形式など、リクエストに関する補足情報</li>
            <li><strong>ボディ</strong>: <code>POST</code>や<code>PUT</code>で送信する具体的な内容（JSON形式など）</li>
          </ul>

          <h3>レスポンス（Response）</h3>
          <p>
            リクエストの結果としてAPIから返ってくる情報です。
            成功したか失敗したかを示すステータスコード（200, 404など）や、要求したデータがJSON形式で含まれています。
          </p>

          <h3>認証（Authentication）</h3>
          <p>
            「誰がリクエストしているのか」を証明するための仕組みです。
            誰でも自由に操作できては困る機能（例: ツイート投稿、Issue作成）には、APIキーやトークンといった「身分証明書」が必要になります。
          </p>
        </section>

        <section>
          <h2>実践例：GitHub APIでIssueを作成</h2>
          <p>
            開発者にとって最も身近なサービスの1つであるGitHubを題材に、
            <strong>コマンドラインから自分のリポジトリにIssueを立てる</strong>という実用的な例を紹介します。
          </p>

          <details>
            <summary><strong>サンプルコード</strong>を見る</summary>
            <div className="code-example">
              <pre><code className="language-bash">{`# 【注意】以下の3点を、ご自身のものに書き換えてください。
# - YOUR_GITHUB_USERNAME: あなたのGitHubユーザー名
# - YOUR_REPOSITORY_NAME: Issueを立てたいリポジトリ名
# - YOUR_PERSONAL_ACCESS_TOKEN: GitHubで発行したトークン

curl -X POST \\
  -H "Accept: application/vnd.github.v3+json" \\
  -H "Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN" \\
  -d '{"title":"API経由でIssueを作成するテスト","body":"curlコマンドからIssueを作成できました！🎉"}' \\
  https://api.github.com/repos/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME/issues`}</code></pre>
            </div>
          </details>

          <h3>このコマンドの説明</h3>
          <ul>
            <li><code>curl -X POST</code>: POSTメソッドでHTTPリクエストを送信</li>
            <li><code>-H &quot;Authorization: Bearer ...&quot;</code>: 認証トークンを含めて本人確認</li>
            <li><code>-d &apos;&#123;...&#125;&apos;</code>: 送信するデータ（Issueのタイトルと本文）をJSON形式で指定</li>
            <li><code>https://api.github.com/repos/.../issues</code>: GitHubのIssue作成用エンドポイント</li>
          </ul>
        </section>

        <section>
          <h2>REST APIとは？</h2>
          <p>
            <strong>REST API</strong>は、Webサービスで広く利用されるAPIの設計原則の一つです。
            HTTPメソッド（GET, POSTなど）とURLを使ってリソースを操作するシンプルで分かりやすい設計が特徴です。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>HTTPメソッド</th>
                  <th>用途</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>GET</code></td>
                  <td>データの取得</td>
                  <td>ユーザー情報を取得</td>
                </tr>
                <tr>
                  <td><code>POST</code></td>
                  <td>新規作成</td>
                  <td>新しいIssueを作成</td>
                </tr>
                <tr>
                  <td><code>PUT</code></td>
                  <td>更新</td>
                  <td>既存のIssueを更新</td>
                </tr>
                <tr>
                  <td><code>DELETE</code></td>
                  <td>削除</td>
                  <td>Issueを削除</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>実際にやってみよう：GitHub API呼び出しデモ</h2>
          <p>
            ボタンをクリックして、実際にGitHub APIからユーザー情報を取得してみましょう！
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>GitHub APIを呼び出す</h3>
            <p>GitHubの公式アカウント情報を取得します</p>

            <button
              onClick={fetchGitHubUser}
              disabled={apiLoading}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: apiLoading ? '#6c757d' : '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: apiLoading ? 'not-allowed' : 'pointer',
              }}
            >
              {apiLoading ? '読み込み中...' : 'APIを呼び出す'}
            </button>

            {apiError && (
              <div style={{
                marginTop: '15px',
                padding: '15px',
                backgroundColor: '#f8d7da',
                border: '1px solid #f5c6cb',
                borderRadius: '5px',
                color: '#721c24'
              }}>
                エラー: {apiError}
              </div>
            )}

            {apiData && (
              <div style={{
                marginTop: '15px',
                padding: '15px',
                backgroundColor: '#fff',
                border: '1px solid #dee2e6',
                borderRadius: '5px'
              }}>
                <h4>取得したデータ</h4>
                <div style={{ marginTop: '10px' }}>
                  <p><strong>ユーザー名:</strong> {apiData.login}</p>
                  <p><strong>名前:</strong> {apiData.name}</p>
                  <p><strong>公開リポジトリ数:</strong> {apiData.public_repos}</p>
                  <p><strong>フォロワー数:</strong> {apiData.followers}</p>
                  <p><strong>プロフィールURL:</strong> <a href={apiData.html_url} target="_blank" rel="noopener noreferrer">{apiData.html_url}</a></p>
                </div>
              </div>
            )}

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              💡 このデモでは、<code>https://api.github.com/users/github</code> にGETリクエストを送信し、GitHubアカウントの情報を取得しています。
            </p>
          </div>
        </section>

        <section className="term-comparison">
          <h2>関連用語</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/terms/json" className="term-name">JSON</Link></td>
                  <td>APIのリクエストやレスポンスでよく使われるデータ形式</td>
                </tr>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP/HTTPS</Link></td>
                  <td>APIの通信で使われるプロトコル</td>
                </tr>
                <tr>
                  <td>Webhook</td>
                  <td>特定のイベントが発生した際に自動的にHTTPリクエストを送信する仕組み</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2024 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
