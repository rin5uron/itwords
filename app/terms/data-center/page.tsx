import Link from 'next/link'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

const faqs = [
  {
    question: 'データセンターとは何ですか？',
    answer: 'データセンターとは、サーバーやネットワーク機器を24時間365日稼働させるための専用施設です。電源、冷却、セキュリティが整備され、Webサイトやアプリケーションのデータを保存・配信するサーバーが置かれています。',
  },
  {
    question: 'Webサイトを公開するにはデータセンターが必要ですか？',
    answer: 'はい、Webサイトを公開するためには、データセンターとWebサーバーが必ず必要になります。サーバーは24時間稼働する必要があるため、電源や冷却が整ったデータセンターに置かれることが一般的です。',
  },
  {
    question: 'Vercelとデータセンターの関係は？',
    answer: 'Vercelなどのホスティングサービスは、データセンター上でWebサーバーを提供しています。自分でデータセンターを用意する必要はなく、Vercelにコードをデプロイするだけで、データセンター内のサーバーでサイトが動きます。',
  },
  {
    question: 'DNSとデータセンターの関係は？',
    answer: 'データセンターにサーバーを置いても、URLでアクセスできるようにするにはDNSによる名前解決が不可欠です。Webサーバーを提供する事業者は、自社DNSまたは外部DNSサービスと必ず連携しています。',
  },
]

export default function DataCenterPage() {
  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="データセンターとは？初心者向けにわかりやすく解説"
        description="データセンターとは？Webサイト公開に必要な「サーバーの家」を初心者向けに解説。Vercel、DNSとの関係、インターネットの分業構造まで学べます。"
        datePublished="2026-01-29"
        dateModified="2026-01-29"
      />

      <TermPageHeader
        termName="データセンター"
        reading="データセンター / Data Center"
        icon="fas fa-building"
        dateCreated="2026-01-29"
        dateModified="2026-01-29"
        summaryItems={[
          'データセンターとは？「サーバーの家」の比喩',
          'Webサイト公開にはデータセンターとWebサーバーが必須',
          'Vercelはデータセンター上でWebサーバーを提供',
          'URLでアクセスするにはDNSが不可欠',
          'インターネットは分業されたインフラの連携で成り立っている'
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>データセンター</strong>（Data Center）とは、
            <strong>サーバーやネットワーク機器を24時間365日稼働させるための専用施設</strong>です。
          </p>

          <p>
            想像してみてください。あなたがWebサイトを見るとき、そのデータはどこかに保存されていますよね。
            そのデータを保存している<Link href="/terms/server">サーバー</Link>は、
            <strong>「データセンター」という専用の建物</strong>の中に置かれています。
          </p>

          <p>
            データセンターは、<strong>「サーバーの家」</strong>のようなものです。
            電源が止まらないように、暑くならないように、不正アクセスされないように、
            さまざまな設備が整えられた施設です。
          </p>
        </section>

        <section>
          <h2>Webサイト公開にはデータセンターとWebサーバーが必須</h2>
          <p>
            Webサイトを公開するためには、<strong>データセンターとWebサーバーが必ず必要</strong>になります。
          </p>

          <p>
            サーバーは24時間動き続ける必要があります。
            家庭用のパソコンを24時間つけっぱなしにするのは、電気代もかかるし故障のリスクもあります。
            そこで、<strong>サーバーを専門に管理する施設＝データセンター</strong>が使われます。
          </p>

          <p>
            データセンターには、以下のような設備があります。
          </p>
          <ul>
            <li><strong>電源</strong>: 停電してもバックアップ電源で稼働し続ける</li>
            <li><strong>冷却</strong>: サーバーは熱を出すため、常に適温を保つ</li>
            <li><strong>セキュリティ</strong>: 不正アクセスや物理的な侵入を防ぐ</li>
            <li><strong>ネットワーク</strong>: インターネットに高速で接続</li>
          </ul>
        </section>

        <section>
          <h2>Vercelはデータセンター上でWebサーバーを提供している</h2>
          <p>
            <Link href="/terms/vercel">Vercel</Link>などの<Link href="/terms/hosting-service">ホスティングサービス</Link>は、
            <strong>データセンター上でWebサーバーを提供</strong>しています。
          </p>

          <p>
            自分でデータセンターを借りたり、サーバーを設置したりする必要はありません。
            Vercelにコードをデプロイするだけで、データセンター内のサーバーでサイトが動きます。
            つまり、<strong>Vercel＝データセンター＋Webサーバーをまとめて提供してくれるサービス</strong>です。
          </p>
        </section>

        <section>
          <h2>URLでアクセスするにはDNSが不可欠</h2>
          <p>
            データセンターにサーバーを置いても、<code>itwords.jp</code>のようなURLでアクセスできるようにするには、
            <Link href="/terms/dns">DNS</Link>による<strong>名前解決が不可欠</strong>です。
          </p>

          <p>
            DNSは、ドメイン名を<Link href="/terms/ip-address">IPアドレス</Link>に変換する仕組みです。
            ブラウザはまずDNSに「itwords.jpのIPアドレスは？」と聞き、
            取得したIPアドレスを使ってWebサーバーに接続します。
          </p>

          <p>
            そのため、Webサーバーを提供する事業者は、
            <strong>自社DNSまたは外部DNSサービスと必ず連携</strong>しています。
            Vercelも、ドメインを入力するだけで自動的にDNS設定を行ってくれます。
          </p>
        </section>

        <section>
          <h2>ひとこと整理：インターネットは分業されたインフラの連携</h2>
          <p>
            <Link href="/terms/dns">DNS</Link>は<strong>「Webサイトが存在するための前提条件」</strong>です。
          </p>

          <p>
            インターネットは、<strong>分業されたインフラ同士の連携</strong>で成り立っています。
          </p>
          <ul>
            <li><strong>データセンター</strong>: サーバーを置く施設</li>
            <li><strong>Webサーバー</strong>: データを保存・配信するコンピュータ</li>
            <li><strong>DNS</strong>: ドメイン名をIPアドレスに変換する仕組み</li>
            <li><strong>HTTP/HTTPS</strong>: ブラウザとサーバーの間でデータをやり取りするルール</li>
          </ul>

          <p>
            これらの仕組みが連携することで、URLを入力するだけでWebサイトが表示されます。
            DNSという仕組みがあることで、Webサービスの提供と利用が成立し、
            インターネット上のビジネスが成り立っています。
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
                  <td>データセンターに置かれる。データを保存・配信するコンピュータ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/dns" className="term-name">DNS</Link></td>
                  <td>URLでアクセスするための前提条件。名前解決を行う</td>
                </tr>
                <tr>
                  <td><Link href="/terms/vercel" className="term-name">Vercel</Link></td>
                  <td>データセンター上でWebサーバーを提供するホスティングサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/hosting-service" className="term-name">ホスティングサービス</Link></td>
                  <td>データセンター内のサーバーを借りてWebサイトを公開するサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP/HTTPS</Link></td>
                  <td>サーバーとブラウザの間でデータをやり取りするルール</td>
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
