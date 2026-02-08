import AdInArticle from '@/app/components/AdInArticle'

const SLOT_FOOTER = '2892250316' // 記事内広告（フッター上）

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="terms-layout">
      {children}
      <AdInArticle adSlot={SLOT_FOOTER} />
    </div>
  )
}
