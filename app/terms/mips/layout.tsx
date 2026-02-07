import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MIPSとは？小学生でもわかる【速度デモ＋単位計算】',
  description: 'MIPSとは？アニメーションデモで命令実行速度を今すぐ体感。なぜマイクロ秒を使うのか、10のマイナス6乗の意味、計算方法まで初心者向けに解説します。',
  keywords: [
    'MIPS',
    'MIPS とは',
    'MIPS 計算',
    'MIPS 単位',
    'MIPS わかりやすく',
    'MIPS 小学生',
    'MIPS デモ',
    'MIPS マイクロ秒',
    '命令実行速度',
    '平均命令実行時間',
    'ミリ マイクロ ナノ ピコ',
    '10のマイナス6乗',
    '基本情報技術者試験',
  ],
  openGraph: {
    title: 'MIPSとは？小学生でもわかる【速度デモ＋単位計算】',
    description: 'MIPSとは？アニメーションデモで命令実行速度を今すぐ体感。なぜマイクロ秒を使うのか、10のマイナス6乗の意味、計算方法まで初心者向けに解説します。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIPSとは？小学生でもわかる【速度デモ＋単位計算】',
    description: 'MIPSとは？アニメーションデモで命令実行速度を今すぐ体感。なぜマイクロ秒を使うのか、10のマイナス6乗の意味、計算方法まで初心者向けに解説します。',
  },
}

export default function MipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
