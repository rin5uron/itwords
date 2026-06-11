import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
  description: 'Vercel（バーセル）とは、無料で使えるWebサービス公開ツール。読み方・独自ドメインの追加・料金プランの違いを初心者向けにデモ付きで解説します。',
  keywords: ['Vercel', 'Vercel とは', 'Vercel 読み方', 'バーセル', 'Vercel 独自ドメイン', 'Vercel 料金', 'デプロイ', 'Next.js', 'ホスティング', 'GitHub', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
    description: 'Vercel（バーセル）とは、無料で使えるWebサービス公開ツール。読み方・独自ドメインの追加・料金プランの違いを初心者向けにデモ付きで解説します。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vercelとは？読み方・使い方を初心者向けに解説【デプロイ体験デモ付き】',
    description: 'Vercel（バーセル）とは、無料で使えるWebサービス公開ツール。読み方・独自ドメインの追加・料金プランの違いを初心者向けにデモ付きで解説します。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/vercel',
  },
}

export default function VercelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
