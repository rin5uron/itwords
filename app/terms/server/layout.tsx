import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'サーバーとは？小学生でもわかる【24時間働くPC】',
  description: 'YouTubeが24時間見られる理由は？サーバーを「24時間働くコンビニ店員」で3分理解。',
  keywords: ['サーバー', 'server', 'サーバー とは', 'クラウド', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/server',
  },
}

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return children
}
