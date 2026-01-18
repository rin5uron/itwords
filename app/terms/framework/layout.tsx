import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'フレームワークとは？小学生でもわかる【プラモデル例え】',
  description: 'React、Vue、Next.jsって何？フレームワークを「プラモデル」で例えると超わかりやすい。3分で読めます。',
  keywords: ['フレームワーク', 'framework', 'React', 'Vue', 'Next.js', 'IT用語 わかりやすく'],
}

export default function FrameworkLayout({ children }: { children: React.ReactNode }) {
  return children
}
