import Link from 'next/link'
import type { Metadata } from 'next'
import SiteHeader from './components/SiteHeader'
import SearchAutocomplete from './components/SearchAutocomplete'

export const metadata: Metadata = {
  title: '実践型IT用語辞典 - IT用語をわかりやすく解説【初心者向け体験デモ付き】',
  description:
    'IT用語を初心者向けにわかりやすく解説する実践型IT用語辞典。API、JSON、フレームワークなどのIT用語を体験デモで学べます。プログラミング初心者でも理解できる解説で、Web開発の基礎知識を習得できます。',
  keywords: [
    'IT用語',
    'IT用語辞典',
    '実践型IT用語辞典',
    'IT用語 わかりやすく',
    'IT用語 初心者',
    'IT用語 とは',
    'プログラミング 初心者',
    '体験デモ',
    'API',
    'JSON',
    'Web開発',
    'フレームワーク',
    'プログラミング学習',
    'IT 勉強',
    'エンジニア 初心者'
  ],
  openGraph: {
    title: '実践型IT用語辞典 - IT用語をわかりやすく解説',
    description: 'IT用語を初心者向けにわかりやすく解説。APIやJSONなどを体験デモで学べる実践型IT用語辞典',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="container">
      <SiteHeader showNav={true} />

      <main>
        <section id="popular">
          <h3>人気の用語</h3>
          <div className="card-container">
            <div className="card" data-category="security">
              <Link href="/terms/zero-day" className="card-link">
                <span className="category-tag">セキュリティ</span>
                <h4>ゼロデイ攻撃</h4>
                <p>脆弱性が発見されてから修正される前に行われる危険なサイバー攻撃です。</p>
              </Link>
            </div>
            <div className="card" data-category="security">
              <Link href="/terms/aes" className="card-link">
                <span className="category-tag">セキュリティ</span>
                <h4>AES</h4>
                <p>現代で最も広く使われている暗号化規格の一つです。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/localstorage" className="card-link">
                <span className="category-tag">Web</span>
                <h4>ローカルストレージ</h4>
                <p>ブラウザにデータを保存できる仕組みです。実践デモ付き。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/api" className="card-link">
                <span className="category-tag">Web</span>
                <h4>API</h4>
                <p>ソフトウェアやプログラムの機能を共有する仕組みのことです。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/json" className="card-link">
                <span className="category-tag">データ</span>
                <h4>JSON</h4>
                <p>JavaScriptのオブジェクト記法をベースにした軽量なデータ交換フォーマットです。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/css" className="card-link">
                <span className="category-tag">Web</span>
                <h4>CSS</h4>
                <p>Webページの見た目を整えるためのスタイルシート言語です。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="new">
          <h3>新着用語</h3>
          <div className="card-container">
            <div className="card" data-category="infrastructure">
              <Link href="/terms/ssh" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>SSH</h4>
                <p>遠くのサーバーに安全に入る仕組み。暗号化・秘密鍵・sshdまで初心者向けに解説。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/smtp" className="card-link">
                <span className="category-tag">Web</span>
                <h4>SMTP</h4>
                <p>メールを送信するためのプロトコル。HTTPと同じ「インターネットの道」を使うが、目的が違う。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/ip-address" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>IPアドレスとポート番号</h4>
                <p>IPアドレスが「住所」、ポート番号が「部屋番号」。プロトコルとの関係も理解できます。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="all-terms">
          <h3>すべての用語</h3>
          
          {/* 検索窓 */}
          <div className="search-container" style={{ marginTop: '20px', marginBottom: '30px' }}>
            <SearchAutocomplete />
          </div>

          {/* Web */}
          <h4 style={{ marginTop: '40px', marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #14b8a6', paddingBottom: '10px' }}>Web</h4>
          <div className="card-container">
            <div className="card" data-category="web">
              <Link href="/terms/html" className="card-link">
                <span className="category-tag">Web</span>
                <h4>HTML</h4>
                <p>Webページの構造を作るマークアップ言語です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/css" className="card-link">
                <span className="category-tag">Web</span>
                <h4>CSS</h4>
                <p>Webページの見た目を整えるためのスタイルシート言語です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/bootstrap" className="card-link">
                <span className="category-tag">Web</span>
                <h4>Bootstrap</h4>
                <p>Webサイトのデザインを効率的に作るためのCSSフレームワークです。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/javascript" className="card-link">
                <span className="category-tag">Web</span>
                <h4>JavaScript</h4>
                <p>Webページに動きを付けるプログラミング言語です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/http" className="card-link">
                <span className="category-tag">Web</span>
                <h4>HTTP/HTTPS</h4>
                <p>Webブラウザとサーバー間でデータをやり取りするための通信規約です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/smtp" className="card-link">
                <span className="category-tag">Web</span>
                <h4>SMTP</h4>
                <p>メールを送信するためのプロトコル。HTTPと同じ「インターネットの道」を使うが、目的が違う。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/api" className="card-link">
                <span className="category-tag">Web</span>
                <h4>API</h4>
                <p>ソフトウェアやプログラムの機能を共有する仕組みのことです。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/cookie" className="card-link">
                <span className="category-tag">Web</span>
                <h4>Cookie</h4>
                <p>Webサイトがブラウザに保存する小さなデータファイルです。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/webhook" className="card-link">
                <span className="category-tag">Web</span>
                <h4>Webhook</h4>
                <p>イベント発生時に自動でデータを送信する仕組みです。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/localstorage" className="card-link">
                <span className="category-tag">Web</span>
                <h4>ローカルストレージ</h4>
                <p>ブラウザにデータを保存できる仕組みです。実践デモ付き。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/validation" className="card-link">
                <span className="category-tag">Web</span>
                <h4>バリデーション</h4>
                <p>入力データが正しいかをチェックする仕組みです。実践デモで学べます。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/foolproof" className="card-link">
                <span className="category-tag">Web</span>
                <h4>フールプルーフ</h4>
                <p>ユーザーの誤操作を防ぐための設計原則です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/poka-yoke" className="card-link">
                <span className="category-tag">Web</span>
                <h4>ポカヨケ</h4>
                <p>製造業から生まれた「うっかりミス」を防ぐ設計手法です。</p>
              </Link>
            </div>
          </div>

          {/* セキュリティ */}
          <h4 style={{ marginTop: '40px', marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #14b8a6', paddingBottom: '10px' }}>セキュリティ</h4>
          <div className="card-container">
            <div className="card" data-category="security">
              <Link href="/terms/zero-day" className="card-link">
                <span className="category-tag">セキュリティ</span>
                <h4>ゼロデイ攻撃</h4>
                <p>脆弱性が発見されてから修正される前に行われる危険なサイバー攻撃です。</p>
              </Link>
            </div>
            <div className="card" data-category="security">
              <Link href="/terms/aes" className="card-link">
                <span className="category-tag">セキュリティ</span>
                <h4>AES</h4>
                <p>現代で最も広く使われている暗号化規格の一つです。</p>
              </Link>
            </div>
            <div className="card" data-category="security">
              <Link href="/terms/exploit" className="card-link">
                <span className="category-tag">セキュリティ</span>
                <h4>エクスプロイト</h4>
                <p>脆弱性を悪用する攻撃コード。実際の攻撃シミュレーションで学べます。</p>
              </Link>
            </div>
            <div className="card" data-category="security">
              <Link href="/terms/white-hat-hacker" className="card-link">
                <span className="category-tag">セキュリティ</span>
                <h4>ホワイトハッカー</h4>
                <p>善意のハッカー。脆弱性診断の仕事を体験デモで学べます。</p>
              </Link>
            </div>
            <div className="card" data-category="security">
              <Link href="/terms/cve" className="card-link">
                <span className="category-tag">セキュリティ</span>
                <h4>CVE</h4>
                <p>脆弱性識別番号。ニュースで見る「CVE-2024-xxxxx」の意味とは？</p>
              </Link>
            </div>
          </div>

          {/* データ */}
          <h4 style={{ marginTop: '40px', marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #14b8a6', paddingBottom: '10px' }}>データ</h4>
          <div className="card-container">
            <div className="card" data-category="data">
              <Link href="/terms/json" className="card-link">
                <span className="category-tag">データ</span>
                <h4>JSON</h4>
                <p>JavaScriptのオブジェクト記法をベースにした軽量なデータ交換フォーマットです。</p>
              </Link>
            </div>
            <div className="card" data-category="data">
              <Link href="/terms/queue" className="card-link">
                <span className="category-tag">データ</span>
                <h4>Queue（キュー）</h4>
                <p>先入れ先出し（FIFO）のデータ構造です。</p>
              </Link>
            </div>
            <div className="card" data-category="data">
              <Link href="/terms/stack" className="card-link">
                <span className="category-tag">データ</span>
                <h4>Stack（スタック）</h4>
                <p>後入れ先出し（LIFO）のデータ構造です。</p>
              </Link>
            </div>
            <div className="card" data-category="data">
              <Link href="/terms/sql" className="card-link">
                <span className="category-tag">データベース</span>
                <h4>SQL</h4>
                <p>データベースを操作する言語。SELECT、INSERT、UPDATEを体験デモで学べます。</p>
              </Link>
            </div>
          </div>

          {/* 開発・プログラミング */}
          <h4 style={{ marginTop: '40px', marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #14b8a6', paddingBottom: '10px' }}>開発・プログラミング</h4>
          <div className="card-container">
            <div className="card" data-category="programming">
              <Link href="/terms/framework" className="card-link">
                <span className="category-tag">開発</span>
                <h4>Framework</h4>
                <p>アプリケーション開発のための土台となる枠組みです。</p>
              </Link>
            </div>
            <div className="card" data-category="programming">
              <Link href="/terms/cli-gui" className="card-link">
                <span className="category-tag">プログラミング</span>
                <h4>CLI / GUI</h4>
                <p>黒い画面（CLI）とボタン（GUI）の違い。昔のPCはCLIだけだった歴史も。</p>
              </Link>
            </div>
          </div>

          {/* ツール */}
          <h4 style={{ marginTop: '40px', marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #14b8a6', paddingBottom: '10px' }}>ツール</h4>
          <div className="card-container">
            <div className="card" data-category="tools">
              <Link href="/terms/github" className="card-link">
                <span className="category-tag">ツール</span>
                <h4>GitHub</h4>
                <p>ソースコードをバージョン管理し、世界中の開発者と共有できるプラットフォームです。</p>
              </Link>
            </div>
            <div className="card" data-category="tools">
              <Link href="/terms/github-workflow" className="card-link">
                <span className="category-tag">ツール</span>
                <h4>GitHubワークフロー</h4>
                <p>プルリクエストとブランチ戦略で、チームで安全にコードを開発する流れを学べます。</p>
              </Link>
            </div>
            <div className="card" data-category="tools">
              <Link href="/terms/npm" className="card-link">
                <span className="category-tag">ツール</span>
                <h4>npm</h4>
                <p>JavaScriptのパッケージを管理するツールです。</p>
              </Link>
            </div>
            <div className="card" data-category="tools">
              <Link href="/terms/vercel" className="card-link">
                <span className="category-tag">ツール</span>
                <h4>Vercel</h4>
                <p>Webサイトを簡単に公開できるホスティングサービスです。</p>
              </Link>
            </div>
          </div>

          {/* インフラ */}
          <h4 style={{ marginTop: '40px', marginBottom: '20px', color: '#2c3e50', borderBottom: '2px solid #14b8a6', paddingBottom: '10px' }}>インフラ</h4>
          <div className="card-container">
            <div className="card" data-category="infrastructure">
              <Link href="/terms/server" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>サーバー</h4>
                <p>データやサービスを提供するコンピューターです。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/ssh" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>SSH</h4>
                <p>遠くのサーバーに安全に入る仕組み。暗号化・秘密鍵・sshdまで初心者向けに解説。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/ip-address" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>IPアドレスとポート番号</h4>
                <p>IPアドレスが「住所」、ポート番号が「部屋番号」。プロトコルとの関係も理解できます。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/domain" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>ドメイン</h4>
                <p>Webサイトの住所となる文字列です。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/dns" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>DNS</h4>
                <p>ドメイン名をIPアドレスに変換する仕組みです。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/hosting-service" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>ホスティングサービス</h4>
                <p>Webサイトを公開するためのサーバーを提供するサービスです。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/cpu" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>CPU</h4>
                <p>コンピュータの頭脳。命令の取り出し・解読・実行と、クロック・MIPSのイメージがつかめます。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/memory" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>メモリ</h4>
                <p>主記憶の役割と記憶階層。アドレス指定・実効アクセス時間をデモで体感できます。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="about">
          <h3>制作の背景と意図</h3>

          <h4>このサイトが生まれた理由</h4>
          <p>
            プログラミング学習を始めたばかりの頃、「API」「JSON」「フレームワーク」といった用語の説明を読んでも、なかなか理解できませんでした。
            教科書的な定義は書いてあるのに、「実際にどう使うのか」「なぜそうなるのか」が分からず、もどかしさを感じていました。
          </p>
          <p>
            そこで生まれたのがこの「実践型IT用語辞典」です。
            従来の辞典のように説明を読むだけでなく、実際に手を動かして体験できるデモを用意することで、抽象的な概念を直感的に理解できるようにしました。
          </p>

          <h4>誰のためのサイトか</h4>
          <p>
            このサイトは、次のような方々を対象にしています：
          </p>
          <ul>
            <li>プログラミング学習を始めたばかりの初心者</li>
            <li>IT業界で働く非エンジニア（営業、マーケティング、デザイナーなど）</li>
            <li>「IT用語 わかりやすく」「IT用語 初心者」と検索している方</li>
            <li>教科書的な説明では理解できなかった方</li>
            <li>実際に動かして理解したい実践派の学習者</li>
          </ul>

          <h4>他のIT用語辞典との違い</h4>
          <p>
            一般的なIT用語辞典は「定義」と「説明」で終わりますが、このサイトでは以下の点が異なります：
          </p>
          <ul>
            <li><strong>体験デモ付き</strong>：APIやローカルストレージなど、実際に動かせるデモで体感できる</li>
            <li><strong>初心者目線</strong>：専門用語を使わず、小学生でも理解できる表現を心がけている</li>
            <li><strong>実例重視</strong>：「日常のどこで使われているか」を具体的に紹介</li>
            <li><strong>FAQ充実</strong>：初心者がつまずきやすい疑問に答える</li>
            <li><strong>現役開発者が運営</strong>：実務経験に基づいた実践的な解説</li>
          </ul>

          <h4>学習の進め方</h4>
          <p>
            このサイトは自由に使っていただけますが、以下の順序で学習すると効果的です：
          </p>
          <ol>
            <li><strong>基礎から始める</strong>：HTML、CSS、JavaScriptなどのWeb技術の基本から</li>
            <li><strong>デモを触る</strong>：各ページの体験デモで実際に動かしてみる</li>
            <li><strong>関連用語へ</strong>：ページ下部の関連用語リンクから知識を広げる</li>
            <li><strong>検索機能を活用</strong>：気になる用語をすぐに調べられる</li>
            <li><strong>繰り返し見る</strong>：理解が深まるまで何度でも復習できる</li>
          </ol>

          <h4>これからの展望</h4>
          <p>
            このサイトは継続的に成長していきます。
            新しいIT用語の追加、既存ページの改善、ユーザーからのリクエストへの対応など、常に最新で分かりやすいコンテンツを提供できるよう努めています。
            「こんな用語を追加してほしい」「ここが分かりにくい」といったご意見があれば、ぜひお問い合わせからお知らせください。
          </p>
        </section>
      </main>
    </div>
  )
}
