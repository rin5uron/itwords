import AdInArticle from '@/app/components/AdInArticle'
import AffiliateRakutenSidebar from '@/app/components/AffiliateRakutenSidebar'
import RelatedBooks from '@/app/components/RelatedBooks'

const SLOT_FOOTER = '2892250316' // 記事内広告（フッター上）

/** 全用語ページで共通表示するおすすめ書籍（最大3冊）。用語ごとに差し替える場合は別途マッピングを検討 */
const DEFAULT_BOOKS = [
  {
    title: '【令和8年度】いちばんやさしい 基本情報技術者 絶対合格の教科書＋出る順問題集',
    amazonUrl: 'https://amzn.to/3Oy04c5',
    imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8214/9784815638214_1_2.jpg?_ex=80x80',
  },
  {
    title: 'IT用語図鑑 エンジニア編',
    amazonUrl: 'https://amzn.to/3OyKPQb',
  },
]

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="terms-layout">
      <div className="terms-main">
        {children}
        <div className="container related-books-container">
          <RelatedBooks books={DEFAULT_BOOKS} />
        </div>
        <AdInArticle adSlot={SLOT_FOOTER} position="footer" />
      </div>
      <AffiliateRakutenSidebar />
    </div>
  )
}
