import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webhookとは？小学生でもわかる【自動通知の仕組み】',
  description: 'GitHubにpushしたら自動デプロイ。Webhookの「自動通知」を3分で理解。実演デモ付き。',
  keywords: ['Webhook', 'webhook', 'Webhook とは', '自動化', 'GitHub', 'IT用語 わかりやすく'],
}

export default function WebhookLayout({ children }: { children: React.ReactNode }) {
  return children
}
