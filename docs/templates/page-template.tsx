// app/[content]/page.tsx テンプレート
// コンテンツページのテンプレート（SEO対策と構造化データを含む）

import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'

// メタデータ（SEO対策）
export const metadata: Metadata = {
  title: '[ページタイトル] | [サイト名]',
  description: '[ページの説明文（120-160文字）。検索結果に表示される重要な説明文です。]',
  keywords: [
    'キーワード1',
    'キーワード2',
    'キーワード3',
    // ページ固有のキーワードを追加
  ],
  openGraph: {
    title: '[ページタイトル]',
    description: '[ページの説明文]',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[ページタイトル]',
    description: '[ページの説明文]',
  },
}

export default function ContentPage() {
  // FAQ構造化データ用（任意）
  const faqs = [
    {
      question: '[よくある質問1]',
      answer: '[回答1]',
    },
    {
      question: '[よくある質問2]',
      answer: '[回答2]',
    },
    // 必要に応じて追加
  ]

  return (
    <div className="container">
      {/* FAQ構造化データ（FAQがある場合） */}
      <StructuredData type="FAQPage" faqs={faqs} />
      
      {/* Article構造化データ */}
      <StructuredData
        type="Article"
        title="[ページタイトル]"
        description="[ページの説明]"
        datePublished="2026-01-01"
        dateModified="2026-01-01"
      />

      <header>
        <h1>[ページタイトル]</h1>
        {/* サブタイトルや読み方がある場合 */}
        {/* <p className="reading">[読み方] / [英語表記]</p> */}
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>[用語名]</strong>とは、<strong>[簡潔な説明]</strong>です。
          </p>
          <p>
            [詳細な説明。最低500文字以上（推奨：1,000文字以上）を目指してください。]
          </p>
        </section>

        <section>
          <h2>[セクションタイトル]</h2>
          <p>[セクションの内容]</p>
          
          {/* リストや表がある場合 */}
          {/* <ul>
            <li>[項目1]</li>
            <li>[項目2]</li>
          </ul> */}
        </section>

        {/* 体験デモがある場合 */}
        {/* <section>
          <h2>体験してみよう</h2>
          <p>[デモの説明]</p>
          <[DemoComponent] />
        </section> */}

        {/* 関連用語セクション（任意） */}
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
                  <td className="term-name">[関連用語1]</td>
                  <td>[説明1]</td>
                </tr>
                <tr>
                  <td className="term-name">[関連用語2]</td>
                  <td>[説明2]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; {new Date().getFullYear()} [サイト名]</p>
      </footer>
    </div>
  )
}

