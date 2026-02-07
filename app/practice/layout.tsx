import AdSubtleHorizontal from '@/app/components/AdSubtleHorizontal'

const SLOT_TOP = '5675174441'   // 記事上部横長
const SLOT_BOTTOM = '2979910109' // 記事下部横長

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="practice-layout">
      <AdSubtleHorizontal adSlot={SLOT_TOP} position="top" />
      {children}
      <AdSubtleHorizontal adSlot={SLOT_BOTTOM} position="bottom" />
    </div>
  )
}
