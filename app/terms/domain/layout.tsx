import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ドメインとは？小学生でもわかる【住所の仕組み】',
  description: '「google.com」「amazon.co.jp」って何？ドメインを3分で理解。取得方法、サブドメインの意味も解説。',
  keywords: ['ドメイン', 'domain', 'ドメイン とは', 'DNS', 'URL', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/domain',
  },
}

export default function DomainLayout({ children }: { children: React.ReactNode }) {
  return children
}
