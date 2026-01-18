import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ホスティングサービスとは？小学生でもわかる【サーバー貸し】',
  description: 'Webサイトを公開する「サーバー貸し」サービス。Vercel、Netlify、AWSの違いを3分で理解。',
  keywords: ['ホスティング', 'hosting', 'ホスティングサービス', 'Vercel', 'サーバー', 'IT用語 わかりやすく'],
}

export default function HostingServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
