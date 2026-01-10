// app/layout.tsx テンプレート
// AdSense要件とSEO対策を網羅したルートレイアウト

import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import GoogleAdSense from './components/GoogleAdSense'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // 実際のドメインに変更
  title: 'サイトタイトル | サブタイトル',
  description: 'サイトの説明文（120-160文字）。検索結果に表示される重要な説明文です。',
  keywords: [
    'キーワード1',
    'キーワード2',
    'キーワード3',
    // 関連キーワードを追加
  ],
  openGraph: {
    title: 'サイトタイトル',
    description: 'サイトの説明文',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://your-domain.com', // 実際のドメインに変更
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サイトタイトル',
    description: 'サイトの説明文',
  },
  alternates: {
    canonical: 'https://your-domain.com', // 実際のドメインに変更
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
        {/* Google Analytics */}
        {GA_ID && <GoogleAnalytics GA_ID={GA_ID} />}
        
        {/* Google AdSense（申請後に設定） */}
        {AD_CLIENT_ID && <GoogleAdSense adClientId={AD_CLIENT_ID} />}
        
        {children}
        
        {/* フッター（プライバシーポリシー、利用規約、お問い合わせへのリンク必須） */}
        <footer className="site-footer-layout">
          <Link href="/privacy">プライバシーポリシー</Link>
          {' | '}
          <Link href="/terms">利用規約</Link>
          {' | '}
          <Link href="/contact">お問い合わせ</Link>
          <p>&copy; {new Date().getFullYear()} [サイト名]</p>
        </footer>
      </body>
    </html>
  )
}

