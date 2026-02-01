import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'
import WhiteHatDemo from '@/components/WhiteHatDemo'

export const metadata: Metadata = {
  title: 'ホワイトハッカーとは？仕事内容を体験デモで学ぶ | 実践型IT用語辞典',
  description: 'ホワイトハッカーとは何をする人？ブラックハッカーとの違いは？脆弱性診断の仕事を体験できるデモで、善意のハッカーの役割を初心者向けにわかりやすく解説。',
  keywords: ['ホワイトハッカー', 'White Hat', 'ホワイトハッカー とは', 'ブラックハッカー', 'グレーハッカー', 'セキュリティエンジニア', '脆弱性診断', 'ペネトレーションテスト', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'ホワイトハッカーとは？仕事内容を体験デモで学ぶ',
    description: '善意のハッカー「ホワイトハッカー」の仕事を実践デモで体験。脆弱性診断の流れを学べます。',
    type: 'article',
    images: [
      {
        url: '/images/terms/D259C20E-0772-4D3F-B6BF-4DA01517CECB.jpg',
        width: 1200,
        height: 630,
        alt: 'ホワイトハッカーとブラックハッカーの対比 - サイバーセキュリティにおける防御と攻撃',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ホワイトハッカーとは？仕事内容を体験デモで学ぶ',
    description: '善意のハッカー「ホワイトハッカー」の仕事を実践デモで体験。脆弱性診断の流れを学べます。',
    images: ['/images/terms/D259C20E-0772-4D3F-B6BF-4DA01517CECB.jpg'],
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/white-hat-hacker',
  },
}

export default function WhiteHatHackerPage() {
  const faqs = [
    {
      question: 'ホワイトハッカーとは何ですか？',
      answer: 'ホワイトハッカーとは、セキュリティの専門知識を善意の目的で使う技術者のことです。企業や組織から正式に依頼を受けて、システムの脆弱性を発見し、攻撃される前に対策を提案します。「白い帽子（White Hat）」は正義の象徴です。',
    },
    {
      question: 'ブラックハッカーとの違いは何ですか？',
      answer: 'ブラックハッカーは悪意を持ってシステムに不正侵入し、データを盗んだり破壊したりする犯罪者です。一方、ホワイトハッカーは正式な許可を得て、セキュリティを強化するために脆弱性を探します。技術は同じでも、目的と手段が真逆です。',
    },
    {
      question: 'グレーハッカーとは何ですか？',
      answer: 'グレーハッカーは、ホワイトとブラックの中間に位置する存在です。許可なくシステムに侵入することもありますが、悪意はなく、発見した脆弱性を企業に報告することが多いです。ただし、無断侵入は違法行為なので注意が必要です。',
    },
    {
      question: 'ホワイトハッカーになるには？',
      answer: 'プログラミング、ネットワーク、OS、セキュリティの深い知識が必要です。資格としてはCEH（認定ホワイトハッカー）、情報処理安全確保支援士などがあります。CTF（Capture The Flag）というセキュリティ競技に参加して腕を磨くのも有効です。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="ホワイトハッカーとは？仕事内容を体験デモで学ぶ"
        description="ホワイトハッカー（White Hat Hacker）を初心者向けに解説。善意のハッカーの仕事内容と役割を、脆弱性診断の体験デモで学べます。"
        datePublished="2026-01-14"
        dateModified="2026-01-14"
      />

      <TermPageHeader
        termName="ホワイトハッカー"
        reading="ホワイトハッカー / White Hat Hacker"
        icon="fas fa-user-shield"
        dateCreated="2026-01-14"
        dateModified="2026-01-14"
        summaryItems={[
          'ホワイトハッカーとは？善意でセキュリティを守る技術者',
          'ホワイトハット・ブラックハットの由来',
          '脆弱性診断の流れを体験するデモ',
          'ホワイトハッカーとブラックハッカーの違い',
          'グレーハッカー、仕事内容・なるには',
        ]}
      />

      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        height: 'auto',
        minHeight: '400px'
      }}>
        <Image
          src="/images/terms/D259C20E-0772-4D3F-B6BF-4DA01517CECB.jpg"
          alt="ホワイトハッカーとブラックハッカーの対比 - サイバーセキュリティにおける防御と攻撃"
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
            <strong>ホワイトハッカー</strong>（White Hat Hacker）とは、<strong>セキュリティの専門知識を善意の目的で使う技術者</strong>のことです。
            企業や組織から正式に依頼を受けて、システムの脆弱性を発見し、攻撃される前に対策を提案します。
          </p>
        </section>

        <section>
          <h2>「ホワイトハット」の由来</h2>
          <p>
            「White Hat（白い帽子）」という名前は、<strong>古い西部劇映画</strong>に由来します。
            西部劇では、正義のヒーローが白い帽子を被り、悪役が黒い帽子を被るのが定番でした。
          </p>
          <p>
            この伝統がセキュリティ業界にも持ち込まれ：
          </p>
          <ul>
            <li><strong>ホワイトハッカー（白帽子）</strong>：善意の技術者、正義の味方</li>
            <li><strong>ブラックハッカー（黒帽子）</strong>：悪意の犯罪者、悪役</li>
            <li><strong>グレーハッカー（灰色帽子）</strong>：その中間、善悪が曖昧</li>
          </ul>
        </section>

        <section>
          <h2>⚡ ホワイトハッカーの仕事を体験してみよう</h2>
          <p>
            脆弱性診断の流れを体験 👇
          </p>

          <WhiteHatDemo />
        </section>

        <section>
          <h2>ハッカーの種類</h2>
          <div style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>🤍 ホワイトハッカー（White Hat）</h3>
            <ul>
              <li>正式な許可を得てセキュリティテストを実施</li>
              <li>発見した脆弱性を企業に報告し、対策を提案</li>
              <li>法律を遵守し、倫理的に行動</li>
            </ul>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>🖤 ブラックハッカー（Black Hat）</h3>
            <ul>
              <li>許可なく不正侵入し、データを盗む・破壊する</li>
              <li>金銭目的、愉快犯、スパイ活動など</li>
              <li>完全な犯罪行為、逮捕されるリスク大</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>🩶 グレーハッカー（Gray Hat）</h3>
            <ul>
              <li>許可なく侵入するが、悪意はない</li>
              <li>脆弱性を発見したら企業に報告することが多い</li>
              <li>善意でも無断侵入は違法、リスクあり</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>ホワイトハッカーの主な仕事</h2>
          <ul>
            <li><strong>脆弱性診断</strong>：システムやWebアプリの弱点を探す</li>
            <li><strong>ペネトレーションテスト</strong>：実際に攻撃を試みて防御力を検証</li>
            <li><strong>セキュリティ監査</strong>：セキュリティ対策が適切か評価</li>
            <li><strong>インシデント対応</strong>：サイバー攻撃を受けた際の調査・復旧</li>
            <li><strong>セキュリティ教育</strong>：社員向けにセキュリティ意識を啓発</li>
          </ul>
        </section>

        <section>
          <h2>ホワイトハッカーに必要なスキル</h2>
          <ul>
            <li><strong>プログラミング</strong>：Python、JavaScript、C/C++など</li>
            <li><strong>ネットワーク知識</strong>：TCP/IP、HTTP、SSL/TLSなど</li>
            <li><strong>OS理解</strong>：Linux、Windows、macOSの内部構造</li>
            <li><strong>セキュリティ技術</strong>：暗号化、認証、ファイアウォールなど</li>
            <li><strong>攻撃手法の理解</strong>：SQLインジェクション、XSS、バッファオーバーフローなど</li>
          </ul>
        </section>

        <section>
          <h2>ホワイトハッカーになるには</h2>
          <ol>
            <li><strong>基礎知識の習得</strong>：プログラミング、ネットワーク、セキュリティを学ぶ</li>
            <li><strong>実践練習</strong>：CTF（Capture The Flag）競技に参加</li>
            <li><strong>資格取得</strong>：CEH、情報処理安全確保支援士、CompTIA Security+など</li>
            <li><strong>実務経験</strong>：セキュリティ企業でインターンやジュニアエンジニアとして働く</li>
            <li><strong>継続学習</strong>：新しい攻撃手法や対策を常にキャッチアップ</li>
          </ol>
        </section>

        <FAQAccordion faqs={faqs} />

        <section>
          <h2>関連用語</h2>
          <ul>
            <li><Link href="/terms/zero-day" style={{ color: '#8abdea', textDecoration: 'underline' }}>ゼロデイ攻撃</Link> - ホワイトハッカーが防ごうとする最難関の攻撃</li>
            <li><Link href="/terms/exploit" style={{ color: '#8abdea', textDecoration: 'underline' }}>エクスプロイト</Link> - ホワイトハッカーが発見・報告する攻撃コード</li>
          </ul>
        </section>

        <AdBelowRelatedTerms />
      </main>
    </div>
  )
}
