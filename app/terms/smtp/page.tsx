import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'SMTP（エスエムティーピー）とは？小学生でもわかる【メール送信のルール】',
  description: 'SMTPとは？メール送信用のプロトコルを図解で今すぐ理解。HTTPとの違い、ポート番号、メールの仕組みまで初心者向けに解説します。',
  keywords: ['SMTP', 'SMTP とは', 'SMTP わかりやすく', 'SMTP 初心者', 'メール プロトコル', 'メール送信', 'ポート25', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'SMTPとは？小学生でもわかる【メール送信のルール】',
    description: 'SMTPとは？メール送信用のプロトコルを図解で今すぐ理解。HTTPとの違い、ポート番号、メールの仕組みまで初心者向けに解説します。',
    type: 'article',
    url: 'https://itwords.jp/terms/smtp',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/smtp',
  },
}

const smtpFAQs = [
  {
    question: 'SMTPの読み方は？',
    answer: 'SMTPは「エスエムティーピー」と読みます。正式名称は「Simple Mail Transfer Protocol（シンプル メール トランスファー プロトコル）」で、日本語では「簡易メール転送プロトコル」と訳されます。',
  },
  {
    question: 'SMTPとHTTPの違いは何ですか？',
    answer: 'SMTPはメールを送信するためのプロトコルで、HTTPはWebページを表示するためのプロトコルです。どちらもインターネットという「同じ道」を使いますが、目的が違います。SMTPはメール送信専用、HTTPはWebページ閲覧専用の「車」のようなものです。',
  },
  {
    question: 'SMTPのポート番号は何番ですか？',
    answer: 'SMTPの標準ポート番号は25番です。ただし、セキュリティ強化のため、多くのメールサービスでは587番（SMTP over TLS）や465番（SMTPS）も使われています。',
  },
  {
    question: 'メールを送る時、SMTPはどこで使われますか？',
    answer: 'メールを送信するとき、あなたのメールソフト（Outlook、Gmailアプリなど）からメールサーバーに届けるまでにSMTPが使われます。メールサーバー同士のやり取りでもSMTPが使われ、最終的に受信者のメールサーバーに届きます。',
  },
  {
    question: 'POP3やIMAPとは何が違いますか？',
    answer: 'SMTPはメールを「送信」するためのプロトコルです。一方、POP3やIMAPはメールを「受信」するためのプロトコルです。メールを送る時はSMTP、メールを受け取る時はPOP3やIMAPが使われます。',
  },
]

export default function SMTPPage() {
  return (
    <div className="container">
      <StructuredData
        type="FAQPage"
        faqs={smtpFAQs}
      />
      <StructuredData
        type="Article"
        title="SMTP（エスエムティーピー）とは？小学生でもわかる【メール送信のルール】"
        description="SMTPとは？メール送信用のプロトコルを図解で今すぐ理解。HTTPとの違い、ポート番号、メールの仕組みまで初心者向けに解説します。"
        datePublished="2026-01-24"
        dateModified="2026-01-24"
      />
      <TermPageHeader
        termName="SMTP"
        reading="エスエムティーピー / Simple Mail Transfer Protocol"
        icon="fas fa-envelope"
        dateCreated="2026-01-24"
        dateModified="2026-01-24"
        summaryItems={[
          'SMTPとは？メールを送信するためのプロトコル',
          'HTTPとの違い：「同じ道を走る別の車」',
          'ポート番号25番の役割',
          'メール送信の仕組みと流れ'
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>

          <p>
            <strong>SMTP</strong>（Simple Mail Transfer Protocol）とは、
            <strong>「メールを送信するためのルール（通信規約）」</strong>です。
          </p>

          <p>
            あなたがメールを送るとき、メールソフト（Outlook、Gmailアプリなど）は
            メールサーバーに「このメールを送ってください」とお願いします。
            このやり取りをスムーズに行うための「共通語」がSMTPです。
          </p>

          <p>
            インターネットは大きな道路のようなものです。
            <Link href="/terms/http">HTTP</Link>はWebページを見るための「車」、
            SMTPはメールを送るための「車」です。
            <strong>同じ道を走りますが、目的が違うのです。</strong>
          </p>
        </section>

        <section>
          <h2>プロトコルとは？「同じ道を走る別の車」の比喩</h2>
          <p>
            インターネットは、世界中のコンピュータをつなぐ大きな道路のようなものです。
            この道路を、目的に応じて異なる「車」が走ります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>プロトコル</th>
                  <th>役割</th>
                  <th>比喩</th>
                  <th>ポート番号</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP</Link></td>
                  <td>Webページを表示する</td>
                  <td>観光バス（Webページを運ぶ）</td>
                  <td>80番（HTTP）、443番（HTTPS）</td>
                </tr>
                <tr>
                  <td><span className="term-name">SMTP</span></td>
                  <td>メールを送信する</td>
                  <td>郵便トラック（メールを運ぶ）</td>
                  <td>25番（標準）、587番、465番</td>
                </tr>
                <tr>
                  <td>POP3</td>
                  <td>メールを受信する</td>
                  <td>郵便受けから取り出す</td>
                  <td>110番</td>
                </tr>
                <tr>
                  <td>IMAP</td>
                  <td>メールを受信する（サーバーに保存）</td>
                  <td>郵便受けを確認する</td>
                  <td>143番</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong>
            インターネットという「同じ道」を、HTTPやSMTPなどの「違う車」が走っています。
            <Link href="/terms/ip-address">IPアドレスとポート番号</Link>が「住所と部屋番号」なら、
            プロトコルは「その部屋で何をするか」を決めるルールです。
          </p>
        </section>

        <section>
          <h2>SMTPとHTTPの違い</h2>
          <p>
            SMTPと<Link href="/terms/http">HTTP</Link>は、どちらもインターネットでデータをやり取りするプロトコルですが、
            目的が違います。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>SMTP</th>
                  <th>HTTP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>目的</strong></td>
                  <td>メールを送信する</td>
                  <td>Webページを表示する</td>
                </tr>
                <tr>
                  <td><strong>使う場面</strong></td>
                  <td>メール送信時</td>
                  <td>Webページ閲覧時</td>
                </tr>
                <tr>
                  <td><strong>ポート番号</strong></td>
                  <td>25番（標準）、587番、465番</td>
                  <td>80番（HTTP）、443番（HTTPS）</td>
                </tr>
                <tr>
                  <td><strong>通信の方向</strong></td>
                  <td>主に送信（一方向）</td>
                  <td>双方向（リクエストとレスポンス）</td>
                </tr>
                <tr>
                  <td><strong>データ形式</strong></td>
                  <td>メール形式（テキスト）</td>
                  <td>HTML、JSON、画像など</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>例：</strong>
            あなたが友達にメールを送る時はSMTPが使われます。
            一方、Webサイトを見る時は<Link href="/terms/http">HTTP</Link>が使われます。
            どちらもインターネットという「同じ道」を使いますが、
            目的が違うので「違う車」に乗っているようなものです。
          </p>
        </section>

        <section>
          <h2>メール送信の仕組み</h2>
          <p>
            メールを送信するとき、裏側でこんなやり取りが起きています：
          </p>

          <ol>
            <li>
              <strong>メール作成：</strong>
              あなたがメールソフトでメールを作成し、「送信」ボタンを押す
            </li>
            <li>
              <strong>SMTPサーバーに接続：</strong>
              メールソフトがSMTPサーバー（メール送信用のサーバー）に接続する
            </li>
            <li>
              <strong>認証：</strong>
              あなたのメールアドレスとパスワードで認証する
            </li>
            <li>
              <strong>メール送信：</strong>
              SMTPサーバーに「このメールを送ってください」と依頼する
            </li>
            <li>
              <strong>サーバー間の配送：</strong>
              SMTPサーバーが受信者のメールサーバーにメールを届ける
            </li>
            <li>
              <strong>受信者のメールボックスに保存：</strong>
              受信者のメールサーバーがメールを受け取り、メールボックスに保存する
            </li>
          </ol>

          <p className="note">
            <strong>💡 ポイント：</strong>
            メールを「送る」時はSMTPが使われますが、
            メールを「受け取る」時はPOP3やIMAPという別のプロトコルが使われます。
          </p>
        </section>

        <section>
          <h2>SMTPのポート番号</h2>
          <p>
            <Link href="/terms/ip-address">IPアドレス</Link>が「住所」なら、
            ポート番号は「部屋番号」のようなものです。
            SMTPには、いくつかのポート番号が使われます。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>ポート番号</th>
                  <th>用途</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>25</code></td>
                  <td>標準SMTP</td>
                  <td>メールサーバー同士のやり取りで使われる（通常は暗号化なし）</td>
                </tr>
                <tr>
                  <td><code>587</code></td>
                  <td>SMTP over TLS</td>
                  <td>メール送信時に暗号化を使う（推奨）</td>
                </tr>
                <tr>
                  <td><code>465</code></td>
                  <td>SMTPS</td>
                  <td>SSL/TLSで暗号化されたSMTP（古い方式）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>例：</strong>
            Gmailでメールを送る時は、ポート587番が使われます。
            これは、メールの内容を暗号化して安全に送るためです。
          </p>

          <p className="note">
            <strong>🔒 セキュリティのヒント：</strong>
            メールを送る時は、ポート587番や465番を使うことで、
            メールの内容が暗号化され、盗み見されるリスクを減らせます。
          </p>
        </section>

        <section>
          <h2>プロトコルとは？「同じ道を走る別の車」の比喩</h2>
          <p>
            インターネットは、世界中のコンピュータをつなぐ大きな道路のようなものです。
            この道路を、目的に応じて異なる「車」が走ります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>プロトコル</th>
                  <th>役割</th>
                  <th>比喩</th>
                  <th>ポート番号</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP</Link></td>
                  <td>Webページを表示する</td>
                  <td>観光バス（Webページを運ぶ）</td>
                  <td>80番（HTTP）、443番（HTTPS）</td>
                </tr>
                <tr>
                  <td><span className="term-name">SMTP</span></td>
                  <td>メールを送信する</td>
                  <td>郵便トラック（メールを運ぶ）</td>
                  <td>25番（標準）、587番、465番</td>
                </tr>
                <tr>
                  <td>POP3</td>
                  <td>メールを受信する</td>
                  <td>郵便受けから取り出す</td>
                  <td>110番</td>
                </tr>
                <tr>
                  <td>IMAP</td>
                  <td>メールを受信する（サーバーに保存）</td>
                  <td>郵便受けを確認する</td>
                  <td>143番</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong>
            インターネットという「同じ道」を、HTTPやSMTPなどの「違う車」が走っています。
            <Link href="/terms/ip-address">IPアドレスとポート番号</Link>が「住所と部屋番号」なら、
            プロトコルは「その部屋で何をするか」を決めるルールです。
          </p>
        </section>

        <section>
          <h2>SMTPと他のメールプロトコルの関係</h2>
          <p>
            メールの送受信には、複数のプロトコルが関わっています。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>プロトコル</th>
                  <th>役割</th>
                  <th>使う場面</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="term-name">SMTP</span></td>
                  <td>メールを送信する</td>
                  <td>メール送信時</td>
                </tr>
                <tr>
                  <td>POP3</td>
                  <td>メールを受信する（ダウンロード）</td>
                  <td>メール受信時（メールをPCにダウンロード）</td>
                </tr>
                <tr>
                  <td>IMAP</td>
                  <td>メールを受信する（サーバーに保存）</td>
                  <td>メール受信時（サーバーに保存したまま）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>例：</strong>
            あなたがメールを送る時はSMTPが使われます。
            メールを受け取る時は、POP3やIMAPが使われます。
            メールの送受信には、それぞれ専用のプロトコルがあるのです。
          </p>
        </section>

        <section>
          <h2>実際の確認方法</h2>
          <p>
            あなたのメールソフトの設定を確認すると、SMTPサーバーの情報を見ることができます。
          </p>

          <div className="code-example">
            <pre><code>{`GmailのSMTP設定例：
サーバー: smtp.gmail.com
ポート: 587
暗号化: TLS

Outlook.comのSMTP設定例：
サーバー: smtp-mail.outlook.com
ポート: 587
暗号化: STARTTLS`}</code></pre>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong>
            メールソフトを設定する時、これらのSMTPサーバー情報を入力します。
            これにより、メールソフトがSMTPサーバーに接続して、メールを送信できるようになります。
          </p>
        </section>

        <section>
          <h2>日常生活でのSMTPの例</h2>
          <p>
            SMTPは、私たちが毎日使っているメールの裏側で活躍しています。
            普段意識していないだけで、実はたくさんの場面で利用されているのです。
          </p>

          <h3>1. Gmailでメールを送る</h3>
          <p>
            GmailアプリやWebメールでメールを送るとき、
            裏側でSMTPが使われています。
            GmailのSMTPサーバー（smtp.gmail.com）に接続して、
            メールを送信します。
          </p>

          <h3>2. Outlookでメールを送る</h3>
          <p>
            Microsoft Outlookでメールを送る時も、SMTPが使われます。
            会社のメールサーバーや、Outlook.comのSMTPサーバーに接続して、
            メールを送信します。
          </p>

          <h3>3. メールマガジンの配信</h3>
          <p>
            企業がメールマガジンを配信する時も、SMTPが使われます。
            大量のメールを効率的に送るために、専用のSMTPサーバーが使われることもあります。
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
                  <td>Webページを表示するためのプロトコル。SMTPと同じ「インターネットの道」を使うが、目的が違う</td>
                </tr>
                <tr>
                  <td><Link href="/terms/ip-address" className="term-name">IPアドレスとポート番号</Link></td>
                  <td>IPアドレスが「住所」、ポート番号が「部屋番号」。SMTPはポート25番、587番、465番を使う</td>
                </tr>
                <tr>
                  <td>POP3</td>
                  <td>メールを受信するためのプロトコル。SMTPは送信、POP3は受信を担当</td>
                </tr>
                <tr>
                  <td>IMAP</td>
                  <td>メールを受信するためのプロトコル（サーバーに保存）。POP3と同様に受信を担当</td>
                </tr>
                <tr>
                  <td><Link href="/terms/dns" className="term-name">DNS</Link></td>
                  <td>ドメイン名をIPアドレスに変換する仕組み。メール送信時にもDNSが使われる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


        <FAQAccordion faqs={smtpFAQs} />
      </main>
    </div>
  )
}
