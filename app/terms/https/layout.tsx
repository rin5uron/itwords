import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTTPSとは？読み方・意味・仕組みを初心者向けに解説',
  description: 'HTTPS（エイチティーティーピーエス）とは？読み方、🔒マークの意味、暗号化の仕組み、HTTPとの違いを初心者向けに解説。SSL/TLSとの関係も含めて体験デモ付き。',
  keywords: ['HTTPS', 'HTTPS とは', 'エイチティーティーピーエス', 'HTTPS 読み方', 'HTTP HTTPS 違い', 'SSL', 'TLS', '暗号化', 'セキュリティ', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'HTTPSとは？読み方・意味・仕組みを初心者向けに解説',
    description: 'HTTPS（エイチティーティーピーエス）とは？読み方、暗号化の仕組み、HTTPとの違いを解説。',
    type: 'article',
    url: 'https://itwords.jp/terms/https',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTPSとは？読み方・意味・仕組みを初心者向けに解説',
    description: 'HTTPS（エイチティーティーピーエス）とは？読み方、暗号化の仕組み、HTTPとの違いを解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/https',
  },
}

export default function HTTPSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
