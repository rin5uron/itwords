import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'npmとは？小学生でもわかる【コマンド実行デモ付き】',
  description: 'JavaScriptのパッケージ管理ツールnpmを3分で理解。「npm install」「npm run」の意味を実行デモで体験。Reactも簡単インストール。',
  keywords: ['npm', 'npm とは', 'npm 使い方', 'Node Package Manager', 'パッケージ管理', 'JavaScript', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'npmとは？小学生でもわかる【コマンド実行デモ付き】',
    description: 'JavaScriptのパッケージ管理ツールnpmを3分で理解。コマンド実行デモ付き。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'npmとは？小学生でもわかる【コマンド実行デモ付き】',
    description: 'JavaScriptのパッケージ管理ツールnpmを3分で理解。コマンド実行デモ付き。',
  },
}

export default function NpmLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
