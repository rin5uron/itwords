import Link from 'next/link'
import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | 実践型IT用語辞典',
  description: '実践型IT用語辞典へのお問い合わせページ。サイトに関するご質問やご意見をお待ちしております。',
  robots: 'noindex, nofollow',
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
            実践型IT用語辞典をご利用いただきありがとうございます。
            <br />
            サイトに関するご質問、ご意見、ご要望などがございましたら、下記のフォームよりお気軽にお問い合わせください。
          </p>

          <ContactForm />

          <h2>お問い合わせの際のお願い</h2>
          <ul>
            <li>回答までに数日お時間をいただく場合がございます</li>
            <li>お問い合わせの内容によっては、回答できかねる場合がございます</li>
            <li>メールアドレスの記載がない場合、返信できませんのでご了承ください</li>
          </ul>

          <h2>よくあるご質問</h2>
          <div style={{ marginTop: '20px' }}>
            <h3>Q. 新しい用語のリクエストはできますか？</h3>
            <p>
              はい、ぜひお寄せください。今後の用語追加の参考にさせていただきます。
            </p>

            <h3>Q. サイトの内容を引用してもいいですか？</h3>
            <p>
              学習目的での適切な引用は問題ありませんが、出典を明記してください。
              商用利用の場合は事前にお問い合わせください。
            </p>

            <h3>Q. サイトに誤りを見つけました</h3>
            <p>
              ご指摘いただきありがとうございます。お手数ですが、該当ページと誤りの内容をお問い合わせメールでお知らせください。
            </p>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2024 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
