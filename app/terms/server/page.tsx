'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'

export default function ServerPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const requestResponseSteps = [
    { title: 'クライアント', description: 'ユーザーがWebサイトにアクセス', icon: '💻', color: '#007bff' },
    { title: 'リクエスト送信', description: 'サーバーにデータを要求', icon: '📤', color: '#ffc107' },
    { title: 'サーバー処理', description: 'リクエストを受け取り処理', icon: '⚙️', color: '#28a745' },
    { title: 'レスポンス返却', description: 'データをクライアントに返す', icon: '📥', color: '#17a2b8' },
    { title: '表示完了', description: 'ブラウザに内容が表示される', icon: '✅', color: '#28a745' }
  ]

  const nextStep = () => {
    if (currentStep < requestResponseSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const resetSteps = () => {
    setCurrentStep(0)
  }

  const faqs = [
    {
      question: 'サーバーとは何ですか？',
      answer: 'サーバーとは、クライアント（利用者のPC、スマホなど）からの要求（リクエスト）に応じて、データやサービスを提供するコンピュータのことです。Webサイトの閲覧、メールの送受信、ファイルの保存など、インターネット上のあらゆるサービスはサーバーによって提供されています。',
    },
    {
      question: 'クライアント・サーバーモデルとは何ですか？',
      answer: 'クライアント・サーバーモデルとは、サービスを要求する側（クライアント）とサービスを提供する側（サーバー）が役割分担する仕組みです。クライアントがリクエストを送り、サーバーがレスポンスを返すという流れで通信が行われます。',
    },
    {
      question: 'Webサーバーとアプリケーションサーバーの違いは何ですか？',
      answer: 'Webサーバーは静的なファイル（HTML、CSS、画像など）を配信するサーバーです（例: Nginx、Apache）。アプリケーションサーバーは動的な処理（データベース操作、計算処理など）を実行するサーバーです（例: Node.js、Python）。実際のWebサービスでは両方を組み合わせて使うことが多いです。',
    },
    {
      question: '自分でサーバーを用意する必要がありますか？',
      answer: 'いいえ、必ずしも自分でサーバーを用意する必要はありません。ホスティングサービス（Vercel、Netlify、AWS等）を利用すれば、サーバーの管理や設定を任せることができます。初心者の方はホスティングサービスの利用がおすすめです。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="サーバーとは？初心者向けにわかりやすく解説"
        description="サーバーの役割とクライアント・サーバーモデルを初心者向けに解説。リクエスト・レスポンスの流れを実践デモで体験できます。"
        datePublished="2026-01-12"
        dateModified="2026-01-12"
      />

      <TermHeader
        termName="サーバー"
        reading="サーバー / Server"
        icon="fas fa-server"
      />

      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxHeight: '300px'
      }}>
        <Image
          src="/images/terms/server-hero.jpg"
          alt="サーバーとクライアントの通信 - リクエストとレスポンスの流れ"
          width={1200}
          height={630}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
      </div>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>サーバー</strong>（Server）とは、
            <strong>クライアント（利用者）からの要求に応じて、データやサービスを提供するコンピュータ</strong>のことです。
          </p>

          <p>
            想像してみてください。あなたがレストランで食事をするとき、厨房（キッチン）で料理を作り、
            それをテーブルに運んでくれるスタッフがいますよね。
          </p>

          <p>
            インターネットの世界でも同じです。<strong>サーバーは「厨房」</strong>、
            <strong>あなたのPC/スマホは「客席」</strong>です。
            あなたが「このWebページを見せて」とリクエストすると、サーバーが処理してデータを返してくれます。
          </p>

          <ul>
            <li><strong>クライアント（Client）</strong>: サービスを利用する側（あなたのPC、スマホ、ブラウザ）</li>
            <li><strong>サーバー（Server）</strong>: サービスを提供する側（Webサイトのデータを保存・配信するコンピュータ）</li>
            <li><strong>リクエスト（Request）</strong>: クライアントからサーバーへの要求</li>
            <li><strong>レスポンス（Response）</strong>: サーバーからクライアントへの応答</li>
          </ul>
        </section>

        <section>
          <h2>クライアント・サーバーモデル</h2>
          <p>
            インターネット上のほとんどのサービスは、<strong>クライアント・サーバーモデル</strong>という仕組みで動いています。
          </p>

          <h3>基本的な流れ</h3>
          <ol>
            <li><strong>クライアント</strong>がサーバーに<strong>リクエスト</strong>を送る</li>
            <li><strong>サーバー</strong>がリクエストを受け取り、処理する</li>
            <li><strong>サーバー</strong>が<strong>レスポンス</strong>を返す</li>
            <li><strong>クライアント</strong>がレスポンスを受け取り、表示する</li>
          </ol>

          <p>
            例えば、あなたが「itwords.jp」にアクセスするとき：
          </p>
          <ol>
            <li>あなたのブラウザ（クライアント）が「itwords.jpのページを見せて」とリクエスト</li>
            <li>itwords.jpのサーバーがリクエストを受け取り、HTMLファイルを準備</li>
            <li>サーバーがHTMLファイルをレスポンスとして返す</li>
            <li>あなたのブラウザがHTMLを受け取り、画面に表示</li>
          </ol>
        </section>

        <section>
          <h2>体験してみよう：リクエスト・レスポンスの流れ</h2>
          <p>
            Webサイトにアクセスしたとき、クライアントとサーバーの間でどのようなやり取りが行われるか確認してみましょう。
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>通信の流れ</h3>

            <div style={{ marginTop: '20px' }}>
              {requestResponseSteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    padding: '15px',
                    backgroundColor: index <= currentStep ? '#fff' : '#e9ecef',
                    border: `2px solid ${index === currentStep ? step.color : '#dee2e6'}`,
                    borderRadius: '8px',
                    opacity: index <= currentStep ? 1 : 0.5,
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{
                    fontSize: '32px',
                    marginRight: '15px',
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 5px 0', color: index <= currentStep ? step.color : '#6c757d' }}>
                      {step.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '14px' }}>{step.description}</p>
                  </div>
                  {index === currentStep && (
                    <div style={{
                      padding: '5px 15px',
                      backgroundColor: step.color,
                      color: '#fff',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      実行中
                    </div>
                  )}
                  {index < currentStep && (
                    <div style={{
                      padding: '5px 15px',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      完了
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={nextStep}
                disabled={currentStep === requestResponseSteps.length - 1}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: currentStep === requestResponseSteps.length - 1 ? '#6c757d' : '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentStep === requestResponseSteps.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                次のステップ
              </button>
              <button
                onClick={resetSteps}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                リセット
              </button>
            </div>

            <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
              このやり取りは通常、数ミリ秒〜数秒で完了します。
            </p>
          </div>
        </section>

        <section>
          <h2>サーバーの種類</h2>
          <p>
            サーバーには用途に応じて様々な種類があります。
          </p>

          <h3>Webサーバー</h3>
          <p>
            <strong>Webサイトのファイルを配信するサーバー</strong>です。
            HTML、CSS、JavaScriptファイル、画像などの静的なファイルをクライアントに送ります。
          </p>
          <ul>
            <li><strong>例</strong>: Nginx, Apache</li>
            <li><strong>役割</strong>: ファイルの配信</li>
          </ul>

          <h3>アプリケーションサーバー</h3>
          <p>
            <strong>プログラムを実行するサーバー</strong>です。
            データベースから情報を取得したり、複雑な計算を行ったりします。
          </p>
          <ul>
            <li><strong>例</strong>: Node.js, Python (Django/Flask), Ruby (Rails)</li>
            <li><strong>役割</strong>: 動的な処理の実行</li>
          </ul>

          <h3>データベースサーバー</h3>
          <p>
            <strong>データを保存・管理するサーバー</strong>です。
            ユーザー情報、商品情報、記事データなどを効率的に保存・検索します。
          </p>
          <ul>
            <li><strong>例</strong>: MySQL, PostgreSQL, MongoDB</li>
            <li><strong>役割</strong>: データの永続化と管理</li>
          </ul>

          <p className="note">
            <strong>実際のWebサービス</strong>では、これらのサーバーを組み合わせて使います。
            例えば、Webサーバー（Nginx）がリクエストを受け取り、アプリケーションサーバー（Node.js）で処理して、
            データベースサーバー（PostgreSQL）からデータを取得する、といった構成です。
          </p>
        </section>

        <section>
          <h2>サーバーの管理</h2>
          <p>
            サーバーを運用するには、以下のような管理が必要です。
          </p>

          <h3>自前でサーバーを用意する場合</h3>
          <ul>
            <li><strong>ハードウェアの購入・設置</strong>: 物理的なサーバー機器を用意</li>
            <li><strong>OS・ソフトウェアのインストール</strong>: Linux等のOSと必要なソフトをセットアップ</li>
            <li><strong>セキュリティ対策</strong>: ファイアウォール、SSL証明書の設定</li>
            <li><strong>監視・メンテナンス</strong>: 24時間365日の稼働監視</li>
            <li><strong>バックアップ</strong>: データの定期的なバックアップ</li>
          </ul>

          <p>
            これらは初心者にとって非常にハードルが高い作業です。
          </p>

          <h3>ホスティングサービスを利用する場合</h3>
          <p>
            <Link href="/terms/hosting-service">ホスティングサービス</Link>を利用すれば、
            サーバーの管理をサービス事業者に任せることができます。
          </p>
          <ul>
            <li><strong>メリット</strong>: 初期費用が安い、専門知識不要、すぐに使える</li>
            <li><strong>例</strong>: <Link href="/terms/vercel">Vercel</Link>, Netlify, AWS, GCP</li>
          </ul>

          <p className="note">
            <strong>初心者の方へ</strong>: まずはホスティングサービスを使うことをおすすめします。
            このサイト（itwords.jp）もVercelというホスティングサービスで運用しています。
          </p>
        </section>

        <section>
          <h2>サーバーに関連する技術</h2>

          <h3>IPアドレス</h3>
          <p>
            サーバーには<Link href="/terms/ip-address">IPアドレス</Link>という
            <strong>「住所」</strong>が割り当てられています。
            クライアントはこのIPアドレスを使ってサーバーを特定します。
          </p>

          <h3>ドメイン</h3>
          <p>
            IPアドレスは数字の羅列で覚えにくいため、
            <Link href="/terms/domain">ドメイン</Link>（例: itwords.jp）という
            <strong>「名前」</strong>を使います。
          </p>

          <h3>DNS</h3>
          <p>
            <Link href="/terms/dns">DNS</Link>は、ドメイン名をIPアドレスに変換するシステムです。
            あなたが「itwords.jp」にアクセスすると、DNSが実際のIPアドレスを教えてくれます。
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
                  <td>サーバーの住所として機能する識別番号</td>
                </tr>
                <tr>
                  <td><Link href="/terms/domain" className="term-name">ドメイン</Link></td>
                  <td>IPアドレスを人間が読みやすい名前に変換</td>
                </tr>
                <tr>
                  <td><Link href="/terms/dns" className="term-name">DNS</Link></td>
                  <td>ドメイン名をIPアドレスに変換するシステム</td>
                </tr>
                <tr>
                  <td><Link href="/terms/hosting-service" className="term-name">ホスティングサービス</Link></td>
                  <td>サーバーを簡単に利用できるサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/vercel" className="term-name">Vercel</Link></td>
                  <td>Next.jsに特化したホスティングサービスの例</td>
                </tr>
                <tr>
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>サーバーの機能を外部から利用するための窓口</td>
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
