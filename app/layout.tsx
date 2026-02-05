import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import GoogleAdSense from './components/GoogleAdSense'
import Link from 'next/link'
import { FONT_AWESOME_CDN } from './lib/icons'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

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
        url: 'https://itwords.jp/icon.svg',
        width: 1024,
        height: 1024,
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
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    // 古いブラウザが /icon.ico を要求しても next.config で /icon.svg に飛ばす
    shortcut: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const AD_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-6439411211038936'

  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href={FONT_AWESOME_CDN} />
      </head>
      <body>
        {GA_ID && <GoogleAnalytics GA_ID={GA_ID} />}
        <GoogleAdSense adClientId={AD_CLIENT_ID} />
        {children}
        <footer className="site-footer-layout">
          <div className="footer-links-main">
            <Link href="/">トップページに戻る</Link>
            {' | '}
            <Link href="/privacy">プライバシーポリシー</Link>
            {' | '}
            <Link href="/terms-of-service">利用規約</Link>
            {' | '}
            <Link href="/contact">お問い合わせ</Link>
          </div>
          <div className="footer-mobile-only">
            <Link href="/#about">制作背景</Link>
          </div>
          <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
        </footer>
      </body>
    </html>
  )
}
