import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
  description: 'Vercelとは？pushで自動デプロイするホスティング。Next.jsとの相性、使い方を体験デモで解説。',
  keywords: ['Vercel', 'Vercel とは', 'ヴァーセル', 'デプロイ', 'Next.js', 'ホスティング', 'GitHub', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
    description: 'Vercelとは？pushで自動デプロイするホスティング。Next.jsとの相性、使い方を体験デモで解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
    description: 'Vercelとは？pushで自動デプロイするホスティング。Next.jsとの相性、使い方を体験デモで解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/vercel',
  },
}

export default function VercelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
