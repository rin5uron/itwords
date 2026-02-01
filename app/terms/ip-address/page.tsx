import Link from 'next/link'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPアドレスとポート番号とは？小学生でもわかる【住所と部屋番号】',
  description: 'IPアドレスとポート番号とは？住所と部屋番号の比喩で今すぐ理解。IPv4/IPv6の違い、ポート80/443/25の役割、HTTP/SMTPとの関係まで初心者向けに解説します。',
  keywords: ['IPアドレス', 'ポート番号', 'IPアドレス とは', 'ポート番号 とは', 'IPv4', 'IPv6', 'ポート80', 'ポート443', 'ポート25', 'IT用語 わかりやすく', 'ネットワーク 初心者'],
  openGraph: {
    title: 'IPアドレスとポート番号とは？小学生でもわかる【住所と部屋番号】',
    description: 'IPアドレスとポート番号とは？住所と部屋番号の比喩で今すぐ理解。IPv4/IPv6の違い、ポート80/443/25の役割、HTTP/SMTPとの関係まで初心者向けに解説します。',
    type: 'article',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/ip-address',
  },
}

export default function IPAddressPage() {
  const faqs = [
    {
      question: 'IPアドレスとは何ですか？',
      answer: 'IPアドレス（Internet Protocol Address）とは、インターネットやネットワークに接続されたコンピュータやサーバーを識別するための番号です。郵便の住所のように、データを正しい送り先に届けるために使われます。',
    },
    {
      question: 'IPv4とIPv6の違いは何ですか？',
      answer: 'IPv4は「192.168.1.1」のような形式で、約43億個のアドレスを提供します。IPv6は「2001:0db8::1」のような形式で、ほぼ無限のアドレスを提供します。インターネットの普及によりIPv4が枯渇したため、IPv6が導入されました。',
    },
    {
      question: 'プライベートIPとパブリックIPの違いは何ですか？',
      answer: 'プライベートIPは家庭や企業の内部ネットワーク（LAN）で使われる非公開のIPアドレスです（例: 192.168.x.x）。パブリックIPはインターネット上で一意に識別される公開IPアドレスで、外部からアクセス可能です。',
    },
    {
      question: '自分のIPアドレスを確認する方法は？',
      answer: 'パブリックIPは「https://www.cman.jp/network/support/go_access.cgi」などのサイトで確認できます。プライベートIPは、Windowsなら「ipconfig」、Mac/Linuxなら「ifconfig」コマンドで確認できます。',
    },
    {
      question: 'ポート番号とは何ですか？',
      answer: 'ポート番号は、IPアドレスに付け加えて「どのサービスにアクセスするか」を指定する番号です。IPアドレスが「住所」なら、ポート番号は「部屋番号」のようなものです。Webページを見る時はポート80番（HTTP）または443番（HTTPS）、メールを送る時はポート25番（SMTP）が使われます。',
    },
    {
      question: 'ポート80番と443番の違いは何ですか？',
      answer: 'ポート80番はHTTP（暗号化なしのWebページ）、ポート443番はHTTPS（暗号化された安全なWebページ）用です。現代のWebサイトでは、セキュリティのためポート443番（HTTPS）が標準となっています。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="IPアドレスとは？初心者向けにわかりやすく解説"
        description="IPアドレスの役割とIPv4/IPv6の違いを初心者向けに解説。サーバーやデバイスの住所として機能する仕組みを学べます。"
        datePublished="2026-01-12"
        dateModified="2026-01-24"
      />

      <TermPageHeader
        termName="IPアドレスとポート番号"
        reading="アイピーアドレス / IP Address and Port Number"
        icon="fas fa-network-wired"
        dateCreated="2026-01-12"
        dateModified="2026-01-24"
        summaryItems={[
          'IPアドレスとは？デバイスの住所',
          'ポート番号とは？部屋番号の比喩',
          'IPv4とIPv6の違い',
          'プライベートIPとパブリックIPの違い',
          'プロトコルとポート番号の関係'
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>IPアドレス</strong>（IP Address / Internet Protocol Address）とは、
            <strong>インターネットやネットワークに接続されたデバイス（コンピュータ、サーバー、スマホなど）を識別するための番号</strong>です。
          </p>

          <p>
            想像してみてください。あなたが友達に手紙を送るとき、住所がないと届きませんよね。
            インターネットの世界でも同じです。
          </p>

          <p>
            <strong>IPアドレスは「デバイスの住所」</strong>です。
            Webサイトにアクセスするとき、あなたのパソコン（クライアント）は
            <Link href="/terms/server">サーバー</Link>のIPアドレスを使って正しい場所にリクエストを送ります。
          </p>

          <p>
            <strong>ポート番号</strong>は、IPアドレスに付け加えて「どの部屋（サービス）にアクセスするか」を指定する番号です。
            IPアドレスが「住所」なら、ポート番号は「部屋番号」のようなものです。
          </p>

          <div className="code-example">
            <pre><code>{`例: IPアドレスとポート番号の形式

IPv4: 192.168.1.1:80
IPv6: 2001:0db8:85a3::8a2e:0370:7334:443

IPアドレス:ポート番号
住所:部屋番号`}</code></pre>
          </div>
        </section>

        <section>
          <h2>IPアドレスの役割</h2>
          <p>
            IPアドレスには2つの重要な役割があります。
          </p>

          <h3>1. デバイスの識別</h3>
          <p>
            ネットワーク上のすべてのデバイスは、一意のIPアドレスを持ちます。
            これにより、「どのデバイスが」「どこにいるのか」を識別できます。
          </p>

          <h3>2. データの配送</h3>
          <p>
            IPアドレスを使って、データを正しい送り先に届けます。
            郵便配達員が住所を見て手紙を届けるように、
            ネットワーク機器はIPアドレスを見てデータを配送します。
          </p>

          <p className="note">
            <strong>例</strong>: あなたが「itwords.jp」にアクセスするとき：
          </p>
          <ol>
            <li>ブラウザが「itwords.jp」を<Link href="/terms/dns">DNS</Link>でIPアドレスに変換</li>
            <li>変換されたIPアドレス（例: 76.76.21.21）を使ってサーバーにアクセス</li>
            <li>サーバーがあなたのIPアドレス宛にレスポンスを返す</li>
          </ol>
        </section>

        <section>
          <h2>IPv4とIPv6</h2>
          <p>
            IPアドレスには2つのバージョンがあります。
          </p>

          <h3>IPv4（アイピーブイフォー）</h3>
          <p>
            現在最も広く使われているIPアドレスの形式です。
          </p>
          <ul>
            <li><strong>形式</strong>: 0〜255の数字を4つ、ドット（.）で区切る</li>
            <li><strong>例</strong>: <code>192.168.1.1</code>, <code>8.8.8.8</code></li>
            <li><strong>アドレス数</strong>: 約43億個（2<sup>32</sup>個）</li>
            <li><strong>問題点</strong>: インターネットの普及により、アドレスが枯渇</li>
          </ul>

          <h3>IPv6（アイピーブイシックス）</h3>
          <p>
            IPv4の枯渇問題を解決するために開発された新しい形式です。
          </p>
          <ul>
            <li><strong>形式</strong>: 16進数を8つ、コロン（:）で区切る</li>
            <li><strong>例</strong>: <code>2001:0db8:85a3::8a2e:0370:7334</code></li>
            <li><strong>アドレス数</strong>: 約340澗個（2<sup>128</sup>個、ほぼ無限）</li>
            <li><strong>状況</strong>: 徐々に普及が進んでいる</li>
          </ul>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>IPv4</th>
                  <th>IPv6</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>アドレス長</td>
                  <td>32ビット</td>
                  <td>128ビット</td>
                </tr>
                <tr>
                  <td>表記例</td>
                  <td>192.168.1.1</td>
                  <td>2001:0db8::1</td>
                </tr>
                <tr>
                  <td>アドレス数</td>
                  <td>約43億個</td>
                  <td>ほぼ無限</td>
                </tr>
                <tr>
                  <td>普及状況</td>
                  <td>広く普及</td>
                  <td>徐々に普及中</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>プライベートIPとパブリックIP</h2>
          <p>
            IPアドレスは、使われる場所によって2種類に分けられます。
          </p>

          <h3>プライベートIP（Private IP）</h3>
          <p>
            <strong>家庭や企業の内部ネットワーク（LAN）で使われる非公開のIPアドレス</strong>です。
          </p>
          <ul>
            <li><strong>範囲</strong>:
              <ul>
                <li><code>10.0.0.0</code> 〜 <code>10.255.255.255</code></li>
                <li><code>172.16.0.0</code> 〜 <code>172.31.255.255</code></li>
                <li><code>192.168.0.0</code> 〜 <code>192.168.255.255</code></li>
              </ul>
            </li>
            <li><strong>特徴</strong>: インターネットから直接アクセスできない</li>
            <li><strong>用途</strong>: 家庭内のWi-Fi、オフィス内のネットワーク</li>
          </ul>

          <h3>パブリックIP（Public IP）</h3>
          <p>
            <strong>インターネット上で一意に識別される公開IPアドレス</strong>です。
          </p>
          <ul>
            <li><strong>特徴</strong>: 世界中で重複しない、インターネットからアクセス可能</li>
            <li><strong>割り当て</strong>: ISP（インターネットサービスプロバイダー）から提供される</li>
            <li><strong>用途</strong>: Webサーバー、メールサーバー、家庭のルーター</li>
          </ul>

          <p className="note">
            <strong>例</strong>: あなたの家のネットワーク
          </p>
          <ul>
            <li><strong>ルーター</strong>: パブリックIP <code>203.0.113.50</code>（ISPから割り当て）</li>
            <li><strong>あなたのPC</strong>: プライベートIP <code>192.168.1.10</code>（ルーターが割り当て）</li>
            <li><strong>スマホ</strong>: プライベートIP <code>192.168.1.11</code>（ルーターが割り当て）</li>
          </ul>
          <p>
            インターネットにアクセスするとき、ルーターが<strong>NAT（Network Address Translation）</strong>という技術で、
            プライベートIPをパブリックIPに変換します。
          </p>
        </section>

        <section>
          <h2>IPアドレスの確認方法</h2>

          <h3>パブリックIPの確認</h3>
          <p>
            以下のようなWebサイトにアクセスすると、あなたの現在のパブリックIPアドレスを確認できます。
          </p>
          <ul>
            <li><a href="https://www.cman.jp/network/support/go_access.cgi" target="_blank" rel="noopener noreferrer">cman.jp - アクセス情報</a></li>
            <li><a href="https://ipinfo.io/" target="_blank" rel="noopener noreferrer">ipinfo.io</a></li>
          </ul>

          <h3>プライベートIPの確認</h3>
          <p>
            あなたのデバイスのプライベートIPアドレスは、以下の方法で確認できます。
          </p>

          <h4>Windows</h4>
          <div className="code-example">
            <pre><code>{`コマンドプロンプトを開いて：
ipconfig

IPv4アドレスの行を確認`}</code></pre>
          </div>

          <h4>Mac / Linux</h4>
          <div className="code-example">
            <pre><code>{`ターミナルを開いて：
ifconfig

または

ip addr show`}</code></pre>
          </div>
        </section>

        <section>
          <h2>ポート番号とは？「住所と部屋番号」の比喩</h2>
          <p>
            IPアドレスが「住所」なら、<strong>ポート番号は「部屋番号」</strong>です。
          </p>

          <p>
            一つの建物（サーバー）には、複数の部屋（サービス）があります。
            Webページを見る部屋、メールを送る部屋、ファイルをダウンロードする部屋など、
            それぞれに部屋番号（ポート番号）が割り当てられています。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>比喩</th>
                  <th>実際の意味</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>住所</td>
                  <td>IPアドレス</td>
                  <td>192.168.1.1</td>
                </tr>
                <tr>
                  <td>部屋番号</td>
                  <td>ポート番号</td>
                  <td>80番（Webページ）、443番（安全なWebページ）、25番（メール送信）</td>
                </tr>
                <tr>
                  <td>建物全体</td>
                  <td>サーバー</td>
                  <td>Webサーバー、メールサーバーなど</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>よく使われるポート番号</h3>
          <p>
            インターネットでは、よく使われるサービスに標準的なポート番号が決まっています。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>ポート番号</th>
                  <th>プロトコル</th>
                  <th>用途</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>80</code></td>
                  <td><Link href="/terms/http" className="term-name">HTTP</Link></td>
                  <td>Webページを表示</td>
                  <td>通常のWebサイト（暗号化なし）</td>
                </tr>
                <tr>
                  <td><code>443</code></td>
                  <td><Link href="/terms/http" className="term-name">HTTPS</Link></td>
                  <td>安全なWebページを表示</td>
                  <td>暗号化されたWebサイト</td>
                </tr>
                <tr>
                  <td><code>25</code></td>
                  <td><Link href="/terms/smtp" className="term-name">SMTP</Link></td>
                  <td>メールを送信</td>
                  <td>メール送信用のプロトコル</td>
                </tr>
                <tr>
                  <td><code>587</code></td>
                  <td>SMTP over TLS</td>
                  <td>安全にメールを送信</td>
                  <td>暗号化されたメール送信</td>
                </tr>
                <tr>
                  <td><code>110</code></td>
                  <td>POP3</td>
                  <td>メールを受信</td>
                  <td>メールを受信するプロトコル</td>
                </tr>
                <tr>
                  <td><code>143</code></td>
                  <td>IMAP</td>
                  <td>メールを受信（サーバーに保存）</td>
                  <td>サーバーにメールを保存したまま受信</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong>
            Webページを見る時は通常、ポート80番（HTTP）または443番（HTTPS）が使われます。
            メールを送る時は、ポート25番や587番（<Link href="/terms/smtp">SMTP</Link>）が使われます。
            ブラウザは通常、ポート番号を自動的に判断するので、私たちは意識する必要がありません。
          </p>

          <h3>ポート番号の書き方</h3>
          <p>
            IPアドレスとポート番号は、コロン（:）で区切って書きます。
          </p>

          <div className="code-example">
            <pre><code>{`例: IPアドレス:ポート番号

192.168.1.1:80      → HTTP（Webページ）
192.168.1.1:443     → HTTPS（安全なWebページ）
192.168.1.1:25      → SMTP（メール送信）

URLで書く場合：
http://192.168.1.1:80
https://192.168.1.1:443`}</code></pre>
          </div>

          <p>
            <strong>例：</strong>
            あなたが「https://itwords.jp」にアクセスするとき、
            ブラウザは自動的に「itwords.jpのIPアドレス:443番」に接続します。
            ポート443番はHTTPS用のポート番号なので、安全にWebページが表示されます。
          </p>
        </section>

        <section>
          <h2>プロトコルとポート番号の関係</h2>
          <p>
            <Link href="/terms/http">HTTP</Link>や<Link href="/terms/smtp">SMTP</Link>などのプロトコルは、
            インターネットという「同じ道」を走る「違う車」です。
            ポート番号は、その「車」がどの「部屋」に入るかを決める番号です。
          </p>

          <p>
            <strong>例：</strong>
          </p>
          <ul>
            <li>
              <strong>Webページを見る時：</strong>
              IPアドレス（住所）+ ポート80番または443番（部屋番号）で、
              <Link href="/terms/http">HTTP</Link>という「車」に乗ってWebページを取得します
            </li>
            <li>
              <strong>メールを送る時：</strong>
              IPアドレス（住所）+ ポート25番または587番（部屋番号）で、
              <Link href="/terms/smtp">SMTP</Link>という「車」に乗ってメールを送信します
            </li>
          </ul>

          <p className="note">
            <strong>💡 ポイント：</strong>
            インターネットという「同じ道」を、HTTPやSMTPなどの「違う車」が走ります。
            IPアドレスとポート番号が「住所と部屋番号」で、プロトコルが「その部屋で何をするか」を決めるルールです。
          </p>
        </section>

        <section>
          <h2>なぜドメインが必要なのか</h2>
          <p>
            IPアドレスは数字の羅列で、人間にとって覚えにくいという問題があります。
          </p>

          <p>
            例えば、あなたが「Googleにアクセスしたい」とき、
            <code>142.250.207.46</code>と入力するのは大変ですよね。
          </p>

          <p>
            そこで<Link href="/terms/domain">ドメイン</Link>（例: <code>google.com</code>）が使われます。
            ドメインは人間が読みやすい名前で、<Link href="/terms/dns">DNS</Link>という仕組みが
            ドメインをIPアドレスに自動変換してくれます。
          </p>

          <div className="code-example">
            <pre><code>{`ドメイン → DNS → IPアドレス

google.com → DNS解決 → 142.250.207.46
itwords.jp → DNS解決 → 76.76.21.21`}</code></pre>
          </div>

          <p>
            このおかげで、私たちは複雑なIPアドレスを意識せずに、
            覚えやすいドメイン名でWebサイトにアクセスできるのです。
          </p>
        </section>

        <section>
          <h2>IPアドレスとセキュリティ</h2>
          <p>
            IPアドレスはインターネット通信に不可欠ですが、セキュリティ上の注意点もあります。
          </p>

          <h3>IPアドレスから分かる情報</h3>
          <ul>
            <li><strong>おおまかな地域</strong>: 国や都市レベルの位置情報</li>
            <li><strong>ISP（プロバイダー）</strong>: どのインターネット事業者を使っているか</li>
          </ul>

          <p>
            ただし、IPアドレスだけでは個人を特定することはできません。
            詳細な個人情報（住所、氏名など）は含まれていません。
          </p>

          <h3>VPN（Virtual Private Network）</h3>
          <p>
            プライバシーを守りたい場合、VPNを使うことで、
            自分の本当のIPアドレスを隠し、別の地域のIPアドレスを使うことができます。
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
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>IPアドレスを持ち、クライアントにサービスを提供するコンピュータ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/domain" className="term-name">ドメイン</Link></td>
                  <td>IPアドレスを人間が読みやすい名前に変換したもの</td>
                </tr>
                <tr>
                  <td><Link href="/terms/dns" className="term-name">DNS</Link></td>
                  <td>ドメイン名をIPアドレスに変換するシステム</td>
                </tr>
                <tr>
                  <td><Link href="/terms/hosting-service" className="term-name">ホスティングサービス</Link></td>
                  <td>サーバーとIPアドレスをまとめて提供するサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP</Link></td>
                  <td>Webページを表示するプロトコル。ポート80番（HTTP）または443番（HTTPS）を使う</td>
                </tr>
                <tr>
                  <td><Link href="/terms/smtp" className="term-name">SMTP</Link></td>
                  <td>メールを送信するプロトコル。ポート25番、587番、465番を使う</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdBelowRelatedTerms />
      </main>
    </div>
  )
}
