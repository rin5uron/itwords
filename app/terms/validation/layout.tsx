import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'バリデーションとは？小学生でもわかる【入力チェック】',
  description: '「メールアドレスが違います」はなぜ出る？バリデーションを3分で理解。フォーム入力の裏側を解説。',
  keywords: ['バリデーション', 'validation', 'バリデーション とは', 'フォーム', 'IT用語 わかりやすく'],
}

export default function ValidationLayout({ children }: { children: React.ReactNode }) {
  return children
}
