'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface AdSenseUnitProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  responsive?: boolean
  adStyle?: React.CSSProperties
}

export default function AdSenseUnit({
  adSlot,
  adFormat = 'auto',
  responsive = true,
  adStyle,
}: AdSenseUnitProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense initialization error:', err)
    }
  }, [])

  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-6439411211038936'

  if (!adSlot) {
    return null
  }

  return (
    <div className="adsense-wrapper" style={{ margin: '32px 0' }}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...adStyle,
        }}
        data-ad-client={adClientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
      <Script
        id={`adsbygoogle-init-${adSlot}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
    </div>
  )
}
