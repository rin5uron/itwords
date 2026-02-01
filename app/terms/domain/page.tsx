'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export default function DomainPage() {
  const [expandedLevel, setExpandedLevel] = useState(0)

  const domainLevels = [
    { level: 'TLD (トップレベルドメイン)', example: '.jp', description: '最上位の階層', color: '#007bff' },
    { level: 'SLD (セカンドレベルドメイン)', example: 'itwords', description: '主要なドメイン名', color: '#28a745' },
    { level: 'サブドメイン', example: 'blog', description: 'サービスの区分', color: '#ffc107' },
  ]

  const faqs = [
    {
      question: 'ドメインとは何ですか？',
      answer: 'ドメイン（Domain）とは、インターネット上の住所を人間が読みやすい名前に変換したものです。例えば「itwords.jp」のように、数字の羅列であるIPアドレスを覚えやすい文字列で表現します。',
    },
    {
      question: 'ドメインとURLの違いは何ですか？',
      answer: 'ドメインはWebサイトの住所の一部で、URLはそのWebサイト内の特定のページを指す完全なアドレスです。例：ドメイン「itwords.jp」、URL「https://itwords.jp/terms/api」。URLはプロトコル（https://）、ドメイン、パス（/terms/api）で構成されます。',
    },
    {
      question: 'ドメインはどこで取得できますか？',
      answer: 'ドメインは「お名前.com」「Google Domains」「ムームードメイン」などのドメイン登録サービス（レジストラ）で取得できます。年間数百円〜数千円程度で取得・更新が可能です。',
    },
    {
      question: 'サブドメインとは何ですか？',
      answer: 'サブドメインとは、メインドメインの下に作る階層構造です。例えば「blog.itwords.jp」の「blog」部分がサブドメインです。サービスを機能ごとに分けたいときなどに使用します。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="ドメインとは？初心者向けにわかりやすく解説"
        description="ドメインの役割と構造を初心者向けに解説。IPアドレスを人間が読みやすい名前に変換する仕組みを学べます。"
        datePublished="2026-01-12"
        dateModified="2026-01-12"
      />

      <TermPageHeader
        termName="ドメイン"
        reading="ドメイン / Domain"
        icon="fas fa-globe"
        dateCreated="2026-01-12"
        dateModified="2026-01-12"
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>ドメイン</strong>（Domain）とは、
            <strong>インターネット上の住所（IPアドレス）を人間が読みやすい名前に変換したもの</strong>です。
          </p>

          <p>
            例えば、Googleのサーバーの<Link href="/terms/ip-address">IPアドレス</Link>は
            <code>142.250.207.46</code>ですが、
            これを覚えるのは大変ですよね。
          </p>

          <p>
            そこで<strong>「google.com」</strong>というドメインを使います。
            これなら簡単に覚えられますし、入力も楽です。
          </p>

          <div className="code-example">
            <pre><code>{`ドメインの例:

google.com → Googleの検索エンジン
itwords.jp → このサイト
github.com → GitHub`}</code></pre>
          </div>

          <p>
            ドメインは「電話帳の名前」のようなものです。
            電話をかけるとき、覚えにくい電話番号ではなく、
            「友達の名前」で検索しますよね。それと同じです。
          </p>
        </section>

        <section>
          <h2>なぜドメインが必要なのか</h2>
          <p>
            コンピュータ同士が通信するには<Link href="/terms/ip-address">IPアドレス</Link>が必要ですが、
            IPアドレスには以下のような問題があります。
          </p>

          <ul>
            <li><strong>覚えにくい</strong>: <code>192.168.1.1</code> のような数字の羅列</li>
            <li><strong>変更される</strong>: サーバーを移転すると、IPアドレスが変わることがある</li>
            <li><strong>人間に優しくない</strong>: どのサービスか直感的に分からない</li>
          </ul>

          <p>
            ドメインを使うことで、これらの問題を解決できます。
          </p>

          <ul>
            <li><strong>覚えやすい</strong>: <code>google.com</code> のような意味のある名前</li>
            <li><strong>変更に強い</strong>: IPアドレスが変わっても、ドメインは同じまま使える</li>
            <li><strong>ブランディング</strong>: サービス名をドメインにできる</li>
          </ul>

          <p className="note">
            <strong>ドメインとIPアドレスの関係</strong>は、
            <Link href="/terms/dns">DNS</Link>（Domain Name System）という仕組みで管理されています。
            DNSが「電話帳」のように、ドメイン名をIPアドレスに変換してくれます。
          </p>
        </section>

        <section>
          <h2>ドメインの構造</h2>
          <p>
            ドメインは階層構造になっています。
            <code>blog.itwords.jp</code>を例に見てみましょう。
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>ドメインの階層構造</h3>

            <div className="code-example">
              <pre><code>{`blog.itwords.jp
 │    │      │
 │    │      └─ TLD (トップレベルドメイン)
 │    │
 │    └──────── SLD (セカンドレベルドメイン)
 │
 └───────────── サブドメイン`}</code></pre>
            </div>

            <div style={{ marginTop: '20px' }}>
              {domainLevels.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '15px',
                    padding: '15px',
                    backgroundColor: '#fff',
                    border: `2px solid ${item.color}`,
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => setExpandedLevel(expandedLevel === index ? -1 : index)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: item.color }}>
                        {item.level}
                      </h4>
                      <p style={{ margin: 0, fontSize: '14px' }}>
                        <code>{item.example}</code> - {item.description}
                      </p>
                    </div>
                    <div style={{ fontSize: '20px' }}>
                      {expandedLevel === index ? '▼' : '▶'}
                    </div>
                  </div>

                  {expandedLevel === index && (
                    <div style={{
                      marginTop: '15px',
                      paddingTop: '15px',
                      borderTop: '1px solid #dee2e6',
                      fontSize: '14px'
                    }}>
                      {index === 0 && (
                        <div>
                          <p><strong>TLD（Top-Level Domain）</strong></p>
                          <ul>
                            <li><code>.com</code>: 商用サイト</li>
                            <li><code>.jp</code>: 日本のサイト</li>
                            <li><code>.org</code>: 非営利団体</li>
                            <li><code>.net</code>: ネットワーク関連</li>
                            <li><code>.io</code>: スタートアップに人気</li>
                          </ul>
                        </div>
                      )}
                      {index === 1 && (
                        <div>
                          <p><strong>SLD（Second-Level Domain）</strong></p>
                          <p>あなたが自由に決められる、メインのドメイン名です。</p>
                          <ul>
                            <li><code>google</code> (.com)</li>
                            <li><code>itwords</code> (.jp)</li>
                            <li><code>github</code> (.com)</li>
                          </ul>
                        </div>
                      )}
                      {index === 2 && (
                        <div>
                          <p><strong>サブドメイン</strong></p>
                          <p>メインドメインの下に作る階層です。サービスを分けたいときに使います。</p>
                          <ul>
                            <li><code>blog</code>.itwords.jp - ブログ</li>
                            <li><code>mail</code>.google.com - Gmailサービス</li>
                            <li><code>docs</code>.google.com - Googleドキュメント</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              クリックすると詳細が表示されます
            </p>
          </div>
        </section>

        <section>
          <h2>ドメインの種類</h2>

          <h3>gTLD（Generic Top-Level Domain / 汎用トップレベルドメイン）</h3>
          <p>
            世界中で使える一般的なドメインです。
          </p>
          <ul>
            <li><code>.com</code>: 最も人気があり、商用サイトで広く使われる</li>
            <li><code>.net</code>: ネットワーク関連サービス</li>
            <li><code>.org</code>: 非営利団体</li>
            <li><code>.info</code>: 情報サイト</li>
            <li><code>.io</code>: テック系スタートアップに人気</li>
          </ul>

          <h3>ccTLD（Country Code Top-Level Domain / 国別コードトップレベルドメイン）</h3>
          <p>
            国や地域ごとに割り当てられたドメインです。
          </p>
          <ul>
            <li><code>.jp</code>: 日本</li>
            <li><code>.us</code>: アメリカ</li>
            <li><code>.uk</code>: イギリス</li>
            <li><code>.de</code>: ドイツ</li>
          </ul>

          <h3>新gTLD</h3>
          <p>
            2013年以降に追加された新しいドメインです。
          </p>
          <ul>
            <li><code>.app</code>: アプリケーション</li>
            <li><code>.dev</code>: 開発者向け</li>
            <li><code>.tech</code>: テクノロジー</li>
            <li><code>.blog</code>: ブログ</li>
          </ul>
        </section>

        <section>
          <h2>ドメインの取得方法</h2>
          <p>
            ドメインは<strong>レジストラ</strong>と呼ばれるドメイン登録サービスで取得できます。
          </p>

          <h3>主なレジストラ</h3>
          <ul>
            <li><strong>お名前.com</strong>: 日本で最大手、種類豊富</li>
            <li><strong>Google Domains</strong>: シンプルで使いやすい（Squarespaceに移行）</li>
            <li><strong>ムームードメイン</strong>: 初心者に優しい</li>
            <li><strong>Cloudflare</strong>: 原価での提供、DNS管理も優秀</li>
          </ul>

          <h3>取得の流れ</h3>
          <ol>
            <li><strong>希望のドメインを検索</strong>: 使いたいドメインが空いているか確認</li>
            <li><strong>登録者情報を入力</strong>: 氏名、住所、メールアドレスなど</li>
            <li><strong>料金を支払う</strong>: 年間数百円〜数千円程度</li>
            <li><strong>DNS設定</strong>: ドメインをサーバーに紐付ける</li>
          </ol>

          <p className="note">
            <strong>注意</strong>: ドメインは「購入」ではなく「レンタル」です。
            毎年更新料を支払う必要があります。更新を忘れると、ドメインが失効します。
          </p>
        </section>

        <section>
          <h2>ドメインとURLの違い</h2>
          <p>
            ドメインとURLは混同されがちですが、異なるものです。
          </p>

          <div className="code-example">
            <pre><code>{`URL（完全なアドレス）:
https://itwords.jp/terms/api

├─ プロトコル: https://
├─ ドメイン: itwords.jp
└─ パス: /terms/api`}</code></pre>
          </div>

          <ul>
            <li><strong>ドメイン</strong>: Webサイトの住所（例: <code>itwords.jp</code>）</li>
            <li><strong>URL</strong>: Webサイト内の特定のページを指すアドレス（例: <code>https://itwords.jp/terms/api</code>）</li>
          </ul>
        </section>

        <section>
          <h2>ドメインとホスティングサービス</h2>
          <p>
            ドメインを取得しただけでは、Webサイトは公開できません。
            <Link href="/terms/server">サーバー</Link>と結びつける必要があります。
          </p>

          <h3>必要なもの</h3>
          <ol>
            <li><strong>ドメイン</strong>: レジストラで取得（例: お名前.com）</li>
            <li><strong>サーバー</strong>: <Link href="/terms/hosting-service">ホスティングサービス</Link>で用意（例: <Link href="/terms/vercel">Vercel</Link>）</li>
            <li><strong>DNS設定</strong>: ドメインとサーバーを紐付ける</li>
          </ol>

          <p>
            多くのホスティングサービス（Vercelなど）では、
            ドメインを入力するだけで自動的にDNS設定をしてくれます。
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
                  <td><Link href="/terms/ip-address" className="term-name">IPアドレス</Link></td>
                  <td>ドメインの実体となる数字のアドレス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/dns" className="term-name">DNS</Link></td>
                  <td>ドメイン名をIPアドレスに変換するシステム</td>
                </tr>
                <tr>
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>ドメインが指し示すコンピュータ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/hosting-service" className="term-name">ホスティングサービス</Link></td>
                  <td>ドメインとサーバーを簡単に紐付けられるサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/vercel" className="term-name">Vercel</Link></td>
                  <td>カスタムドメインを簡単に設定できるホスティングサービス</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdBelowRelatedTerms />
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
