'use client'

import Script from 'next/script'
import { useEffect } from 'react'

/**
 * 記事内広告。枠のサイズに合わせて表示される。
 * data-ad-layout="in-article" + data-ad-format="fluid"
 */
export default function AdInArticle({ adSlot }: { adSlot: string }) {
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
    <div className="adsense-in-article adsense-subtle-bottom" style={{ margin: '24px auto', padding: '16px', backgroundColor: '#f9f7ef', borderRadius: '8px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={adClientId}
        data-ad-slot={adSlot}
      />
      <Script
        id={`adsbygoogle-inarticle-${adSlot}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </div>
  )
}
