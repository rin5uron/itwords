// app/[content]/page.tsx テンプレート
// コンテンツページのテンプレート（SEO対策と構造化データを含む）
//
// トップページ表示ルール:
// - 新着用語: 3つまで表示する
// - 人気用語: 適宜更新（6つ程度）
// - すべての用語: カテゴリ別に整理して表示

import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import FAQAccordion from '@/app/components/FAQAccordion'

// メタデータ（SEO対策）
//
// 【重要】title/descriptionのルール:
// ✅ title: 「[用語]とは？小学生でもわかる【[特徴/デモ内容]】」
//    - 「| 実践型IT用語辞典」は不要（冗長）
//    - 「小学生でもわかる」で初心者への安心感を演出
//    - 【】で「デモ付き」「実演付き」など実践性をアピール
//    - 50文字以内推奨
//
// ✅ description: 「[身近な例]で使われる[用語]を[時間]で理解。[疑問点]を[方法]で学べます。」
//    - 身近な例（LINE、Wi-Fi、YouTube等）で親近感
//    - 「3分で読めます」など時間明示で心理的ハードル低減
//    - 「動かして学べる」「体験できる」など実践性を強調
//    - 「結局何？」「どう使う？」など初心者の疑問に応える
//    - 120文字以内推奨
//
// ❌ 避けるべき表現:
//    - 「初心者向けに解説」（当たり前なので不要）
//    - 「わかりやすく説明」（具体性がない）
//    - 「〜を学べます」だけ（魅力が薄い）
//
export const metadata: Metadata = {
  title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
  description: '[身近な例]で使われる[用語]を3分で理解。「[疑問点]」を[動かして/体験して]学べます。',
  keywords: [
    '[用語名]',
    '[用語名] とは',
    '[用語名] 使い方',
    // ページ固有のキーワードを追加
  ],
  openGraph: {
    title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
    description: '[身近な例]で使われる[用語]を3分で理解。[方法]で学べます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
    description: '[身近な例]で使われる[用語]を3分で理解。[方法]で学べます。',
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

      <TermHeader
        termName="[用語名]"
        reading="[読み方] / [英語表記]"
        icon="fas fa-[アイコン名]"
      />

      {/* 目次（h2が4つ以上ある場合に自動表示） */}
      <TableOfContents />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>[用語名]</strong>とは、<strong>[簡潔な説明]</strong>です。
          </p>
          <p>
            [詳細な説明。最低500文字以上（推奨：1,000文字以上）を目指してください。]
          </p>

          {/* 
            重要：デモ配置ルール
            - 概要の直後にデモを配置することで、文字が多いイメージを避ける
            - デモはシンプルで「理解できた感覚」が残るものにする
            - 必要に応じて、詳細説明セクションにも追加のデモを配置可能
          */}
          {/* 体験デモがある場合、ここに配置 */}
          {/* <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>[用語名]の仕組みを体験してみよう</h3>
            <p>[デモの説明]</p>
            <[DemoComponent] />
          </div> */}
        </section>

        <section>
          <h2>[セクションタイトル]</h2>
          <p>[セクションの内容]</p>

          {/*
            【重要】公式リンクの追加（AdSense要件・E-E-A-T対策）
            - 公式ドキュメント、MDN、Wikipediaなどの信頼できるソースへリンク
            - 文章内に自然に埋め込む
            - 個人ブログや競合サイトへのリンクは避ける

            例：
            <p>
              詳しくは<a href="https://example.com/official-docs" target="_blank" rel="noopener noreferrer">公式ドキュメント</a>で確認できます。
            </p>
          */}

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

        {/* FAQセクション（FAQがある場合） */}
        <FAQAccordion faqs={faqs} />

        {/* 関連用語セクション（任意） */}
        {/* 
          重要：関連用語セクションは必ず以下の形式で統一すること
          - section要素に className="term-comparison" を付与
          - div要素に className="comparison-table" を付与
          - table要素を使用（ul/li形式は使用しない）
          - 用語名には className="term-name" を付与
          - リンク可能な用語は Link コンポーネントで囲む
          - 最低3行以上（対象用語を含む）を推奨
        */}
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
                    <Link href="/terms/[用語1]" className="term-name">
                      [関連用語1]
                    </Link>
                  </td>
                  <td>[説明1]</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/[用語2]" className="term-name">
                      [関連用語2]
                    </Link>
                  </td>
                  <td>[説明2]</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">[関連用語3（リンクなし）]</span>
                  </td>
                  <td>[説明3]</td>
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

