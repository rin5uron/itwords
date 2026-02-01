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
    title: 'SSHとは？小学生でもわかる【会社のパソコンからサーバーに入る仕組み】',
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
          'SSHとは？遠くのサーバーに安全に入る仕組み',
          '手元のPCからサーバーに入る流れ',
          'ターミナルとSSHコマンドの基本',
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
        <section>
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
            そして、やり取りする内容は<strong>暗号化</strong>されるので、途中で誰かに盗み見されにくい、安全な仕組みです。
          </p>

          <div
            className="note"
            style={{
              padding: 'clamp(14px, 3vw, 20px)',
              marginTop: '1.2em',
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

        <section>
          <h2>手元のPCからサーバーに入る流れを体験できます</h2>
          <p>
            会社のPCは、最初からサーバーに「つなぐ準備」が整っていることが多いです。そのうえで、<strong>ターミナルで <code>ssh</code> コマンドを打つ</strong>か、<strong>GUIのツールで接続する</strong>かのどちらかになります。
          </p>
          {/* 参考画像を入れる場合：PuTTY や Termius の接続画面（ホスト名・ユーザー名の入力欄と「接続」ボタンが写っているスクリーンショット）がわかりやすいです */}
          <p>
            GUIのツールは、簡単にいうと<strong>ボタンや入力枠があるタイプ</strong>のソフトです（ホスト名・ユーザー名などを入力して接続ボタンを押すもの）。このページでは、ターミナルで打つ流れをデモで確認できます。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              gap: 'clamp(8px, 2vw, 12px)',
              marginBottom: '1em',
              padding: 'clamp(10px, 2.5vw, 14px)',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              whiteSpace: 'nowrap',
              overflowX: 'auto',
              maxWidth: '100%',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, flexShrink: 0 }}>
              <i className="fas fa-laptop" aria-hidden style={{ color: '#14b8a6' }} />
              手元のPC
            </span>
            <span style={{ color: '#94a3b8', flexShrink: 0 }}>→</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              <i className="fas fa-terminal" aria-hidden style={{ color: '#0d9488' }} />
              ターミナルでSSHコマンドを打つ
            </span>
          </div>
          <p>
            下のデモで、手元のPC → ネットワーク → サーバー（sshd）→ 接続完了の4ステップを確認できます。
          </p>
          <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <SSHDemo />
          </div>
          <div className="code-example" style={{ marginTop: '1.2em' }}>
            <pre><code>{`例: SSHでサーバーに接続するコマンド

ssh ユーザー名@サーバーのIPアドレス
例）ssh tanaka@192.168.1.100
    → 192.168.1.100 のサーバーに、tanaka というユーザーで入る`}</code></pre>
          </div>
        </section>

        <section>
          <h2>SSHの「S」＝ Secure（安全）</h2>
          <p>
            SSHの「S」は<strong>Secure（セキュア）</strong>＝「安全な」という意味です。
          </p>

          <p>
            ネットワーク上では、データがいろんな機械の間を流れます。
            もし暗号化していないと、悪意のある人が途中で「パスワード」や「打ったコマンド」を盗み見する可能性があります。
          </p>

          <p>
            SSHでは、<strong>クライアントとサーバーがやり取りする内容を暗号化</strong>します。
            なので、途中で誰かがキャッチしても、中身を読むのがとても難しくなります。
            会社の大事なサーバーに触るときに、SSHが使われる理由の一つがこれです。
          </p>

          <div
            className="note"
            style={{
              padding: 'clamp(14px, 3vw, 20px)',
              marginTop: '1.2em',
              marginBottom: '1.2em',
              border: '2px solid #14b8a6',
              borderLeft: '6px solid #14b8a6',
              borderRadius: '8px',
              backgroundColor: '#f0fdfa',
              boxShadow: '0 2px 8px rgba(20, 184, 166, 0.12)',
            }}
          >
            <strong><i className="fas fa-lightbulb" aria-hidden /> 似た考え方</strong>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: '1.2em', lineHeight: 1.7 }}>
              <li>Webページで使う<Link href="/terms/ssl-tls">SSL/TLS</Link> … 「通信を暗号化して安全にする」仕組み</li>
              <li>SSH … 「遠くのコンピュータにログインするとき」専用の、暗号化付きの仕組み</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>SSHでサーバーに入る方法</h2>
          <p>
            SSHでサーバーに入る方法は、主に2つあります。
          </p>

          <h3>① パスワードで入る</h3>
          <p>
            接続するときに、毎回パスワードを入力する方法です。わかりやすいですが、パスワードが漏れると危険です。
          </p>

          <h3>② 鍵で入る</h3>
          <p>
            <strong>鍵で入る</strong>方法では、自分だけの鍵を自分のパソコンに持っておき、入り先のパソコン（サーバー）には、その鍵と「おそろいのペア」になるもう1本の鍵を登録しておきます。
          </p>
          <p>
            入り先は「このペアの鍵を持っている人だけ、入れていい」と判断します。鍵は人に渡さない限り盗まれにくいので、<strong>パスワードより安全</strong>として、多くの会社で使われています。
          </p>
        </section>

        <section>
          <h2>別PCから自分のPCにもアクセスできる（SSHのもう一つの形）</h2>
          <p>
            いままでのは<strong>「手元のPC → 会社のサーバーに入る」</strong>形です。もう一つの形は、<strong>自分のPCを「入り先」にする</strong>使い方になります。
          </p>
          <p>
            「サーバー」は機械の名前ではなく<strong>「入り先」の役割</strong>の名前です。自分のPCで <strong>sshd</strong> を動かすと、そのとき自分のPCがその役になります。だから別のPCから、自分のPCにSSHで入れるようになります。
          </p>
          <div
            className="flow-diagram-mobile-wrap"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              gap: 'clamp(8px, 2vw, 12px)',
              marginBottom: '1em',
              padding: 'clamp(10px, 2.5vw, 14px)',
              backgroundColor: '#f5f3ff',
              borderRadius: '8px',
              border: '1px solid #c4b5fd',
              whiteSpace: 'nowrap',
              overflowX: 'auto',
              maxWidth: '100%',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, flexShrink: 0 }}>
              <i className="fas fa-laptop" aria-hidden style={{ color: '#8b5cf6' }} />
              別のPC（ssh でつなぎに行く）
            </span>
            <span style={{ color: '#94a3b8', flexShrink: 0 }}>→</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              <i className="fas fa-server" aria-hidden style={{ color: '#7c3aed' }} />
              自分のPC（sshd で待ってる・入り先）
            </span>
          </div>
          <p>
            下のデモで、その流れを先に確認できます。
          </p>
          <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <SSHAccessFromOtherDemo />
          </div>
          <div
            style={{
              padding: 'clamp(12px, 3vw, 16px)',
              marginTop: '1.2em',
              marginBottom: '1em',
              border: '2px solid #8b5cf6',
              borderLeft: '6px solid #8b5cf6',
              borderRadius: '8px',
              backgroundColor: '#f5f3ff',
            }}
          >
            <strong>sshd を一言でいうと</strong>
            <p style={{ margin: '8px 0 0 0', lineHeight: 1.6 }}>
              <strong>ssh</strong> は、こっちから「つなぎに行く」ときに打つコマンドです。<strong>sshd</strong> は、あっちで「つなぎに来るのを待っている」プログラムです。おそろいの<strong>ペア</strong>になっています。入り先のパソコンでは、sshd が「22番」という入口でずっと待っていて、誰かが <code>ssh</code> で来たら「はい、どうぞ」と受け付けます。
            </p>
          </div>
          <h3>sshd を動かすには</h3>
          <p>
            かんたんにいうと、<strong>パソコンの種類によってやり方がちがいます</strong>。Windows なら「機能の追加」で OpenSSH サーバーを入れます。Mac なら「システム設定」の「共有」で「リモートログイン」をオンにします。Linux なら <code>openssh-server</code> を入れます。最初から入っているパソコンもあれば、あとから入れるパソコンもあります。
          </p>
        </section>

        <section>
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
