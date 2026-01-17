'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'

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

      {/* コンパクト目次 */}
      <nav className="table-of-contents">
        <ul>
          <li><a href="#overview">1. 概要</a></li>
          <li><a href="#demo">2. 体験デモ：APIを呼んでみる</a></li>
          <li><a href="#examples">3. このAPIはどこで使われている？</a></li>
          <li><a href="#mechanism">4. APIの仕組みを超かんたんに言うと</a></li>
          <li><a href="#terms">5. APIの基本用語</a></li>
          <li><a href="#summary">6. まとめ：APIは何ができるのか</a></li>
        </ul>
      </nav>

      <main>
        <section id="overview">
          <h2>概要</h2>
          <p>
            <strong>API</strong>とは、<strong>他のサービスの機能やデータを呼び出して使う仕組み</strong>です。
          </p>
          <p>
            Webサイトやアプリは、多くのAPIを組み合わせて作られています。
            自分で全部作らなくても、他のサービスが提供する機能を「お願いして使う」ことができます。
          </p>
        </section>

        <section id="demo">
          <h2>体験デモ：APIを実際に呼んでみる</h2>
          <p>
            実際にAPIを呼び出して、結果を見てみましょう。ボタンを押すだけで、外部サービスからデータが返ってきます。
          </p>

          {/* デモ①：天気API */}
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #4caf50',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginTop: 0, color: '#2e7d32' }}>
              <i className="fas fa-cloud-sun" style={{ marginRight: '8px' }}></i>
              デモ① お天気API
            </h3>
            <p style={{ marginBottom: '12px' }}>
              <strong>使用API：</strong> Open-Meteo API（<a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">https://openweathermap.org/api</a>）
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>体験内容：</strong> 都市名を送ると、現在の天気・気温が返ってくる
            </p>

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
              {weatherLoading ? '取得中...' : '東京の天気を取得'}
            </button>

            {weatherData && !weatherData.error && (
              <div style={{
                backgroundColor: '#e8f5e9',
                padding: '15px',
                borderRadius: '5px',
                borderLeft: '4px solid #4caf50'
              }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
                  <strong>東京の現在の天気</strong>
                </p>
                <p style={{ margin: '0 0 5px 0' }}>
                  気温：<strong>{weatherData.temperature}°C</strong>
                </p>
                <p style={{ margin: 0 }}>
                  風速：<strong>{weatherData.windspeed} km/h</strong>
                </p>
              </div>
            )}

            {weatherData?.error && (
              <div style={{
                backgroundColor: '#ffebee',
                padding: '15px',
                borderRadius: '5px',
                borderLeft: '4px solid #f44336',
                color: '#c62828'
              }}>
                {weatherData.error}
              </div>
            )}
          </div>

          {/* デモ②：名言API */}
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #9c27b0',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginTop: 0, color: '#7b1fa2' }}>
              <i className="fas fa-quote-left" style={{ marginRight: '8px' }}></i>
              デモ② ランダム名言・メッセージAPI
            </h3>
            <p style={{ marginBottom: '12px' }}>
              <strong>使用API：</strong> Quotable API（<a href="https://github.com/lukePeavey/quotable" target="_blank" rel="noopener noreferrer">https://github.com/lukePeavey/quotable</a>）
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>体験内容：</strong> アクセスするたびにランダムな一言が返る
            </p>

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
              {quoteLoading ? '取得中...' : '今日の名言を取得'}
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
              </div>
            )}

            {quoteData?.error && (
              <div style={{
                backgroundColor: '#ffebee',
                padding: '15px',
                borderRadius: '5px',
                borderLeft: '4px solid #f44336',
                color: '#c62828'
              }}>
                {quoteData.error}
              </div>
            )}
          </div>

          {/* デモ③：猫画像API */}
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #ff9800',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px'
          }}>
            <h3 style={{ marginTop: 0, color: '#e65100' }}>
              <i className="fas fa-image" style={{ marginRight: '8px' }}></i>
              デモ③ 画像API（猫・犬など）
            </h3>
            <p style={{ marginBottom: '12px' }}>
              <strong>使用API：</strong> The Cat API（<a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer">https://thecatapi.com/</a>）
            </p>
            <p style={{ marginBottom: '12px' }}>
              <strong>体験内容：</strong> アクセスするとランダムな画像URLが返る
            </p>

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
              {catLoading ? '取得中...' : 'ランダムな猫を表示'}
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
                  画像のURL自体がAPIから返ってきています。ボタンを押すたびに違う猫が表示されます。
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="examples">
          <h2>このAPIは実際のWebサイトでどう使われている？</h2>

          <h3>お天気APIの実例</h3>
          <ul>
            <li>天気アプリ</li>
            <li>お出かけ提案サイト</li>
            <li>洗濯・服装アドバイス表示</li>
          </ul>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
            トップページを読み込むと、現在地の天気を自動表示する機能などで使われています。
          </p>

          <h3>名言APIの実例</h3>
          <ul>
            <li>朝の一言表示サイト</li>
            <li>モチベーションアプリ</li>
            <li>LINEボット</li>
          </ul>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
            ページを開くたびに、今日の一言が表示される機能などで使われています。
          </p>

          <h3>画像APIの実例</h3>
          <ul>
            <li>ブログの癒し要素</li>
            <li>SNS自動投稿</li>
            <li>デモ用コンテンツ</li>
          </ul>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
            ページを更新するたびに、画像がランダムで切り替わる機能などで使われています。
          </p>
        </section>

        <section id="mechanism">
          <h2>APIの仕組みを超かんたんに言うと（レストラン例）</h2>
          <p>
            APIの仕組みを、レストランに例えて理解しましょう。
          </p>

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
                  <td>お客さん</td>
                  <td>ブラウザ / アプリ</td>
                </tr>
                <tr>
                  <td>ウェイター</td>
                  <td>API</td>
                </tr>
                <tr>
                  <td>厨房</td>
                  <td>外部サービス</td>
                </tr>
                <tr>
                  <td>料理</td>
                  <td>返ってくるデータ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>流れ：</strong>
          </p>
          <ol>
            <li>お客さんが注文する（リクエスト）</li>
            <li>ウェイターが厨房に伝える（API）</li>
            <li>厨房が料理を作る（処理・データ生成）</li>
            <li>ウェイターが料理を運ぶ（レスポンス）</li>
          </ol>

          <p>
            → <strong>APIは「間に立ってやり取りする役割」</strong>です。
          </p>
        </section>

        <section id="terms">
          <h2>APIの基本用語（最低限）</h2>

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
                  <td><strong>リクエスト</strong></td>
                  <td>APIへのお願い</td>
                </tr>
                <tr>
                  <td><strong>レスポンス</strong></td>
                  <td>返ってくる結果</td>
                </tr>
                <tr>
                  <td><strong>エンドポイント</strong></td>
                  <td>お願い先のURL</td>
                </tr>
                <tr>
                  <td><strong>HTTPメソッド</strong></td>
                  <td>頼み方（GET / POSTなど）</td>
                </tr>
                <tr>
                  <td><strong>JSON</strong></td>
                  <td>データの形式</td>
                </tr>
                <tr>
                  <td><strong>APIキー</strong></td>
                  <td>利用者を識別するための鍵</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="summary">
          <h2>まとめ：APIは何ができるのか</h2>

          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>APIは「他人の機能を借りる仕組み」</strong></li>
            <li><strong>APIを知ると作れるWebサービスが一気に増える</strong></li>
            <li><strong>まずは「呼ぶ → 返ってくる」を体験すればOK</strong></li>
          </ul>

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
                  <td><Link href="/terms/webhook" className="term-name">Webhook</Link></td>
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
