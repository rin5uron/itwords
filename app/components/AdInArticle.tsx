'use client'

import Script from 'next/script'
import { useEffect } from 'react'

type Position = 'below-toc' | 'footer'

/**
 * 記事内広告。枠のサイズに合わせて表示される。
 * data-ad-layout="in-article" + data-ad-format="fluid"
 * position: below-toc=目次の下（高さ抑えめ）, footer=フッター上
 */
export default function AdInArticle({
  adSlot,
  position = 'footer',
}: {
  adSlot: string
  position?: Position
}) {
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

  const wrapperClass = position === 'below-toc' ? 'adsense-below-toc' : 'adsense-footer'

  return (
    <div
      className={`adsense-in-article ${wrapperClass}`}
      style={{
        margin: '24px auto',
        padding: '16px',
        backgroundColor: '#f9f7ef',
        borderRadius: '8px',
        maxWidth: '800px',
        width: '100%',
      }}
    >
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
