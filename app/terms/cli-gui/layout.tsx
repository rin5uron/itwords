import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CLI/GUIとは？小学生でもわかる【黒い画面vs普通の画面】',
  description: '「黒い画面」=CLI、「普通の画面」=GUI。プログラマーがCLIを使う理由を3分で理解。体験デモ付き。',
  keywords: ['CLI', 'GUI', 'コマンドライン', 'ターミナル', 'IT用語 わかりやすく'],
}

export default function CliGuiLayout({ children }: { children: React.ReactNode }) {
  return children
}
