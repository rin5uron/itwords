import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTTPとは？読み方・HTTPSとの違いを初心者向けに解説【デモ付き】',
  description: 'HTTP（エイチティーティーピー）とは？読み方、HTTPSとの違い、Web通信の仕組みを体験デモで初心者向けに解説。',
  keywords: ['HTTP', 'HTTPS', 'HTTP とは', 'エイチティーティーピー', 'HTTP 読み方', 'HTTPS 違い', 'Web通信', 'プロトコル', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'HTTPとは？読み方・HTTPSとの違いを初心者向けに解説【デモ付き】',
    description: 'HTTP（エイチティーティーピー）とは？読み方と仕組みを体験デモで解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTPとは？読み方・HTTPSとの違いを初心者向けに解説【デモ付き】',
    description: 'HTTP（エイチティーティーピー）とは？読み方と仕組みを体験デモで解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/http',
  },
}

export default function HttpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
