'use client'

import AdSenseUnit from './AdSenseUnit'

type Position = 'top' | 'bottom'

/**
 * 控えめな横長広告。max-width で幅を制限し、主張しすぎない表示にする。
 * position: スマホで上部=25vh、下部=50vh の高さ制限を適用
 */
export default function AdSubtleHorizontal({
  adSlot,
  position = 'bottom',
}: {
  adSlot: string
  position?: Position
}) {
  const className = position === 'top' ? 'adsense-subtle-top' : 'adsense-subtle-bottom'
  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: '400px',
        margin: '24px auto',
        padding: '16px',
        backgroundColor: '#f9f7ef',
        borderRadius: '8px',
      }}
    >
      <AdSenseUnit
        adSlot={adSlot}
        adFormat="horizontal"
        responsive={true}
        adStyle={{ minHeight: 90 }}
      />
    </div>
  )
}
