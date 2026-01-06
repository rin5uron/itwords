'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function JavaScriptPage() {
  const [jsCode, setJsCode] = useState('// コードを書いてみましょう！\nconst greeting = "こんにちは！";\nconsole.log(greeting);')
  const [jsOutput, setJsOutput] = useState('')

  const runJavaScript = () => {
    try {
      // console.logをキャプチャ
      const logs: string[] = []
      const originalLog = console.log
      console.log = (...args) => {
        logs.push(args.map(arg => String(arg)).join(' '))
      }

      // コードを実行
      // eslint-disable-next-line no-eval
      eval(jsCode)

      // console.logを元に戻す
      console.log = originalLog

      // 結果を表示
      setJsOutput(logs.length > 0 ? logs.join('\n') : '出力がありません')
    } catch (error) {
      setJsOutput(`エラー: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  return (
    <div className="container">
      <header>
        <h1><i className="fas fa-code-branch"></i> JavaScript</h1>
        <p className="reading">ジャバスクリプト / JS</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>JavaScript</strong>（略してJS）は、Webページに<strong>動き</strong>と<strong>インタラクション</strong>を追加するプログラミング言語です。
            ボタンをクリックしたときの処理、フォームの入力チェック、アニメーション、データの取得など、ユーザーの操作に応じた動的な機能を実現します。
          </p>
        </section>

        <section>
          <h2>JavaScriptとは何か？</h2>
          <p>
            JavaScriptは、世界で最も広く使われているプログラミング言語の一つです。
            元々はブラウザ上で動く言語として開発されましたが、現在ではサーバー（Node.js）やスマホアプリ（React Native）など、幅広い用途で使われています。
          </p>

          <h3>JavaScriptの特徴</h3>
          <ul>
            <li><strong>ブラウザで動く</strong>: すべての主要ブラウザがJavaScriptをサポート</li>
            <li><strong>インタープリタ言語</strong>: コンパイル不要で即座に実行可能</li>
            <li><strong>オブジェクト指向</strong>: 複雑な処理も整理して書ける</li>
            <li><strong>イベント駆動</strong>: ユーザーの操作に反応して処理を実行</li>
            <li><strong>非同期処理</strong>: 複数の処理を同時進行できる</li>
          </ul>
        </section>

        <section>
          <h2>JavaScriptでできること</h2>
          <ul>
            <li><strong>ボタンのクリック処理</strong>: クリックしたら色が変わる、メッセージを表示など</li>
            <li><strong>フォームの検証</strong>: メールアドレスの形式チェック、必須入力チェックなど</li>
            <li><strong>アニメーション</strong>: 要素をスライドさせたり、フェードイン/アウトさせたり</li>
            <li><strong>データの取得</strong>: サーバーから最新情報を取得して画面に表示</li>
            <li><strong>計算処理</strong>: ユーザーが入力した数値を計算して結果を表示</li>
          </ul>
        </section>

        <section>
          <h2>JavaScriptの基本構文</h2>
          <details>
            <summary><strong>サンプルコード</strong>を見る</summary>
            <div className="code-example">
              <pre><code className="language-javascript">{`// 変数の宣言
let name = "田中";
const age = 25;

// 関数の定義
function greet() {
    console.log("こんにちは、" + name + "さん！");
}

// 関数の呼び出し
greet();  // コンソールに「こんにちは、田中さん！」と表示

// ボタンがクリックされたときの処理
document.getElementById("myButton").addEventListener("click", function() {
    alert("ボタンが押されました！");
});`}</code></pre>
            </div>
          </details>

          <h3>各部分の説明</h3>
          <ul>
            <li><code>let</code> / <code>const</code>: 変数を宣言（データを保存する箱）</li>
            <li><code>function</code>: 処理をまとめた関数を定義</li>
            <li><code>console.log()</code>: コンソールにメッセージを表示（デバッグ用）</li>
            <li><code>addEventListener()</code>: ユーザーの操作を監視</li>
          </ul>
        </section>

        <section>
          <h2>HTML、CSS、JavaScriptの違い</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>技術</th>
                  <th>役割</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/terms/html">HTML</Link></td>
                  <td>構造（骨組み）</td>
                  <td>見出し、段落、リンクなどの配置</td>
                </tr>
                <tr>
                  <td><Link href="/terms/css">CSS</Link></td>
                  <td>見た目（デザイン）</td>
                  <td>色、サイズ、レイアウト</td>
                </tr>
                <tr>
                  <td><strong>JavaScript</strong></td>
                  <td>動き（機能）</td>
                  <td>クリック処理、アニメーション、計算</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>ES6（ECMAScript 2015）とは？</h2>
          <p>
            <strong>ES6</strong>は、JavaScriptの大きなアップデート版です。以下のような便利な機能が追加されました：
          </p>
          <ul>
            <li><code>let</code> / <code>const</code>: より安全な変数宣言</li>
            <li><strong>アロー関数</strong>: <code>=&gt;</code>を使った簡潔な関数記法</li>
            <li><strong>テンプレートリテラル</strong>: 文字列の中に変数を埋め込みやすく</li>
            <li><strong>分割代入</strong>: オブジェクトや配列から値を取り出しやすく</li>
            <li><strong>モジュール</strong>: コードを分割して管理しやすく</li>
          </ul>

          <details>
            <summary><strong>ES6のサンプルコード</strong>を見る</summary>
            <div className="code-example">
              <pre><code className="language-javascript">{`// アロー関数
const greet = (name) => \`こんにちは、\${name}さん！\`;

// 分割代入
const user = { name: "田中", age: 25 };
const { name, age } = user;

// スプレッド演算子
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];  // [1, 2, 3, 4, 5]`}</code></pre>
            </div>
          </details>
        </section>

        <section>
          <h2>JavaScriptフレームワーク</h2>
          <p>JavaScriptをより効率的に使うためのフレームワークが数多く存在します：</p>
          <ul>
            <li><strong>React</strong>: Meta（Facebook）が開発したUIライブラリ</li>
            <li><strong>Vue.js</strong>: シンプルで学習しやすいフレームワーク</li>
            <li><strong>Angular</strong>: Googleが開発した大規模アプリ向けフレームワーク</li>
            <li><strong>Next.js</strong>: Reactベースのフルスタックフレームワーク</li>
          </ul>
        </section>

        <section>
          <h2>実際にやってみよう：JavaScriptコードエディタ</h2>
          <p>
            下のエディタでJavaScriptコードを入力して、実行ボタンを押してみましょう！
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>コードを書いてみよう</h3>
            <textarea
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
              style={{
                width: '100%',
                minHeight: '150px',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '14px',
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                marginTop: '10px'
              }}
              placeholder="JavaScriptコードを入力してください"
            />

            <button
              onClick={runJavaScript}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              実行
            </button>

            <h3 style={{ marginTop: '20px' }}>実行結果</h3>
            <div
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                padding: '15px',
                backgroundColor: '#fff',
                marginTop: '10px',
                minHeight: '80px',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap'
              }}
            >
              {jsOutput || 'ここに実行結果が表示されます'}
            </div>

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              💡 試してみよう：<br />
              • <code>console.log("Hello")</code> でメッセージを出力<br />
              • <code>const x = 5 + 3; console.log(x);</code> で計算結果を表示<br />
              • <code>alert("こんにちは")</code> でアラートを表示
            </p>
          </div>
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
                  <td><Link href="/terms/html" className="term-name">HTML</Link></td>
                  <td>JavaScriptで操作する対象となるWebページの構造</td>
                </tr>
                <tr>
                  <td><Link href="/terms/css" className="term-name">CSS</Link></td>
                  <td>JavaScriptで動的に変更できるスタイル</td>
                </tr>
                <tr>
                  <td>Node.js</td>
                  <td>サーバーサイドでJavaScriptを動かす実行環境</td>
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
