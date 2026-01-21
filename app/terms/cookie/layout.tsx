import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookieとは？小学生でもわかる【ログイン保持の仕組み】',
  description: 'なぜAmazonは2回目ログイン不要？Cookieの仕組みを3分で理解。プライバシーとの関係、削除方法も解説。',
  keywords: ['Cookie', 'クッキー', 'Cookie とは', 'セッション', 'ログイン', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/cookie',
  },
}

export default function CookieLayout({ children }: { children: React.ReactNode }) {
  return children
}
