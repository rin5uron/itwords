import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQLとは？小学生でもわかる【データベース言語】',
  description: 'データを「探す・保存する」言語SQL。SELECT、INSERT、UPDATEの意味を3分で理解。実演デモ付き。',
  keywords: ['SQL', 'SQL とは', 'データベース', 'SELECT', 'INSERT', 'IT用語 わかりやすく'],
}

export default function SqlLayout({ children }: { children: React.ReactNode }) {
  return children
}
