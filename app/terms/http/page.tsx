'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HTTPPage() {
  const [selectedMethod, setSelectedMethod] = useState('')

  const httpMethods = [
    { name: 'GET', description: 'データを取得する', example: 'Webページを表示したり、検索結果を取得したりします。データは変更されません。', color: '#28a745' },
    { name: 'POST', description: 'データを送信する', example: 'フォームを送信したり、ログイン情報を送ったり、新しいデータを作成します。', color: '#007bff' },
    { name: 'PUT', description: 'データを更新する', example: '既存のデータを完全に置き換えます。プロフィール情報の更新などに使われます。', color: '#ffc107' },
    { name: 'DELETE', description: 'データを削除する', example: '投稿を削除したり、アカウントを削除したりします。', color: '#dc3545' }
  ]

  return (
    <div className="container">
      <header>
        <h1><i className="fas fa-exchange-alt"></i> HTTP/HTTPS</h1>
        <p className="reading">エイチティーティーピー / エイチティーティーピーエス</p>
        <p className="reading">HyperText Transfer Protocol / HTTP Secure</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>HTTP</strong>（HyperText Transfer Protocol）とは、
            <strong>「Webブラウザとサーバーの間でデータをやり取りするためのルール（通信規約）」</strong>です。
          </p>

          <p>
            例えば、あなたがWebサイトを見るとき、ブラウザは裏側で「このページを見せてください」とサーバーにお願いしています。
            サーバーは「わかりました、このHTMLファイルをどうぞ」と返してくれます。
            このやり取りをスムーズに行うための「共通語」がHTTPです。
          </p>

          <p>
            <strong>HTTPS</strong>は、HTTPに<strong>「S（Secure）」</strong>が付いたもので、
            通信内容を暗号化して安全にやり取りできるようにしたバージョンです。
          </p>
        </section>

        <section>
          <h2>HTTPとHTTPSの違い</h2>
          <p>簡単に言うと、<strong>鍵をかけずに手紙を送るか、鍵付きの封筒で送るか</strong>の違いです。</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>HTTP</th>
                  <th>HTTPS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>暗号化</strong></td>
                  <td>なし（平文）</td>
                  <td>あり（SSL/TLS）</td>
                </tr>
                <tr>
                  <td><strong>セキュリティ</strong></td>
                  <td>低い（盗聴・改ざんリスク）</td>
                  <td>高い（通信内容が保護される）</td>
                </tr>
                <tr>
                  <td><strong>URLの表示</strong></td>
                  <td>http://example.com</td>
                  <td>https://example.com</td>
                </tr>
                <tr>
                  <td><strong>ブラウザ表示</strong></td>
                  <td>「保護されていない通信」警告</td>
                  <td>鍵マーク表示</td>
                </tr>
                <tr>
                  <td><strong>利用場面</strong></td>
                  <td>現在はほぼ非推奨</td>
                  <td>ログイン、決済、個人情報入力など</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong> 現代のWebサイトでは、ほぼすべてのサイトがHTTPSを使っています。
            GoogleもHTTPSを使っているサイトを検索結果で優遇するため、HTTPSが標準になっています。
          </p>
        </section>

        <section>
          <h2>HTTPの通信の流れ</h2>
          <p>Webページを表示するとき、裏側でこんなやり取りが起きています：</p>

          <ol>
            <li>
              <strong>リクエスト（Request）：</strong>
              ブラウザがサーバーに「このページを見せて！」とお願いする
            </li>
            <li>
              <strong>処理：</strong>
              サーバーがリクエストを受け取り、必要なデータ（HTML、画像など）を準備する
            </li>
            <li>
              <strong>レスポンス（Response）：</strong>
              サーバーがブラウザに「はい、どうぞ！」とデータを返す
            </li>
            <li>
              <strong>表示：</strong>
              ブラウザが受け取ったHTMLやCSSを解釈して、画面に表示する
            </li>
          </ol>

          <p>この一連のやり取りは、一瞬で完了します。</p>
        </section>

        <section>
          <h2>HTTPメソッド</h2>
          <p>
            HTTPには「何をしたいか」を伝えるための<strong>メソッド（命令の種類）</strong>があります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>メソッド</th>
                  <th>意味</th>
                  <th>使う場面</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>GET</code></td>
                  <td>データを取得する</td>
                  <td>Webページを表示、検索結果を取得</td>
                </tr>
                <tr>
                  <td><code>POST</code></td>
                  <td>データを送信する</td>
                  <td>フォーム送信、ログイン、新規作成</td>
                </tr>
                <tr>
                  <td><code>PUT</code></td>
                  <td>データを更新する</td>
                  <td>既存データの書き換え</td>
                </tr>
                <tr>
                  <td><code>DELETE</code></td>
                  <td>データを削除する</td>
                  <td>投稿の削除、アカウント削除</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>例：</strong> Googleで検索するときは<code>GET</code>、
            会員登録フォームを送信するときは<code>POST</code>が使われています。
          </p>
        </section>

        <section>
          <h2>HTTPステータスコード</h2>
          <p>
            サーバーからの返事には、<strong>「成功したか」「失敗したか」を示す番号（ステータスコード）</strong>が付いてきます。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>コード</th>
                  <th>意味</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>200</code></td>
                  <td>OK</td>
                  <td>成功。ページが正常に表示できた</td>
                </tr>
                <tr>
                  <td><code>301</code></td>
                  <td>Moved Permanently</td>
                  <td>ページが別の場所に移動した（リダイレクト）</td>
                </tr>
                <tr>
                  <td><code>404</code></td>
                  <td>Not Found</td>
                  <td>ページが見つからない</td>
                </tr>
                <tr>
                  <td><code>500</code></td>
                  <td>Internal Server Error</td>
                  <td>サーバー側でエラーが発生</td>
                </tr>
                <tr>
                  <td><code>503</code></td>
                  <td>Service Unavailable</td>
                  <td>サーバーが一時的に利用不可（メンテナンスなど）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong> 「404エラー」は誰でも見たことがあるはず！
            これは「リクエストしたページが存在しない」という意味です。
          </p>
        </section>

        <section>
          <h2>SSL/TLSとは？</h2>
          <p>
            HTTPSで使われる暗号化技術を<strong>SSL（Secure Sockets Layer）</strong>または
            <strong>TLS（Transport Layer Security）</strong>と呼びます。
          </p>

          <p>
            正確には、SSLは古い規格でTLSが新しい規格ですが、
            今でも「SSL証明書」「SSL化」のように「SSL」という言葉が広く使われています。
          </p>

          <h3>HTTPSの仕組み</h3>
          <ol>
            <li><strong>鍵の交換：</strong> ブラウザとサーバーが「この鍵で暗号化しよう」と約束する</li>
            <li><strong>暗号化通信：</strong> 約束した鍵を使ってデータを暗号化してやり取りする</li>
            <li><strong>復号化：</strong> 受け取った側が鍵を使ってデータを元に戻す</li>
          </ol>

          <p>
            この仕組みにより、たとえ通信途中で誰かがデータを盗み見ても、
            暗号化されているため内容を読むことができません。
          </p>
        </section>

        <section>
          <h2>実際の確認方法</h2>
          <p>今見ているこのサイトのURLを確認してみましょう：</p>

          <div className="code-example">
            <pre><code>https://itwords.jp/terms/http</code></pre>
          </div>

          <p>URLの最初が<code>https://</code>になっていて、ブラウザのアドレスバーに鍵マークが表示されているはずです。</p>

          <p className="note">
            <strong>🔒 セキュリティのヒント：</strong>
            ログイン画面やクレジットカード情報を入力する際は、必ずURLが<code>https://</code>で始まっていることを確認しましょう！
          </p>
        </section>

        <section>
          <h2>実際にやってみよう：HTTPメソッド選択デモ</h2>
          <p>
            それぞれのHTTPメソッドをクリックして、使い方と用途を確認してみましょう！
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>HTTPメソッドを選択</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
              {httpMethods.map((method) => (
                <button
                  key={method.name}
                  onClick={() => setSelectedMethod(method.name)}
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: selectedMethod === method.name ? method.color : '#fff',
                    color: selectedMethod === method.name ? '#fff' : method.color,
                    border: `2px solid ${method.color}`,
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontWeight: 'bold'
                  }}
                >
                  {method.name}
                </button>
              ))}
            </div>

            {selectedMethod && (
              <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#fff',
                borderRadius: '5px',
                border: '1px solid #dee2e6'
              }}>
                <h4 style={{ color: httpMethods.find(m => m.name === selectedMethod)?.color }}>
                  {selectedMethod}メソッド
                </h4>
                <p><strong>用途:</strong> {httpMethods.find(m => m.name === selectedMethod)?.description}</p>
                <p><strong>具体例:</strong> {httpMethods.find(m => m.name === selectedMethod)?.example}</p>
              </div>
            )}

            {!selectedMethod && (
              <p style={{ marginTop: '15px', color: '#6c757d' }}>
                ↑ HTTPメソッドを選択してください
              </p>
            )}

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              💡 ヒント：一般的なWebサイト閲覧では主にGETメソッドが使われ、フォーム送信ではPOSTメソッドが使われます。
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
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>HTTPを使ってデータをやり取りするWeb APIが一般的</td>
                </tr>
                <tr>
                  <td><Link href="/terms/cookie" className="term-name">Cookie</Link></td>
                  <td>HTTPでやり取りされる小さなデータ（ログイン状態の保持など）</td>
                </tr>
                <tr>
                  <td>DNS</td>
                  <td>ドメイン名をIPアドレスに変換する仕組み</td>
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
