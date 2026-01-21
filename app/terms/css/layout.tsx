import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSSとは？小学生でもわかる【Webページの装飾】',
  description: 'Webページを「かっこよく」するCSS。色、サイズ、配置を3分で理解。実際に動かせるデモで学べます。',
  keywords: ['CSS', 'CSS とは', 'スタイルシート', 'Web', 'デザイン', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/css',
  },
}

export default function CssLayout({ children }: { children: React.ReactNode }) {
  return children
}
