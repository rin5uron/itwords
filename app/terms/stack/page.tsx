import Link from 'next/link'
import type { Metadata } from 'next'
import StackDemo from '@/components/StackDemo'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'スタック構造とは？初心者向けにわかりやすく解説【実践デモ付き】 | 実践型IT用語辞典',
  description: 'スタック構造（Stack）は、最後に入れたものが最初に出てくるLIFO（後入れ先出し）のデータ構造です。お皿の積み重ねやブラウザの戻るボタンなど身近な例から、git stashの実践的な使い方まで、初心者にもわかりやすく解説します。',
  keywords: ['スタック', 'Stack', 'LIFO', '後入れ先出し', 'データ構造', 'git stash', 'プログラミング', '初心者', 'わかりやすく', 'スタック構造 とは'],
  openGraph: {
    title: 'スタック構造とは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'スタック構造（Stack）は、最後に入れたものが最初に出てくるLIFO（後入れ先出し）のデータ構造です。お皿の積み重ねやブラウザの戻るボタンなど身近な例から実践まで解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スタック構造とは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'スタック構造（Stack）は、最後に入れたものが最初に出てくるLIFO（後入れ先出し）のデータ構造です。お皿の積み重ねやブラウザの戻るボタンなど身近な例から実践まで解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/stack',
  },
}

export default function StackPage() {
  const faqs = [
    {
      question: 'スタック構造とは何ですか？',
      answer: 'スタック構造とは、最後に入れたものが最初に出てくるLIFO（Last In, First Out）のデータ構造です。お皿を積み重ねるように、上に積んだものから取り出していく仕組みです。'
    },
    {
      question: 'LIFOとは何ですか？',
      answer: 'LIFOは「Last In, First Out」の略で、「後入れ先出し」を意味します。最後に追加したデータが最初に取り出される仕組みで、スタック構造の基本原則です。'
    },
    {
      question: 'スタック構造は実際にどこで使われていますか？',
      answer: 'スタック構造は、ブラウザの戻るボタン、テキストエディタのUndo機能、プログラムの関数呼び出し、git stashなど、様々な場面で使われています。'
    },
    {
      question: 'pushとpopとは何ですか？',
      answer: 'pushはスタックの上に新しいデータを積む操作、popはスタックの一番上からデータを取り出す操作です。この2つがスタック構造の基本的な操作です。'
    },
    {
      question: 'git stashとスタック構造はどう関係していますか？',
      answer: 'git stashはスタック構造を使って作業内容を一時保存します。stash pushで作業を積み、stash popで最後に積んだ作業を取り出すことができます。'
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
        title="スタック構造とは？初心者向けにわかりやすく解説【実践デモ付き】"
        description="スタック構造（Stack）は、最後に入れたものが最初に出てくるLIFO（後入れ先出し）のデータ構造です。お皿の積み重ねやブラウザの戻るボタンなど身近な例から、git stashの実践的な使い方まで、初心者にもわかりやすく解説します。"
        datePublished="2024-01-07"
        dateModified="2026-01-07"
      />
      <TermHeader
        termName="スタック構造"
        reading="すたっくこうぞう / Stack (LIFO)"
        icon="fas fa-layer-group"
        dateCreated="2024-01-07"
        dateModified="2026-01-07"
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            最後に入れたものが、最初に出てくるという仕組みのデータ構造。
            <br />
            <strong>後入れ先だし</strong>、「<strong>LIFO（Last In, First Out）</strong>」とも呼ばれる。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>スタック構造の仕組みを体験してみよう</h3>
            <p>
              下のボタンを押して、スタックの「後入れ先出し」を体験できます。
              実際に手を動かすことで、スタック構造の動作が理解しやすくなります。
            </p>
            <StackDemo />
          </div>
        </section>

        <section>
          <h2>ポイント</h2>
          <ul>
            <li>
              「上に積む（<strong>push</strong>）」「上から取る（<strong>pop</strong>）」が基本操作
            </li>
            <li>
              <strong>戻るボタン、Undo、ブラウザ履歴</strong>などにも使われる
            </li>
            <li>順番どおりに処理したいときには便利だが、途中のデータを取り出すのは苦手</li>
          </ul>
        </section>

        <section>
          <h2>体験してみよう①【日常編】</h2>
          <p>
            色の違うお皿を重ねてみよう！
            <br />→ 後から置いたものから取る！<strong>＝スタック構造の仕組みと同じ！</strong>
          </p>
          <ol>
            <li>最初に青いお皿を置く</li>
            <li>その上に赤いお皿を置く</li>
            <li>一番上の赤いお皿から先に取る</li>
          </ol>
        </section>


        <section>
          <h2>git stashで実践してみよう</h2>
          <p>
            Gitでの一時保存コマンド <code>git stash</code> は、まさにスタックそのもの！
            <br />
            ターミナルを開いてgit連携しているテキストエディタ上で<code>git stash</code>{' '}
            を体験してみよう。
          </p>

          <details>
            <summary>
              <strong>サンプルコマンド</strong>を見る
            </summary>
            <div className="code-example">
              <pre>
                <code className="language-bash">{`# 作業内容をスタックに積む
git stash
git stash push -m "メッセージ" # メッセージ付きでstash

# 最後に積んだものを取り出す
git stash pop

# スタックの中身を確認する
git stash list

# 特定のスタックを取り出す
git stash apply stash@{1}`}</code>
              </pre>
            </div>
          </details>

          <details>
            <summary>ターミナルの実行結果の例</summary>
            <div className="code-example">
              <pre>
                <code>{`# UI変更①、②を順にstashに積み、①だけを適用する例

# 作業①をスタックに積む
$ git stash push -m "UI変更①（ボタン位置調整）"
Saved working directory and index state WIP on main: 9abcde1 UI変更①（ボタン位置調整）

# 作業②をスタックに積む
$ git stash push -m "UI変更②（配色調整）"
Saved working directory and index state WIP on main: bcd2345 UI変更②（配色調整）

# スタックの状態を確認
$ git stash list
stash@{0}: WIP on main: bcd2345 UI変更②（配色調整）
stash@{1}: WIP on main: 9abcde1 UI変更①（ボタン位置調整）

# UI変更①を適用する
$ git stash apply stash@{0}
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)`}</code>
              </pre>
            </div>
          </details>

          <p style={{ marginTop: '20px' }}>
            <strong>ポイント</strong>
            <br />- <code>stash</code> するたびに「上に積まれる」
            <br />- <code>pop</code> で「一番上＝最後に積んだやつ」が出てくる
          </p>
        </section>

        <section className="term-comparison">
          <h2>関連用語・比較</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語名</th>
                  <th>構造の違い</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/terms/stack" className="term-name">
                      <strong>スタック</strong>
                    </Link>
                  </td>
                  <td>後入れ先出し</td>
                  <td>「戻る」操作や、一時的な処理に強い</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/queue" className="term-name">
                      <strong>キュー</strong>
                    </Link>
                  </td>
                  <td>先入れ先出し</td>
                  <td>受付や行列のような順番処理に向く</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">
                      <strong>配列（Array）</strong>
                    </span>
                  </td>
                  <td>任意の位置にアクセス可能</td>
                  <td>特定のデータを直接取り出せる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div
          className="summary-box"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '40px 20px',
            margin: '40px auto',
            maxWidth: '90%',
            fontSize: '1.2em',
            lineHeight: '1.8',
            textAlign: 'center',
            fontStyle: 'normal',
            color: '#555'
          }}
        >
          スタック構造とは、<strong>「積み重ねて、上から取り出す」</strong>ルールのこと。
          <br />
          シンプルだけど、Undo・履歴・メモリ処理などいろんな場面で大活躍！
        </div>

        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
