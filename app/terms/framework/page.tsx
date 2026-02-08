'use client'

import Link from 'next/link'
import { useState } from 'react'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdInArticle from '@/app/components/AdInArticle'
import FAQAccordion from '@/app/components/FAQAccordion'

const faqs = [
  {
    question: 'フレームワークとは何ですか？',
    answer: 'フレームワーク（Framework）とは、アプリケーション開発のための土台となる枠組みです。よく使う機能やルールがあらかじめ用意されているため、効率的にアプリケーションを作ることができます。',
  },
  {
    question: 'フレームワークとライブラリの違いは？',
    answer: 'ライブラリはあなたが呼び出すもの、フレームワークはあなたのコードを呼び出すものです。ライブラリは必要な部分だけ使えますが、フレームワークは決まったルールに従う必要があります。',
  },
  {
    question: 'フレームワークを使うメリットは？',
    answer: '開発速度の向上、コードの品質向上、セキュリティ対策の組み込み、チーム開発の効率化、保守性の向上などが挙げられます。',
  },
  {
    question: '代表的なフレームワークを教えてください',
    answer: 'Web開発ではReact、Next.js、Vue.js、Angular、バックエンドではExpress、Django、Ruby on Rails、Laravelなどが代表的です。',
  },
]

export default function FrameworkPage() {
  const [selectedFramework, setSelectedFramework] = useState<string>('')
  const [displayText, setDisplayText] = useState<string>('')

  const frameworks = [
    { name: 'React', description: 'UI構築のためのJavaScriptライブラリ', code: 'const App = () => <h1>Hello, React!</h1>' },
    { name: 'Next.js', description: 'Reactベースのフルスタックフレームワーク', code: 'export default function Page() { return <h1>Hello, Next.js!</h1> }' },
    { name: 'Vue.js', description: 'プログレッシブなJavaScriptフレームワーク', code: '<template><h1>{{ message }}</h1></template>' },
  ]

  const handleFrameworkSelect = (framework: typeof frameworks[0]) => {
    setSelectedFramework(framework.name)
    setDisplayText(`${framework.name}を使うと、このようなコードでアプリを作れます：\n\n${framework.code}`)
  }

  return (
    <div className="container">
      <TermPageHeader
        termName="Framework"
        reading="フレームワーク"
        icon="fas fa-cube"
        dateCreated="2024-01-01"
        dateModified="2026-01-07"
        summaryItems={[
          'フレームワークとは？開発の土台となる枠組み',
          'ライブラリとの違い（呼び出す側・呼ばれる側）',
          'フレームワーク選びのデモ（React / Next.js / Vue）',
          '使うメリット・代表例',
          'おすすめの学習順序',
        ]}
      />

      <AdInArticle adSlot="2892250316" position="below-toc" />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>Framework（フレームワーク）</strong>とは、
            <strong>「アプリケーション開発のための土台となる枠組み」</strong>です。
          </p>

          <p>
            家を建てることを想像してみましょう。
            ゼロから柱を立てて、壁を作って、屋根を付けて…とやると、ものすごく時間がかかりますよね。
            でも、<strong>「基礎部分がすでに完成している」</strong>ならどうでしょう？
            あとは必要な部屋を追加したり、内装を整えたりするだけで済みます。
          </p>

          <p>
            フレームワークは、まさにこの「基礎が完成している状態」を提供してくれます。
            開発者は、よく使う機能やルールがあらかじめ用意されているため、
            <strong>効率的にアプリケーションを作る</strong>ことができるのです。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>フレームワークの仕組みを体験してみよう</h3>
            <p>
              下のデモで、それぞれのフレームワークを使うとどのようなコードになるか確認できます。
              実際に手を動かすことで、フレームワークの動作が理解しやすくなります。
            </p>
            <div style={{
              border: '2px solid #007bff',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
              backgroundColor: '#f8f9fa'
            }}>
              <h3>フレームワークを選択</h3>
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
                {frameworks.map((framework) => (
                  <button
                    key={framework.name}
                    onClick={() => handleFrameworkSelect(framework)}
                    style={{
                      padding: '12px 20px',
                      fontSize: '14px',
                      backgroundColor: selectedFramework === framework.name ? '#007bff' : '#fff',
                      color: selectedFramework === framework.name ? '#fff' : '#007bff',
                      border: '2px solid #007bff',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    {framework.name}
                  </button>
                ))}
              </div>

              {displayText && (
                <div style={{
                  marginTop: '20px',
                  padding: '15px',
                  backgroundColor: '#fff',
                  border: '1px solid #dee2e6',
                  borderRadius: '5px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  whiteSpace: 'pre-wrap'
                }}>
                  {displayText}
                </div>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2>フレームワークの役割</h2>
          <p>フレームワークが提供してくれる主な機能：</p>

          <ul>
            <li>
              <strong>共通機能の提供：</strong>
              ログイン機能、データベース接続、ルーティング（URLとページの紐付け）など、
              多くのアプリで必要になる機能があらかじめ用意されている
            </li>
            <li>
              <strong>開発ルールの統一：</strong>
              「このファイルはこのフォルダに置く」「この名前でファイルを作る」など、
              決まったルールがあるため、チームで開発しやすい
            </li>
            <li>
              <strong>セキュリティ対策：</strong>
              SQLインジェクションやXSSなど、よくある攻撃への対策が組み込まれている
            </li>
            <li>
              <strong>パフォーマンス最適化：</strong>
              高速化のためのベストプラクティスが自動的に適用される
            </li>
          </ul>
        </section>

        <section>
          <h2>フレームワーク vs ライブラリ</h2>
          <p>似た概念に<strong>「ライブラリ」</strong>がありますが、違いはこうです：</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>ライブラリ</th>
                  <th>フレームワーク</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>主導権</strong></td>
                  <td>あなたがライブラリを呼び出す</td>
                  <td>フレームワークがあなたのコードを呼び出す</td>
                </tr>
                <tr>
                  <td><strong>自由度</strong></td>
                  <td>高い（必要な部分だけ使える）</td>
                  <td>低い（ルールに従う必要がある）</td>
                </tr>
                <tr>
                  <td><strong>例</strong></td>
                  <td>React, Lodash, jQuery</td>
                  <td>Next.js, Vue.js, Ruby on Rails</td>
                </tr>
                <tr>
                  <td><strong>イメージ</strong></td>
                  <td>道具箱から必要な工具を取り出す</td>
                  <td>設計図に従って家を建てる</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong> Reactは厳密にはライブラリですが、
            Next.jsはReactをベースにしたフレームワークです。
            このサイトもNext.jsで作られています！
          </p>
        </section>

        <section>
          <h2>代表的なフレームワーク</h2>

          <h3>フロントエンド（Webページの見た目）</h3>
          <ul>
            <li>
              <strong>Next.js：</strong>
              Reactベースのフレームワーク。サーバーサイドレンダリング、静的生成に強い
            </li>
            <li>
              <strong>Vue.js：</strong>
              学習コストが低く、柔軟性が高い。日本でも人気
            </li>
            <li>
              <strong>Angular：</strong>
              Googleが開発。大規模アプリに向いている
            </li>
          </ul>

          <h3>バックエンド（サーバー側の処理）</h3>
          <ul>
            <li>
              <strong>Express.js（Node.js）：</strong>
              軽量でシンプル。JavaScriptでサーバーを構築
            </li>
            <li>
              <strong>Django（Python）：</strong>
              「バッテリー同梱」、多機能で強力
            </li>
            <li>
              <strong>Ruby on Rails（Ruby）：</strong>
              「設定より規約」、素早く開発できる
            </li>
            <li>
              <strong>Laravel（PHP）：</strong>
              モダンなPHPフレームワーク、初心者にも優しい
            </li>
          </ul>
        </section>

        <section>
          <h2>フレームワークを使うメリット・デメリット</h2>

          <h3>メリット</h3>
          <ul>
            <li><strong>開発速度が上がる：</strong> 共通機能を一から作る必要がない</li>
            <li><strong>品質が保たれる：</strong> ベストプラクティスが組み込まれている</li>
            <li><strong>保守しやすい：</strong> 統一されたルールでコードが書かれている</li>
            <li><strong>コミュニティが大きい：</strong> 困ったときに情報が見つかりやすい</li>
          </ul>

          <h3>デメリット</h3>
          <ul>
            <li><strong>学習コスト：</strong> フレームワーク独自のルールを覚える必要がある</li>
            <li><strong>自由度が低い：</strong> フレームワークの流儀に従う必要がある</li>
            <li><strong>オーバースペック：</strong> 小規模なアプリには重すぎることも</li>
            <li><strong>依存リスク：</strong> フレームワークの更新や廃止に影響を受ける</li>
          </ul>
        </section>

        <section>
          <h2>フレームワークを選ぶポイント</h2>
          <p>初心者がフレームワークを選ぶときの基準：</p>

          <ol>
            <li>
              <strong>学習リソースの豊富さ：</strong>
              日本語のドキュメントやチュートリアルが充実しているか
            </li>
            <li>
              <strong>コミュニティの大きさ：</strong>
              困ったときに質問できる場所があるか
            </li>
            <li>
              <strong>作りたいものとの相性：</strong>
              Webサイトか、アプリか、API開発か
            </li>
            <li>
              <strong>求人需要：</strong>
              就職・転職を考えているなら、求人の多いフレームワークを選ぶのも一つの手
            </li>
          </ol>

          <p className="note">
            <strong>💡 おすすめの学習順序：</strong>
            まず<Link href="/terms/html">HTML</Link>、<Link href="/terms/css">CSS</Link>、
            <Link href="/terms/javascript">JavaScript</Link>の基礎を学んでから、
            フレームワークに挑戦すると理解が深まります！
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
                  <td><Link href="/terms/npm" className="term-name">npm</Link></td>
                  <td>フレームワークをインストールするためのパッケージ管理ツール</td>
                </tr>
                <tr>
                  <td><Link href="/terms/javascript" className="term-name">JavaScript</Link></td>
                  <td>多くのフロントエンドフレームワークの基盤となる言語</td>
                </tr>
                <tr>
                  <td>MVC</td>
                  <td>多くのフレームワークが採用する設計パターン</td>
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
