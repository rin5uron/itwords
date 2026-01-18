import Link from 'next/link'
import { Metadata } from 'next'
import HTTPDemo from '@/app/components/HTTPDemo'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'HTTP/HTTPS（エイチティーティーピー）とは？読み方・違いを初心者向けに解説 | 実践型IT用語辞典',
  description: 'HTTP/HTTPS（エイチティーティーピー/エイチティーティーピーエス）を初心者向けに解説。読み方、違い、仕組み、HTTPメソッド、ステータスコードを実践デモ付きで学べます。',
  keywords: ['HTTP', 'HTTPS', 'HTTP とは', 'HTTP わかりやすく', 'HTTP 初心者', 'HTTP HTTPS 違い', 'HTTPメソッド', 'HTTPステータスコード', 'GET', 'POST', 'SSL', 'TLS', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'HTTP/HTTPSとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'HTTP/HTTPSの基礎から違い、仕組み、HTTPメソッド、ステータスコードまで初心者にもわかりやすく解説。',
    type: 'article',
    url: 'https://itwords.vercel.app/terms/http',
  },
}

const httpFAQs = [
  {
    question: 'HTTPの読み方は？',
    answer: 'HTTPは「エイチティーティーピー」と読みます。HTTPSは「エイチティーティーピーエス」と読みます。日本語では「ハイパーテキスト転送プロトコル」と訳されることもありますが、通常はアルファベットのまま「エイチティーティーピー」と呼ばれます。',
  },
  {
    question: 'HTTPとHTTPSの違いは何ですか？',
    answer: 'HTTPは通信内容が暗号化されていない通信規約で、HTTPSは通信内容が暗号化された安全な通信規約です。HTTPSはSSL/TLSという技術を使って通信を暗号化し、第三者による盗聴や改ざんを防ぎます。現代のWebサイトではセキュリティとプライバシー保護のため、HTTPSが標準となっています。'
  },
  {
    question: 'HTTPメソッドとは何ですか？',
    answer: 'HTTPメソッドとは、クライアントがサーバーに対して「何をしたいか」を伝えるための命令の種類です。主なメソッドには、データを取得するGET、データを送信するPOST、データを更新するPUT、データを削除するDELETEがあります。Webページを閲覧するときは主にGETメソッドが使われます。'
  },
  {
    question: 'HTTPステータスコード404は何を意味しますか？',
    answer: 'HTTPステータスコード404は「Not Found（見つかりません）」を意味し、リクエストされたページやリソースがサーバー上に存在しないことを示します。URLの入力ミス、ページの削除、リンク切れなどが原因で発生します。サーバーは正常に動作していますが、指定されたリソースが見つからない状態です。'
  },
  {
    question: 'SSL/TLSとは何ですか？',
    answer: 'SSL（Secure Sockets Layer）とTLS（Transport Layer Security）は、インターネット通信を暗号化するための技術です。正確にはSSLは古い規格でTLSが新しい規格ですが、現在でも「SSL証明書」「SSL化」のように「SSL」という言葉が広く使われています。これらの技術により、HTTPSでは通信内容が暗号化され、第三者による盗聴や改ざんから保護されます。'
  },
  {
    question: 'HTTPSを使うメリットは何ですか？',
    answer: 'HTTPSを使う主なメリットは、通信内容の暗号化によるセキュリティ向上、ユーザーの信頼獲得、SEO効果の向上です。特にログイン情報やクレジットカード情報などの重要なデータをやり取りする場合、HTTPSは必須です。また、Googleは検索ランキングでHTTPSサイトを優遇しており、ブラウザもHTTPサイトには警告を表示するようになっています。'
  }
]

export default function HTTPPage() {
  return (
    <div className="container">
      <StructuredData
        type="FAQPage"
        faqs={httpFAQs}
      />
      <StructuredData
        type="Article"
        title="HTTP/HTTPS（エイチティーティーピー）とは？読み方・違いを初心者向けに解説"
        description="HTTP/HTTPS（エイチティーティーピー/エイチティーティーピーエス）を初心者向けに解説。読み方、違い、仕組み、HTTPメソッド、ステータスコードを実践デモ付きで学べます。"
        datePublished="2024-01-01"
        dateModified="2026-01-16"
      />
      <TermHeader
        termName="HTTP/HTTPS"
        reading="エイチティーティーピー / エイチティーティーピーエス"
        icon="fas fa-exchange-alt"
      />

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

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>HTTPメソッドを体験してみよう</h3>
            <p>
              下のデモでそれぞれのHTTPメソッドをクリックして、使い方と用途を確認できます。
              実際に手を動かすことで、HTTPの動作が理解しやすくなります。
            </p>
            <HTTPDemo />
          </div>
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

          <p>
            詳しくは<a href="https://developer.mozilla.org/ja/docs/Web/HTTP" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTTP</a>や
            <a href="https://developer.mozilla.org/ja/docs/Glossary/HTTPS" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTTPS</a>で確認できます。
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

        <FAQAccordion faqs={httpFAQs} />
      </main>
    </div>
  )
}
