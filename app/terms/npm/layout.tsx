import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'npmとは？小学生でもわかる【コマンド実行デモ付き】',
  description: 'npmとは？JavaScriptのパッケージ管理ツールのメリットと使い方を実行デモで体験。「npm install」「npm run」の意味を初心者向けに解説。Reactも簡単インストールできます。',
  keywords: ['npm', 'npm とは', 'npm 使い方', 'Node Package Manager', 'パッケージ管理', 'JavaScript', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'npmとは？小学生でもわかる【コマンド実行デモ付き】',
    description: 'npmとは？JavaScriptのパッケージ管理ツールのメリットと使い方を実行デモで体験。「npm install」「npm run」の意味を初心者向けに解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'npmとは？小学生でもわかる【コマンド実行デモ付き】',
    description: 'npmとは？JavaScriptのパッケージ管理ツールのメリットと使い方を実行デモで体験。「npm install」「npm run」の意味を初心者向けに解説。',
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
