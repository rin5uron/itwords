'use client'

import AdSenseUnit from './AdSenseUnit'

/**
 * 関連用語セクションの直下に表示する広告枠。
 * NEXT_PUBLIC_ADSENSE_SLOT が設定されているときだけ表示する。
 * 自動広告がオンでも、ここに手動ユニットを置くと確実に1箇所表示される。
 */
export default function AdBelowRelatedTerms() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT
  if (!slot) return null
  return <AdSenseUnit adSlot={slot} />
}
