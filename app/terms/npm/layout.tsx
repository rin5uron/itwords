import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'npmとは？メリット・使い方を初心者向けに解説【コマンド実行デモ付き】',
  description: 'npmとは？利用メリット、使い方、「npm install」「npm run」の意味を初心者向けに解説。実行デモで体験できます。Reactも簡単インストール。',
  keywords: ['npm', 'npm とは', 'npm 使い方', 'Node Package Manager', 'パッケージ管理', 'JavaScript', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'npmとは？メリット・使い方を初心者向けに解説【コマンド実行デモ付き】',
    description: 'npmとは？利用メリットと使い方を実行デモで体験。初心者向け解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'npmとは？メリット・使い方を初心者向けに解説【コマンド実行デモ付き】',
    description: 'npmとは？利用メリットと使い方を実行デモで体験。初心者向け解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/npm',
  },
}

export default function NpmLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
