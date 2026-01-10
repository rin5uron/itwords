import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import AESDemo from '@/components/AESDemo'

export const metadata: Metadata = {
  title: 'AES（Advanced Encryption Standard）とは？初心者向けにわかりやすく解説 | 実践型IT用語辞典',
  description: 'AES（Advanced Encryption Standard）とは何か、初心者向けにわかりやすく解説。暗号化の仕組み、AES-128・AES-256の違い、実用例を具体的に学べます。共通鍵暗号方式の基本も理解できるプログラミング初心者向けIT用語解説。',
  keywords: ['AES', 'AES とは', '暗号化', 'Advanced Encryption Standard', 'AES-128', 'AES-256', '共通鍵暗号', 'セキュリティ', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'AES（Advanced Encryption Standard）とは？初心者向けにわかりやすく解説',
    description: 'AESの仕組みと使い方をわかりやすく解説。現代の暗号化技術の基本を学べます。',
    type: 'article',
  },
}

export default function AESPage() {
  const faqs = [
    {
      question: 'AESとは何ですか？',
      answer: 'AES（Advanced Encryption Standard）とは、現代で最も広く使われている暗号化規格の一つです。データを第三者に読み取られないように変換する「共通鍵暗号方式」の一種で、米国政府が標準として採用しており、高いセキュリティ性能と処理速度を兼ね備えています。',
    },
    {
      question: 'AES-128とAES-256の違いは何ですか？',
      answer: 'AES-128とAES-256の違いは、暗号化に使用する「鍵の長さ」です。AES-128は128ビット（16バイト）の鍵を使用し、AES-256は256ビット（32バイト）の鍵を使用します。AES-256の方がより強固なセキュリティを提供しますが、その分処理時間が若干長くなります。',
    },
    {
      question: 'AESはどこで使われていますか？',
      answer: 'AESは、Wi-Fi通信の暗号化（WPA2/WPA3）、HTTPS通信、ファイルやディスクの暗号化、VPN通信、メッセージングアプリ（WhatsApp、Signalなど）、オンラインバンキングなど、幅広い場面で使用されています。',
    },
    {
      question: 'AESは安全ですか？',
      answer: 'AESは非常に高いセキュリティを持つ暗号化方式とされています。米国政府の機密情報保護にも採用されており、現時点で現実的な時間内にAESを破ることは極めて困難です。ただし、鍵の管理が適切でない場合や、古いモード（ECBなど）を使用した場合は脆弱性が生じる可能性があります。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="AES（Advanced Encryption Standard）とは？初心者向けにわかりやすく解説"
        description="AES（Advanced Encryption Standard）を初心者向けに解説。共通鍵暗号方式の仕組み、AES-128とAES-256の違い、実際の使用例を学べます。"
        datePublished="2024-01-09"
        dateModified="2024-01-09"
      />

      <TermHeader
        termName="AES"
        reading="エーイーエス / Advanced Encryption Standard"
        icon="fas fa-lock"
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>AES</strong>（Advanced Encryption Standard）とは、
            <strong>現代で最も広く使われている暗号化規格の一つ</strong>です。
          </p>

          <p>
            データを第三者に読み取られないように変換する「暗号化」の技術で、
            <strong>共通鍵暗号方式</strong>（対称鍵暗号方式）に分類されます。
          </p>

          <p>
            例えば、あなたが友人に秘密のメッセージを送りたいとします。
            そのまま送ると、途中で誰かに読まれてしまう可能性があります。
            そこで、<strong>特別な「鍵」を使ってメッセージを暗号化</strong>（意味不明な文字列に変換）し、
            友人は同じ鍵を使って暗号を解いて元のメッセージを読む、という仕組みです。
          </p>

          <p>
            AESは<strong>米国政府が2001年に標準として採用</strong>した暗号化規格で、
            高いセキュリティ性能と高速な処理が特徴です。
          </p>
        </section>

        <section>
          <h2>共通鍵暗号方式とは？</h2>
          <p>
            AESは<strong>共通鍵暗号方式</strong>（対称鍵暗号方式）と呼ばれる方式です。
            <strong>暗号化と復号化に同じ鍵を使う</strong>のが特徴で、まるで同じ合鍵を持っている二人だけが開けられる金庫のようなイメージです。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>共通鍵暗号（AES）</th>
                  <th>公開鍵暗号（RSA）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>鍵の種類</td>
                  <td>暗号化と復号化に同じ鍵を使用</td>
                  <td>暗号化と復号化に異なる鍵を使用</td>
                </tr>
                <tr>
                  <td>処理速度</td>
                  <td>高速</td>
                  <td>低速</td>
                </tr>
                <tr>
                  <td>用途</td>
                  <td>大量データの暗号化</td>
                  <td>鍵交換、デジタル署名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>体験してみよう：AES暗号化</h2>
          <p>
            <strong>💡 ポイント：</strong> 同じ鍵を使わないと復号化できません。これが「共通鍵暗号方式」の基本です。
          </p>

          <AESDemo />
        </section>

        <section>
          <h2>AES-128とAES-256の違い</h2>
          <p>
            AESには、使用する鍵の長さに応じて3つのバリエーションがあります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>鍵長</th>
                  <th>用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AES-128</strong></td>
                  <td>128ビット</td>
                  <td>一般的な用途に最適（十分なセキュリティ）</td>
                </tr>
                <tr>
                  <td><strong>AES-256</strong></td>
                  <td>256ビット</td>
                  <td>最高レベルのセキュリティが必要な用途</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>AESの実用例</h2>
          <p>AESは私たちの日常生活の様々な場面で使われています。</p>

          <ul>
            <li><strong>Wi-Fi通信</strong>：WPA2/WPA3で通信を暗号化</li>
            <li><strong>HTTPS通信</strong>：Webサイトとブラウザ間の通信を暗号化</li>
            <li><strong>ファイル・ディスクの暗号化</strong>：FileVault、BitLockerなど</li>
            <li><strong>VPN通信</strong>：IPsec、OpenVPNなど</li>
            <li><strong>メッセージングアプリ</strong>：WhatsApp、Signal、iMessageなど</li>
            <li><strong>パスワード管理ツール</strong>：1Password、LastPassなど</li>
          </ul>
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
                  <td className="term-name">暗号化（Encryption）</td>
                  <td>データを第三者に読み取られないように変換する技術</td>
                </tr>
                <tr>
                  <td className="term-name">復号化（Decryption）</td>
                  <td>暗号化されたデータを元に戻すこと</td>
                </tr>
                <tr>
                  <td className="term-name">RSA</td>
                  <td>公開鍵暗号方式の代表的なアルゴリズム</td>
                </tr>
                <tr>
                  <td className="term-name">SHA-256</td>
                  <td>ハッシュ関数の一種（暗号化ではなく一方向変換）</td>
                </tr>
                <tr>
                  <td className="term-name">TLS/SSL</td>
                  <td>HTTPS通信で使用される暗号化プロトコル（AESを使用）</td>
                </tr>
                <tr>
                  <td><Link href="/terms/zero-day" className="term-name">ゼロデイ攻撃</Link></td>
                  <td>脆弱性が修正される前に行われるサイバー攻撃</td>
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
