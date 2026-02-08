'use client'

import Link from 'next/link'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdInArticle from '@/app/components/AdInArticle'
import HTMLDemo from './HTMLDemo'
import FAQAccordion from '@/app/components/FAQAccordion'

const faqs = [
  {
    question: 'HTMLとは何ですか？',
    answer: 'HTML（HyperText Markup Language）は、Webページの構造を作るための言語です。文章に「ここは見出し」「ここは段落」「ここはリンク」といった意味を付けることで、ブラウザがそれを理解し、適切に表示します。',
  },
  {
    question: 'HTMLとCSS、JavaScriptの違いは何ですか？',
    answer: 'HTMLは構造（骨組み）、CSSは見た目（デザイン）、JavaScriptは動き（インタラクション）を担当します。例えるなら、HTMLは家の骨組み、CSSは壁紙や塗装、JavaScriptは自動ドアやエレベーターのような役割です。',
  },
  {
    question: 'HTMLの基本的な書き方を教えてください',
    answer: 'HTMLはタグを使って構造を定義します。例えば、<h1>見出し</h1>で見出し、<p>段落</p>で段落、<a href="URL">リンク</a>でリンクを作成できます。基本的な構造は<!DOCTYPE html>、<html>、<head>、<body>のタグで構成されます。',
  },
  {
    question: 'HTML5とは何ですか？',
    answer: 'HTML5は、HTMLの最新バージョンで、2014年に正式に勧告されました。動画や音声を簡単に埋め込める<video>や<audio>タグ、より意味のある構造を表現できる<header>、<footer>、<article>などのタグが追加されました。',
  },
]

export default function HTMLPage() {
  return (
    <div className="container">
      <TermPageHeader
        termName="HTML"
        reading="エイチティーエムエル / HyperText Markup Language"
        icon="fas fa-code"
        dateCreated="2024-01-01"
        dateModified="2026-01-07"
        summaryItems={[
          'HTMLとは何か？Webページの構造を作る言語',
          'HTMLデモで実際にコードを編集',
          'HTMLとCSS、JavaScriptの違い',
          'HTML5の新機能と基本タグ'
        ]}
      />

      <AdInArticle adSlot="2892250316" position="below-toc" />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>HTML</strong>（HyperText Markup Language）は、Webページの<strong>構造</strong>を作るための言語です。
            文章に「ここは見出し」「ここは段落」「ここはリンク」といった意味を付けることで、ブラウザがそれを理解し、適切に表示します。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>HTMLの仕組みを体験してみよう</h3>
            <p>
              下のエディタでHTMLコードを編集して、リアルタイムでプレビューを確認できます。
              実際に手を動かすことで、HTMLの動作が理解しやすくなります。
            </p>
            <HTMLDemo />
          </div>
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

          <p>
            詳しくは<a href="https://developer.mozilla.org/ja/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTML</a>や
            <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">WHATWG HTML Living Standard</a>で確認できます。
          </p>
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


        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
