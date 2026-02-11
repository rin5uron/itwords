import AdInArticle from '@/app/components/AdInArticle'
import AffiliateRakutenSidebar from '@/app/components/AffiliateRakutenSidebar'
import RelatedBooks from '@/app/components/RelatedBooks'

const SLOT_FOOTER = '7953005306' // 記事内広告（フッター上）。目次下は 2892250316

/** Issue #38 / #42: 関連書籍。①ITパスポート ②基本情報 ③見るだけIT用語図鑑300 ④IT用語図鑑エンジニア編。画像160、全ページ共通 */
const DEFAULT_BOOKS = [
  {
    title: '【令和8年度】 いちばんやさしい ITパスポート 絶対合格の教科書＋出る順問題集',
    amazonUrl: 'https://amzn.to/4akvVEA',
    rakutenUrl: 'https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18432510%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F21788381%2F',
    imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8207/9784815638207_1_2.jpg?_ex=160x160',
  },
  {
    title: '【令和８年度】 いちばんやさしい 基本情報技術者 絶対合格の教科書＋出る順問題集',
    amazonUrl: 'https://amzn.to/3Oy04c5',
    rakutenUrl: 'https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18432509%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F21788388%2F',
    imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8214/9784815638214_1_2.jpg?_ex=160x160',
  },
  {
    title: '見るだけIT用語図鑑300　第２版 新入社員、ITに苦手意識を持っている人にも役立つ',
    amazonUrl: 'https://amzn.to/46HIJng',
    rakutenUrl: 'https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18110405%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F21498214%2F',
    imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9113/9784815629113_1_9.jpg?_ex=160x160',
  },
  {
    title: 'IT用語図鑑[エンジニア編] 開発・Web制作で知っておきたい頻出キーワード256',
    amazonUrl: 'https://amzn.to/4apl9g6',
    rakutenUrl: 'https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16822226%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F20417863%2F',
    imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9101/9784798169101_1_14.jpg?_ex=160x160',
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
      </div>
      <div className="terms-bottom-row">
        <div className="terms-bottom-content">
          <div className="related-books-container">
            <RelatedBooks books={DEFAULT_BOOKS} />
          </div>
          <AdInArticle adSlot={SLOT_FOOTER} position="footer" />
        </div>
        <AffiliateRakutenSidebar />
      </div>
    </div>
  )
}
