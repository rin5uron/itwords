import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GitHubワークフローとは？プルリクエストとブランチ戦略【初心者向け】',
  description: 'GitHubのプルリクエストとブランチ戦略を初心者向けに解説。GitHub Flow、Git Flow、Trunk-basedの違いと使い分け、コードレビューのポイントを学べます。',
  keywords: ['GitHubワークフロー', 'プルリクエスト', 'Pull Request', 'PR', 'GitHub Flow', 'Git Flow', 'ブランチ戦略', 'コードレビュー', 'GitHub 初心者'],
  openGraph: {
    title: 'GitHubワークフローとは？プルリクエストとブランチ戦略【初心者向け】',
    description: 'GitHubのプルリクエストとブランチ戦略を初心者向けに解説。GitHub Flow、Git Flow、Trunk-basedの違いと使い分け、コードレビューのポイントを学べます。',
    type: 'article',
    url: 'https://itwords.jp/terms/github-workflow',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/github-workflow',
  },
}

export default function GitHubWorkflowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
