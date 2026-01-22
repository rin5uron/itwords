'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import PageSummary from '@/app/components/PageSummary'
import CSSStepByStepDemo from '@/components/CSSStepByStepDemo'
import CSSWritingMethodsDemo from '@/components/CSSWritingMethodsDemo'

export default function CSSPage() {
  const [cssCode, setCssCode] = useState('color: blue;\nfont-size: 24px;\nfont-weight: bold;')
  const [textContent, setTextContent] = useState('スタイルを変更してみよう！')

  const faqs = [
    {
      question: 'CSSとは何ですか？',
      answer: 'CSS（Cascading Style Sheets）とは、Webページの見た目を整えるための言語です。HTMLが「何を表示するか（構造）」を決めるのに対し、CSSは「どう表示するか（デザイン）」を決めます。',
    },
    {
      question: 'CSSとHTMLの違いは何ですか？',
      answer: 'HTMLは「構造（何が書いてあるか）」を担当し、CSSは「見た目（どう見せるか）」を担当します。例えるなら、HTMLはノートに文章を書くこと、CSSは色ペンやマーカーで装飾することです。',
    },
    {
      question: 'CSSが効かない原因は？',
      answer: 'よくある原因は、①スペルミス（colorをcolourと書く）、②セミコロン忘れ（;がない）、③カッコ閉じ忘れ（}がない）、④セレクタの指定ミス、⑤CSSファイルの読み込みミスなどです。',
    },
    {
      question: 'classとidの違いは？',
      answer: 'classは同じスタイルを複数の要素に適用するときに使います（.で指定）。idは1つだけの要素に適用するときに使います（#で指定）。一般的にはclassを使う方が推奨されます。',
    },
    {
      question: 'style属性はいつ使う？',
      answer: 'style属性は、ピンポイントでその要素だけにスタイルを適用したいときに使います。ただし、管理が大変になるため、基本的には外部CSSファイルを使うことが推奨されます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="CSSとは？HTMLとの違いから書き方まで初心者向けに解説"
        description="CSS（Cascading Style Sheets）を初心者向けに解説。HTMLとの違い、書き方、よく使うプロパティを実践デモで学べます。"
        datePublished="2024-01-09"
        dateModified="2026-01-15"
      />

      <TermHeader
        termName="CSS"
        reading="シーエスエス / Cascading Style Sheets"
        icon="fas fa-paint-brush"
        dateCreated="2024-01-09"
        dateModified="2026-01-15"
      />

      <TableOfContents />

      <main>
        {/* このページでわかること（一番上） */}
        <PageSummary
          items={[
            'CSSとは何か？Webページの見た目を整える言語',
            'CSSデモで実際にスタイルを変更',
            'CSSとHTMLの違い',
            'CSSの書き方とよく使うプロパティ'
          ]}
        />

        {/* 更新日 */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2024-01-09 | 最終更新: 2026-01-15</span>
        </div>

        <section>
          <h2>概要</h2>
          <p>
            <strong>CSS</strong>（Cascading Style Sheets）とは、<strong>Webページの見た目を整えるための言語</strong>です。
            HTMLが「何を表示するか（構造）」を決めるのに対し、CSSは「どう表示するか（色・大きさ・配置）」を決めます。
          </p>
        </section>

        <section>
          <h2>CSSの語源・由来</h2>
          <p>
            <strong>Cascading Style Sheets（カスケーディング・スタイル・シート）</strong>の略です。
          </p>
          <ul>
            <li><strong>Style Sheets</strong>：見た目のルールをまとめたもの</li>
            <li><strong>Cascading</strong>：「滝のように上から下に流れる」→ルールが上書きされていく仕組み</li>
          </ul>
          <p>
            💡 「カスケード（滝）」は、複数のCSSルールがある時に、どれが優先されるかを決める重要な概念です。
          </p>
        </section>

        <section>
          <h2>HTMLとCSSの関係</h2>
          <p>
            HTMLとCSSは、それぞれ異なる役割を持っています：
          </p>
          <ul>
            <li><strong>HTML</strong>：文章の構造を作る（見出し、段落、リストなど）</li>
            <li><strong>CSS</strong>：見た目を整える（色、大きさ、配置など）</li>
          </ul>

          <h3>たとえ話で理解する</h3>
          <ul>
            <li><strong>HTML</strong>：ノートに文章を書く</li>
            <li><strong>CSS</strong>：色ペンやマーカーで装飾する</li>
          </ul>
          <p>
            👉 HTMLだけだとシンプルすぎ、CSSを加えると見やすくなる！
          </p>
        </section>

        <section>
          <h2>⚡ CSSを体験してみよう</h2>
          <p>
            ボタンを押してCSSの効果を確認しましょう👇
          </p>

          <CSSStepByStepDemo />
        </section>

        <section>
          <h2>CSSの基本ルール（3要素）</h2>
          <p>
            CSSは<strong>「セレクタ」「プロパティ」「値」</strong>の3つで構成されます：
          </p>
          <div className="code-example">
            <pre><code className="language-css">{`セレクタ {
  プロパティ: 値;
}

/* 例 */
p {
  color: red;
  font-size: 20px;
}`}</code></pre>
          </div>
          <p>これはこういう意味👇</p>
          <ul>
            <li><strong>セレクタ（p）</strong> → どこに？（pタグ全部）</li>
            <li><strong>プロパティ（color）</strong> → なにを？（文字の色）</li>
            <li><strong>値（red）</strong> → どうする？（赤にする）</li>
          </ul>
        </section>

        <section>
          <h2>CSSの3つの書き方</h2>
          <p>
            CSSには3つの書き方があります。ファイルの数や使い方の違いを見てみましょう👇
          </p>

          <CSSWritingMethodsDemo />
        </section>

        <section>
          <h2>よく使うCSSプロパティ</h2>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>プロパティ</th>
                  <th>用途</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>color</code></td>
                  <td>文字色</td>
                  <td><code>color: red;</code></td>
                </tr>
                <tr>
                  <td><code>background-color</code></td>
                  <td>背景色</td>
                  <td><code>background-color: yellow;</code></td>
                </tr>
                <tr>
                  <td><code>font-size</code></td>
                  <td>文字の大きさ</td>
                  <td><code>font-size: 20px;</code></td>
                </tr>
                <tr>
                  <td><code>margin</code></td>
                  <td>外側の余白</td>
                  <td><code>margin: 20px;</code></td>
                </tr>
                <tr>
                  <td><code>padding</code></td>
                  <td>内側の余白</td>
                  <td><code>padding: 10px;</code></td>
                </tr>
                <tr>
                  <td><code>border-radius</code></td>
                  <td>角を丸くする</td>
                  <td><code>border-radius: 10px;</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>実際にやってみよう：CSSスタイルエディタ</h2>
          <p>
            下のエディタでCSSを編集して、テキストのスタイルをリアルタイムで変更できます！<br />
            💡 上の「プロパティ」と「書き方」の項目を参考に書いてみてね
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: 'clamp(15px, 3vw, 20px)',
            marginTop: '20px',
            backgroundColor: '#f8f9fa',
            maxWidth: '100%',
            overflowX: 'auto'
          }}>
            <h3>テキストを編集</h3>
            <input
              type="text"
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              style={{
                width: '100%',
                padding: 'clamp(8px, 2vw, 10px)',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                marginTop: '10px',
                boxSizing: 'border-box'
              }}
            />

            <h3 style={{ marginTop: '20px' }}>CSSスタイルを編集</h3>
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              style={{
                width: '100%',
                minHeight: '120px',
                padding: 'clamp(8px, 2vw, 10px)',
                fontFamily: 'monospace',
                fontSize: 'clamp(12px, 3vw, 14px)',
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                marginTop: '10px',
                boxSizing: 'border-box'
              }}
              placeholder="CSSプロパティを入力（セレクタ不要）"
            />

            <h3 style={{ marginTop: '20px' }}>プレビュー</h3>
            <div
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                padding: 'clamp(20px, 5vw, 30px)',
                backgroundColor: '#fff',
                marginTop: '10px',
                textAlign: 'center',
                maxWidth: '100%',
                overflowX: 'auto'
              }}
            >
              <div style={
                cssCode.split(';').reduce((acc: any, rule) => {
                  const [prop, value] = rule.split(':').map(s => s.trim())
                  if (prop && value) {
                    const camelProp = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
                    acc[camelProp] = value
                  }
                  return acc
                }, {})
              }>
                {textContent}
              </div>
            </div>

            <p style={{ 
              marginTop: '15px', 
              fontSize: 'clamp(13px, 3.2vw, 14px)', 
              color: '#6c757d',
              maxWidth: '100%',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              💡 試してみよう：<br />
              • <code>color: red;</code> で文字色を赤に<br />
              • <code>font-size: 48px;</code> で文字を大きく<br />
              • <code>text-decoration: underline;</code> で下線を付ける<br />
              • <code>background-color: yellow;</code> で背景色を黄色に
            </p>
          </div>
        </section>

        <section>
          <h2>CSS3とは？</h2>
          <p>
            <strong>CSS3</strong>は、CSSの最新バージョンで、以下のような機能が追加されました：
          </p>
          <ul>
            <li><strong>角丸</strong>: <code>border-radius</code>で簡単に角丸ボタンが作れる</li>
            <li><strong>影</strong>: <code>box-shadow</code>で立体的な表現が可能</li>
            <li><strong>グラデーション</strong>: <code>linear-gradient</code>で美しいグラデーション</li>
            <li><strong>アニメーション</strong>: <code>@keyframes</code>で動きのある表現</li>
            <li><strong>Flexbox・Grid</strong>: 柔軟なレイアウトシステム</li>
          </ul>

          <p>
            詳しくは<a href="https://developer.mozilla.org/ja/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN Web Docs - CSS</a>や
            <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">W3C CSS公式仕様</a>で確認できます。
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
                  <td><Link href="/terms/html" className="term-name">HTML</Link></td>
                  <td>CSSでデザインする対象となるWebページの構造</td>
                </tr>
                <tr>
                  <td><Link href="/terms/javascript" className="term-name">JavaScript</Link></td>
                  <td>CSSと組み合わせて動的なデザインを実現</td>
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
