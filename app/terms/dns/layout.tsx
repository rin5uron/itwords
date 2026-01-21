import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DNSとは？小学生でもわかる【住所録の仕組み】',
  description: '「google.com」がどうやってIPアドレスに変わる？DNSを「インターネットの住所録」で3分理解。体験デモ付き。',
  keywords: ['DNS', 'DNS とは', 'ドメイン', 'IPアドレス', 'IT用語 わかりやすく'],
  alternates: {
    canonical: 'https://itwords.jp/terms/dns',
  },
}

export default function DnsLayout({ children }: { children: React.ReactNode }) {
  return children
}
