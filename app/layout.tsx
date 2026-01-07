import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'IT用語辞典 - 見て、触って、学べる実践型IT用語辞典',
  description: '初心者向けIT用語辞典。APIやJSON、フレームワークなどのIT用語を実際に動くデモで体験しながら学べます。わかりやすい解説と体験型コンテンツで、プログラミング学習を加速。',
  keywords: ['IT用語', 'プログラミング', '初心者', 'わかりやすく', '体験デモ', 'API', 'JSON', 'フレームワーク', 'Web開発', '学習'],
  openGraph: {
    title: 'IT用語辞典 - 見て、触って、学べる実践型IT用語辞典',
    description: '初心者向けIT用語辞典。APIやJSON、フレームワークなどのIT用語を実際に動くデモで体験しながら学べます。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT用語辞典 - 見て、触って、学べる',
    description: '初心者向けIT用語辞典。実際に動くデモで体験しながら学べます。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="ja">
      <body>
        {GA_ID && <GoogleAnalytics GA_ID={GA_ID} />}
        {children}
      </body>
    </html>
  )
}
