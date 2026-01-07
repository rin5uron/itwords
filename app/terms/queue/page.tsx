import Link from 'next/link'
import type { Metadata } from 'next'
import QueueDemo from '@/components/QueueDemo'
import StructuredData from '@/app/components/StructuredData'

export const metadata: Metadata = {
  title: 'キュー（Queue）とは？初心者向けにわかりやすく解説【実践デモ付き】 | 実践型IT用語辞典',
  description: 'キュー（Queue）は、先に入れたものが先に出ていくFIFO（先入れ先出し）のデータ構造です。レジの行列のように順番通りに処理される仕組みを、身近な例とインタラクティブなデモで初心者にもわかりやすく解説します。',
  keywords: ['キュー', 'Queue', 'FIFO', '先入れ先出し', 'データ構造', 'プログラミング', 'JavaScript', '初心者', 'わかりやすく', 'キュー とは'],
  openGraph: {
    title: 'キュー（Queue）とは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'キュー（Queue）は、先に入れたものが先に出ていくFIFO（先入れ先出し）のデータ構造です。レジの行列のように順番通りに処理される仕組みを解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'キュー（Queue）とは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'キュー（Queue）は、先に入れたものが先に出ていくFIFO（先入れ先出し）のデータ構造です。レジの行列のように順番通りに処理される仕組みを解説。',
  },
}

export default function QueuePage() {
  const faqs = [
    {
      question: 'キュー（Queue）とは何ですか？',
      answer: 'キューとは、先に入れたものが先に出ていくFIFO（First In, First Out）のデータ構造です。レジの行列のように、並んだ順番通りに処理される仕組みです。'
    },
    {
      question: 'FIFOとは何ですか？',
      answer: 'FIFOは「First In, First Out」の略で、「先入れ先出し」を意味します。最初に追加したデータが最初に取り出される仕組みで、キュー構造の基本原則です。'
    },
    {
      question: 'キューは実際にどこで使われていますか？',
      answer: 'キューは、印刷ジョブの管理、タスク処理の待機列、メッセージキュー、BFS（幅優先探索）アルゴリズムなど、順番が重要な場面で広く使われています。'
    },
    {
      question: 'EnqueueとDequeueとは何ですか？',
      answer: 'Enqueue（エンキュー）は列の末尾にデータを追加する操作、Dequeue（デキュー）は列の先頭からデータを取り出す操作です。この2つがキュー構造の基本的な操作です。'
    },
    {
      question: 'キューとスタックの違いは何ですか？',
      answer: 'キューはFIFO（先入れ先出し）で先に入れたものが先に出ますが、スタックはLIFO（後入れ先出し）で後に入れたものが先に出ます。用途や動作が全く異なるデータ構造です。'
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
        title="キュー（Queue）とは？初心者向けにわかりやすく解説【実践デモ付き】"
        description="キュー（Queue）は、先に入れたものが先に出ていくFIFO（先入れ先出し）のデータ構造です。レジの行列のように順番通りに処理される仕組みを、身近な例とインタラクティブなデモで初心者にもわかりやすく解説します。"
        datePublished="2024-01-07"
        dateModified="2026-01-07"
      />
      <header>
        <h1>
          <i className="fas fa-users" style={{ color: '#82c9a0' }}></i> キュー (Queue)
        </h1>
        <p className="reading">きゅー / Queue (FIFO)</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            先に入れたものが、先に出ていくという仕組みのデータ構造のこと。「
            <strong>FIFO (First In, First Out)</strong>
            」とも呼ばれます。レジの行列のように、並んだ順番通りに処理されるのが特徴です。
          </p>
        </section>

        <section>
          <h2>ポイント</h2>
          <ul>
            <li>
              <strong>Enqueue (エンキュー)</strong>: 列の末尾にデータを追加すること。
            </li>
            <li>
              <strong>Dequeue (デキュー)</strong>: 列の先頭からデータを取り出すこと。
            </li>
            <li>
              印刷ジョブの管理やタスク処理など、<strong>順番が重要な場面</strong>で使われます。
            </li>
          </ul>
        </section>

        <section>
          <h2>実際に体験してみよう</h2>
          <p>
            下のボタンを押して、キューの「先入れ先出し」を体験してみましょう。「Enqueue」で列の末尾に人を追加し、「Dequeue」で列の先頭から人が退出します。
          </p>

          <QueueDemo />
        </section>

        <section>
          <h2>コードを書いてみよう</h2>
          <p>
            JavaScriptの配列を使えば、<code>push</code>で追加し、<code>shift</code>
            で取り出すことで簡単に「先入れ先出し」のキューを実装できます。
          </p>

          <details>
            <summary>
              サンプルコードを見る <strong>(JavaScript)</strong>
            </summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// 配列を使った簡単なキュー
const queue = [];

// Enqueue: 後ろに追加
queue.push('タスク1');
queue.push('タスク2');

// Dequeue: 先頭から取り出し
const firstTask = queue.shift();

console.log(firstTask); // "タスク1"`}</code>
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
                  <th>構造</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/terms/queue" className="term-name">
                      キュー
                    </Link>
                  </td>
                  <td>先入れ先出し (FIFO)</td>
                  <td>レジの列のように、順番通りに処理する。</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/stack" className="term-name">
                      スタック
                    </Link>
                  </td>
                  <td>後入れ先出し (LIFO)</td>
                  <td>お皿の山のように、後から置いたものを先に取る。</td>
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
