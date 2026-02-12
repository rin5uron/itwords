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
  twitter: {
    card: 'summary_large_image',
    title: '実践型IT用語辞典 - IT用語をわかりやすく解説',
    description: 'IT用語を初心者向けにわかりやすく解説。APIやJSONなどを体験デモで学べる実践型IT用語辞典。',
  },
}

export default function Home() {
  return (
    <div className="container">
      <SiteHeader showNav={true} />

      <main>
        <section id="new">
          <h3>新着用語</h3>
          <div className="card-container">
            <div className="card" data-category="hardware">
              <Link href="/terms/mips" className="card-link">
                <span className="category-tag">ハードウェア</span>
                <h4>MIPS</h4>
                <p>コンピュータの処理速度を表す単位。命令実行速度デモと単位計算で基本情報試験対策。</p>
              </Link>
            </div>
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
            <div className="card card-pr">
              <div className="card-link">
                <span className="category-tag category-tag-pr">PR</span>
                <span className="card-pr-label">おすすめの1冊</span>
                <a
                  href="https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18432509%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F21788388%2F"
                  rel="nofollow"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  <img
                    src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8214/9784815638214_1_2.jpg?_ex=128x128"
                    alt="いちばんやさしい 基本情報技術者 絶対合格の教科書＋出る順問題集"
                    width={128}
                    height={128}
                    style={{ display: 'block', margin: '0 auto 8px', border: 'none' }}
                  />
                  <p className="card-pr-title">【令和8年度】 いちばんやさしい 基本情報技術者 絶対合格の教科書＋出る順問題集［高橋 京介］</p>
                </a>
                <div className="card-pr-links">
                  <a
                    href="https://af.moshimo.com/af/c/click?a_id=5375345&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18432509%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F21788388%2F"
                    rel="nofollow"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    楽天で見る
                  </a>
                  <span className="card-pr-links-sep">|</span>
                  <a href="https://amzn.to/3Oy04c5" rel="nofollow">
                    Amazonで見る
                  </a>
                </div>
              </div>
              <img
                src="https://i.moshimo.com/af/i/impression?a_id=5375345&p_id=54&pc_id=54&pl_id=616"
                alt=""
                loading="lazy"
                width={1}
                height={1}
                style={{ border: 0, position: 'absolute', pointerEvents: 'none' }}
              />
            </div>
          </div>
        </section>

        <section id="practice">
          <h3>練習コーナー</h3>
          <div className="card-container">
            <div className="card" data-category="practice">
              <Link href="/practice/excel-shortcuts" className="card-link">
                <span className="category-tag">練習</span>
                <h4>Excel ショートカット練習</h4>
                <p>投資銀行スタイルの財務モデリング。マウスを使わないキーボード操作をレベル別ミッションで習得。</p>
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
          <p>
            このサイトが生まれた理由、誰のためのサイトか、他のIT用語辞典との違い、学習の進め方と今後の展望についてまとめています。
          </p>
          <p>
            <Link href="/about">制作背景のページへ</Link>
          </p>
        </section>
      </main>
    </div>
  )
}
