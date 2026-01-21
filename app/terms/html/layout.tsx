import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HTMLとは？小学生でもわかる【Webページの骨組み】',
  description: 'Webページの「骨組み」HTML。タグの意味を3分で理解。実際に動かせるデモで学べます。',
  keywords: ['HTML', 'HTML とは', 'タグ', 'Web', 'プログラミング', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/html',
  },
}

export default function HtmlLayout({ children }: { children: React.ReactNode }) {
  return children
}
