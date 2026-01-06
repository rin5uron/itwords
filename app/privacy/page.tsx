import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | IT用語辞典',
  description: 'IT用語辞典のプライバシーポリシーです。個人情報の取り扱い、Cookieの使用、Google Analytics、アドセンスに関する情報を掲載しています。',
}

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <header>
        <h1>プライバシーポリシー</h1>
      </header>

      <main>
        <section>
          <p>IT用語辞典（以下「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーでは、当サイトにおける個人情報の取り扱いについて説明します。</p>
        </section>

        <section>
          <h2>1. 個人情報の収集</h2>
          <p>当サイトでは、以下の方法で情報を収集する場合があります：</p>
          <ul>
            <li>お問い合わせフォームを通じて提供される情報（お名前、メールアドレス等）</li>
            <li>Cookieおよび類似技術を用いた閲覧情報</li>
            <li>アクセス解析ツールを通じた利用状況の情報</li>
          </ul>
        </section>

        <section>
          <h2>2. 個人情報の利用目的</h2>
          <p>収集した個人情報は、以下の目的で利用します：</p>
          <ul>
            <li>お問い合わせへの対応</li>
            <li>サイトの改善およびコンテンツの最適化</li>
            <li>統計データの作成（個人を特定できない形式）</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookieの使用について</h2>
          <p>当サイトでは、ユーザー体験の向上およびアクセス解析のためにCookieを使用しています。Cookieは、ユーザーのブラウザに保存される小さなテキストファイルです。</p>
          <p>ブラウザの設定により、Cookieの受け入れを拒否することができますが、その場合、サイトの一部機能が正常に動作しない可能性があります。</p>
        </section>

        <section>
          <h2>4. Google Analyticsの使用</h2>
          <p>当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を利用しています。Google Analyticsは、Cookieを使用してユーザーの行動を分析します。</p>
          <p>収集されたデータは匿名で処理され、個人を特定するものではありません。詳細については、<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Googleのプライバシーポリシー</a>をご確認ください。</p>
        </section>

        <section>
          <h2>5. Google AdSenseについて</h2>
          <p>当サイトでは、広告配信サービス「Google AdSense」を利用しています。Google AdSenseは、ユーザーの興味関心に基づいた広告を表示するため、Cookieを使用します。</p>
          <p>広告のパーソナライズを無効にする方法については、<a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">広告設定</a>をご確認ください。</p>
        </section>

        <section>
          <h2>6. 第三者への情報提供</h2>
          <p>当サイトは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません：</p>
          <ul>
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づき開示が必要な場合</li>
            <li>人の生命、身体または財産の保護のために必要な場合</li>
          </ul>
        </section>

        <section>
          <h2>7. 個人情報の管理</h2>
          <p>当サイトは、個人情報の正確性を保ち、安全に管理するため、適切なセキュリティ対策を実施します。</p>
        </section>

        <section>
          <h2>8. プライバシーポリシーの変更</h2>
          <p>当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。</p>
        </section>

        <section>
          <h2>9. お問い合わせ</h2>
          <p>本プライバシーポリシーに関するご質問やご意見がございましたら、<Link href="/">トップページ</Link>のお問い合わせフォームよりご連絡ください。</p>
        </section>

        <section>
          <p><strong>制定日：2026年1月6日</strong></p>
        </section>
      </main>

      <footer>
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2024 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
