import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTTPSとは？小学生でもわかる【🔒マークの意味と仕組み】',
  description: 'HTTPSとは？なぜURLに鍵マーク🔒が表示される？暗号化の仕組み、SSL/TLSとの関係、HTTPとの違いを初心者向けにわかりやすく解説します。',
  keywords: ['HTTPS', 'HTTPS とは', 'HTTPS わかりやすく', 'HTTPS 初心者', 'HTTP HTTPS 違い', 'SSL', 'TLS', '暗号化', 'セキュリティ', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'HTTPSとは？小学生でもわかる【🔒マークの意味と仕組み】',
    description: 'HTTPSとは？なぜURLに鍵マーク🔒が表示される？暗号化の仕組み、SSL/TLSとの関係、HTTPとの違いを初心者向けにわかりやすく解説します。',
    type: 'article',
    url: 'https://itwords.jp/terms/https',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTTPSとは？小学生でもわかる【🔒マークの意味と仕組み】',
    description: 'HTTPSとは？なぜURLに鍵マーク🔒が表示される？暗号化の仕組み、SSL/TLSとの関係、HTTPとの違いを初心者向けにわかりやすく解説します。',
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
