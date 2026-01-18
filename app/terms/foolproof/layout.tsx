import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'フールプルーフとは？バカでも使える設計【失敗例→改善デモ】',
  description: '「バカでも間違えない設計」フールプルーフを3分で理解。USB、マイク穴、洗濯機の実例から学ぶ。誤操作防止の設計思想を体験デモで学べます。',
  keywords: ['フールプルーフ', 'foolproof', 'フールプルーフ とは', 'フェールセーフ', 'UI/UX', '誤操作防止', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'フールプルーフとは？バカでも使える設計【失敗例→改善デモ】',
    description: '「バカでも間違えない設計」フールプルーフを3分で理解。USB、マイク穴の実例から学ぶ。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'フールプルーフとは？バカでも使える設計【失敗例→改善デモ】',
    description: '「バカでも間違えない設計」フールプルーフを3分で理解。USB、マイク穴の実例から学ぶ。',
  },
}

export default function FoolproofLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
