import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import ZeroDayDemo from '@/components/ZeroDayDemo'

export const metadata: Metadata = {
  title: 'ゼロデイ攻撃とは？名前の由来から対策まで完全解説【実践デモ付き】 | 実践型IT用語辞典',
  description: 'ゼロデイ攻撃の名前の由来とは？なぜ「0日」と呼ばれるのか、防御が不可能な理由、今すぐできる対策を攻撃者の視点で体験できる実践デモで学べます。初心者にもわかりやすく解説。',
  keywords: ['ゼロデイ攻撃', 'Zero-day', 'ゼロデイ とは', 'ゼロデイ 由来', 'ゼロデイ攻撃 由来', 'セキュリティ', '脆弱性', 'サイバー攻撃', 'セキュリティパッチ', 'IT用語 わかりやすく', 'プログラミング 初心者', '体験デモ'],
  openGraph: {
    title: 'ゼロデイ攻撃とは？名前の由来から対策まで完全解説【実践デモ付き】',
    description: 'ゼロデイ攻撃の名前の由来とは？防御が不可能な理由と対策を攻撃者の視点で体験できます。',
    type: 'article',
    images: [
      {
        url: '/images/terms/zero-day-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ゼロデイ攻撃のイメージ - Day 0の脆弱性を狙うサイバー攻撃',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ゼロデイ攻撃とは？名前の由来から対策まで完全解説【実践デモ付き】',
    description: 'ゼロデイ攻撃の名前の由来とは？防御が不可能な理由と対策を攻撃者の視点で体験できます。',
    images: ['/images/terms/zero-day-hero.jpg'],
  },
}

export default function ZeroDayPage() {
  const faqs = [
    {
      question: 'なぜ「ゼロデイ」と呼ばれるのですか？',
      answer: '脆弱性が発見されてから修正パッチが提供されるまでの日数が「ゼロ日（0日）」、つまり対策する時間が全くない状態で攻撃が行われることから「ゼロデイ攻撃」と呼ばれています。英語では"Zero-day Attack"と表記され、「Day 0（0日目）」に攻撃される＝防御する猶予がゼロという意味が込められています。',
    },
    {
      question: 'ゼロデイ攻撃とは何ですか？',
      answer: 'ゼロデイ攻撃とは、ソフトウェアの脆弱性が発見されてから修正パッチが提供される前（対策日数がゼロの状態）に行われるサイバー攻撃のことです。開発者も利用者も対策する時間がないため、非常に危険な攻撃手法とされています。',
    },
    {
      question: 'ゼロデイ攻撃からどうやって身を守れば良いですか？',
      answer: 'ゼロデイ攻撃への完全な防御は困難ですが、OSやソフトウェアを常に最新の状態に保つ、セキュリティソフトを導入する、不審なリンクやファイルを開かない、多層防御を実施するなどの対策が有効です。',
    },
    {
      question: 'ゼロデイ脆弱性とは何ですか？',
      answer: 'ゼロデイ脆弱性とは、ソフトウェアやシステムに存在するセキュリティ上の欠陥で、開発者がまだ認識していないか、認識していても修正パッチを公開していない状態の脆弱性のことです。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="ゼロデイ攻撃とは？名前の由来から対策まで完全解説"
        description="ゼロデイ攻撃（Zero-day Attack）の由来・仕組み・対策を完全解説。なぜ「ゼロデイ」と呼ばれるのか、防ぐ手段がない理由とは？攻撃者の視点で体験できる実践デモ付き。"
        datePublished="2024-01-09"
        dateModified="2026-01-14"
      />

      <TermHeader
        termName="ゼロデイ攻撃"
        reading="ゼロデイこうげき / Zero-day Attack"
        icon="fas fa-shield-alt"
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
          src="/images/terms/zero-day-hero.jpg"
          alt="ゼロデイ攻撃のイメージ - Day 0の脆弱性を狙うサイバー攻撃"
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
            <strong>ゼロデイ攻撃</strong>（Zero-day Attack）とは、<strong>脆弱性が発見されてから修正パッチが提供される前（対策日数がゼロ）に行われるサイバー攻撃</strong>です。
          </p>
        </section>

        <section>
          <h2>「ゼロデイ」の名前の由来</h2>
          <p>
            なぜ「ゼロデイ」と呼ばれるのでしょうか？それは<strong>「対策できる日数がゼロ日（0日）」</strong>という意味から来ています。
          </p>
          <p>
            通常、セキュリティの脆弱性が発見されると、開発者は修正パッチを作成・公開し、ユーザーはそれを適用する時間があります。
            しかし、ゼロデイ攻撃では：
          </p>
          <ul>
            <li><strong>Day 0（0日目）</strong>：脆弱性が発見された直後、修正パッチがまだ存在しない状態</li>
            <li><strong>防御する猶予がゼロ</strong>：開発者もユーザーも対応する時間が全くない</li>
            <li><strong>攻撃者だけが知っている</strong>：脆弱性を最初に発見した攻撃者が、誰も防げない状態で攻撃を仕掛ける</li>
          </ul>
          <p>
            つまり、「防御側の準備日数 = 0日」という恐ろしい状況を表す名前なのです。
          </p>
        </section>

        <section>
          <h2>⚡ 攻撃者の視点で体験してみよう</h2>
          <p>
            ボタンを押して、ゼロデイ攻撃のタイムラインを体験 👇
          </p>

          <ZeroDayDemo />
        </section>

        <section>
          <h2>なぜゼロデイ攻撃は危険なのか？</h2>
          <ul>
            <li><strong>防御策が存在しない</strong>：修正パッチがまだ提供されていないため、完全に防ぐことが困難</li>
            <li><strong>検知が難しい</strong>：既知の攻撃パターンではないため、セキュリティソフトでも検知できない場合がある</li>
            <li><strong>影響範囲が広い</strong>：有名なソフトウェアの脆弱性が狙われた場合、多くのユーザーが被害を受ける可能性がある</li>
          </ul>
        </section>

        <section>
          <h2>ゼロデイ攻撃への対策</h2>
          <ul>
            <li><strong>ソフトウェアの定期的な更新</strong>：OSやアプリケーションを常に最新の状態に保つ</li>
            <li><strong>セキュリティソフトの導入</strong>：最新のセキュリティソフトを導入し、定義ファイルを常に更新</li>
            <li><strong>不審なリンクやファイルを開かない</strong>：信頼できないWebサイトを訪問しない</li>
          </ul>
        </section>

      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
