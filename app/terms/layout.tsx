import AdSubtleHorizontal from '@/app/components/AdSubtleHorizontal'

const SLOT_TOP = '5675174441'   // 記事上部横長
const SLOT_BOTTOM = '2979910109' // 記事下部横長

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* 上部広告は非表示（表示時は position="top" で 25vh） */}
      {children}
      <AdSubtleHorizontal adSlot={SLOT_BOTTOM} position="bottom" />
    </>
  )
}
