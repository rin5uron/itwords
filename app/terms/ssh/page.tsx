import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'
import SSHDemo from './SSHDemo'
import SSHAccessFromOtherDemo from './SSHAccessFromOtherDemo'

export const metadata: Metadata = {
  title: 'SSHとは？小学生でもわかる【会社のパソコンからサーバーに入る仕組み】',
  description: '会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログイン・暗号化・秘密鍵の基本を、初心者向けにやさしく解説します。',
  keywords: ['SSH', 'Secure Shell', 'SSH とは', 'リモート接続', 'サーバー接続', '秘密鍵', '公開鍵', 'ターミナル', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'SSHとは？小学生もわかる【会社のパソコンからサーバーに入る仕組み】',
    description: '会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログインの基本を初心者向けに解説します。',
    type: 'article',
    images: [
      { url: '/images/ssh.png', width: 1536, height: 864, alt: 'SSH - 手元のPCから遠くのサーバーに安全に接続する仕組み' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSHとは？小学生でもわかる【会社のパソコンからサーバーに入る仕組み】',
    description: '会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログインの基本を初心者向けに解説します。',
    images: ['/images/ssh.png'],
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/ssh',
  },
}

export default function SSHPage() {
  const faqs = [
    {
      question: 'SSHとは何ですか？',
      answer: 'SSH（Secure Shell）とは、離れた場所にあるコンピュータ（例：会社のサーバー）に、ネットワークを通じて安全に「入る」ための仕組みです。パスワードや通信内容が暗号化されるので、第三者に盗み見されにくくなります。',
    },
    {
      question: 'なぜ「会社のパソコンからサーバーに入る」のにSSHを使うのですか？',
      answer: 'サーバーは多くの場合、データセンターなど別の場所にあります。直接キーボードをつないで操作する代わりに、SSHでネットワーク越しにサーバーに入ることができます。通信が暗号化されるので、安全に遠くのサーバーを扱えます。',
    },
    {
      question: 'SSHとパスワード入力の違いは？',
      answer: 'SSHでもパスワードで入る方法がありますが、より安全なのが「鍵で入る」方法です。自分だけが持つ鍵をパソコンに置き、サーバー側にはその鍵とペアになる鍵を登録しておく方式で、多くの会社で使われています。',
    },
    {
      question: 'ターミナルって何ですか？',
      answer: 'ターミナルは、文字（コマンド）でコンピュータに指示を出すための画面です。マウスでクリックするのではなく、「ssh user@server」のようなコマンドを打ってSSHでサーバーに接続します。プログラマーやインフラ担当の人がよく使います。',
    },
    {
      question: 'ポート22番って何ですか？',
      answer: 'SSHのサービスは、多くの場合「22番」という番号の入口（ポート）で待っています。IPアドレスが「住所」なら、ポートは「部屋番号」のようなものです。ssh コマンドは通常、自動的に22番に接続します。',
    },
    {
      question: 'sshdとは何ですか？',
      answer: 'sshdは、SSHの仕組みのうち「接続される側」で動くプログラムの名前です。裏で動いていて、22番ポートで「誰かがSSHで入ってこないか」を待っています。OSによって最初から入っている／後から有効にできるが違います。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="SSHとは？小学生でもわかる【会社のパソコンからサーバーに入る仕組み】"
        description="会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログイン・暗号化・秘密鍵の基本を初心者向けに解説します。"
        datePublished="2026-02-01"
        dateModified="2026-02-01"
      />

      <TermPageHeader
        termName="SSH"
        reading="エスエスエッチ / Secure Shell"
        icon="fas fa-terminal"
        dateCreated="2026-02-01"
        dateModified="2026-02-01"
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
              aspectRatio: '16 / 9',
            }}
          >
            <Image
              src="/images/ssh.png"
              alt="SSH - 手元のPCから遠くのサーバーに安全に接続する仕組み"
              width={1536}
              height={864}
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
          <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <SSHDemo />
          </div>
        </section>

        <section className="term-content-section">
          <h2>実際のSSH接続方法（コマンド／GUI）</h2>
          <p>
            SSHでサーバーに接続する方法はいくつかあります。会社では、コマンドまたはGUIツールを使って接続することが多いです。
          </p>

          <h3>接続方法は大きく2つ</h3>
          <h4>■ コマンドで接続する</h4>
          <p>
            ターミナルで <code>ssh</code> コマンドを入力して接続する方法です。主にエンジニアやIT担当者が使います。
          </p>
          <h4>■ GUIツールで接続する</h4>
          <p>
            ボタンや入力欄を使って接続する方法です。多くの会社では、この方法が使われています。
          </p>

          <h3>サーバーへの入り方も2つあります</h3>
          <h4>🔑 ① パスワードで入る</h4>
          <ul>
            <li>接続するたびに、パスワードを入力します</li>
            <li>分かりやすい方法ですが、漏れると危険です</li>
          </ul>
          <h4>🔐 ② 鍵で入る（よく使われる）</h4>
          <ul>
            <li>自分のパソコンに「鍵」を持っておきます</li>
            <li>サーバーには、その鍵とペアになる情報を登録します</li>
            <li>鍵を持っている人だけが入れる仕組みです</li>
            <li>パスワードより安全なため、多くの会社で使われています</li>
          </ul>

          <h3>参考：SSHでサーバーに接続するコマンド</h3>
          <div className="code-example" style={{ marginTop: '0.5em' }}>
            <pre><code>{`ssh ユーザー名@サーバーのIPアドレス
例）ssh tanaka@192.168.1.100`}</code></pre>
          </div>
        </section>

        <section className="term-content-section">
          <h2>SSHで安全が守られる仕組み</h2>
          <p>
            先ほど見た「SSHでサーバーに入る流れ」の中で、ネットワークを通る部分がありました。そのときに送られている情報は、<strong>すべて暗号化されています</strong>。
          </p>
          <p>
            SSHが安全と言われる理由は、<strong>通信の内容がすべて暗号化される</strong>からです。
          </p>
          <p>
            途中で誰かに見られても、中身を読むことができません。
          </p>
          <p>
            ネットワーク上では、データはさまざまな機器を経由して送られます。
          </p>
          <p>
            もし暗号化されていないと、
          </p>
          <ul>
            <li>パスワード</li>
            <li>入力したコマンド</li>
          </ul>
          <p style={{ marginTop: '-0.5em' }}>
            などが、途中で盗み見される可能性があります。
          </p>
          <p>
            SSHでは、クライアントとサーバーの間でやり取りする内容を<strong>すべて暗号化</strong>することで、安全にサーバーへ接続します。
          </p>
        </section>

        <section className="term-content-section">
          <h2>sshdでMy PCを遠隔操作</h2>
          <p>
            ここまでは、「手元のPCから、会社のサーバーに入る」使い方を見てきました。
          </p>
          <p>
            SSHには、もう一つの使い方があります。それは、自分のPCを「入り先」にする使い方です。
          </p>

          <hr style={{ margin: '1.5em 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

          <h3>別のPCから自分のPCに入る流れ（概要）</h3>
          <p>
            このデモでは、<strong>自分のPCが「入られる側」になる流れだけ</strong>を確認します。
          </p>
          <ol style={{ paddingLeft: '1.5em', lineHeight: 1.8 }}>
            <li>自分のPCを「入り先」にする（sshd を動かして待つ）</li>
            <li>別のPCから、つなぎに来る（ssh で接続する）</li>
            <li>自分のPCに入れる（遠隔操作できる状態）</li>
          </ol>
          <div style={{ maxWidth: '100%', overflowX: 'auto', marginTop: '1em' }}>
            <SSHAccessFromOtherDemo />
          </div>

          <hr style={{ margin: '1.5em 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

          <p style={{ fontSize: '0.95em', color: '#64748b' }}>
            ※ <strong>ssh</strong> は「行く側」、<strong>sshd</strong> は「待つ側」のプログラムです。
          </p>

          <hr style={{ margin: '1.5em 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

          <details style={{ marginTop: '1em', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>参考：sshdを動かすには</summary>
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
          </details>
        </section>

        <section className="term-content-section">
          <h2>よく出てくる用語</h2>
          <ul>
            <li><strong>クライアント</strong> … 接続する側（手元のパソコンなど）</li>
            <li><strong>サーバー</strong> … 接続される側。詳しくは<Link href="/terms/server">サーバー</Link>の用語ページへ。</li>
            <li><strong>sshd</strong> … その仕組みの「接続される側」で動くプログラムの名前。22番ポートで待っている。OSによって入っている／後から入れ方が違う。</li>
            <li><strong>ターミナル</strong> … コマンドを打つための画面。<Link href="/terms/cli-gui">CLI</Link>の一種。</li>
            <li><strong>ssh コマンド</strong> … SSHで接続するときに打つコマンド（例: <code>ssh user@host</code>）</li>
            <li><strong>ポート22</strong> … SSHのサービスがよく使う「入口」の番号。<Link href="/terms/ip-address">IPアドレスとポート番号</Link>の「部屋番号」に相当。</li>
          </ul>
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
                    <Link href="/terms/server" className="term-name">
                      サーバー
                    </Link>
                  </td>
                  <td>SSHで「入る」先のコンピュータ</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/ip-address" className="term-name">
                      IPアドレスとポート番号
                    </Link>
                  </td>
                  <td>サーバーの住所と、SSHの入口（ポート22）を理解するのに役立つ</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/ssl-tls" className="term-name">
                      SSL/TLS
                    </Link>
                  </td>
                  <td>SSHと同じく「通信を暗号化して安全にする」仕組み（Web用）</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/cli-gui" className="term-name">
                      CLI / GUI
                    </Link>
                  </td>
                  <td>SSHで使う「ターミナル」はCLI（文字で操作する画面）</td>
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
