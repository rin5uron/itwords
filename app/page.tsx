import Link from 'next/link'
import type { Metadata } from 'next'

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
      <header className="site-header">
        <div className="header-top">
          <h1>実践型IT用語辞典</h1>
          <nav>
            <ul>
              <li>
                <Link href="#popular">人気用語</Link>
              </li>
              <li>
                <Link href="#new">新着用語</Link>
              </li>
              <li>
                <Link href="#all-terms">すべての用語</Link>
              </li>
              <li>
                <Link href="#about">制作背景</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="site-description">
          このサイトは、現役のWeb開発者が運営する「見て、触って、学べる」をコンセプトにしたIT用語辞典です。プログラミング学習を始めたばかりの方や、IT業界で働く非エンジニアの方を対象に、専門用語を分かりやすく解説します。特に、APIやJSONといった抽象的な概念は、実際に動かせる体験デモを通じて「なぜそうなるのか」を直感的に理解できます。Web開発の基礎知識を確実に習得し、あなたの学習やキャリアアップを力強くサポートします。
        </p>
        <div className="search-container">
          <form action="/search" method="get">
            <input type="search" name="q" className="search-input" placeholder="サイト内を検索..." required />
            <button type="submit" className="search-button">検索</button>
          </form>
        </div>
      </header>

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
            <div className="card" data-category="web">
              <Link href="/terms/validation" className="card-link">
                <span className="category-tag">Web</span>
                <h4>バリデーション</h4>
                <p>入力データが正しいかをチェックする仕組みです。実践デモで学べます。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/poka-yoke" className="card-link">
                <span className="category-tag">Web</span>
                <h4>ポカヨケ</h4>
                <p>製造業から生まれた「うっかりミス」を防ぐ設計手法です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/foolproof" className="card-link">
                <span className="category-tag">Web</span>
                <h4>フールプルーフ</h4>
                <p>ユーザーの誤操作を防ぐための設計原則です。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="all-terms">
          <h3>すべての用語</h3>
          <div className="card-container">
            <div className="card" data-category="web">
              <Link href="/terms/html" className="card-link">
                <span className="category-tag">Web</span>
                <h4>HTML</h4>
                <p>Webページの構造を作るマークアップ言語です。</p>
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
              <Link href="/terms/javascript" className="card-link">
                <span className="category-tag">Web</span>
                <h4>JavaScript</h4>
                <p>Webページに動きを付けるプログラミング言語です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/cookie" className="card-link">
                <span className="category-tag">Web</span>
                <h4>Cookie</h4>
                <p>Webサイトがブラウザに保存する小さなデータファイルです。</p>
              </Link>
            </div>
            <div className="card" data-category="programming">
              <Link href="/terms/framework" className="card-link">
                <span className="category-tag">開発</span>
                <h4>Framework</h4>
                <p>アプリケーション開発のための土台となる枠組みです。</p>
              </Link>
            </div>
            <div className="card" data-category="tools">
              <Link href="/terms/github" className="card-link">
                <span className="category-tag">ツール</span>
                <h4>GitHub</h4>
                <p>ソースコードをバージョン管理し、世界中の開発者と共有できるプラットフォームです。</p>
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
            <div className="card" data-category="web">
              <Link href="/terms/webhook" className="card-link">
                <span className="category-tag">Web</span>
                <h4>Webhook</h4>
                <p>イベント発生時に自動でデータを送信する仕組みです。</p>
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
            <div className="card" data-category="infrastructure">
              <Link href="/terms/server" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>サーバー</h4>
                <p>データやサービスを提供するコンピューターです。</p>
              </Link>
            </div>
            <div className="card" data-category="infrastructure">
              <Link href="/terms/ip-address" className="card-link">
                <span className="category-tag">インフラ</span>
                <h4>IPアドレス</h4>
                <p>ネットワーク上の機器を識別する番号です。</p>
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
          </div>
        </section>

        <section id="about">
          <h3>制作の背景と意図</h3>
          <p>
            この実践型IT用語辞典は、「見て、触って、学べる」をコンセプトに、プログラミング初心者が直感的にIT技術を理解できることを目指しています。
            <br />
            「IT用語 わかりやすく」「IT用語 初心者」といった検索をする方々に向けて、従来の辞典のように説明を読むだけでなく、実際に動かせる体験デモを通じて「なぜそうなるのか」を体験できるIT用語解説サイトです。
          </p>
          <p>
            各用語ページでは「〇〇 とは」という基本的な定義から始まり、初心者でも分かりやすい解説と実践的なデモで、エンジニアを目指す方のIT学習をサポートします。
          </p>
        </section>
      </main>
    </div>
  )
}
