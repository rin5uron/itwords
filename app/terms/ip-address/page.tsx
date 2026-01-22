import Link from 'next/link'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPアドレスとは？初心者向けにわかりやすく解説 | 実践型IT用語辞典',
  description: 'IPアドレスとは何か、初心者向けにわかりやすく解説。サーバーやパソコンの「住所」として機能するIPアドレスの仕組み、IPv4とIPv6の違い、プライベートIPとパブリックIPについて学べます。',
  keywords: ['IPアドレス', 'IPアドレス とは', 'IPv4', 'IPv6', 'プライベートIP', 'パブリックIP', 'IP アドレス 確認', 'IT用語 わかりやすく', 'ネットワーク 初心者'],
  openGraph: {
    title: 'IPアドレスとは？初心者向けにわかりやすく解説',
    description: 'IPアドレスの仕組みとIPv4/IPv6の違いを住所の例えでわかりやすく説明。プライベートIPとパブリックIPの違いも理解できます。',
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
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="IPアドレスとは？初心者向けにわかりやすく解説"
        description="IPアドレスの役割とIPv4/IPv6の違いを初心者向けに解説。サーバーやデバイスの住所として機能する仕組みを学べます。"
        datePublished="2026-01-12"
        dateModified="2026-01-12"
      />

      <TermHeader
        termName="IPアドレス"
        reading="アイピーアドレス / IP Address"
        icon="fas fa-network-wired"
        dateCreated="2026-01-12"
        dateModified="2026-01-12"
      />

      <main>
        {/* 更新日（概要の上） */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2026-01-12 | 最終更新: 2026-01-12</span>
        </div>

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

          <div className="code-example">
            <pre><code>{`例: IPアドレスの形式

IPv4: 192.168.1.1
IPv6: 2001:0db8:85a3::8a2e:0370:7334`}</code></pre>
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
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
