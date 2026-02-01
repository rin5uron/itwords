import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'
import CVEDemo from '@/components/CVEDemo'

export const metadata: Metadata = {
  title: 'CVEとは？脆弱性識別番号の見方を体験デモで学ぶ | 実践型IT用語辞典',
  description: 'CVE（Common Vulnerabilities and Exposures）とは何か？「CVE-2024-12345」の意味と調べ方を、実際のCVE検索を体験できるデモで初心者向けにわかりやすく解説。',
  keywords: ['CVE', 'CVE とは', 'CVE番号', '脆弱性', 'Common Vulnerabilities and Exposures', 'セキュリティ', 'ゼロデイ攻撃', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'CVEとは？脆弱性識別番号の見方を体験デモで学ぶ',
    description: 'ニュースで見る「CVE-2024-xxxxx」の意味とは？脆弱性識別番号の調べ方を実践デモで体験。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CVEとは？脆弱性識別番号の見方を体験デモで学ぶ',
    description: 'ニュースで見る「CVE-2024-xxxxx」の意味とは？脆弱性識別番号の調べ方を実践デモで体験。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/cve',
  },
}

export default function CVEPage() {
  const faqs = [
    {
      question: 'CVEとは何ですか？',
      answer: 'CVE（Common Vulnerabilities and Exposures）とは、公に知られているセキュリティ脆弱性に割り当てられる識別番号のことです。世界共通の番号で、どの脆弱性について話しているのかを明確にするために使われます。',
    },
    {
      question: 'CVE番号の見方は？',
      answer: 'CVE番号は「CVE-[年]-[連番]」の形式です。例えば「CVE-2024-12345」は、2024年に登録された12345番目の脆弱性を意味します。連番が大きいほど後に発見されたものですが、深刻度とは関係ありません。',
    },
    {
      question: 'CVEはどこで調べられますか？',
      answer: 'CVE番号は、NIST（アメリカ国立標準技術研究所）が運営する「NVD（National Vulnerability Database）」や、MITRE社の「CVE公式サイト」で検索できます。脆弱性の詳細、影響範囲、対策方法などが確認できます。',
    },
    {
      question: 'CVEとゼロデイ攻撃の関係は？',
      answer: 'ゼロデイ攻撃では、CVE番号がまだ割り当てられていない（または公開されていない）脆弱性が狙われます。CVE番号が公開されるのは、脆弱性が公に知られた後なので、ゼロデイ攻撃の時点ではCVE番号が存在しないことが多いです。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="CVEとは？脆弱性識別番号の見方を体験デモで学ぶ"
        description="CVE（Common Vulnerabilities and Exposures）を初心者向けに解説。脆弱性識別番号の見方と調べ方を、実践デモで学べます。"
        datePublished="2026-01-14"
        dateModified="2026-01-14"
      />

      <TermPageHeader
        termName="CVE"
        reading="シーブイイー / Common Vulnerabilities and Exposures"
        icon="fas fa-fingerprint"
        dateCreated="2026-01-14"
        dateModified="2026-01-14"
        summaryItems={[
          'CVEとは何か？世界共通の脆弱性識別番号',
          'CVE番号の見方（CVE-年-連番）',
          '実際のCVE番号を検索する体験デモ',
          'CVSSスコアと深刻度（Low〜Critical）',
          'CVEとゼロデイ攻撃の関係、調べ方・限界',
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>CVE</strong>（Common Vulnerabilities and Exposures）とは、<strong>公に知られているセキュリティ脆弱性に割り当てられる世界共通の識別番号</strong>のことです。
          </p>
          <p>
            セキュリティニュースで「CVE-2024-12345の脆弱性が発見された」のように表記されます。
          </p>
        </section>

        <section>
          <h2>CVEが生まれた理由</h2>
          <p>
            以前は、同じ脆弱性でも各企業やセキュリティ団体がバラバラの名前で呼んでいました。
            これでは混乱するため、1999年にMITRE社が<strong>世界共通の識別番号システム「CVE」</strong>を作りました。
          </p>
          <p>
            CVEのおかげで、世界中の技術者が同じ脆弱性について正確にコミュニケーションできるようになりました。
          </p>
        </section>

        <section>
          <h2>CVE番号の見方</h2>
          <p>
            CVE番号は<strong>「CVE-[年]-[連番]」</strong>の形式で表記されます：
          </p>
          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '15px',
            borderRadius: '8px',
            border: '2px solid #ddd',
            marginBottom: '15px',
            fontFamily: 'monospace',
            fontSize: '18px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            CVE-2024-12345
          </div>
          <ul>
            <li><strong>CVE</strong>：固定の接頭辞</li>
            <li><strong>2024</strong>：脆弱性が登録された年</li>
            <li><strong>12345</strong>：その年の連番（何番目に登録されたか）</li>
          </ul>
          <p>
            <i className="fas fa-exclamation-triangle" aria-hidden /> 注意：連番が大きいほど後に発見されたものですが、<strong>深刻度とは関係ありません</strong>。
          </p>
        </section>

        <section>
          <h2><i className="fas fa-bolt" aria-hidden /> CVE番号を検索してみよう</h2>
          <p>
            実際のCVEデータベースの使い方を体験 <i className="fas fa-hand-point-down" aria-hidden style={{ marginLeft: '0.25em' }} />
          </p>

          <CVEDemo />
        </section>

        <section>
          <h2>CVSSスコアとは？</h2>
          <p>
            CVE情報には、脆弱性の深刻度を示す<strong>CVSS（Common Vulnerability Scoring System）スコア</strong>が付いています：
          </p>
          <ul>
            <li><strong>0.0-3.9</strong>：<i className="fas fa-circle" style={{ color: '#22c55e', fontSize: '0.6em', verticalAlign: 'middle' }} aria-hidden /> 低（Low）</li>
            <li><strong>4.0-6.9</strong>：<i className="fas fa-circle" style={{ color: '#eab308', fontSize: '0.6em', verticalAlign: 'middle' }} aria-hidden /> 中（Medium）</li>
            <li><strong>7.0-8.9</strong>：<i className="fas fa-circle" style={{ color: '#f97316', fontSize: '0.6em', verticalAlign: 'middle' }} aria-hidden /> 高（High）</li>
            <li><strong>9.0-10.0</strong>：<i className="fas fa-circle" style={{ color: '#ef4444', fontSize: '0.6em', verticalAlign: 'middle' }} aria-hidden /> 緊急（Critical）</li>
          </ul>
          <p>
            スコアが高いほど、早急な対応が必要です。
          </p>
        </section>

        <section>
          <h2>CVEとゼロデイ攻撃の関係</h2>
          <p>
            <Link href="/terms/zero-day" style={{ color: '#8abdea', textDecoration: 'underline' }}>ゼロデイ攻撃</Link>では、CVE番号がまだ割り当てられていない脆弱性が狙われることがあります。
          </p>
          <p>
            流れを整理すると：
          </p>
          <ol>
            <li><strong>Day 0</strong>：脆弱性が攻撃者だけに知られている（CVE番号なし）</li>
            <li><strong>Day 1〜</strong>：脆弱性が公開され、CVE番号が割り当てられる</li>
            <li><strong>Day X</strong>：パッチが公開され、対策可能になる</li>
          </ol>
          <p>
            つまり、<strong>CVE番号が公開された時点で、もうゼロデイではない</strong>ということです。
          </p>
        </section>

        <section>
          <h2>CVE情報の調べ方</h2>
          <p>
            CVE番号がわかったら、以下のサイトで詳細を調べられます：
          </p>
          <ul>
            <li><strong>NVD（National Vulnerability Database）</strong>：<a href="https://nvd.nist.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#8abdea' }}>https://nvd.nist.gov/</a></li>
            <li><strong>CVE公式サイト</strong>：<a href="https://cve.mitre.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#8abdea' }}>https://cve.mitre.org/</a></li>
            <li><strong>JVN（日本語）</strong>：<a href="https://jvn.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#8abdea' }}>https://jvn.jp/</a></li>
          </ul>
        </section>

        <section>
          <h2>CVEの限界</h2>
          <p>
            CVEは便利なシステムですが、いくつかの限界があります：
          </p>
          <ul>
            <li><strong>登録に時間がかかる</strong>：脆弱性発見からCVE番号割り当てまで数日〜数週間かかることも</li>
            <li><strong>ゼロデイには対応できない</strong>：公開されていない脆弱性にはCVE番号がない</li>
            <li><strong>すべての脆弱性が登録されるわけではない</strong>：軽微なものや未公開のものは登録されない</li>
          </ul>
        </section>

        <FAQAccordion faqs={faqs} />

        <section>
          <h2>関連用語</h2>
          <ul>
            <li><Link href="/terms/zero-day" style={{ color: '#8abdea', textDecoration: 'underline' }}>ゼロデイ攻撃</Link> - CVE番号が存在しない脆弱性を狙う攻撃</li>
            <li><Link href="/terms/exploit" style={{ color: '#8abdea', textDecoration: 'underline' }}>エクスプロイト</Link> - CVEに登録された脆弱性を悪用する攻撃コード</li>
            <li><Link href="/terms/white-hat-hacker" style={{ color: '#8abdea', textDecoration: 'underline' }}>ホワイトハッカー</Link> - CVEに登録される脆弱性を発見する人たち</li>
          </ul>
        </section>

        <AdBelowRelatedTerms />
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
