import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'メモリとは？主記憶・アドレス・実効アクセス時間を基本情報向けに解説【デモ付き】',
  description: 'メモリ（主記憶）の役割と記憶階層を解説。アドレス指定方式・実効アクセス時間の計算をデモで体感。基本情報技術者試験のイメージがつかめます。',
  keywords: ['メモリ', '主記憶', 'RAM', 'アドレス指定', '実効アクセス時間', '基本情報技術者', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/memory',
  },
}

export default function MemoryLayout({ children }: { children: React.ReactNode }) {
  return children
}
