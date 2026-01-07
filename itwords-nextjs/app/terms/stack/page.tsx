import Link from 'next/link'
import type { Metadata } from 'next'
import StackDemo from '@/components/StackDemo'

export const metadata: Metadata = {
  title: 'スタック構造とは？LIFO（後入れ先出し）のデータ構造を初心者向けに解説 | IT用語辞典',
  description: '最後に入れたものが最初に出てくるデータ構造「スタック」について、LIFO（Last In, First Out）の仕組みを身近な例とgit stashで分かりやすく解説します。',
  keywords: 'スタック,LIFO,データ構造,git stash,プログラミング,初心者',
}

export default function StackPage() {
  return (
    <div className="container">
      <header>
        <h1>
          <i className="fas fa-layer-group" style={{ color: '#8abdea' }}></i> スタック構造
        </h1>
        <p className="reading">すたっくこうぞう / Stack (LIFO)</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            最後に入れたものが、最初に出てくるという仕組みのデータ構造。
            <br />
            <strong>後入れ先だし</strong>、「<strong>LIFO（Last In, First Out）</strong>」とも呼ばれる。
          </p>
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
          <h2>体験してみよう②【実務編】</h2>
          <p>下のボタンを押して、スタックの「後入れ先出し」を体験してみよう！</p>
          <p>
            <strong>Push（プッシュ）</strong>でデータを追加し、
            <br />
            <strong>Pop（ポップ）</strong>でスタックから一番上のデータを取り出せるよ。
          </p>

          <StackDemo />
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
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2024 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
