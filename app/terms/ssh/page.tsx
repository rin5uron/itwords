import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdSubtleHorizontal from '@/app/components/AdSubtleHorizontal'
import FAQAccordion from '@/app/components/FAQAccordion'
import SSHDemo from './SSHDemo'
import SSHAccessFromOtherDemo from './SSHAccessFromOtherDemo'

export const metadata: Metadata = {
  title: 'SSHとは？遠隔ログイン・暗号化の仕組みを初心者向けに解説',
  description: 'SSH（Secure Shell）とは？サーバーへの遠隔ログイン・暗号化・秘密鍵の基本を初心者向けに解説。体験デモ付き。',
  keywords: ['SSH', 'Secure Shell', 'SSH とは', 'リモート接続', '遠隔ログイン', 'サーバー接続', '秘密鍵', '公開鍵', 'ターミナル', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'SSHとは？遠隔ログイン・暗号化の仕組みを初心者向けに解説',
    description: 'SSH（Secure Shell）とは？遠隔ログイン・暗号化の仕組みを初心者向けに解説。',
    type: 'article',
    images: [
      { url: '/images/terms/ssh-hero.png', width: 1536, height: 1024, alt: 'SSH - 手元のPCから遠くのサーバーに安全に接続する仕組み' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSHとは？遠隔ログイン・暗号化の仕組みを初心者向けに解説',
    description: 'SSH（Secure Shell）とは？遠隔ログイン・暗号化の仕組みを初心者向けに解説。',
    images: ['/images/terms/ssh-hero.png'],
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/ssh',
  },
}

export default function SSHPage() {
  const faqs = [
    {
      question: 'なぜ会社のパソコンからサーバーに入るのに SSH を使うのですか？',
      answer: '通信を暗号化して、安全にサーバーへログインするためです。',
    },
    {
      question: 'SSH と sshd の違いは何ですか？',
      answer: 'ssh は「つなぎに行く側」、sshd は「つながれるのを待つ側」のプログラムです。',
    },
    {
      question: 'ポート22番とは何ですか？',
      answer: 'SSHの通信でよく使われる、サーバー側の入口番号です。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="SSHとは？会社のパソコンからサーバーに入る仕組み（小学生でもわかる）"
        description="会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログイン・暗号化・秘密鍵の基本を初心者向けに解説します。"
        datePublished="2026-02-01"
        dateModified="2026-02-03"
      />

      <TermPageHeader
        termName="SSH"
        reading="エスエスエッチ / Secure Shell"
        icon="fas fa-terminal"
        dateCreated="2026-02-01"
        dateModified="2026-02-03"
        summaryItems={[
          'SSHでサーバーに入るとは？',
          'SSHで安全が守られる仕組み',
          '実際のSSH接続方法（コマンド／GUI）',
        ]}
        heroImage={
          <div
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto clamp(24px, 4vw, 32px) auto',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              aspectRatio: '3 / 2',
            }}
          >
            <Image
              src="/images/terms/ssh-hero.png"
              alt="SSH - 手元のPCから遠くのサーバーに安全に接続する仕組み"
              width={1536}
              height={1024}
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        }
      />

      <AdSubtleHorizontal adSlot="5675174441" position="bottom" />

      <main>
        <section className="term-content-section">
          <h2>概要</h2>
          <p>
            <strong>SSH（Secure Shell）</strong>とは、
            <strong>離れた場所にあるコンピュータ（サーバー）に、ネットワークを通じて安全に「入る」ための仕組み</strong>です。
          </p>
          <p>
            <strong>サーバー</strong>とは、データを預かったりWebサイトを動かしたりする<strong>いつでも動いているコンピュータ</strong>です。
            そのサーバーが会社の奥の機械室や、遠くのデータセンターにあるとき、毎回その場所まで行ってキーボードをつなぐのは大変ですよね。
          </p>
          <p>
            SSHを使うと、<strong>自分の席のパソコンから、ネットワーク越しにサーバーに入ることができます。</strong>
            そして、やり取りする内容は<strong>暗号化</strong>（読まれないようにすること）されるので、途中で誰かに盗み見されにくい、安全な仕組みです。
          </p>
          <div
            className="note"
            style={{
              padding: 'clamp(14px, 3vw, 20px)',
              marginTop: '1.8em',
              marginBottom: '1.2em',
              border: '2px solid #14b8a6',
              borderLeft: '6px solid #14b8a6',
              borderRadius: '8px',
              backgroundColor: '#f0fdfa',
              boxShadow: '0 2px 8px rgba(20, 184, 166, 0.12)',
            }}
          >
            <strong><i className="fas fa-lightbulb" aria-hidden /> 一言でいうと</strong>
            <p style={{ margin: '8px 0 0 0', fontSize: '1em', lineHeight: 1.6 }}>
              SSH ＝ 遠くのコンピュータに、安全にログインするための仕組み
            </p>
          </div>
        </section>

        <section className="term-content-section">
          <h2>SSHでサーバーに入るとは？</h2>
          <p>
            会社のサーバーにつなぐとは、<strong>自分の席のパソコンから、遠くにあるサーバーに「入る」</strong>ことです。
          </p>
          <p>
            SSHが使われる場面で最も多いのは、自分の席のパソコンから、遠くにある会社のサーバーに入るときです。
          </p>
          <p>
            このデモでは、SSHでサーバーに入るまでの流れを、4つのステップに分けて確認します。
          </p>
          <SSHDemo />
          
        </section>

        <section className="term-content-section">
          <h2>実際のSSH接続方法</h2>
          <p>
            会社では、ターミナルの <code>ssh</code> コマンドまたはGUIツールを使って接続することが多いです。
          </p>

          <h3>1. サーバーへの入り方（接続方法は2つ）</h3>
          <p style={{ marginTop: '0.5em' }}>
            <strong>コマンド</strong>で接続するか、<strong>GUIツール</strong>で接続するか、どちらかです。
          </p>
          <p>
            コマンドで接続する場合は、ターミナルで次のように入力します。
          </p>
          <div className="code-example" style={{ marginTop: '0.5em' }}>
            <pre><code>{`ssh ユーザー名@サーバーのIPアドレス
例）ssh tanaka@192.168.1.100`}</code></pre>
          </div>
          <p style={{ marginTop: '0.8em', fontSize: '0.95em', color: '#64748b' }}>
            GUIツール（Tera Term、PuTTY、Termius など）を使う場合は、接続先・ユーザー名・ポートを入力する画面で同じ情報を指定します。
          </p>

          <h3>2. 認証の仕方（2つある）</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(12px, 3vw, 16px)',
            marginTop: '0.8em',
          }}>
            <div style={{
              padding: 'clamp(14px, 3vw, 18px)',
              border: '2px solid #cbd5e1',
              borderRadius: '8px',
              backgroundColor: '#f8fafc',
            }}>
              <p style={{ margin: '0 0 6px', fontWeight: 700, fontSize: '1em' }}>
                <i className="fas fa-key" aria-hidden style={{ color: '#64748b', marginRight: '6px' }} />
                パスワード認証
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.2em', fontSize: '0.95em', lineHeight: 1.7 }}>
                <li>接続するたびにパスワードを入力</li>
                <li>わかりやすいが、漏れると危険</li>
              </ul>
            </div>
            <div style={{
              padding: 'clamp(14px, 3vw, 18px)',
              border: '2px solid #14b8a6',
              borderRadius: '8px',
              backgroundColor: '#f0fdfa',
            }}>
              <p style={{ margin: '0 0 6px', fontWeight: 700, fontSize: '1em' }}>
                <i className="fas fa-lock" aria-hidden style={{ color: '#14b8a6', marginRight: '6px' }} />
                鍵認証（よく使われる）
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.2em', fontSize: '0.95em', lineHeight: 1.7 }}>
                <li>自分のPCに「鍵」を持っておく</li>
                <li>サーバーにペアとなる情報を登録</li>
                <li>パスワードより安全</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="term-content-section">
          <h2>SSHで安全が守られる仕組み</h2>
          <p>
            ネットワーク上では、データはさまざまな機器を経由して送られます。
            SSHが安全と言われる理由は、<strong>クライアントとサーバーの間の通信がすべて暗号化される</strong>からです。
            途中で誰かに見られても、中身を読むことができません。
          </p>
          <div
            className="note"
            style={{
              padding: 'clamp(14px, 3vw, 20px)',
              marginTop: '1.2em',
              marginBottom: '0.5em',
              border: '2px solid #cbd5e1',
              borderLeft: '6px solid #64748b',
              borderRadius: '8px',
              backgroundColor: '#f8fafc',
              boxShadow: '0 2px 8px rgba(100, 116, 139, 0.08)',
            }}
          >
            <strong><i className="fas fa-exclamation-triangle" aria-hidden /> 暗号化されていないと</strong>
            <ul style={{ margin: '6px 0 0', paddingLeft: '1.2em', fontSize: '0.95em', lineHeight: 1.7 }}>
              <li>パスワード</li>
              <li>入力したコマンド</li>
            </ul>
            <p style={{ margin: '4px 0 0', fontSize: '0.95em' }}>
              などが途中で盗み見される可能性があります。
            </p>
          </div>
        </section>

        <section className="term-content-section">
          <h2>sshdでMy PCを遠隔操作</h2>
          <p>
            ここまでは、「手元のPCから、会社のサーバーに入る」使い方を見てきました。
          </p>
          <p>
            SSHには、もう一つの使い方があります。自分のPCを「入り先」にすると、<strong>別のPCから自分のPCに入り、遠隔操作できる状態</strong>になります。
          </p>

          <hr style={{ margin: '1.5em 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

          <h3>別のPCから自分のPCに入る流れ</h3>
          <p>
            このデモでは、流れを確認できます。
          </p>
          <div
            style={{
              padding: '12px 16px',
              marginBottom: '1em',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.95em',
            }}
          >
            <strong>入られる側の条件：</strong>自分のPCで sshd を動かして待つ
          </div>
          <ol style={{ paddingLeft: '1.5em', lineHeight: 1.8 }}>
            <li>自分のPCを「入り先」にする</li>
            <li>別のPCから、つなぎに来る</li>
            <li>自分のPCに入れる</li>
          </ol>
          <div style={{ marginTop: '1em' }}>
            <SSHAccessFromOtherDemo />
          </div>

          <hr style={{ margin: '1.5em 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

          <div
            className="note"
            style={{
              padding: 'clamp(14px, 3vw, 20px)',
              marginTop: '1em',
              marginBottom: '1em',
              border: '2px solid #14b8a6',
              borderLeft: '6px solid #14b8a6',
              borderRadius: '8px',
              backgroundColor: '#f0fdfa',
              boxShadow: '0 2px 8px rgba(20, 184, 166, 0.12)',
            }}
          >
            <strong><i className="fas fa-lightbulb" aria-hidden /> ssh と sshd の違い</strong>
            <p style={{ margin: '8px 0 0 0', fontSize: '1em', lineHeight: 1.6 }}>
              <strong>ssh</strong> は「行く側」、<strong>sshd</strong> は「待つ側」のプログラムです。
            </p>
          </div>

          <hr style={{ margin: '1.5em 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

          <details className="ref-details">
            <summary><span className="ref-badge">補足</span>sshdを動かすには</summary>
            <div className="ref-details-content">
            <p style={{ marginTop: '12px', marginBottom: '8px' }}>
              かんたんにいうと、<strong>パソコンの種類によってやり方が異なります。</strong>
            </p>
            <ul style={{ marginBottom: 0, paddingLeft: '1.5em', lineHeight: 1.7 }}>
              <li>Windows：OpenSSH サーバーを有効にする</li>
              <li>Mac：システム設定の「共有」で「リモートログイン」をオン</li>
              <li>Linux：openssh-server をインストール</li>
            </ul>
            <p style={{ marginTop: '12px', marginBottom: 0, fontSize: '0.95em', color: '#64748b' }}>
              最初から sshd が入っているパソコンもあれば、あとから有効にするパソコンもあります。
            </p>
            </div>
          </details>
        </section>

        <section className="term-comparison">
          <h2>このページで使う用語</h2>
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
                  <td>クライアント</td>
                  <td>SSHで「つなぎに行く側」（手元のパソコンなど）</td>
                </tr>
                <tr>
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>SSHで「接続される側」（入り先のコンピュータ）</td>
                </tr>
                <tr>
                  <td>sshd</td>
                  <td>接続される側で動く、SSHの受付プログラム</td>
                </tr>
                <tr>
                  <td>ターミナル</td>
                  <td>コマンドを文字で入力する画面（CLI）</td>
                </tr>
                <tr>
                  <td>sshコマンド</td>
                  <td>SSHで接続するときに使うコマンド（例：<code>ssh user@host</code>）</td>
                </tr>
                <tr>
                  <td>ポート22</td>
                  <td>SSHがよく使う通信の入口番号</td>
                </tr>
                <tr>
                  <td><Link href="/terms/ip-address" className="term-name">IPアドレスとポート番号</Link></td>
                  <td>サーバーの住所と入口番号</td>
                </tr>
                <tr>
                  <td><Link href="/terms/ssl-tls" className="term-name">SSL/TLS</Link></td>
                  <td>Web通信を暗号化して安全にする仕組み</td>
                </tr>
                <tr>
                  <td><Link href="/terms/cli-gui" className="term-name">CLI / GUI</Link></td>
                  <td>文字で操作する画面と、ボタンで操作する画面</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
