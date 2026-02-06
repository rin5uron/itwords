import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SQLとは？読み方・使い方を初心者向けに解説【実演デモ付き】',
  description: 'SQL（エスキューエル）とは？データベースを操作する言語のこと。SELECT、INSERT、UPDATE、DELETEの意味と使い方を実演デモで体験。初心者向け解説。',
  keywords: ['SQL', 'SQL とは', 'エスキューエル', 'データベース', 'SELECT', 'INSERT', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'SQLとは？読み方・使い方を初心者向けに解説【実演デモ付き】',
    description: 'SQL（エスキューエル）とは？データベースを操作する言語。SELECT、INSERT、UPDATE、DELETEの意味と使い方を実演デモで体験。',
    type: 'article',
    url: 'https://itwords.jp/terms/sql',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SQLとは？読み方・使い方を初心者向けに解説【実演デモ付き】',
    description: 'SQL（エスキューエル）とは？データベースを操作する言語。実演デモで体験。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/sql',
  },
}

export default function SqlLayout({ children }: { children: React.ReactNode }) {
  return children
}
