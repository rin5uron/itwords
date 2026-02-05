import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
  description: 'Vercel（ヴァーセル）とは？読み方、デプロイの仕組み、Next.jsとの相性まで解説。「push→自動デプロイ」の流れを体験デモで理解できます。',
  keywords: ['Vercel', 'Vercel とは', 'ヴァーセル', 'デプロイ', 'Next.js', 'ホスティング', 'GitHub', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
    description: 'Vercel（ヴァーセル）とは？デプロイの仕組みを体験デモで理解できます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
    description: 'Vercel（ヴァーセル）とは？デプロイの仕組みを体験デモで理解できます。',
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
