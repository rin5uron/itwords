import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | 実践型IT用語辞典',
  description: '実践型IT用語辞典の利用規約です。本サイトのご利用にあたっての条件を定めています。',
}

export default function TermsOfServicePage() {
  return (
    <div className="container">
      <header>
        <h1>利用規約</h1>
      </header>

      <main>
        <section>
          <p>実践型IT用語辞典（以下「当サイト」）をご利用いただくにあたり、以下の利用規約（以下「本規約」）に同意いただいたものとみなします。本規約に同意されない場合は、当サイトのご利用をお控えください。</p>
        </section>

        <section>
          <h2>1. 適用</h2>
          <p>本規約は、当サイトのすべてのサービスおよびコンテンツの利用に適用されます。</p>
        </section>

        <section>
          <h2>2. 利用</h2>
          <p>当サイトは、個人の学習・リファレンス目的での利用を想定しています。当サイトのコンテンツを、商用・非商用を問わず、当サイトの許可なく複製・転載・改変・再配布することは禁止します。</p>
        </section>

        <section>
          <h2>3. 禁止事項</h2>
          <p>当サイトの利用にあたり、以下の行為を禁止します：</p>
          <ul>
            <li>法令または公序良俗に反する行為</li>
            <li>当サイトまたは第三者の権利を侵害する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>不正アクセス、またはその試み</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2>4. 免責</h2>
          <p>当サイトのコンテンツは、可能な限り正確な情報の掲載に努めていますが、正確性・完全性を保証するものではありません。当サイトのご利用により生じた損害について、当サイトは一切の責任を負いかねます。</p>
        </section>

        <section>
          <h2>5. コンテンツの変更・廃止</h2>
          <p>当サイトは、予告なくコンテンツの追加・変更・削除を行う場合があります。</p>
        </section>

        <section>
          <h2>6. 本規約の変更</h2>
          <p>当サイトは、必要に応じて本規約を変更することがあります。変更後の本規約は、本ページに掲載した時点で効力を生じるものとします。</p>
        </section>

        <section>
          <h2>7. お問い合わせ</h2>
          <p>本規約に関するご質問は、<Link href="/contact">お問い合わせ</Link>よりご連絡ください。</p>
        </section>

        <section>
          <p><strong>制定日：2026年1月</strong></p>
        </section>
      </main>

      <footer>
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
