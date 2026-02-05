import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'フールプルーフとは？英語・身近な例で理解【誤操作防止の設計】',
  description: 'フールプルーフ（Foolproof）とは、誤操作を防ぐ設計思想のこと。USB、電子レンジなど身近な例と、Webサイトでの実装例を初心者向けに解説。体験デモ付き。',
  keywords: ['フールプルーフ', 'foolproof', 'フールプルーフ とは', 'フールプルーフ 英語', 'フールプルーフ 身近な例', 'フェールセーフ', '誤操作防止', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'フールプルーフとは？英語・身近な例で理解【誤操作防止の設計】',
    description: 'フールプルーフ（Foolproof）とは、誤操作を防ぐ設計思想のこと。身近な例とWebの実装例を解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'フールプルーフとは？英語・身近な例で理解【誤操作防止の設計】',
    description: 'フールプルーフ（Foolproof）とは、誤操作を防ぐ設計思想のこと。身近な例とWebの実装例を解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/foolproof',
  },
}

export default function FoolproofLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
