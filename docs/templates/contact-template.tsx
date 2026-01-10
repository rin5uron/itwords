// app/contact/page.tsx テンプレート
// AdSense要件：お問い合わせページ（必須）

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ | [サイト名]',
  description: '[サイト名]へのお問い合わせページ。サイトに関するご質問やご意見をお待ちしております。',
  robots: 'noindex, nofollow', // 検索エンジンにインデックスさせない（任意）
}

export default function ContactPage() {
  return (
    <div className="container">
      <header>
        <h1>お問い合わせ</h1>
      </header>

      <main>
        <section>
          <p>
            [サイト名]をご利用いただきありがとうございます。
            <br />
            サイトに関するご質問、ご意見、ご要望などがございましたら、下記のフォームよりお気軽にお問い合わせください。
          </p>

          {/* お問い合わせフォームを実装 */}
          {/* 例：メール送信フォーム、外部サービス（Formspree等）の利用 */}
          <div style={{ marginTop: '20px' }}>
            <p>お問い合わせフォームをここに実装してください。</p>
            {/* ContactFormコンポーネントを実装 */}
          </div>

          <h2>お問い合わせの際のお願い</h2>
          <ul>
            <li>回答までに数日お時間をいただく場合がございます</li>
            <li>お問い合わせの内容によっては、回答できかねる場合がございます</li>
            <li>メールアドレスの記載がない場合、返信できませんのでご了承ください</li>
          </ul>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; {new Date().getFullYear()} [サイト名]</p>
      </footer>
    </div>
  )
}

