import Link from 'next/link'
import Image from 'next/image'
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
    images: [
      {
        url: '/images/terms/aes-hero.png',
        width: 1200,
        height: 630,
        alt: 'AES暗号化のイメージ - 共通鍵暗号方式',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AES（Advanced Encryption Standard）とは？初心者向けにわかりやすく解説',
    description: 'AESの仕組みと使い方をわかりやすく解説。現代の暗号化技術の基本を学べます。',
    images: ['/images/terms/aes-hero.png'],
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

      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxHeight: '300px'
      }}>
        <Image
          src="/images/terms/aes-hero.png"
          alt="AES暗号化のイメージ - 共通鍵暗号方式"
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
            <strong>AES</strong>（Advanced Encryption Standard）とは、<strong>現代で最も広く使われている暗号化規格</strong>です。
            データを第三者に読み取られないように変換する「共通鍵暗号方式」で、<strong>同じ鍵を使って暗号化・復号化</strong>します。
          </p>
          <p>
            例えば、鍵を使ってメッセージを暗号化し、同じ鍵で復号化する仕組みです。
            <strong>米国政府が2001年に標準として採用</strong>し、高いセキュリティと高速な処理が特徴です。
          </p>
        </section>

        <section>
          <h2>共通鍵暗号方式とは？</h2>
          <p>
            AESは<strong>共通鍵暗号方式</strong>で、<strong>暗号化と復号化に同じ鍵を使う</strong>のが特徴です。
            同じ合鍵を持っている二人だけが開けられる金庫のようなイメージです。
          </p>
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
          <ul>
            <li><strong>AES-128</strong>：128ビットの鍵。一般的な用途に最適</li>
            <li><strong>AES-256</strong>：256ビットの鍵。最高レベルのセキュリティが必要な用途</li>
          </ul>
        </section>

        <section>
          <h2>AESの実用例</h2>
          <p>Wi-Fi通信（WPA2/WPA3）、HTTPS通信、ファイル暗号化、VPN、メッセージングアプリなど、幅広く使用されています。</p>
        </section>

      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
