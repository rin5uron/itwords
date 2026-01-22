import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'SSL/TLSとは？小学生でもわかる【HTTPSの🔒マークの正体】',
  description: 'なぜHTTPSには鍵マーク🔒がある？SSL/TLSの違いを3分で理解。「暗号化って何？」をクレジットカード入力の裏側で学べます。',
  keywords: ['SSL', 'TLS', 'SSL/TLS', 'HTTPS', '暗号化', 'セキュリティ', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'SSL/TLSとは？小学生でもわかる【HTTPSの🔒マークの正体】',
    description: 'なぜHTTPSには鍵マーク🔒がある？SSL/TLSの違いを3分で理解。暗号化の仕組みを体験デモで学べます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSL/TLSとは？小学生でもわかる【HTTPSの🔒マークの正体】',
    description: 'なぜHTTPSには鍵マーク🔒がある？SSL/TLSの違いを3分で理解。暗号化の仕組みを体験デモで学べます。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/ssl-tls',
  },
}

export default function SslTlsPage() {
  const faqs = [
    {
      question: 'SSLとTLSの違いは何ですか？',
      answer: 'TLSはSSLの後継バージョンです。SSLに見つかった脆弱性を改善したものがTLSで、仕組みはほぼ同じです。現在はTLS 1.3が最新ですが、「SSL」という名称が業界で定着しているため、「SSL/TLS」と併記されることが多いです。',
    },
    {
      question: 'HTTPSの「S」は何の略ですか？',
      answer: 'HTTPSの「S」はSecure（セキュア＝安全）の略です。HTTP通信をSSL/TLSで暗号化したものがHTTPSです。URLバーに表示される鍵マーク🔒は、この通信が暗号化されていることを示しています。',
    },
    {
      question: 'SSL/TLSは無料で使えますか？',
      answer: 'はい、Let\'s Encryptなどの無料のSSL/TLS証明書サービスがあります。VercelやNetlifyなどのホスティングサービスでは、自動的にHTTPS化（SSL/TLS対応）してくれるため、特別な設定は不要です。',
    },
    {
      question: 'なぜSSL/TLSが必要なのですか？',
      answer: 'HTTP通信は暗号化されていないため、通信内容が第三者に盗聴される可能性があります。クレジットカード情報、パスワード、個人情報などを送信する場合、SSL/TLSで暗号化することで安全に通信できます。また、Googleは検索ランキングでHTTPSサイトを優遇するため、SEO対策としても重要です。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="SSL/TLSとは？小学生でもわかる【HTTPSの🔒マークの正体】"
        description="なぜHTTPSには鍵マーク🔒がある？SSL/TLSの違いを3分で理解。暗号化の仕組みを体験デモで学べます。"
        datePublished="2026-01-18"
        dateModified="2026-01-18"
      />

      <TermHeader
        termName="SSL/TLS"
        reading="エスエスエル / ティーエルエス"
        icon="fas fa-lock"
        dateCreated="2026-01-18"
        dateModified="2026-01-18"
      />

      <TableOfContents />

      <main>
        {/* 更新日（概要の上） */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2026-01-18 | 最終更新: 2026-01-18</span>
        </div>

        <section>
          <h2>概要</h2>
          <p>
            <strong>SSL/TLS</strong>とは、<strong>インターネット通信を暗号化して安全にする仕組み</strong>です。
          </p>

          <p>
            あなたがAmazonでクレジットカード番号を入力するとき、その情報が第三者に盗まれないように「暗号化」されます。
            この暗号化を担当しているのが<strong>SSL/TLS</strong>です。
          </p>

          <p>
            URLバーに表示される<strong>鍵マーク🔒</strong>を見たことがありますか？
            これは「この通信はSSL/TLSで暗号化されているので安全ですよ」というサインです。
          </p>

          <p className="note">
            <strong>💡 このサイトもSSL/TLS対応</strong>
            <br />
            <code>https://itwords.jp</code> の「https」の「s」が、SSL/TLSで暗号化されていることを示しています。
          </p>
        </section>

        <section>
          <h2>SSLとTLSの違い</h2>
          <p>
            <strong>TLS（Transport Layer Security）</strong>は、<strong>SSL（Secure Sockets Layer）</strong>の後継バージョンです。
          </p>

          <h3>歴史</h3>
          <ul>
            <li><strong>SSL 1.0</strong> - 1994年（非公開、脆弱性あり）</li>
            <li><strong>SSL 2.0</strong> - 1995年（脆弱性あり、非推奨）</li>
            <li><strong>SSL 3.0</strong> - 1996年（脆弱性あり、非推奨）</li>
            <li><strong>TLS 1.0</strong> - 1999年（SSLの後継、SSL 3.0を改良）</li>
            <li><strong>TLS 1.1</strong> - 2006年</li>
            <li><strong>TLS 1.2</strong> - 2008年（現在も広く使われている）</li>
            <li><strong>TLS 1.3</strong> - 2018年（最新、高速・安全）</li>
          </ul>

          <p>
            <strong>現在はTLSが標準</strong>ですが、「SSL」という名称が業界で定着しているため、
            「SSL/TLS」「SSL証明書」と呼ばれることが多いです。
          </p>

          <p className="note">
            <strong>💡 覚え方</strong>
            <br />
            「SSL」は古い名前、「TLS」は新しい名前。でもみんな「SSL」って呼んでる。
          </p>
        </section>

        <section>
          <h2>HTTPとHTTPSの違い</h2>
          <p>
            <strong>HTTP</strong>は暗号化されていない通信、<strong>HTTPS</strong>はSSL/TLSで暗号化された通信です。
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
                  <td>❌ なし（平文）</td>
                  <td>✅ あり（暗号化）</td>
                </tr>
                <tr>
                  <td><strong>盗聴リスク</strong></td>
                  <td>⚠️ 高い</td>
                  <td>✅ 低い</td>
                </tr>
                <tr>
                  <td><strong>URLの例</strong></td>
                  <td>http://example.com</td>
                  <td>https://example.com 🔒</td>
                </tr>
                <tr>
                  <td><strong>鍵マーク</strong></td>
                  <td>❌ 表示されない</td>
                  <td>✅ 表示される</td>
                </tr>
                <tr>
                  <td><strong>Google評価</strong></td>
                  <td>⚠️ 警告表示</td>
                  <td>✅ SEO優遇</td>
                </tr>
                <tr>
                  <td><strong>使用場面</strong></td>
                  <td>⚠️ 個人情報を扱わないサイト</td>
                  <td>✅ ログイン、決済、個人情報入力</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>例え話</strong>：
            <br />
            HTTPは「ハガキ」で手紙を送るようなもの。誰でも読めてしまいます。
            <br />
            HTTPSは「封筒」で手紙を送るようなもの。中身は読めません。
          </p>
        </section>

        <section>
          <h2>SSL/TLSの仕組み（簡易版）</h2>
          <p>
            SSL/TLSは<strong>3つのステップ</strong>で通信を暗号化します：
          </p>

          <ol>
            <li>
              <strong>ハンドシェイク（握手）</strong>：
              <br />
              ブラウザとサーバーが「どの暗号化方式を使うか」を決める
            </li>
            <li>
              <strong>証明書の確認</strong>：
              <br />
              サーバーが「私は本物のAmazonです」という証明書を見せる
            </li>
            <li>
              <strong>暗号化通信</strong>：
              <br />
              決めた暗号化方式で、データを暗号化してやり取りする
            </li>
          </ol>

          <p className="note">
            <strong>💡 補足</strong>
            <br />
            SSL/TLSでは、<Link href="/terms/aes">AES</Link>などの暗号化方式が使われています。
          </p>
        </section>

        <section>
          <h2>SSL/TLSが使われている場面</h2>
          <ul>
            <li><strong>HTTPS通信</strong>：WebサイトとブラウザのHTTPS通信全て</li>
            <li><strong>オンラインバンキング</strong>：銀行サイトでの取引</li>
            <li><strong>ECサイト</strong>：Amazon、楽天などでのクレジットカード入力</li>
            <li><strong>SNS</strong>：Twitter、Instagram、FacebookなどのログインとID</li>
            <li><strong>メール</strong>：Gmailなどのメール送受信（SMTP over SSL/TLS）</li>
            <li><strong>VPN</strong>：リモートワークでの安全な通信</li>
          </ul>

          <p>
            <strong>つまり、私たちが日常的に使うほとんどの通信でSSL/TLSが使われています。</strong>
          </p>
        </section>

        <section>
          <h2>SSL/TLS証明書とは？</h2>
          <p>
            <strong>SSL/TLS証明書</strong>とは、「このサーバーは本物ですよ」という証明書です。
          </p>

          <p>
            例えば、偽のAmazonサイト（フィッシングサイト）があったとします。
            SSL/TLS証明書があれば、ブラウザは「このサイトは本物のAmazonではありません」と警告を出してくれます。
          </p>

          <p>
            詳しくは<a href="https://letsencrypt.org/ja/" target="_blank" rel="noopener noreferrer">Let&apos;s Encrypt公式サイト</a>や
            <a href="https://developer.mozilla.org/ja/docs/Web/Security/Transport_Layer_Security" target="_blank" rel="noopener noreferrer">MDN Web Docs - TLS</a>で確認できます。
          </p>

          <h3>証明書の種類</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>認証レベル</th>
                  <th>料金</th>
                  <th>用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>DV証明書</strong><br/>（Domain Validation）</td>
                  <td>ドメイン所有確認のみ</td>
                  <td>無料〜数千円/年</td>
                  <td>個人サイト、ブログ</td>
                </tr>
                <tr>
                  <td><strong>OV証明書</strong><br/>（Organization Validation）</td>
                  <td>組織の実在確認</td>
                  <td>数万円/年</td>
                  <td>企業サイト</td>
                </tr>
                <tr>
                  <td><strong>EV証明書</strong><br/>（Extended Validation）</td>
                  <td>厳格な企業審査</td>
                  <td>十数万円/年</td>
                  <td>銀行、ECサイト</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>無料証明書</strong>：Let&apos;s Encryptが有名。個人サイトなら十分です。
          </p>
        </section>

        <section>
          <h2>HTTPSサイトを作る方法</h2>
          <p>
            <Link href="/terms/vercel">Vercel</Link>や<Link href="/terms/hosting-service">Netlify</Link>などのホスティングサービスを使えば、
            <strong>自動的にHTTPS化</strong>してくれます。
          </p>

          <p>手順（Vercelの場合）：</p>
          <ol>
            <li><Link href="/terms/github">GitHub</Link>にコードをpush</li>
            <li>Vercelにデプロイ</li>
            <li>自動的にSSL/TLS証明書が発行され、HTTPSになる</li>
          </ol>

          <p className="note">
            <strong>💡 このサイトもVercelでHTTPS化</strong>
            <br />
            特別な設定なしで、自動的に<code>https://itwords.jp</code>になりました。
          </p>
        </section>

        <FAQAccordion faqs={faqs} />

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
                  <td>
                    <Link href="/terms/http" className="term-name">
                      HTTP
                    </Link>
                  </td>
                  <td>SSL/TLSで暗号化する前の通信プロトコル</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/aes" className="term-name">
                      AES
                    </Link>
                  </td>
                  <td>SSL/TLS内で使われる暗号化方式の一つ</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/vercel" className="term-name">
                      Vercel
                    </Link>
                  </td>
                  <td>自動的にSSL/TLS証明書を発行してくれるホスティングサービス</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/domain" className="term-name">
                      ドメイン
                    </Link>
                  </td>
                  <td>SSL/TLS証明書はドメインに対して発行される</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; {new Date().getFullYear()} itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
