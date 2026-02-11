import AdInArticle from '@/app/components/AdInArticle'
import AffiliateRakutenSidebar from '@/app/components/AffiliateRakutenSidebar'
import RelatedBooks from '@/app/components/RelatedBooks'

const SLOT_FOOTER = '2892250316' // 記事内広告（フッター上）

/** Issue #38 / #42: 関連書籍。2列2行で4冊、全ページ共通。画像128px、あとで差し替え可 */
const DEFAULT_BOOKS = [
  {
    title: '【令和8年度】いちばんやさしい 基本情報技術者 絶対合格の教科書＋出る順問題集',
    amazonUrl: 'https://amzn.to/3Oy04c5',
    rakutenUrl: 'https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18432509%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F21788388%2F',
    imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8214/9784815638214_1_2.jpg?_ex=128x128',
  },
  {
    title: 'IT用語図鑑 エンジニア編',
    amazonUrl: 'https://amzn.to/3OyKPQb',
  },
  {
    title: 'いちばんやさしい 基本情報技術者 絶対合格の教科書＋出る順問題集',
    amazonUrl: 'https://amzn.to/3Oy04c5',
    rakutenUrl: 'https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18432509%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F21788388%2F',
    imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8214/9784815638214_1_2.jpg?_ex=128x128',
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
