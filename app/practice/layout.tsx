import AdSubtleHorizontal from '@/app/components/AdSubtleHorizontal'

const SLOT_BOTTOM = '2979910109' // 記事下部横長（上部はUXのため非表示）

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="practice-layout">
      {children}
      <AdSubtleHorizontal adSlot={SLOT_BOTTOM} position="bottom" />
    </div>
  )
}
