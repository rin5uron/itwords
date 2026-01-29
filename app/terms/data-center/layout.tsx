import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'データセンターとは？小学生でもわかる【Webサーバーの家】',
  description: 'データセンターとは？Webサイト公開に必要な「サーバーの家」を初心者向けに解説。Vercel、DNSとの関係、インターネットの分業構造まで学べます。',
  keywords: ['データセンター', 'data center', 'データセンター とは', 'Webサーバー', 'DNS', 'Vercel', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/data-center',
  },
}

export default function DataCenterLayout({ children }: { children: React.ReactNode }) {
  return children
}
