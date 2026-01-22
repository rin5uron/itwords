'use client'

import Link from 'next/link'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import PageSummary from '@/app/components/PageSummary'
import FAQAccordion from '@/app/components/FAQAccordion'

const httpsFAQs = [
  {
    question: 'HTTPSの読み方は？',
    answer: 'HTTPSは「エイチティーティーピーエス」と読みます。HTTPに「S（Secure）」が付いたもので、「ハイパーテキスト転送プロトコル・セキュア」という意味です。通常はアルファベットのまま「エイチティーティーピーエス」と呼ばれます。',
  },
  {
    question: 'HTTPSとHTTPの違いは何ですか？',
    answer: 'HTTPSはHTTPにSSL/TLSという暗号化技術を追加したものです。HTTPは通信内容が平文（暗号化されていない）で送信されるため、第三者に盗聴されるリスクがあります。一方、HTTPSは通信内容を暗号化するため、安全にデータをやり取りできます。現代のWebサイトでは、セキュリティとプライバシー保護のため、HTTPSが標準となっています。',
  },
  {
    question: 'HTTPSの「S」は何の略ですか？',
    answer: 'HTTPSの「S」は「Secure（セキュア＝安全）」の略です。HTTP通信をSSL/TLSで暗号化したものがHTTPSです。URLバーに表示される鍵マーク🔒は、この通信が暗号化されていることを示しています。',
  },
  {
    question: 'なぜHTTPSが必要なのですか？',
    answer: 'HTTPSが必要な理由は、通信内容の暗号化によるセキュリティ向上、ユーザーの信頼獲得、SEO効果の向上です。特にログイン情報、クレジットカード情報、個人情報などの重要なデータをやり取りする場合、HTTPSは必須です。また、Googleは検索ランキングでHTTPSサイトを優遇しており、ブラウザもHTTPサイトには警告を表示するようになっています。',
  },
  {
    question: 'HTTPS証明書は無料で取得できますか？',
    answer: 'はい、Let\'s Encryptなどの無料のSSL/TLS証明書サービスがあります。VercelやNetlifyなどのホスティングサービスでは、自動的にHTTPS化（SSL/TLS対応）してくれるため、特別な設定は不要です。個人サイトや小規模サイトでも、無料でHTTPSを導入できます。',
  },
  {
    question: 'HTTPSにするとサイトが遅くなりますか？',
    answer: '現代の技術では、HTTPSによる通信速度への影響はほとんどありません。むしろ、HTTP/2やHTTP/3などの新しいプロトコルはHTTPSでのみ利用できるため、HTTPSの方が高速になる場合もあります。暗号化・復号化の処理は非常に高速で、ユーザーが体感できるほどの遅延は発生しません。',
  },
  {
    question: 'すべてのWebサイトがHTTPSを使うべきですか？',
    answer: 'はい、現代ではすべてのWebサイトがHTTPSを使うべきです。Googleは検索ランキングでHTTPSサイトを優遇しており、ChromeやFirefoxなどのブラウザもHTTPサイトに警告を表示します。また、ユーザーもセキュリティを重視するため、HTTPSでないサイトは信頼されにくくなっています。個人ブログや企業サイトを問わず、HTTPSの導入が推奨されます。',
  },
]

export default function HTTPSPage() {
  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={httpsFAQs} />
      <StructuredData
        type="Article"
        title="HTTPSとは？小学生でもわかる【🔒マークの意味と仕組み】"
        description="HTTPSとは？なぜURLに鍵マーク🔒が表示される？暗号化の仕組み、SSL/TLSとの関係、HTTPとの違いを初心者向けにわかりやすく解説します。"
        datePublished="2026-01-23"
        dateModified="2026-01-23"
      />
      <TermHeader
        termName="HTTPS"
        reading="エイチティーティーピーエス / HyperText Transfer Protocol Secure"
        icon="fas fa-lock"
        dateCreated="2026-01-23"
        dateModified="2026-01-23"
      />

      <TableOfContents />

      <main>
        {/* このページでわかること（一番上） */}
        <PageSummary
          items={[
            'HTTPSとは何か？なぜURLに鍵マーク🔒が表示される？',
            'HTTPSとHTTPの違い（暗号化の仕組み）',
            'SSL/TLSによる暗号化の仕組み',
            'HTTPSを使うメリットと必要性'
          ]}
        />

        {/* 更新日 */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2026-01-23 | 最終更新: 2026-01-23</span>
        </div>

        <section>
          <h2>概要</h2>

          <p>
            <strong>HTTPS</strong>（HyperText Transfer Protocol Secure）とは、
            <strong>「Webブラウザとサーバーの間でデータを安全にやり取りするための暗号化された通信規約」</strong>です。
          </p>

          <p>
            あなたがAmazonでクレジットカード番号を入力するとき、その情報が第三者に盗まれないように「暗号化」されます。
            この暗号化を担当しているのが<strong>HTTPS</strong>です。
          </p>

          <p>
            URLバーに表示される<strong>鍵マーク🔒</strong>を見たことがありますか？
            これは「この通信はHTTPSで暗号化されているので安全ですよ」というサインです。
          </p>

          <p className="note">
            <strong>💡 このサイトもHTTPS対応</strong>
            <br />
            <code>https://itwords.jp</code> の「https」の「s」が、HTTPSで暗号化されていることを示しています。
          </p>
        </section>

        <section>
          <h2>HTTPSとHTTPの違い</h2>
          <p>
            簡単に言うと、<strong>鍵をかけずに手紙を送るか、鍵付きの封筒で送るか</strong>の違いです。
          </p>

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
                  <td>鍵マーク🔒表示</td>
                </tr>
                <tr>
                  <td><strong>利用場面</strong></td>
                  <td>現在はほぼ非推奨</td>
                  <td>ログイン、決済、個人情報入力など</td>
                </tr>
                <tr>
                  <td><strong>SEO効果</strong></td>
                  <td>低い（Googleが優遇しない）</td>
                  <td>高い（Googleが優遇する）</td>
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
          <h2>HTTPSの「S」の意味</h2>
          <p>
            HTTPSの「S」は<strong>「Secure（セキュア＝安全）」</strong>の略です。
          </p>

          <p>
            HTTP通信に<strong>SSL/TLS</strong>という暗号化技術を追加したものがHTTPSです。
            「S」が1文字追加されるだけで、通信の安全性が大幅に向上します。
          </p>

          <div className="code-example">
            <pre><code>HTTP  = HyperText Transfer Protocol（暗号化なし）
HTTPS = HyperText Transfer Protocol Secure（暗号化あり）</code></pre>
          </div>

          <p>
            詳しくは<Link href="/terms/ssl-tls">SSL/TLS</Link>のページで確認できます。
          </p>
        </section>

        <section>
          <h2>HTTPSの仕組み</h2>
          <p>
            HTTPSでは、以下のような流れで安全な通信を行います：
          </p>

          <ol>
            <li>
              <strong>鍵の交換（ハンドシェイク）：</strong>
              ブラウザとサーバーが「この鍵で暗号化しよう」と約束する
            </li>
            <li>
              <strong>証明書の確認：</strong>
              サーバーが「このサーバーは本物です」という証明書を提示する
            </li>
            <li>
              <strong>暗号化通信：</strong>
              約束した鍵を使ってデータを暗号化してやり取りする
            </li>
            <li>
              <strong>復号化：</strong>
              受け取った側が鍵を使ってデータを元に戻す
            </li>
          </ol>

          <p>
            この仕組みにより、たとえ通信途中で誰かがデータを盗み見ても、
            暗号化されているため内容を読むことができません。
          </p>

          <h3>暗号化の例え</h3>
          <p>
            暗号化は、<strong>「秘密の暗号で手紙を書く」</strong>ようなものです。
          </p>

          <ul>
            <li>
              <strong>HTTP（暗号化なし）：</strong>
              普通の手紙。誰でも読めてしまう
            </li>
            <li>
              <strong>HTTPS（暗号化あり）：</strong>
              秘密の暗号で書いた手紙。鍵を持っている人だけが読める
            </li>
          </ul>
        </section>

        <section>
          <h2>なぜHTTPSが必要なのか？</h2>
          <p>
            HTTPSが必要な理由は、主に以下の3つです：
          </p>

          <h3>1. セキュリティの向上</h3>
          <p>
            ログイン情報、クレジットカード情報、個人情報などの重要なデータをやり取りする場合、
            HTTPSで暗号化することで、第三者による盗聴や改ざんを防げます。
          </p>

          <h3>2. ユーザーの信頼獲得</h3>
          <p>
            ブラウザのアドレスバーに鍵マーク🔒が表示されることで、
            ユーザーは「このサイトは安全だ」と判断できます。
            HTTPサイトには「保護されていない通信」という警告が表示されるため、
            ユーザーが離脱する可能性があります。
          </p>

          <h3>3. SEO効果の向上</h3>
          <p>
            Googleは検索ランキングでHTTPSサイトを優遇しています。
            同じ内容のサイトでも、HTTPSの方が検索結果で上位に表示されやすくなります。
          </p>

          <p className="note">
            <strong>🔒 セキュリティのヒント：</strong>
            ログイン画面やクレジットカード情報を入力する際は、必ずURLが<code>https://</code>で始まっていることを確認しましょう！
          </p>
        </section>

        <section>
          <h2>HTTPS証明書とは？</h2>
          <p>
            HTTPSを使うには、<strong>SSL/TLS証明書</strong>が必要です。
            この証明書は「このサーバーは本物です」という証明書で、
            認証局（CA: Certificate Authority）が発行します。
          </p>

          <h3>証明書の種類</h3>
          <ul>
            <li>
              <strong>DV証明書（Domain Validation）：</strong>
              ドメインの所有権を確認するだけの証明書。無料で取得可能（Let's Encryptなど）
            </li>
            <li>
              <strong>OV証明書（Organization Validation）：</strong>
              組織の実在性も確認する証明書。有料
            </li>
            <li>
              <strong>EV証明書（Extended Validation）：</strong>
              最も厳格な審査を経た証明書。有料で高額
            </li>
          </ul>

          <p>
            個人サイトや小規模サイトでは、無料のDV証明書（Let's Encryptなど）で十分です。
            VercelやNetlifyなどのホスティングサービスでは、自動的にHTTPS証明書を発行してくれます。
          </p>
        </section>

        <section>
          <h2>実際の確認方法</h2>
          <p>今見ているこのサイトのURLを確認してみましょう：</p>

          <div className="code-example">
            <pre><code>https://itwords.jp/terms/https</code></pre>
          </div>

          <p>
            URLの最初が<code>https://</code>になっていて、ブラウザのアドレスバーに鍵マーク🔒が表示されているはずです。
          </p>

          <h3>ブラウザでの確認方法</h3>
          <ol>
            <li>アドレスバーの鍵マーク🔒をクリック</li>
            <li>「接続は安全です」と表示される</li>
            <li>証明書の詳細情報を確認できる</li>
          </ol>

          <p className="note">
            <strong>🔒 セキュリティのヒント：</strong>
            ログイン画面やクレジットカード情報を入力する際は、必ずURLが<code>https://</code>で始まっていることを確認しましょう！
            鍵マーク🔒が表示されていない場合は、そのサイトに個人情報を入力しないようにしましょう。
          </p>
        </section>

        <section>
          <h2>HTTPSの導入方法</h2>
          <p>
            現代のホスティングサービスでは、HTTPSの導入が非常に簡単になっています。
          </p>

          <h3>1. Vercelの場合</h3>
          <p>
            Vercelでは、カスタムドメインを設定するだけで自動的にHTTPS証明書が発行されます。
            特別な設定は不要です。
          </p>

          <h3>2. Netlifyの場合</h3>
          <p>
            Netlifyでも、カスタムドメインを設定するだけで自動的にHTTPS証明書が発行されます。
          </p>

          <h3>3. 独自サーバーの場合</h3>
          <p>
            Let's Encryptなどの無料証明書サービスを使って、手動で証明書を取得・設定する必要があります。
            Certbotなどのツールを使うと、自動化できます。
          </p>

          <p className="note">
            <strong>💡 ポイント：</strong>
            個人サイトや小規模サイトなら、VercelやNetlifyなどのホスティングサービスを使うと、
            無料でHTTPSを導入できます。
          </p>
        </section>

        <section>
          <h2>HTTPSのよくある誤解</h2>

          <h3>誤解1: HTTPSにするとサイトが遅くなる</h3>
          <p>
            <strong>正解：</strong> 現代の技術では、HTTPSによる通信速度への影響はほとんどありません。
            むしろ、HTTP/2やHTTP/3などの新しいプロトコルはHTTPSでのみ利用できるため、
            HTTPSの方が高速になる場合もあります。
          </p>

          <h3>誤解2: HTTPSは有料サービスだけ</h3>
          <p>
            <strong>正解：</strong> Let's Encryptなどの無料のSSL/TLS証明書サービスがあります。
            VercelやNetlifyなどのホスティングサービスでは、自動的にHTTPS化してくれるため、
            無料でHTTPSを導入できます。
          </p>

          <h3>誤解3: 個人サイトにはHTTPSは不要</h3>
          <p>
            <strong>正解：</strong> 現代では、すべてのWebサイトがHTTPSを使うべきです。
            Googleは検索ランキングでHTTPSサイトを優遇しており、
            ブラウザもHTTPサイトに警告を表示します。
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
                  <td><Link href="/terms/http" className="term-name">HTTP</Link></td>
                  <td>HTTPSの元になった通信規約（暗号化なし）</td>
                </tr>
                <tr>
                  <td><Link href="/terms/ssl-tls" className="term-name">SSL/TLS</Link></td>
                  <td>HTTPSで使われる暗号化技術</td>
                </tr>
                <tr>
                  <td><Link href="/terms/cookie" className="term-name">Cookie</Link></td>
                  <td>HTTPSで安全にやり取りされる小さなデータ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>HTTPSを使ってデータをやり取りするWeb APIが一般的</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FAQAccordion faqs={httpsFAQs} />
      </main>
    </div>
  )
}
