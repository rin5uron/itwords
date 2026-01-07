import Link from 'next/link'
import type { Metadata } from 'next'
import LocalStorageDemo from '@/components/LocalStorageDemo'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】 | 実践型IT用語辞典',
  description: 'ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。使い方や注意点を実践デモで初心者にもわかりやすく解説します。',
  keywords: ['ローカルストレージ', 'localStorage', 'Web Storage', 'JavaScript', 'ブラウザ', 'データ保存', '初心者', 'わかりやすく', 'localStorage とは'],
  openGraph: {
    title: 'ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。',
  },
}

export default function LocalStoragePage() {
  const faqs = [
    {
      question: 'ローカルストレージ（localStorage）とは何ですか？',
      answer: 'ローカルストレージとは、ブラウザに小さなデータを保存しておける場所のことです。JavaScriptからアクセスでき、ページを閉じても情報が残るのが特徴です。'
    },
    {
      question: 'ローカルストレージとCookieの違いは何ですか？',
      answer: 'ローカルストレージはブラウザ内だけに保存され、サーバーに送られませんが、Cookieは毎回サーバーに送信されます。また、ローカルストレージの方が保存容量が大きく（約5-10MB）、有効期限がありません。'
    },
    {
      question: 'ローカルストレージに保存できるデータ型は何ですか？',
      answer: 'ローカルストレージは文字列しか保存できません。オブジェクトや配列を保存したい場合は、JSON.stringify()で文字列に変換してから保存し、JSON.parse()で元に戻します。'
    },
    {
      question: 'ローカルストレージとセッションストレージの違いは？',
      answer: 'ローカルストレージはブラウザを閉じても永続的にデータが残りますが、セッションストレージはタブを閉じるとデータが消えます。一時的なデータにはセッションストレージを使います。'
    },
    {
      question: 'ローカルストレージのデータを削除する方法は？',
      answer: 'localStorage.removeItem("キー名")で特定のデータを削除、localStorage.clear()で全てのデータを削除できます。また、ブラウザの設定からも削除可能です。'
    }
  ]

  return (
    <div className="container">
      <StructuredData
        type="FAQPage"
        faqs={faqs}
      />
      <StructuredData
        type="Article"
        title="ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】"
        description="ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。使い方や注意点を実践デモで初心者にもわかりやすく解説します。"
        datePublished="2024-01-07"
        dateModified="2026-01-07"
      />
      <header>
        <h1>
          <i className="fas fa-database"></i> ローカルストレージ
        </h1>
        <p className="reading">ろーかるすとれーじ / localStorage</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            ブラウザに<strong>小さなデータを保存しておける場所</strong>のこと。
            <br />
            JavaScriptからアクセスできて、
            <strong>ページを閉じても情報が残る</strong>のが特徴。
          </p>
        </section>

        <section>
          <h2>ポイント</h2>
          <ul>
            <li>ブラウザ内に保存される（サーバーには送られない）</li>
            <li>
              <code>localStorage.setItem()</code> と <code>getItem()</code>{' '}
              で読み書きできる
            </li>
            <li>
              文字列しか保存できないため、オブジェクトを保存するには
              <Link href="/terms/json">JSON</Link>形式への変換が必須
            </li>
          </ul>
        </section>

        <section>
          <h2>体験してみよう</h2>
          <p>
            ユーザー情報を入力して保存すると、ページを更新してもデータが残ります。これは裏側で入力値を
            <Link href="/terms/json">JSON</Link>
            という形式の文字列に変換して、ローカルストレージに保存しているためです。
          </p>
          <p>①ユーザー情報を入力して保存してみよう</p>
          <p>②ページを更新してみよう</p>

          <LocalStorageDemo />
        </section>

        <section>
          <h2>コードを書いて実践してみよう</h2>
          <p>
            「体験してみよう」の裏側では、このように
            <Link href="/terms/json">JSON</Link>
            を利用してオブジェクトを文字列に変換しています。<code>JSON.stringify()</code>
            で保存し、<code>JSON.parse()</code>で元に戻すのがポイントです。
          </p>

          <details>
            <summary>サンプルコードを見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// ユーザーオブジェクトを作成
const user = { name: '山田', age: 30 };

// オブジェクトをJSON文字列に変換して保存
localStorage.setItem('userData', JSON.stringify(user));

// JSON文字列を取得してオブジェクトに変換
const jsonData = localStorage.getItem('userData');
const savedUser = JSON.parse(jsonData);

console.log(savedUser.name); // "山田"`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section className="term-comparison">
          <h2>関連用語・比較</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語名</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="term-name">localStorage</span>
                  </td>
                  <td>ページを閉じても残る、永続的</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">sessionStorage</span>
                  </td>
                  <td>同じタブ内だけ。閉じると消える</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">クッキー</span>
                  </td>
                  <td>サーバーにも送れる、小さい、やや古い</td>
                </tr>
              </tbody>
            </table>
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
