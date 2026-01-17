import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import GoogleAdSense from './components/GoogleAdSense'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://itwords.jp'),
  title: '実践型IT用語辞典 - IT用語をわかりやすく解説【初心者向け】',
  description: 'IT用語を初心者向けにわかりやすく解説する実践型IT用語辞典。APIやJSON、フレームワークなどのIT用語を体験デモで学べます。プログラミング初心者でも理解できる解説で学習を加速。',
  keywords: [
    'IT用語',
    '実践型IT用語辞典',
    'IT用語 わかりやすく',
    'IT用語 初心者',
    'プログラミング 初心者',
    '体験デモ',
    'API',
    'JSON',
    'フレームワーク',
    'Web開発',
    'IT 勉強',
    'エンジニア 初心者'
  ],
  openGraph: {
    title: '実践型IT用語辞典 - IT用語をわかりやすく解説',
    description: 'IT用語を初心者向けにわかりやすく解説。APIやJSON、フレームワークなどを体験デモで学べます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://itwords.jp',
    images: [
      {
        url: 'https://itwords.jp/icon.png',
        width: 1200,
        height: 630,
        alt: 'IT用語辞典',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '実践型IT用語辞典 - IT用語をわかりやすく解説',
    description: 'IT用語を初心者向けにわかりやすく解説。体験デモで学べる実践型IT用語辞典。',
  },
  alternates: {
    canonical: 'https://itwords.jp',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const AD_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_ID

  return (
    <html lang="ja">
      <body>
        {GA_ID && <GoogleAnalytics GA_ID={GA_ID} />}
        {AD_CLIENT_ID && <GoogleAdSense adClientId={AD_CLIENT_ID} />}
        {children}
        <footer className="site-footer-layout">
          <Link href="/privacy">プライバシーポリシー</Link>
          {' | '}
          <Link href="/terms">利用規約</Link>
          {' | '}
          <Link href="/contact">お問い合わせ</Link>
          <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
        </footer>
      </body>
    </html>
  )
}
