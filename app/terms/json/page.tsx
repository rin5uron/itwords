import Link from 'next/link'
import type { Metadata } from 'next'
import JsonDemo from '@/components/JsonDemo'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'JSONとは？初心者向けにわかりやすく解説【実践デモ付き】 | 実践型IT用語辞典',
  description: 'JSONとは何か、初心者向けにわかりやすく解説。JavaScript Object Notationの基本から、Web APIやデータ保存で使われる軽量データ交換フォーマットまで、実際に編集できるデモで体験しながら学べます。プログラミング初心者向けIT用語解説。',
  keywords: ['JSON', 'JSON とは', 'JSON わかりやすく', 'JSON 初心者', 'JavaScript Object Notation', 'データ形式', 'Web API', 'プログラミング 初心者', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'JSONとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'JSONを初心者向けに解説。実際に編集できるデモで体験しながら学べます。',
    type: 'article',
  },
}

export default function JsonPage() {
  const faqs = [
    {
      question: 'JSONとは何ですか？',
      answer: 'JSON（JavaScript Object Notation）は、軽量で人間にも読みやすいデータ交換フォーマットです。キー（名前）と値のペアでデータを表現し、Web APIのレスポンスや設定ファイルなど幅広く利用されています。',
    },
    {
      question: 'JSONはどこで使われていますか？',
      answer: 'JSONは、Web APIのリクエスト・レスポンス、設定ファイル（package.jsonなど）、データベースのデータ保存、サーバーとクライアント間のデータ交換など、あらゆる場面で使われています。',
    },
    {
      question: 'JSONとXMLの違いは何ですか？',
      answer: 'JSONはXMLより軽量でシンプルです。XMLはタグで構造を表現しますが、JSONはキーと値のペアで表現します。JSONの方が読みやすく、データサイズも小さいため、Web開発では主流になっています。',
    },
    {
      question: 'JavaScriptでJSONを扱うにはどうすればいいですか？',
      answer: 'JavaScriptでは、JSON.parse()でJSON文字列をオブジェクトに変換し、JSON.stringify()でオブジェクトをJSON文字列に変換できます。これにより、データの送受信や保存が簡単に行えます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="JSONとは？初心者向けにわかりやすく解説"
        description="JSON（JavaScript Object Notation）を初心者向けに解説。Web APIやデータ保存で使われる軽量データ交換フォーマットを体験しながら学べます。"
        datePublished="2024-01-01"
        dateModified="2024-01-07"
      />
      <header>
        <h1>
          <i className="fas fa-brackets-curly"></i> JSON
        </h1>
        <p className="reading">ジェイソン / JavaScript Object Notation</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>JSON</strong>（JavaScript Object Notation）は、軽量で人間にも読みやすい
            <strong>データ交換フォーマット</strong>です。
            Web APIやデータ保存など、あらゆる場面で使われる標準的なデータ形式で、キー（名前）と値のペアでデータを表現します。
          </p>
        </section>

        <section>
          <h2>ポイント</h2>
          <ul>
            <li>
              <strong>人間が読みやすく、機械が処理しやすい</strong>構造
            </li>
            <li>
              Web APIのレスポンス、設定ファイル、データ保存など<strong>幅広く利用</strong>
            </li>
            <li>
              <code>&#123;"key": "value"&#125;</code> の形式でデータを表現
            </li>
            <li>JavaScript以外の言語（Python、Java、PHPなど）でも扱える</li>
          </ul>
        </section>

        <section>
          <h2>JSONの基本構造</h2>
          <p>JSONは以下のデータ型をサポートしています：</p>
          <ul>
            <li>
              <strong>文字列</strong>: <code>"こんにちは"</code>
            </li>
            <li>
              <strong>数値</strong>: <code>42</code>, <code>3.14</code>
            </li>
            <li>
              <strong>真偽値</strong>: <code>true</code>, <code>false</code>
            </li>
            <li>
              <strong>配列</strong>: <code>["りんご", "バナナ", "みかん"]</code>
            </li>
            <li>
              <strong>オブジェクト</strong>:{' '}
              <code>&#123;"name": "田中", "age": 30&#125;</code>
            </li>
            <li>
              <strong>null</strong>: <code>null</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>体験してみよう</h2>
          <p>実際にJSONデータを編集して、リアルタイムで構造を確認してみましょう。</p>

          <JsonDemo />
        </section>

        <section>
          <h2>JavaScriptで実践してみよう</h2>
          <p>
            JavaScriptの<code>JSON.parse()</code>と<code>JSON.stringify()</code>
            を使うと、JSONデータを簡単に操作できます。以下のサンプルコードで、その実装方法を確認してみましょう。
          </p>

          <details>
            <summary>サンプルコードを見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// JSONデータの例
const jsonData = {
  "name": "田中太郎",
  "age": 25,
  "hobbies": ["読書", "映画鑑賞", "プログラミング"],
  "address": {
    "city": "東京",
    "prefecture": "東京都"
  }
};

// オブジェクトをJSON文字列に変換
const jsonString = JSON.stringify(jsonData, null, 2);
console.log("JSON文字列:", jsonString);

// JSON文字列をオブジェクトに変換
const parsedData = JSON.parse(jsonString);
console.log("パースされたデータ:", parsedData.name); // "田中太郎"`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section className="term-comparison">
          <h2>関連用語</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/terms/api" className="term-name">
                      API
                    </Link>
                  </td>
                  <td>JSONはAPIのリクエスト・レスポンスでよく使われる</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/javascript" className="term-name">
                      JavaScript
                    </Link>
                  </td>
                  <td>JSONはJavaScriptオブジェクトの表記法から生まれた</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">XML</span>
                  </td>
                  <td>構造化データフォーマット。JSONより冗長だが厳密</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
