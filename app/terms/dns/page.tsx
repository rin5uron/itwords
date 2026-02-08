'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
export default function DNSPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const dnsSteps = [
    { title: 'ブラウザにドメイン入力', description: 'itwords.jpにアクセス', icon: '🌐', color: '#007bff' },
    { title: 'DNSキャッシュ確認', description: 'ブラウザのキャッシュをチェック', icon: '💾', color: '#17a2b8' },
    { title: 'DNSリゾルバに問い合わせ', description: 'ISPのDNSサーバーに質問', icon: '🔍', color: '#ffc107' },
    { title: 'ルートサーバーへ', description: '.jpを管理するサーバーを教えてもらう', icon: '🌲', color: '#6c757d' },
    { title: 'TLDサーバーへ', description: 'itwords.jpの権威サーバーを教えてもらう', icon: '🏢', color: '#fd7e14' },
    { title: '権威サーバーから回答', description: 'IPアドレスを取得', icon: '✅', color: '#28a745' },
    { title: 'Webサーバーに接続', description: 'IPアドレスでサーバーにアクセス', icon: '🚀', color: '#28a745' }
  ]

  const nextStep = () => {
    if (currentStep < dnsSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const resetSteps = () => {
    setCurrentStep(0)
  }

  const faqs = [
    {
      question: 'DNSとは何ですか？',
      answer: 'DNS（Domain Name System）とは、ドメイン名をIPアドレスに変換するシステムです。「インターネットの電話帳」とも呼ばれ、人間が読みやすいドメイン名（例: google.com）を、コンピュータが理解できるIPアドレス（例: 142.250.207.46）に変換します。',
    },
    {
      question: 'DNS解決とは何ですか？',
      answer: 'DNS解決（名前解決）とは、ドメイン名をIPアドレスに変換する処理のことです。ブラウザがWebサイトにアクセスする前に、DNSサーバーに問い合わせてIPアドレスを取得します。この処理は通常、数ミリ秒〜数百ミリ秒で完了します。',
    },
    {
      question: 'DNSレコードとは何ですか？',
      answer: 'DNSレコードとは、ドメインとIPアドレスの対応関係や、メールサーバーの情報などを記録したデータです。主なレコードには、Aレコード（IPv4アドレス）、AAAAレコード（IPv6アドレス）、CNAMEレコード（別名）、MXレコード（メールサーバー）などがあります。',
    },
    {
      question: 'DNSの設定はどこで行いますか？',
      answer: 'DNSの設定は、ドメインを取得したレジストラ（お名前.com等）、またはホスティングサービス（Vercel、Cloudflare等）の管理画面で行います。多くのホスティングサービスでは、ドメインを入力するだけで自動的にDNS設定をしてくれます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="DNSとは？初心者向けにわかりやすく解説"
        description="DNSとは？ステップデモで名前解決の仕組みを今すぐ体験。ドメイン名からIPアドレス変換、DNSレコード、設定方法まで初心者向けに解説します。"
        datePublished="2026-01-12"
        dateModified="2026-01-19"
      />

      <TermPageHeader
        termName="DNS"
        reading="ディーエヌエス / Domain Name System"
        icon="fas fa-book"
        dateCreated="2026-01-12"
        dateModified="2026-01-19"
        summaryItems={[
          'DNSとは何か？なぜ必要なのか',
          'ステップデモで名前解決の流れを体験',
          'DNSレコードの種類と役割',
          'DNS設定方法と実践的な使い方'
        ]}
      />

      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto 2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        height: 'auto',
        minHeight: '400px'
      }}>
        <Image
          src="/images/terms/dns-hero.jpg"
          alt="DNS（Domain Name System） - インターネットの電話帳"
          width={1200}
          height={630}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
      </div>

      <main>
        <section>
          <h2>概要</h2>

          <p>
            <strong>DNS</strong>（Domain Name System）とは、
            <strong>「インターネットの電話帳」</strong>です。
          </p>

          <p>
            あなたがWebサイトにアクセスするとき、
            <code>google.com</code>のような<Link href="/terms/domain">ドメイン</Link>を入力しますよね。
            しかし、コンピュータは<Link href="/terms/ip-address">IPアドレス</Link>（例: <code>142.250.207.46</code>）でしか通信できません。
          </p>

          <p>
            そこで<strong>DNS</strong>が、ドメイン名をIPアドレスに自動変換してくれます。
            この処理を<strong>「名前解決」</strong>または<strong>「DNS解決」</strong>と呼びます。
          </p>

          <div className="code-example">
            <pre><code>{`DNS解決の例:

google.com → DNS解決 → 142.250.207.46
itwords.jp → DNS解決 → 76.76.21.21
github.com → DNS解決 → 140.82.121.4`}</code></pre>
          </div>

          <p>
            DNSがないと、私たちは数字の羅列（IPアドレス）を覚えて入力しなければなりません。
            DNSのおかげで、覚えやすいドメイン名を使ってインターネットを利用できるのです。
          </p>

          <p>
            DNSは<Link href="/terms/http">HTTP</Link>通信の前段階で動作し、
            Webサイトへのアクセスを支える重要なインフラです。
            ドメイン名をIPアドレスに変換することで、
            私たちは簡単にインターネットを利用できます。
            詳しくは<a href="https://www.cloudflare.com/ja-jp/learning/dns/what-is-dns/" target="_blank" rel="noopener noreferrer">Cloudflare - DNSとは</a>も参照してください。
          </p>
        </section>

        <section>
          <h2>体験してみよう：DNS解決の流れ</h2>
          <p>
            あなたがブラウザに「itwords.jp」と入力してから、
            実際にWebサーバーに接続するまでの流れを確認してみましょう。
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>DNS解決プロセス</h3>

            <div style={{ marginTop: '20px' }}>
              {dnsSteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    padding: '15px',
                    backgroundColor: index <= currentStep ? '#fff' : '#e9ecef',
                    border: `2px solid ${index === currentStep ? step.color : '#dee2e6'}`,
                    borderRadius: '8px',
                    opacity: index <= currentStep ? 1 : 0.5,
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{
                    fontSize: '32px',
                    marginRight: '15px',
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 5px 0', color: index <= currentStep ? step.color : '#6c757d' }}>
                      {step.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '14px' }}>{step.description}</p>
                  </div>
                  {index === currentStep && (
                    <div style={{
                      padding: '5px 15px',
                      backgroundColor: step.color,
                      color: '#fff',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      実行中
                    </div>
                  )}
                  {index < currentStep && (
                    <div style={{
                      padding: '5px 15px',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      完了
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={nextStep}
                disabled={currentStep === dnsSteps.length - 1}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: currentStep === dnsSteps.length - 1 ? '#6c757d' : '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentStep === dnsSteps.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                次のステップ
              </button>
              <button
                onClick={resetSteps}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                リセット
              </button>
            </div>

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              このプロセスは通常、数十ミリ秒〜数百ミリ秒で完了します
            </p>
          </div>
        </section>

        <section>
          <h2>DNSの仕組み</h2>
          <p>
            DNS解決は、複数のDNSサーバーが協力して行います。
          </p>

          <h3>DNSサーバーの種類</h3>

          <h4>1. DNSリゾルバ（フルサービスリゾルバ）</h4>
          <p>
            あなたのパソコンやスマホが最初に問い合わせるDNSサーバーです。
            通常、ISP（インターネットサービスプロバイダー）が提供しています。
          </p>
          <ul>
            <li><strong>役割</strong>: クライアントの代わりに、他のDNSサーバーに問い合わせる</li>
            <li><strong>例</strong>: GoogleのパブリックDNS（8.8.8.8）、Cloudflare（1.1.1.1）</li>
          </ul>

          <h4>2. ルートサーバー</h4>
          <p>
            DNSの最上位にあるサーバーです。
            世界中に13組のルートサーバーがあります。
          </p>
          <ul>
            <li><strong>役割</strong>: TLD（.com、.jpなど）を管理するサーバーの場所を教える</li>
          </ul>

          <h4>3. TLDサーバー（トップレベルドメインサーバー）</h4>
          <p>
            <code>.com</code>、<code>.jp</code>、<code>.org</code>などのTLDを管理するサーバーです。
          </p>
          <ul>
            <li><strong>役割</strong>: 各ドメインの権威サーバーの場所を教える</li>
          </ul>

          <h4>4. 権威サーバー（Authoritative Name Server）</h4>
          <p>
            実際にドメインとIPアドレスの対応情報を持っているサーバーです。
          </p>
          <ul>
            <li><strong>役割</strong>: ドメインに対応するIPアドレスを返す</li>
            <li><strong>例</strong>: Cloudflareの権威サーバー、AWSのRoute 53</li>
          </ul>
        </section>

        <section>
          <h2>DNSレコードの種類</h2>
          <p>
            DNSには、様々な種類のレコード（記録）があります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>レコード</th>
                  <th>説明</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>A</strong></td>
                  <td>ドメイン → IPv4アドレス</td>
                  <td>itwords.jp → 76.76.21.21</td>
                </tr>
                <tr>
                  <td><strong>AAAA</strong></td>
                  <td>ドメイン → IPv6アドレス</td>
                  <td>itwords.jp → 2606:4700::</td>
                </tr>
                <tr>
                  <td><strong>CNAME</strong></td>
                  <td>ドメインの別名（エイリアス）</td>
                  <td>www.itwords.jp → itwords.jp</td>
                </tr>
                <tr>
                  <td><strong>MX</strong></td>
                  <td>メールサーバーの指定</td>
                  <td>itwords.jp → mail.example.com</td>
                </tr>
                <tr>
                  <td><strong>TXT</strong></td>
                  <td>テキスト情報（認証など）</td>
                  <td>SPF、DKIM、ドメイン所有確認</td>
                </tr>
                <tr>
                  <td><strong>NS</strong></td>
                  <td>権威DNSサーバーの指定</td>
                  <td>itwords.jp → ns1.cloudflare.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>DNSキャッシュ</h2>
          <p>
            毎回すべてのDNSサーバーに問い合わせると時間がかかるため、
            DNSは<strong>キャッシュ</strong>（一時的な記録）を使います。
          </p>

          <h3>キャッシュの階層</h3>
          <ol>
            <li><strong>ブラウザキャッシュ</strong>: ブラウザが最近アクセスしたドメインを記憶</li>
            <li><strong>OSキャッシュ</strong>: パソコン/スマホのOSが記憶</li>
            <li><strong>リゾルバキャッシュ</strong>: ISPのDNSサーバーが記憶</li>
          </ol>

          <p>
            キャッシュに情報があれば、すぐにIPアドレスを取得できます。
            キャッシュがない場合のみ、ルートサーバーから順に問い合わせます。
          </p>

          <h3>TTL（Time To Live）</h3>
          <p>
            DNSレコードには<strong>TTL</strong>という有効期限が設定されています。
            TTLが切れると、キャッシュが削除され、再度DNSサーバーに問い合わせます。
          </p>
          <ul>
            <li><strong>短いTTL（例: 60秒）</strong>: IPアドレスの変更をすぐ反映したいとき</li>
            <li><strong>長いTTL（例: 86400秒=1日）</strong>: 変更が少なく、高速化を重視するとき</li>
          </ul>
        </section>

        <section>
          <h2>DNS設定の実際</h2>
          <p>
            Webサイトを公開する際、DNSの設定が必要です。
          </p>

          <h3>Vercelでドメインを設定する例</h3>
          <ol>
            <li><Link href="/terms/vercel">Vercel</Link>のプロジェクト設定を開く</li>
            <li>「Domains」タブで、取得した<Link href="/terms/domain">ドメイン</Link>を入力</li>
            <li>Vercelが指示するDNSレコードを、ドメインレジストラ（お名前.com等）に設定
              <ul>
                <li>Aレコード: <code>76.76.21.21</code></li>
                <li>CNAMEレコード: <code>cname.vercel-dns.com</code></li>
              </ul>
            </li>
            <li>DNS設定が反映されるのを待つ（数分〜48時間）</li>
            <li>Vercelが自動的にSSL証明書を発行（HTTPS化）</li>
          </ol>

          <p className="note">
            <strong>DNS伝搬（Propagation）</strong>: DNS設定の変更は、
            世界中のDNSサーバーに伝わるまで時間がかかります。
            通常は数分〜数時間、最大で48時間程度です。
          </p>
        </section>

        <section>
          <h2>パブリックDNSサービス</h2>
          <p>
            ISPのDNSが遅い場合、パブリックDNSサービスに変更できます。
          </p>

          <h3>主なパブリックDNS</h3>
          <ul>
            <li><strong>Google Public DNS</strong>: <code>8.8.8.8</code> / <code>8.8.4.4</code></li>
            <li><strong>Cloudflare DNS</strong>: <code>1.1.1.1</code> / <code>1.0.0.1</code> - 高速でプライバシー重視</li>
            <li><strong>Quad9</strong>: <code>9.9.9.9</code> - セキュリティ重視（悪意あるサイトをブロック）</li>
          </ul>

          <p>
            パソコンやルーターのDNS設定を変更することで、これらのサービスを利用できます。
          </p>
        </section>

        <section>
          <h2>深掘り：DNSはWebサイトが存在するための前提条件</h2>
          <p>
            Webサイトを公開するためには、<Link href="/terms/data-center">データセンター</Link>と<Link href="/terms/server">Webサーバー</Link>が必ず必要になります。
            <Link href="/terms/vercel">Vercel</Link>などのホスティングサービスは、データセンター上でWebサーバーを提供しています。
          </p>
          <p>
            しかし、WebサーバーがURLでアクセス可能になるためには、<strong>DNSによる名前解決が不可欠</strong>です。
            そのため、Webサーバーを提供する事業者は、自社DNSまたは外部DNSサービスと必ず連携しています。
          </p>
          <p className="note">
            <strong>ひとこと整理：</strong>
            DNSは「Webサイトが存在するための前提条件」。
            インターネットは、分業されたインフラ同士の連携で成り立っています。
          </p>
        </section>

        <section>
          <h2>DNSのセキュリティ</h2>

          <h3>DNSハイジャック</h3>
          <p>
            攻撃者がDNSの応答を改ざんし、偽のサイトに誘導する攻撃です。
          </p>

          <h3>DNS over HTTPS（DoH）</h3>
          <p>
            DNS通信を暗号化し、盗聴や改ざんを防ぐ技術です。
            最近のブラウザ（Chrome、Firefoxなど）はDoHをサポートしています。
          </p>

          <h3>DNSSEC</h3>
          <p>
            DNSの応答に電子署名を付けることで、改ざんを検知する技術です。
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
                  <td><Link href="/terms/domain" className="term-name">ドメイン</Link></td>
                  <td>DNSが解決する人間が読みやすい名前</td>
                </tr>
                <tr>
                  <td><Link href="/terms/ip-address" className="term-name">IPアドレス</Link></td>
                  <td>DNSが返す実際の通信先アドレス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>DNSが解決した後に接続するコンピュータ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/hosting-service" className="term-name">ホスティングサービス</Link></td>
                  <td>DNS設定を簡単にできるサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/vercel" className="term-name">Vercel</Link></td>
                  <td>DNS設定を自動化するホスティングサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/data-center" className="term-name">データセンター</Link></td>
                  <td>Webサーバーが置かれる施設。DNSと連携してWeb公開を支える</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  )
}
