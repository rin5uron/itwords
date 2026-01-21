import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'APIとは？小学生でもわかる【レストラン例え+実演デモ】',
  description: 'APIを「レストランの注文」で例えると超わかりやすい。Google Map、天気予報、LINEで使われるAPIを3分で理解。実演デモ付き。',
  keywords: ['API', 'API とは', 'Web API', 'REST API', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/api',
  },
}

export default function ApiLayout({ children }: { children: React.ReactNode }) {
  return children
}
