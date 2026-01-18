import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vercelとは？小学生でもわかる【デプロイ体験デモ付き】',
  description: 'Webサイトを数秒で世界公開できるVercel。「push→自動デプロイ」の流れを体験デモで理解。Next.jsと相性抜群。3分で読めます。',
  keywords: ['Vercel', 'Vercel とは', 'ヴァーセル', 'デプロイ', 'Next.js', 'ホスティング', 'GitHub', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'Vercelとは？小学生でもわかる【デプロイ体験デモ付き】',
    description: 'Webサイトを数秒で世界公開できるVercel。デプロイの流れを体験デモで理解。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vercelとは？小学生でもわかる【デプロイ体験デモ付き】',
    description: 'Webサイトを数秒で世界公開できるVercel。デプロイの流れを体験デモで理解。',
  },
}

export default function VercelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
