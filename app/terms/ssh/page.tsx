import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export const metadata: Metadata = {
  title: 'SSHとは？小学生でもわかる【会社のパソコンからサーバーに入る仕組み】',
  description: '会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログイン・暗号化・秘密鍵の基本を、初心者向けにやさしく解説します。',
  keywords: ['SSH', 'Secure Shell', 'SSH とは', 'リモート接続', 'サーバー接続', '秘密鍵', '公開鍵', 'ターミナル', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'SSHとは？小学生でもわかる【会社のパソコンからサーバーに入る仕組み】',
    description: '会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログインの基本を初心者向けに解説します。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSHとは？小学生でもわかる【会社のパソコンからサーバーに入る仕組み】',
    description: '会社のパソコンから会社のサーバーに安全に入る仕組みがSSH。遠隔ログインの基本を初心者向けに解説します。',
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
      answer: 'サーバーは多くの場合、データセンターなど別の場所にあります。直接キーボードをつないで操作する代わりに、SSHでネットワーク越しにログインして、コマンドで操作します。通信が暗号化されるので、安全に遠くのサーバーを扱えます。',
    },
    {
      question: 'SSHとパスワード入力の違いは？',
      answer: 'SSHでもパスワードで入る方法がありますが、より安全なのが「秘密鍵と公開鍵」を使う方法です。鍵を持っている人だけが入れます。パスワードは忘れたり漏れたりするリスクがありますが、鍵方式はその点で強く、多くの会社で使われています。',
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
          '実務での使われ方（オフィス・リモート・鍵渡し）',
          '会社のパソコン → サーバーに入る流れ',
          '暗号化で盗み見されにくくする',
          '秘密鍵・公開鍵でより安全に',
          '別のPCから自分のPCにもアクセスできる・sshdとは',
          'ターミナルと ssh コマンドの基本',
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>SSH（Secure Shell）</strong>とは、
            <strong>離れた場所にあるコンピュータ（サーバー）に、ネットワークを通じて安全に「入る」ための仕組み</strong>です。
          </p>

          

          <p>
            サーバーは、データを預かったりWebサイトを動かしたりする「いつでも動いているコンピュータ」です。
            そのサーバーが会社の奥の機械室や、遠くのデータセンターにあるとき、毎回その場所まで行ってキーボードをつなぐのは大変ですよね。
          </p>

          <p>
            SSHを使うと、<strong>自分の席のパソコンから、ネットワーク越しにサーバーに「入って」、コマンドで操作</strong>できます。
            しかも、やり取りする内容は<strong>暗号化</strong>されるので、途中で誰かに盗み見されにくい、安全な仕組みです。
          </p>

          <p className="note">
            <strong><i className="fas fa-lightbulb" aria-hidden /> 一言でいうと</strong>
            <br />
            SSH = 「遠くのコンピュータに、安全にログインするための仕組み」
          </p>
        </section>

        <section>
          <h2>実務での使われ方</h2>
          <p>
            SSHは、オフィスやリモート作業の場面でよく使われます。
            普段意識していないだけで、サーバーを触る仕事ではほぼ毎日のように利用されている仕組みです。
          </p>

          <h3>1. オフィスの自分の席からサーバーに入る</h3>
          <p>
            会社のサーバーは機械室やデータセンター、クラウド上にあることが多いです。
            毎回その場所まで行かず、自分の席のパソコンでターミナルを開き、<code>ssh ユーザー名@サーバーのアドレス</code> を打って中に入り、設定の確認やプログラムの起動などを行います。
          </p>

          <h3>2. 自宅や外出先から会社のサーバーに入る</h3>
          <p>
            リモートワークでは、自宅のPCやノートPCから会社のサーバーにSSHで接続することがあります。
            その際、秘密鍵を自分のPCに置いておき、公開鍵をサーバー側に登録しておく「鍵認証」がよく使われます。
          </p>

          <h3>3. 鍵を渡して「この人を入れていい」と許可する</h3>
          <p>
            チームでサーバーを共有するとき、管理者が「この人の公開鍵をサーバーに登録する」ことで、その人だけがSSHで入れるようにします。
            「鍵を渡す」＝公開鍵をサーバーに登録する、というイメージです。
          </p>
        </section>

        <section>
          <h2>会社のパソコンからサーバーに入る流れ</h2>
          <p>
            お友達がやっていた「会社のパソコン → 会社のサーバー」の流れを、順番に整理します。
          </p>

          <h3>1. 会社のパソコン（手元）</h3>
          <p>
            ここが<strong>クライアント</strong>（お客さん側）です。
            このパソコンで「ターミナル」という画面を開き、<strong>ssh</strong> というコマンドを打ちます。
          </p>

          <h3>2. ネットワーク（インターネットや社内LAN）</h3>
          <p>
            パソコンからサーバーへ、SSHのルールに従って「接続したい」という要求が送られます。
            このとき、<strong>パスワード</strong>や、あとで説明する<strong>秘密鍵</strong>を使って「自分は許可された人です」と証明します。
          </p>

          <h3>3. 会社のサーバー（遠く）</h3>
          <p>
            サーバー側では、<strong>SSHのサービス（sshd など）</strong>が動いていて、「誰かが入ろうとしている」のを受け付けます。
            パスワードや鍵が正しければ「OK」として、その人を中に入れます。
          </p>

          <h3>4. 入ったあと</h3>
          <p>
            接続が成功すると、ターミナルにサーバーの中の画面が表示されます。
            ここから、ファイルの確認・プログラムの起動・設定の変更など、サーバー上でできる操作を、コマンドで行います。
          </p>

          <div className="code-example">
            <pre><code>{`例: SSHでサーバーに接続するコマンド

ssh ユーザー名@サーバーのIPアドレス
または
ssh ユーザー名@サーバーのホスト名

例）ssh tanaka@192.168.1.100
    → 192.168.1.100 というサーバーに、tanaka というユーザーで入る`}</code></pre>
          </div>
        </section>

        <section>
          <h2>なぜ「安全」なの？暗号化の役割</h2>
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

          <p className="note">
            <strong><i className="fas fa-lightbulb" aria-hidden /> 似た考え方</strong>
            <br />
            Webページで使う<Link href="/terms/ssl-tls">SSL/TLS</Link>も「通信を暗号化して安全にする」仕組みです。SSHは「遠くのコンピュータにログインするとき」専用の、暗号化付きの仕組みだと思えばOKです。
          </p>
        </section>

        <section>
          <h2>秘密鍵と公開鍵（鍵で入る方法）</h2>
          <p>
            SSHでサーバーに入る方法は、主に2つあります。
          </p>

          <h3>① パスワードで入る</h3>
          <p>
            接続するときに、毎回パスワードを入力する方法です。わかりやすいですが、パスワードが漏れると危険です。
          </p>

          <h3>② 鍵（キー）で入る</h3>
          <p>
            <strong>秘密鍵</strong>と<strong>公開鍵</strong>のペアを使う方法です。
          </p>
          <ul>
            <li><strong>秘密鍵</strong> … 自分だけが持つ、絶対に人に見せない鍵。自分のパソコンに置いておく。</li>
            <li><strong>公開鍵</strong> … サーバー側に登録しておく鍵。こちらは配ってもよい。</li>
          </ul>
          <p>
            サーバーは「この公開鍵に対応する秘密鍵を持っている人だけを入れていい」と判断します。
            秘密鍵は他人に渡さない限り漏れにくいので、<strong>パスワードより安全</strong>として、多くの会社で使われています。
          </p>

          <p className="note">
            <strong><i className="fas fa-lightbulb" aria-hidden /> 覚え方</strong>
            <br />
            秘密鍵 = 自分だけの鍵。公開鍵 = サーバーに預けておく鍵。2つで1セット。
          </p>
        </section>

        <section>
          <h2>別のPCから自分のPCにもアクセスできる</h2>
          <p>
            「サーバー」は特別な機械ではなく、<strong>「接続される側（入り先）」の役割の名前</strong>です。
            だから、自分のPCで「接続を待つ側」のソフトを動かしておけば、そのPCが“サーバー”になり、<strong>別のPC（オフィスの同僚のPCや、自宅のもう一台のPCなど）から、自分のPCにSSHで入れる</strong>ようになります。
          </p>
          <p>
            この「接続を待つ側」で動くプログラムが <strong>sshd（エスエスエッチディー）</strong> です。
          </p>

          <h3>sshd とは</h3>
          <p>
            <strong>sshd</strong> は、SSHの仕組みのうち<strong>「接続される側」で動くプログラムの名前</strong>です。
            裏でずっと動いていて、「誰かがSSHで入ってこないか」を待っています。だいたい<strong>22番ポート</strong>という入口で待っています。
          </p>
          <p>
            「PCに最初から入っているの？」というと、<strong>OSによって違います</strong>。
            Windows では OpenSSH サーバーを「機能の追加」で有効にできます。Mac では最初から入っていますが、初期状態ではオフで、「システム設定 → 一般 → 共有」の「リモートログイン」をオンにすると動きます。Linux では <code>openssh-server</code> などをインストールして使います。
            つまり、<strong>標準で必ず入っているわけではなく、OSごとに「入っている／後から入れられる」が違う</strong>と覚えておくとよいです。
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
