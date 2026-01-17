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
      answer: 'キューは、印刷ジョブの管理、タスク処理の待機列、メッセージキュー、BFS（幅優先探索）アルゴリズム、YouTubeの再生キュー、コールセンターの電話待機など、順番が重要な場面で広く使われています。'
    },
    {
      question: 'EnqueueとDequeueとは何ですか？',
      answer: 'Enqueue（エンキュー）は列の末尾にデータを追加する操作、Dequeue（デキュー）は列の先頭からデータを取り出す操作です。この2つがキュー構造の基本的な操作です。'
    },
    {
      question: 'キューとスタックの違いは何ですか？',
      answer: 'キューはFIFO（先入れ先出し）で先に入れたものが先に出ますが、スタックはLIFO（後入れ先出し）で後に入れたものが先に出ます。用途や動作が全く異なるデータ構造です。'
    },
    {
      question: 'キューが空の時にDequeueするとどうなりますか？',
      answer: 'キューが空の状態でDequeue操作を実行しようとすると、エラーが発生するか、何も返されません（undefinedやnullなど）。実装によっては例外をスローする場合もあるため、事前に空かどうかをチェックするのが安全です。'
    },
    {
      question: 'JavaScriptでキューを実装する方法は？',
      answer: 'JavaScriptでは配列を使って簡単に実装できます。push()メソッドで末尾に追加（Enqueue）、shift()メソッドで先頭から取り出し（Dequeue）を行います。ただし、shift()は配列の先頭削除なのでパフォーマンスは少し遅いです。'
    },
    {
      question: 'キューのサイズに制限はありますか？',
      answer: 'プログラムで実装するキューには、メモリの許す限り制限はありませんが、実際のシステムでは「有界キュー」として最大サイズを設定することが多いです。例えば、印刷ジョブが100件まで、といった制限を設けます。'
    },
    {
      question: '優先度付きキューとは何ですか？',
      answer: '優先度付きキュー（Priority Queue）は、通常のキューと違い、追加した順番ではなく優先度の高い順にデータを取り出す特殊なキューです。例えば、緊急度の高いタスクを先に処理したい場合などに使われます。'
    },
    {
      question: 'キューはどんな時に使うべきですか？',
      answer: '順番通りに処理したい場合や、公平性を保ちたい時に使います。例えば、先に依頼した人から順番に対応したい、リクエストを受け付けた順に処理したい、といった場面で有効です。割り込みを許さない仕組みが必要な時にキューを選びましょう。'
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
          <h2>日常生活でのキューの例</h2>
          <p>
            キュー構造は日常のあらゆる場面で使われています。意識していないだけで、私たちは毎日キューに囲まれて生活しているのです。
          </p>

          <h3>1. レジの行列</h3>
          <p>
            スーパーやコンビニのレジに並ぶ行列は、まさにキューそのものです。先に並んだ人から順番に会計を済ませていきます。
            割り込みをすると怒られるのは、キューのルール（FIFO）を破っているからです。
          </p>

          <h3>2. 印刷ジョブの待機列</h3>
          <p>
            オフィスで複数の人が同じプリンターに印刷指示を出した場合、印刷ジョブはキューに入ります。
            先に送った印刷データから順番に印刷されるので、自分の番が来るまで待つ必要があります。
          </p>

          <h3>3. 電話の着信待ち</h3>
          <p>
            コールセンターに電話をかけると「ただいま電話が大変混み合っております。順番にお繋ぎいたします」というアナウンスを聞くことがありますが、
            これもキューの仕組みです。電話をかけた順番に対応されます。
          </p>

          <h3>4. アプリのタスク処理</h3>
          <p>
            SNSアプリで「いいね」を連打すると、裏側ではそれらのリクエストがキューに入り、順番に処理されます。
            サーバーが一度に処理できる量には限界があるため、キューで順番待ちをさせることでシステムを安定させています。
          </p>

          <h3>5. YouTubeの再生キュー</h3>
          <p>
            YouTube Musicやプレイリストで「次に再生」をタップすると、その曲がキューに追加されます。
            現在の曲が終わったら、キューの先頭から順番に再生されていく仕組みです。
          </p>
        </section>

        <section>
          <h2>実際に体験してみよう</h2>
          <p>
            下のデモでキューの動きを体験できます。実際に手を動かすことで、「先入れ先出し」の仕組みが理解しやすくなります。
          </p>

          <h3>デモの使い方</h3>
          <ol>
            <li><strong>「Enqueue」ボタンをクリック</strong>: 列の末尾（右側）に人を追加します</li>
            <li><strong>「Dequeue」ボタンをクリック</strong>: 列の先頭（左側）から人が退出します</li>
            <li><strong>何度か繰り返す</strong>: 先に追加した人が先に出ていくことを確認しましょう</li>
          </ol>

          <p>
            <strong>ポイント</strong>: 後から追加した人（右側）は、先に追加した人（左側）が全員出るまで退出できません。
            これがキューの「先入れ先出し」の原則です。
          </p>

          <QueueDemo />

          <h3>デモから学べること</h3>
          <ul>
            <li>Enqueueで追加した順番が保たれること</li>
            <li>Dequeueで先頭から順番に取り出されること</li>
            <li>途中の人を飛ばして取り出すことはできないこと</li>
            <li>キューが空の状態でDequeueしても何も起こらないこと</li>
          </ul>
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
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
