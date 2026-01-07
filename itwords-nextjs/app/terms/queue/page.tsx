import Link from 'next/link'
import type { Metadata } from 'next'
import QueueDemo from '@/components/QueueDemo'

export const metadata: Metadata = {
  title: 'キュー（Queue）とは？FIFO（先入れ先出し）のデータ構造を初心者向けに解説 | IT用語辞典',
  description: '先に入れたものが先に出ていく「キュー構造」について、FIFOの原則や具体的な使われ方を、インタラクティブなデモを通じて分かりやすく解説します。',
  keywords: 'キュー,Queue,FIFO,データ構造,プログラミング,JavaScript,初心者',
}

export default function QueuePage() {
  return (
    <div className="container">
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
