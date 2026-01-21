import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTTPとは？HTTPSとの違いを小学生でもわかる【通信体験デモ付き】',
  description: 'WebサイトがどうやってPC に届くか3分で理解。HTTPとHTTPSの違い、「s」1文字で何が変わる？を体験デモで学べます。',
  keywords: ['HTTP', 'HTTPS', 'HTTP とは', 'HTTPS 違い', 'Web通信', 'プロトコル', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'HTTPとは？HTTPSとの違いを小学生でもわかる【通信体験デモ付き】',
    description: 'WebサイトがどうやってPCに届くか3分で理解。HTTPとHTTPSの違いを体験デモで学べます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTPとは？HTTPSとの違いを小学生でもわかる【通信体験デモ付き】',
    description: 'WebサイトがどうやってPCに届くか3分で理解。HTTPとHTTPSの違いを体験デモで学べます。',
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
