import Link from 'next/link'
import type { Metadata } from 'next'
import JsonDemo from '@/components/JsonDemo'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'JSONとは？初心者向けにわかりやすく解説【実践デモ付き】 | 実践型IT用語辞典',
  description: 'JSONとは何か、初心者向けにわかりやすく解説。JavaScript Object Notationの基本から、Web APIやデータ保存で使われる軽量データ交換フォーマットまで、実際に編集できるデモで体験しながら学べます。プログラミング初心者向けIT用語解説。',
  keywords: ['JSON', 'JSON とは', 'JSON わかりやすく', 'JSON 初心者', 'JavaScript Object Notation', 'データ形式', 'Web API', 'プログラミング 初心者', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'JSONとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'JSONを初心者向けに解説。実際に編集できるデモで体験しながら学べます。',
    type: 'article',
  },
}

export default function JsonPage() {
  const faqs = [
    {
      question: 'JSONの読み方は？',
      answer: 'JSONは「ジェイソン」と読みます。JavaScript Object Notationの略で、「ジェーソン」や「ジェイエスオーエヌ」ではなく「ジェイソン」が一般的です。英語圏では「Jason（人名のジェイソン）」と同じ発音です。',
    },
    {
      question: 'JSONとは何ですか？',
      answer: 'JSON（JavaScript Object Notation）は、軽量で人間にも読みやすいデータ交換フォーマットです。キー（名前）と値のペアでデータを表現し、Web APIのレスポンスや設定ファイルなど幅広く利用されています。',
    },
    {
      question: 'JSONはどこで使われていますか？',
      answer: 'JSONは、Web APIのリクエスト・レスポンス、設定ファイル（package.jsonなど）、データベースのデータ保存、SNSの投稿データ、天気予報アプリ、オンラインショッピングなど、あらゆる場面で使われています。',
    },
    {
      question: 'JSONとXMLの違いは何ですか？',
      answer: 'JSONはXMLより軽量でシンプルです。XMLはタグで構造を表現しますが、JSONはキーと値のペアで表現します。JSONの方が読みやすく、データサイズも小さいため、Web開発では主流になっています。',
    },
    {
      question: 'JavaScriptでJSONを扱うにはどうすればいいですか？',
      answer: 'JavaScriptでは、JSON.parse()でJSON文字列をオブジェクトに変換し、JSON.stringify()でオブジェクトをJSON文字列に変換できます。これにより、データの送受信や保存が簡単に行えます。',
    },
    {
      question: 'JSONファイルの拡張子は何ですか？',
      answer: 'JSONファイルの拡張子は「.json」です。例えば、package.json、tsconfig.json、settings.jsonなど、設定ファイルによく使われます。',
    },
    {
      question: 'JSONでコメントは書けますか？',
      answer: 'JSON標準ではコメントはサポートされていません。コメントを書くとエラーになります。ただし、一部のツールや環境では、JSONC（JSON with Comments）という拡張フォーマットでコメントが使える場合があります。',
    },
    {
      question: 'JSONは何の略ですか？',
      answer: 'JSONは「JavaScript Object Notation」の略です。JavaScriptのオブジェクト表記法をベースにしたデータフォーマットという意味ですが、現在はJavaScript以外の言語でも広く使われています。',
    },
    {
      question: 'JSONとJSONPの違いは何ですか？',
      answer: 'JSONはデータフォーマット、JSONP（JSON with Padding）はクロスドメイン制約を回避するための技術です。JSONPは古い技術で、現在はCORS（Cross-Origin Resource Sharing）を使うのが一般的です。',
    },
    {
      question: 'JSONの最大サイズに制限はありますか？',
      answer: 'JSON自体に標準的なサイズ制限はありませんが、使用するプログラミング言語やフレームワーク、ブラウザによって制限があります。例えば、ブラウザのlocalStorageは約5〜10MBまでしか保存できません。大量のデータはデータベースに保存するのが適切です。',
    }
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="JSONとは？初心者向けにわかりやすく解説"
        description="JSON（JavaScript Object Notation）を初心者向けに解説。Web APIやデータ保存で使われる軽量データ交換フォーマットを体験しながら学べます。"
        datePublished="2024-01-01"
        dateModified="2026-01-16"
      />
      <TermHeader
        termName="JSON"
        reading="ジェイソン / JavaScript Object Notation"
        icon="fas fa-brackets-curly"
      />

      <TableOfContents />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>JSON</strong>（JavaScript Object Notation）は、軽量で人間にも読みやすい
            <strong>データ交換フォーマット</strong>です。
            Web APIやデータ保存など、あらゆる場面で使われる標準的なデータ形式で、キー（名前）と値のペアでデータを表現します。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>JSONの仕組みを体験してみよう</h3>
            <p>
              下のデモでJSONデータを実際に編集して、リアルタイムで構造を確認できます。
              実際に手を動かすことで、JSONの仕組みが理解しやすくなります。
            </p>
            <JsonDemo />
          </div>
        </section>

        <section>
          <h2>ポイント</h2>
          <ul>
            <li>
              <strong>人間が読みやすく、機械が処理しやすい</strong>構造
            </li>
            <li>
              Web APIのレスポンス、設定ファイル、データ保存など<strong>幅広く利用</strong>
            </li>
            <li>
              <code>&#123;"key": "value"&#125;</code> の形式でデータを表現
            </li>
            <li>JavaScript以外の言語（Python、Java、PHPなど）でも扱える</li>
          </ul>
        </section>

        <section>
          <h2>JSONの基本構造</h2>
          <p>JSONは以下のデータ型をサポートしています：</p>
          <ul>
            <li>
              <strong>文字列</strong>: <code>"こんにちは"</code>
            </li>
            <li>
              <strong>数値</strong>: <code>42</code>, <code>3.14</code>
            </li>
            <li>
              <strong>真偽値</strong>: <code>true</code>, <code>false</code>
            </li>
            <li>
              <strong>配列</strong>: <code>["りんご", "バナナ", "みかん"]</code>
            </li>
            <li>
              <strong>オブジェクト</strong>:{' '}
              <code>&#123;"name": "田中", "age": 30&#125;</code>
            </li>
            <li>
              <strong>null</strong>: <code>null</code>
            </li>
          </ul>
        </section>

        <section>
          <h2>JSONとCSVの比較：JSONの方が簡単で軽い</h2>
          <p>
            JSONは、CSV（カンマ区切り値）などの従来のデータ形式と比べて、<strong>シンプルで軽量</strong>です。
            比較してみましょう。
          </p>

          <div className="comparison-table" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <table>
              <thead>
                <tr>
                  <th>形式</th>
                  <th>特徴</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CSV</strong></td>
                  <td>カンマで区切るだけのシンプルな形式。ただし、構造が複雑になると読みにくい</td>
                  <td><code>名前,年齢,都市<br />田中,25,東京<br />佐藤,30,大阪</code></td>
                </tr>
                <tr>
                  <td><strong>JSON</strong></td>
                  <td>キーと値のペアで構造化。人間も読みやすく、機械も処理しやすい</td>
                  <td><code>&#123;"name": "田中", "age": 25, "city": "東京"&#125;</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>JSONのメリット：</strong>
          </p>
          <ul>
            <li>構造が明確で、ネスト（入れ子）も表現できる</li>
            <li>データサイズが小さい（軽い）</li>
            <li>人間が読んで理解しやすい</li>
            <li>JavaScriptで直接扱える</li>
          </ul>
        </section>

        <section>
          <h2>日常生活でのJSONの例（実際のコード）</h2>
          <p>
            JSONは私たちが毎日使っているWebサービスやアプリの裏側で、データのやり取りに使われています。
            目には見えませんが、JSONがなければ今のインターネットは成り立ちません。
          </p>

          <h3>1. TwitterやInstagramの投稿データ</h3>
          <p>
            SNSで投稿を表示する時、裏側ではサーバーがJSON形式でデータを返しています。
            投稿の文章、投稿者の名前、いいね数、コメントなどが、すべてJSONで構造化されて送られてきます。
            ブラウザやアプリがそのJSONを解析して、見やすい画面に表示しているのです。
          </p>
          <div className="code-example" style={{ marginTop: '15px' }}>
            <pre>
              <code className="language-json">{`{
  "postId": "12345",
  "author": {
    "name": "田中太郎",
    "username": "@tanaka"
  },
  "content": "今日は良い天気です！",
  "likes": 42,
  "comments": [
    {"user": "佐藤", "text": "いいね！"},
    {"user": "鈴木", "text": "同感です"}
  ],
  "timestamp": "2026-01-17T10:30:00Z"
}`}</code>
            </pre>
          </div>

          <h3>2. 天気予報アプリ</h3>
          <p>
            天気予報アプリは、気象APIからJSON形式で天気データを受け取ります。
            「東京」「晴れ」「25度」「湿度60%」といった情報が、キーと値のペアで返されます。
            アプリはそれを解析して、天気アイコンや気温を画面に表示します。
          </p>
          <div className="code-example" style={{ marginTop: '15px' }}>
            <pre>
              <code className="language-json">{`{
  "location": "東京",
  "weather": "晴れ",
  "temperature": 25,
  "humidity": 60,
  "forecast": [
    {"date": "2026-01-18", "weather": "曇り", "temp": 23},
    {"date": "2026-01-19", "weather": "雨", "temp": 20}
  ]
}`}</code>
            </pre>
          </div>

          <h3>3. オンラインショッピングサイト</h3>
          <p>
            Amazonや楽天で商品を検索すると、サーバーから商品情報がJSON形式で返されます。
            商品名、価格、在庫状況、レビュー評価などが、すべてJSONで構造化されています。
            カートに商品を追加する時も、JSON形式でサーバーにデータを送信しています。
          </p>
          <div className="code-example" style={{ marginTop: '15px' }}>
            <pre>
              <code className="language-json">{`{
  "productId": "P001",
  "name": "ノートパソコン",
  "price": 99800,
  "inStock": true,
  "rating": 4.5,
  "reviews": 128
}`}</code>
            </pre>
          </div>

          <h3>4. package.json（Node.jsの設定ファイル）</h3>
          <p>
            プログラミングでは、プロジェクトの設定をJSONファイルで管理することが多いです。
            Node.jsのpackage.jsonには、プロジェクト名、バージョン、依存パッケージなどが記載されており、
            JSONの構造のおかげで機械が自動的に読み取って処理できます。
          </p>

          <h3>5. Google Maps API</h3>
          <p>
            地図アプリで住所を検索すると、Google Maps APIがJSON形式で位置情報を返します。
            緯度・経度、住所、周辺施設などの情報が、構造化されたJSONで提供され、
            アプリがそれを解析して地図上にピンを表示します。
          </p>
        </section>


        <FAQAccordion faqs={faqs} />

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
                  <td>
                    <Link href="/terms/api" className="term-name">
                      API
                    </Link>
                  </td>
                  <td>JSONはAPIのリクエスト・レスポンスでよく使われる</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/javascript" className="term-name">
                      JavaScript
                    </Link>
                  </td>
                  <td>JSONはJavaScriptオブジェクトの表記法から生まれた</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">XML</span>
                  </td>
                  <td>構造化データフォーマット。JSONより冗長だが厳密</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
