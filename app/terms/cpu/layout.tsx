import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CPUとは？基本情報でも出る仕組みをわかりやすく【クロック・MIPSデモ付き】',
  description: 'CPUの役割とFetch/Decode/Executeの流れを初心者向けに解説。クロック周波数とMIPSの計算をデモで体感。基本情報技術者試験のイメージがつかめます。',
  keywords: ['CPU', '中央処理装置', 'クロック周波数', 'MIPS', '基本情報技術者', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/cpu',
  },
}

export default function CPULayout({ children }: { children: React.ReactNode }) {
  return children
}
