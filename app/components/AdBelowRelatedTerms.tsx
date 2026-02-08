'use client'

import AdSenseUnit from './AdSenseUnit'

const SLOT_FAQ = '5675174441' // FAQの上（NEXT_PUBLIC_ADSENSE_SLOT 未設定時のフォールバック）

/**
 * 関連用語セクションの直下・FAQの直上に表示する広告枠。
 * スマホ・PC共通。NEXT_PUBLIC_ADSENSE_SLOT が設定されていればそれを使用、なければフォールバック。
 */
export default function AdBelowRelatedTerms() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT || SLOT_FAQ
  return <AdSenseUnit adSlot={slot} />
}
