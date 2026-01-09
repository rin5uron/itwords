'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HTMLPage() {
  const [htmlCode, setHtmlCode] = useState('<h1>こんにちは！</h1>\n<p>これはHTMLで書かれた段落です。</p>')
  const [previewKey, setPreviewKey] = useState(0)
  return (
    <div className="container">
      <header>
        <h1><i className="fas fa-code"></i> HTML</h1>
        <p className="reading">エイチティーエムエル / HyperText Markup Language</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>HTML</strong>（HyperText Markup Language）は、Webページの<strong>構造</strong>を作るための言語です。
            文章に「ここは見出し」「ここは段落」「ここはリンク」といった意味を付けることで、ブラウザがそれを理解し、適切に表示します。
          </p>
        </section>

        <section>
          <h2>HTMLとは何か？</h2>
          <p>HTMLは「マークアップ言語」と呼ばれ、プログラミング言語とは異なり、計算やデータ処理を行いません。代わりに、テキストに構造と意味を与える役割を持ちます。</p>

          <h3>HTMLの特徴</h3>
          <ul>
            <li><strong>タグで構造を定義</strong>: <code>&lt;h1&gt;</code>、<code>&lt;p&gt;</code>、<code>&lt;a&gt;</code>などのタグを使って文書構造を表現</li>
            <li><strong>ブラウザで表示</strong>: Chrome、Safari、FirefoxなどのブラウザがHTMLを解釈して画面に表示</li>
            <li><strong>Webの基礎</strong>: すべてのWebページはHTMLで作られている</li>
            <li><strong>テキストベース</strong>: メモ帳でも編集可能なシンプルなテキストファイル</li>
          </ul>
        </section>

        <section>
          <h2>HTMLの基本構造</h2>
          <p>HTMLファイルは以下のような基本構造を持ちます：</p>

          <details>
            <summary><strong>サンプルコード</strong>を見る</summary>
            <div className="code-example">
              <pre><code className="language-html">{`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>私のWebページ</title>
</head>
<body>
    <h1>ようこそ</h1>
    <p>これは私のWebページです。</p>
    <a href="https://example.com">リンク</a>
</body>
</html>`}</code></pre>
            </div>
          </details>

          <h3>各部分の説明</h3>
          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code>: このファイルがHTML5であることを宣言</li>
            <li><code>&lt;html&gt;</code>: HTML文書全体を囲むルート要素</li>
            <li><code>&lt;head&gt;</code>: ページのメタ情報（タイトル、文字コードなど）</li>
            <li><code>&lt;body&gt;</code>: 実際に画面に表示される内容</li>
          </ul>
        </section>

        <section>
          <h2>よく使うHTMLタグ</h2>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>タグ</th>
                  <th>用途</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>&lt;h1&gt;〜&lt;h6&gt;</code></td>
                  <td>見出し（h1が最も大きい）</td>
                  <td><code>&lt;h1&gt;メインタイトル&lt;/h1&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;p&gt;</code></td>
                  <td>段落</td>
                  <td><code>&lt;p&gt;これは段落です&lt;/p&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;a&gt;</code></td>
                  <td>リンク</td>
                  <td><code>&lt;a href="..."&gt;リンクテキスト&lt;/a&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;img&gt;</code></td>
                  <td>画像</td>
                  <td><code>&lt;img src="image.jpg" alt="説明"&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;ul&gt;, &lt;ol&gt;</code></td>
                  <td>リスト</td>
                  <td><code>&lt;ul&gt;&lt;li&gt;項目&lt;/li&gt;&lt;/ul&gt;</code></td>
                </tr>
                <tr>
                  <td><code>&lt;div&gt;</code></td>
                  <td>ブロック要素のコンテナ</td>
                  <td><code>&lt;div&gt;...&lt;/div&gt;</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>HTMLとCSS、JavaScriptの関係</h2>
          <p>Webページは通常、3つの技術を組み合わせて作られます：</p>
          <ul>
            <li><strong>HTML</strong>: 構造（骨組み）</li>
            <li><strong><Link href="/terms/css">CSS</Link></strong>: 見た目（デザイン）</li>
            <li><strong><Link href="/terms/javascript">JavaScript</Link></strong>: 動き（インタラクション）</li>
          </ul>
          <p>例えるなら、HTMLは家の骨組み、CSSは壁紙や塗装、JavaScriptは自動ドアやエレベーターのような役割です。</p>
        </section>

        <section>
          <h2>HTML5とは？</h2>
          <p>
            <strong>HTML5</strong>は、HTMLの最新バージョンで、2014年に正式に勧告されました。
            動画や音声を簡単に埋め込める<code>&lt;video&gt;</code>や<code>&lt;audio&gt;</code>タグ、
            より意味のある構造を表現できる<code>&lt;header&gt;</code>、<code>&lt;footer&gt;</code>、<code>&lt;article&gt;</code>などのタグが追加されました。
          </p>
        </section>

        <section>
          <h2>実際にやってみよう：HTMLコードエディタ</h2>
          <p>
            下のエディタでHTMLコードを編集して、リアルタイムでプレビューを確認できます！
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>HTMLを書いてみよう</h3>
            <textarea
              value={htmlCode}
              onChange={(e) => {
                setHtmlCode(e.target.value)
                setPreviewKey(prev => prev + 1)
              }}
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
              placeholder="HTMLコードを入力してください"
            />

            <h3 style={{ marginTop: '20px' }}>プレビュー</h3>
            <div
              key={previewKey}
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                padding: '15px',
                backgroundColor: '#fff',
                marginTop: '10px',
                minHeight: '100px'
              }}
              dangerouslySetInnerHTML={{ __html: htmlCode }}
            />

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              💡 試してみよう：<br />
              • <code>&lt;h2&gt;見出し&lt;/h2&gt;</code> で見出しを追加<br />
              • <code>&lt;strong&gt;太字&lt;/strong&gt;</code> で文字を太くする<br />
              • <code>&lt;a href=&quot;https://example.com&quot;&gt;リンク&lt;/a&gt;</code> でリンクを作成
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
                  <td><Link href="/terms/css" className="term-name">CSS</Link></td>
                  <td>HTMLで作った構造に色やレイアウトを付けるスタイルシート言語</td>
                </tr>
                <tr>
                  <td><Link href="/terms/javascript" className="term-name">JavaScript</Link></td>
                  <td>Webページに動的な機能を追加するプログラミング言語</td>
                </tr>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP/HTTPS</Link></td>
                  <td>HTMLファイルをブラウザに送信するための通信プロトコル</td>
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
