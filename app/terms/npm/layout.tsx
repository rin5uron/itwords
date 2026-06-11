import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'npmとは？メリット・使い方を初心者向けに解説【コマンド実行デモ付き】',
  description: 'npm（エヌピーエム）とは？難しそうに見えて実はシンプル。メリット・デメリット・読み方を初心者向けにわかりやすく解説。コマンドを実際に動かして体験できます。',
  keywords: ['npm', 'npm とは', 'npm 使い方', 'npm 読み方', 'npmの利用メリット', 'Node Package Manager', 'パッケージ管理', 'JavaScript', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'npmとは？メリット・使い方を初心者向けに解説【コマンド実行デモ付き】',
    description: 'npm（エヌピーエム）とは？難しそうに見えて実はシンプル。メリット・デメリット・読み方を初心者向けにわかりやすく解説。コマンドを実際に動かして体験できます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'npmとは？メリット・使い方を初心者向けに解説【コマンド実行デモ付き】',
    description: 'npm（エヌピーエム）とは？難しそうに見えて実はシンプル。メリット・デメリット・読み方を初心者向けにわかりやすく解説。コマンドを実際に動かして体験できます。',
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
