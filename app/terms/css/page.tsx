'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CSSPage() {
  const [cssCode, setCssCode] = useState('color: blue;\nfont-size: 24px;\nfont-weight: bold;')
  const [textContent, setTextContent] = useState('スタイルを変更してみよう！')
  return (
    <div className="container">
      <header>
        <h1><i className="fas fa-paint-brush"></i> CSS</h1>
        <p className="reading">シーエスエス / Cascading Style Sheets</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>CSS</strong>（Cascading Style Sheets）は、Webページの<strong>見た目</strong>を整えるための言語です。
            HTMLで作った文書構造に対して、色、サイズ、配置、余白などのデザインを指定することで、美しく読みやすいWebページを作ります。
          </p>
        </section>

        <section>
          <h2>CSSとは何か？</h2>
          <p>CSSは「スタイルシート言語」と呼ばれ、HTMLと組み合わせて使われます。HTMLが「何を表示するか」を定義するのに対し、CSSは「どのように表示するか」を定義します。</p>

          <h3>CSSの特徴</h3>
          <ul>
            <li><strong>デザインと構造の分離</strong>: HTMLは内容、CSSは見た目を担当</li>
            <li><strong>再利用性</strong>: 一つのCSSファイルで複数のページのデザインを統一可能</li>
            <li><strong>柔軟なレイアウト</strong>: Flexbox、Gridなどで自在にレイアウトを構築</li>
            <li><strong>レスポンシブ対応</strong>: スマホ、タブレット、PCなど画面サイズに応じたデザインが可能</li>
          </ul>
        </section>

        <section>
          <h2>CSSの基本構文</h2>
          <p>CSSは「セレクタ」「プロパティ」「値」の3つで構成されます：</p>

          <details>
            <summary><strong>サンプルコード</strong>を見る</summary>
            <div className="code-example">
              <pre><code className="language-css">{`/* セレクタ { プロパティ: 値; } */
h1 {
    color: blue;           /* 文字色を青に */
    font-size: 24px;       /* フォントサイズを24pxに */
    text-align: center;    /* 中央揃え */
}

p {
    color: #333;           /* 文字色をダークグレーに */
    line-height: 1.6;      /* 行間を1.6倍に */
    margin: 20px 0;        /* 上下に20pxの余白 */
}`}</code></pre>
            </div>
          </details>

          <h3>各部分の説明</h3>
          <ul>
            <li><strong>セレクタ</strong>: スタイルを適用する対象（<code>h1</code>、<code>p</code>など）</li>
            <li><strong>プロパティ</strong>: 変更したい項目（<code>color</code>、<code>font-size</code>など）</li>
            <li><strong>値</strong>: 具体的な設定内容（<code>blue</code>、<code>24px</code>など）</li>
          </ul>
        </section>

        <section>
          <h2>CSSの書き方</h2>
          <p>CSSをHTMLに適用する方法は3つあります：</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>方法</th>
                  <th>書き方</th>
                  <th>用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>外部ファイル</strong></td>
                  <td><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></td>
                  <td>推奨。複数ページで共有できる</td>
                </tr>
                <tr>
                  <td><strong>内部CSS</strong></td>
                  <td><code>&lt;style&gt;...&lt;/style&gt;</code>をHTML内に記述</td>
                  <td>そのページだけのスタイル</td>
                </tr>
                <tr>
                  <td><strong>インラインCSS</strong></td>
                  <td><code>&lt;p style="color: red;"&gt;</code>のように直接記述</td>
                  <td>非推奨。一時的な調整のみ</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  <td><code>background-color: #f0f0f0;</code></td>
                </tr>
                <tr>
                  <td><code>font-size</code></td>
                  <td>フォントサイズ</td>
                  <td><code>font-size: 16px;</code></td>
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
                  <td><code>display</code></td>
                  <td>表示方法</td>
                  <td><code>display: flex;</code></td>
                </tr>
                <tr>
                  <td><code>width</code> / <code>height</code></td>
                  <td>幅と高さ</td>
                  <td><code>width: 100%;</code></td>
                </tr>
              </tbody>
            </table>
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
        </section>

        <section>
          <h2>レスポンシブデザイン</h2>
          <p>メディアクエリを使うことで、画面サイズに応じたデザインを実現できます：</p>
          <details>
            <summary><strong>サンプルコード</strong>を見る</summary>
            <div className="code-example">
              <pre><code className="language-css">{`/* スマホ向け（デフォルト） */
.container {
    width: 100%;
    padding: 10px;
}

/* タブレット以上 */
@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 20px;
    }
}

/* PC向け */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}`}</code></pre>
            </div>
          </details>
        </section>

        <section>
          <h2>実際にやってみよう：CSSスタイルエディタ</h2>
          <p>
            下のエディタでCSSを編集して、テキストのスタイルをリアルタイムで変更できます！
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>テキストを編集</h3>
            <input
              type="text"
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                marginTop: '10px'
              }}
            />

            <h3 style={{ marginTop: '20px' }}>CSSスタイルを編集</h3>
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '14px',
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                marginTop: '10px'
              }}
              placeholder="CSSプロパティを入力（セレクタ不要）"
            />

            <h3 style={{ marginTop: '20px' }}>プレビュー</h3>
            <div
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '5px',
                padding: '30px',
                backgroundColor: '#fff',
                marginTop: '10px',
                textAlign: 'center'
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

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              💡 試してみよう：<br />
              • <code>color: red;</code> で文字色を赤に<br />
              • <code>font-size: 48px;</code> で文字を大きく<br />
              • <code>text-decoration: underline;</code> で下線を付ける<br />
              • <code>background-color: yellow;</code> で背景色を黄色に
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
