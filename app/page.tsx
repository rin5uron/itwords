import Link from 'next/link'
import type { Metadata } from 'next'
import SearchBox from './components/SearchBox'

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
        <h1>実践型IT用語辞典</h1>
        <nav>
          <ul>
            <li>
              <Link href="#search">用語検索</Link>
            </li>
            <li>
              <Link href="#popular">人気用語</Link>
            </li>
            <li>
              <Link href="#new">新着用語</Link>
            </li>
            <li>
              <Link href="#about">制作背景</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>IT用語をわかりやすく解説する実践型辞典</h2>
          <p>プログラミング初心者でも理解できる、わかりやすいIT用語解説。デモを通じて、IT技術の「なぜ？」が直感的にわかります。</p>
          <p className="hero-description">
            API、JSON、HTTP/HTTPS、Cookie、フレームワーク、GitHubなど、
            Webプログラミングに必要なIT用語を初心者にもわかりやすく解説。
            HTML、CSS、JavaScriptの基礎から、
            Vercelやnpmなどの開発ツールまで幅広くカバーしています。
          </p>
          <div className="cta-buttons">
            <Link href="#search" className="cta-button">
              用語を検索
            </Link>
          </div>
        </section>

        <section id="search">
          <h3>用語を検索</h3>
          <SearchBox />
        </section>

        <section id="new">
          <h3>新着用語</h3>
          <div className="card-container">
            <div className="card" data-category="web">
              <Link href="/terms/foolproof" className="card-link">
                <span className="category-tag">Web</span>
                <h4>フールプルーフ</h4>
                <p>ユーザーの誤操作を防ぐための設計原則です。</p>
              </Link>
            </div>
            <div className="card" data-category="programming">
              <Link href="/terms/stack" className="card-link">
                <span className="category-tag">開発</span>
                <h4>スタック</h4>
                <p>後入れ先出し（LIFO）のデータ構造です。</p>
              </Link>
            </div>
            <div className="card" data-category="programming">
              <Link href="/terms/queue" className="card-link">
                <span className="category-tag">開発</span>
                <h4>キュー</h4>
                <p>
                  データを一時的に保持する線形データ構造の一つで、先入れ先出し（FIFO）の原則で動作します。
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section id="popular">
          <h3>人気の用語</h3>
          <div className="card-container">
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
              <Link href="/terms/http" className="card-link">
                <span className="category-tag">Web</span>
                <h4>HTTP/HTTPS</h4>
                <p>Webブラウザとサーバー間でデータをやり取りするための通信規約です。</p>
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
          </div>
        </section>

        <section id="web-basics">
          <h3>Web開発の基礎</h3>
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
                <p>Webページの見た目を整えるスタイルシート言語です。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/javascript" className="card-link">
                <span className="category-tag">Web</span>
                <h4>JavaScript</h4>
                <p>Webページに動きを付けるプログラミング言語です。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="dev-tools">
          <h3>開発ツール</h3>
          <div className="card-container">
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

      <footer>
        <Link href="/privacy">プライバシーポリシー</Link>
        {' | '}
        <Link href="/terms">利用規約</Link>
        {' | '}
        <Link href="/contact">お問い合わせ</Link>
        <p>&copy; 2026 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
