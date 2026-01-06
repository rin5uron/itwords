import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IT用語辞典',
  description: '見て、触って、学べる実践型のIT用語辞典。デモを通じて、IT技術の「なぜ？」が直感的にわかります。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
