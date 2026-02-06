import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CLI/GUIとは？小学生でもわかる【黒い画面vs普通の画面】',
  description: 'CLI（シーエルアイ）とGUI（ジーユーアイ）の違いを黒い画面の例で解説。プログラマーがCLIを使う理由、コマンドラインのメリットを体験デモで理解。',
  keywords: ['CLI', 'GUI', 'シーエルアイ', 'ジーユーアイ', 'コマンドライン', 'ターミナル', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'CLI/GUIとは？小学生でもわかる【黒い画面vs普通の画面】',
    description: 'CLI（シーエルアイ）とGUI（ジーユーアイ）の違いを解説。プログラマーがCLIを使う理由を体験デモで理解。',
    type: 'article',
    url: 'https://itwords.jp/terms/cli-gui',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLI/GUIとは？小学生でもわかる【黒い画面vs普通の画面】',
    description: 'CLI（シーエルアイ）とGUI（ジーユーアイ）の違いを解説。体験デモで理解。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/cli-gui',
  },
}

export default function CliGuiLayout({ children }: { children: React.ReactNode }) {
  return children
}
