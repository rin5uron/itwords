import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
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
  },
  twitter: {
    card: 'summary_large_image',
    title: '実践型IT用語辞典 - IT用語をわかりやすく解説',
    description: 'IT用語を初心者向けにわかりやすく解説。体験デモで学べる実践型IT用語辞典。',
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
