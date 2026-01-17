'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'

export default function APIPage() {
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [weatherData, setWeatherData] = useState<any>(null)
  const [quoteLoading, setQuoteLoading] = useState(false)
  const [quoteData, setQuoteData] = useState<any>(null)
  const [catLoading, setCatLoading] = useState(false)
  const [catImage, setCatImage] = useState<string>('')

  const faqs = [
    {
      question: 'APIの読み方は？',
      answer: 'APIは「エーピーアイ」と読みます。まれに「アピ」や「エイピーアイ」と読まれることもありますが、一般的には「エーピーアイ」が標準です。Application Programming Interfaceの頭文字を取った略語です。',
    },
    {
      question: 'APIとは何ですか？',
      answer: 'API（Application Programming Interface）とは、外部のサービスの機能を呼び出して使うための仕組みです。自分で全部作らず、他のサービスの機能を「お願いして使う」ことができます。',
    },
    {
      question: 'APIのデモを体験できますか？',
      answer: 'はい、このページには3つの実践デモがあります。天気API、名言API、猫画像APIを実際にボタンクリックで体験できます。APIがどのように動くのか、実際に見て理解できます。',
    },
    {
      question: 'APIはどこで使われていますか？',
      answer: 'GoogleログインやTwitterログイン（認証API）、Google Maps表示（地図API）、クレジットカード決済（決済API）、天気予報アプリ（天気API）など、私たちが日常的に使うWebサービスのほとんどでAPIが使われています。',
    },
    {
      question: '初心者でもAPIを使えますか？',
      answer: '使えます！最初は「APIを呼び出して結果を見る」だけでOKです。このページのデモのように、ボタンを押して結果が返ってくる体験から始めましょう。慣れてきたら自分のプログラムからAPIを呼び出せるようになります。',
    },
  ]

  const fetchWeather = async () => {
    setWeatherLoading(true)
    try {
      // Open-Meteo API（認証不要の天気API）
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&current_weather=true'
      )
      const data = await response.json()
      setWeatherData(data.current_weather)
    } catch (error) {
      console.error(error)
      setWeatherData({ error: 'データ取得に失敗しました' })
    }
    setWeatherLoading(false)
  }

  const fetchQuote = async () => {
    setQuoteLoading(true)
    try {
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      setQuoteData(data)
    } catch (error) {
      console.error(error)
      setQuoteData({ error: 'データ取得に失敗しました' })
    }
    setQuoteLoading(false)
  }

  const fetchCat = async () => {
    setCatLoading(true)
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await response.json()
      setCatImage(data[0].url)
    } catch (error) {
      console.error(error)
      setCatImage('')
    }
    setCatLoading(false)
  }

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="APIとは？デモで体験する初心者向け解説【実例で理解】"
        description="API（エーピーアイ）を初心者向けに解説。天気API・名言API・猫画像APIを実際に体験できるデモ付き。レストランの例えで仕組みを理解し、実践例でAPIの使い方を学べます。"
        datePublished="2024-01-01"
        dateModified="2026-01-17"
      />

      <TermHeader
        termName="API"
        reading="エーピーアイ / Application Programming Interface"
        icon="fas fa-link"
      />

      <TableOfContents />

      <main>
        <section>
          <h2>概要</h2>
          <div style={{
            backgroundColor: '#e3f2fd',
            border: '2px solid #2196f3',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px 0', color: '#1565c0' }}>
              🎯 APIとは何か？（超シンプルに）
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: 0 }}>
              <li><strong>外部のサービスと機能をやり取りするための仕組み</strong></li>
              <li><strong>自分で全部作らず、他のサービスの機能を「呼び出して使う」ことができる</strong></li>
            </ul>
          </div>

          <p>
            例えば、あなたが天気予報アプリを作りたいとします。
            でも、気象データを自分で集めるのは大変ですよね。
          </p>

          <p>
            そんな時、<strong>天気APIを使えば、「今日の東京の天気は？」とお願いするだけで、
            気温や天気のデータを返してくれます</strong>。
            これがAPIです！
          </p>
        </section>

        <section>
          <h2>実際にやってみよう！API体験デモ</h2>
          <p>
            百聞は一見にしかず。実際にAPIを呼び出して、結果を見てみましょう！
          </p>

          {/* デモ①：天気API */}
          <div style={{
            backgroundColor: '#fff',
            border: '2px solid #4caf50',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <h3 style={{ marginTop: 0, color: '#2e7d32', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>🌤️</span>
              デモ① お天気API
            </h3>
            <p>東京の現在の天気と気温を取得してみましょう。</p>

            <button
              onClick={fetchWeather}
              disabled={weatherLoading}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: weatherLoading ? '#ccc' : '#4caf50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: weatherLoading ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}
            >
              {weatherLoading ? '取得中...' : '東京の天気を取得 🌍'}
            </button>

            {weatherData && !weatherData.error && (
              <div style={{
                backgroundColor: '#e8f5e9',
                padding: '15px',
                borderRadius: '5px',
                borderLeft: '4px solid #4caf50'
              }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
                  <strong>📍 東京の現在の天気</strong>
                </p>
                <p style={{ margin: '0 0 5px 0' }}>
                  🌡️ 気温：<strong>{weatherData.temperature}°C</strong>
                </p>
                <p style={{ margin: '0 0 5px 0' }}>
                  💨 風速：<strong>{weatherData.windspeed} km/h</strong>
                </p>
                <p style={{ margin: 0, fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  💡 これが「API」です！ボタンを押すだけで、リアルタイムの気象データを取得できました。
                </p>
              </div>
            )}

            <details style={{ marginTop: '15px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#2e7d32' }}>
                🔍 どうやって動いているの？
              </summary>
              <div style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.6' }}>
                <p><strong>使用API：</strong> Open-Meteo API（無料の天気API）</p>
                <p><strong>エンドポイント：</strong></p>
                <code style={{ backgroundColor: '#f5f5f5', padding: '5px', borderRadius: '3px', display: 'block', fontSize: '13px' }}>
                  https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&current_weather=true
                </code>
                <p style={{ marginTop: '10px' }}>
                  このURLに「東京の緯度経度」を指定してリクエストを送ると、JSON形式で天気データが返ってきます。
                </p>
              </div>
            </details>

            <p style={{
              marginTop: '15px',
              padding: '10px',
              backgroundColor: '#fff3e0',
              borderRadius: '5px',
              fontSize: '14px',
              color: '#e65100'
            }}>
              <strong>🎨 用途イメージ：</strong> 天気アプリ、お出かけ提案サイト、洗濯おすすめ表示など
            </p>
          </div>

          {/* デモ②：名言API */}
          <div style={{
            backgroundColor: '#fff',
            border: '2px solid #9c27b0',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <h3 style={{ marginTop: 0, color: '#7b1fa2', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>💬</span>
              デモ② 名言・ランダムメッセージAPI
            </h3>
            <p>アクセスするたびにランダムな英語の名言が返ってきます。</p>

            <button
              onClick={fetchQuote}
              disabled={quoteLoading}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: quoteLoading ? '#ccc' : '#9c27b0',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: quoteLoading ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}
            >
              {quoteLoading ? '取得中...' : '今日の名言を取得 ✨'}
            </button>

            {quoteData && !quoteData.error && (
              <div style={{
                backgroundColor: '#f3e5f5',
                padding: '15px',
                borderRadius: '5px',
                borderLeft: '4px solid #9c27b0'
              }}>
                <p style={{ fontSize: '18px', fontStyle: 'italic', margin: '0 0 10px 0', color: '#4a148c' }}>
                  "{quoteData.content}"
                </p>
                <p style={{ margin: 0, fontSize: '14px', color: '#666', textAlign: 'right' }}>
                  — {quoteData.author}
                </p>
                <p style={{ margin: 0, fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  💡 同じAPIでも、呼び出すたびに違う結果が返ってきます！
                </p>
              </div>
            )}

            <details style={{ marginTop: '15px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#7b1fa2' }}>
                🔍 どうやって動いているの？
              </summary>
              <div style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.6' }}>
                <p><strong>使用API：</strong> Quotable API（無料の名言API）</p>
                <p><strong>エンドポイント：</strong></p>
                <code style={{ backgroundColor: '#f5f5f5', padding: '5px', borderRadius: '3px', display: 'block', fontSize: '13px' }}>
                  https://api.quotable.io/random
                </code>
                <p style={{ marginTop: '10px' }}>
                  このURLにアクセスするたびに、ランダムな名言がJSON形式で返ってきます。
                </p>
              </div>
            </details>

            <p style={{
              marginTop: '15px',
              padding: '10px',
              backgroundColor: '#fff3e0',
              borderRadius: '5px',
              fontSize: '14px',
              color: '#e65100'
            }}>
              <strong>🎨 用途イメージ：</strong> 朝の一言表示、モチベーションアプリ、LINEボット、日替わりメッセージなど
            </p>
          </div>

          {/* デモ③：猫画像API */}
          <div style={{
            backgroundColor: '#fff',
            border: '2px solid #ff9800',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <h3 style={{ marginTop: 0, color: '#e65100', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>🐱</span>
              デモ③ 猫画像API（エンタメ系）
            </h3>
            <p>アクセスするとランダムな猫の画像URLが返ってきます。</p>

            <button
              onClick={fetchCat}
              disabled={catLoading}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: catLoading ? '#ccc' : '#ff9800',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: catLoading ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                marginBottom: '15px'
              }}
            >
              {catLoading ? '取得中...' : 'ランダムな猫を表示 🐾'}
            </button>

            {catImage && (
              <div style={{
                backgroundColor: '#fff3e0',
                padding: '15px',
                borderRadius: '5px',
                borderLeft: '4px solid #ff9800'
              }}>
                <img
                  src={catImage}
                  alt="Random cat"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '10px'
                  }}
                />
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                  💡 画像のURL自体がAPIから返ってきています。ボタンを押すたびに違う猫が表示されます！
                </p>
              </div>
            )}

            <details style={{ marginTop: '15px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#e65100' }}>
                🔍 どうやって動いているの？
              </summary>
              <div style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.6' }}>
                <p><strong>使用API：</strong> The Cat API（無料の猫画像API）</p>
                <p><strong>エンドポイント：</strong></p>
                <code style={{ backgroundColor: '#f5f5f5', padding: '5px', borderRadius: '3px', display: 'block', fontSize: '13px' }}>
                  https://api.thecatapi.com/v1/images/search
                </code>
                <p style={{ marginTop: '10px' }}>
                  このURLにアクセスすると、ランダムな猫の画像URLがJSON形式で返ってきます。
                </p>
              </div>
            </details>

            <p style={{
              marginTop: '15px',
              padding: '10px',
              backgroundColor: '#e3f2fd',
              borderRadius: '5px',
              fontSize: '14px',
              color: '#0277bd'
            }}>
              <strong>🎨 用途イメージ：</strong> 癒し系アプリ、ペット紹介サイト、ランダム画像表示、SNSボットなど
            </p>
          </div>

          <div style={{
            backgroundColor: '#f0f8ff',
            border: '2px solid #2196f3',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '30px'
          }}>
            <h4 style={{ marginTop: 0, color: '#1565c0' }}>🎯 デモから分かること</h4>
            <ul style={{ lineHeight: '1.8' }}>
              <li>APIは「ボタンを押すだけ」で外部サービスのデータを取得できる</li>
              <li>同じAPIでも呼び出すたびに違う結果が返ってくることがある</li>
              <li>天気、名言、画像など、様々な種類のAPIがある</li>
              <li>自分でデータを用意しなくても、APIを使えば高機能なサービスが作れる</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>レストランの例え（仕組みの理解）</h2>
          <p>
            APIの仕組みを、レストランに例えて理解しましょう。
          </p>

          <p>
            あなたが客席から厨房に直接「この肉を焼いてくれ」と頼むことはできません。
            代わりに、「ウェイター」に注文を伝えますよね。
            ウェイターはあなたの注文（リクエスト）を厨房に伝え、完成した料理（レスポンス）をあなたの元へ運んできます。
          </p>

          <p>この<strong>「ウェイター」の役割を果たすのがAPI</strong>です。</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>レストラン</th>
                  <th>API</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>あなた（客）</td>
                  <td>APIを利用する開発者やプログラム</td>
                </tr>
                <tr>
                  <td>ウェイター</td>
                  <td>API</td>
                </tr>
                <tr>
                  <td>厨房</td>
                  <td>連携したいサービス（Twitter、Google Map、GitHubなど）</td>
                </tr>
                <tr>
                  <td>注文</td>
                  <td>リクエスト（「ツイートして」「地図を見せて」）</td>
                </tr>
                <tr>
                  <td>料理</td>
                  <td>レスポンス（投稿結果、地図データ）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            APIがあるおかげで、私たちはサービスの内部構造（厨房の中）を知らなくても、
            決められたルール（メニューと注文方法）に従うだけで、その機能を利用できるのです。
          </p>
        </section>

        <section>
          <h2>APIの基本用語</h2>

          <h3>エンドポイント（Endpoint）</h3>
          <p>
            「どの窓口に話しかけるか」を指定するURLです。
          </p>
          <div className="code-example">
            <pre><code>{`例：
天気API → https://api.open-meteo.com/v1/forecast
名言API → https://api.quotable.io/random
猫API  → https://api.thecatapi.com/v1/images/search`}</code></pre>
          </div>

          <h3>リクエスト（Request）</h3>
          <p>APIに対して「何をしてほしいか」を伝える情報です。</p>
          <ul>
            <li><strong>メソッド</strong>: <code>GET</code>（情報取得）、<code>POST</code>（新規作成）、<code>PUT</code>（更新）、<code>DELETE</code>（削除）</li>
            <li><strong>ヘッダー</strong>: 認証情報やデータの形式など</li>
            <li><strong>ボディ</strong>: <code>POST</code>や<code>PUT</code>で送信する具体的な内容（JSON形式など）</li>
          </ul>

          <h3>レスポンス（Response）</h3>
          <p>
            リクエストの結果としてAPIから返ってくる情報です。
            成功したか失敗したかを示すステータスコード（200, 404など）や、要求したデータがJSON形式で含まれています。
          </p>

          <h3>認証（Authentication）</h3>
          <p>
            「誰がリクエストしているのか」を証明するための仕組みです。
            今回のデモは認証不要のAPIでしたが、TwitterやGitHubのAPIは認証が必要です。
          </p>
        </section>

        <section>
          <h2>実際のWebサイトでの使われ方</h2>

          <h3>① ログイン機能</h3>
          <p>
            「Googleでログイン」「GitHubでログイン」ボタンを見たことはありませんか？
            これらは<strong>認証API</strong>を使っています。
          </p>
          <ul>
            <li>自分でユーザー管理システムを作らなくていい</li>
            <li>ユーザーも新しくパスワードを覚えなくていい</li>
          </ul>

          <h3>② 地図表示</h3>
          <p>
            Webサイトに埋め込まれている地図は、ほとんどが<strong>Google Maps API</strong>です。
          </p>
          <ul>
            <li>住所を渡すと、その場所の地図を表示してくれる</li>
            <li>ルート検索もAPIで実現</li>
          </ul>

          <h3>③ 決済</h3>
          <p>
            ECサイトのクレジットカード決済は、<strong>決済サービスのAPI</strong>を使っています。
          </p>
          <ul>
            <li>Stripe、PayPalなどの決済API</li>
            <li>自分でカード情報を扱わないので安全</li>
          </ul>

          <h3>④ SNS連携</h3>
          <p>
            「この記事をツイート」ボタンは、<strong>Twitter API</strong>を使っています。
          </p>
          <ul>
            <li>ユーザーのタイムラインに投稿</li>
            <li>いいね、リツイートなどもAPI経由</li>
          </ul>
        </section>

        <section>
          <h2>REST APIとは？</h2>
          <p>
            <strong>REST API</strong>は、Webサービスで広く利用されるAPIの設計原則です。
            HTTPメソッド（GET, POSTなど）とURLを使ってリソースを操作するシンプルで分かりやすい設計が特徴です。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>HTTPメソッド</th>
                  <th>用途</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>GET</code></td>
                  <td>データの取得</td>
                  <td>天気情報を取得、ユーザー情報を取得</td>
                </tr>
                <tr>
                  <td><code>POST</code></td>
                  <td>新規作成</td>
                  <td>新しい投稿を作成、ユーザー登録</td>
                </tr>
                <tr>
                  <td><code>PUT</code></td>
                  <td>更新</td>
                  <td>プロフィールを更新</td>
                </tr>
                <tr>
                  <td><code>DELETE</code></td>
                  <td>削除</td>
                  <td>投稿を削除</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            今回のデモで使った3つのAPI（天気、名言、猫画像）は、すべて<code>GET</code>メソッドでデータを取得しています。
          </p>
        </section>

        <section>
          <h2>初心者向けまとめ</h2>

          <div style={{
            backgroundColor: '#fff3e0',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <h3 style={{ marginTop: 0, color: '#e65100' }}>🎓 覚えておきたいポイント</h3>
            <ul style={{ lineHeight: '1.8' }}>
              <li><strong>APIは「魔法」ではなく「お願いの仕組み」</strong></li>
              <li><strong>使えるAPIを知る＝作れるサービスが増える</strong></li>
              <li><strong>まずは「呼び出して結果を見る」だけでOK</strong></li>
              <li>認証が必要なAPIと不要なAPIがある</li>
              <li>ほとんどのWebサービスは複数のAPIを組み合わせて作られている</li>
            </ul>
          </div>

          <p style={{ marginTop: '20px' }}>
            このページのデモで、APIの「呼び出して結果が返ってくる」という基本を体験できました。
            次は、自分のプログラムから実際にAPIを呼び出してみましょう！
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
                  <td><Link href="/terms/json" className="term-name">JSON</Link></td>
                  <td>APIのリクエストやレスポンスでよく使われるデータ形式</td>
                </tr>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP/HTTPS</Link></td>
                  <td>APIの通信で使われるプロトコル</td>
                </tr>
                <tr>
                  <td><Link href="/terms/github" className="term-name">GitHub</Link></td>
                  <td>GitHub APIを使ってリポジトリやIssueを操作できる</td>
                </tr>
                <tr>
                  <td>Webhook</td>
                  <td>特定のイベントが発生した際に自動的にHTTPリクエストを送信する仕組み</td>
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
