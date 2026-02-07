import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Excel ショートカット練習 - 投資銀行スタイル【マウス禁止】',
  description: 'Excelショートカットキーを実践形式で習得。投資銀行の財務モデリングで使われるキーボード操作をレベル別ミッションで体験できます。マウスを使わない文化に適応しよう。',
  keywords: [
    'Excel ショートカット',
    'Excel 練習',
    'Excel ショートカットキー',
    'Excel マウス使わない',
    '投資銀行 Excel',
    '財務モデリング',
    'Excel 高速化',
    'キーボード操作',
    'Excel 実践',
    'Excel トレーニング',
    'Ctrl+矢印',
    'Ctrl+D',
    'F4 絶対参照',
  ],
  openGraph: {
    title: 'Excel ショートカット練習 - 投資銀行スタイル【マウス禁止】',
    description: 'Excelショートカットキーを実践形式で習得。投資銀行の財務モデリングで使われるキーボード操作をレベル別ミッションで体験できます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel ショートカット練習 - 投資銀行スタイル【マウス禁止】',
    description: 'Excelショートカットキーを実践形式で習得。投資銀行の財務モデリングで使われるキーボード操作をレベル別ミッションで体験できます。',
  },
}

export default function ExcelShortcutsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
