import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>IT用語辞典</h1>
        <nav>
          <ul>
            <li><Link href="#popular">人気用語</Link></li>
            <li><Link href="#demo">体験デモ</Link></li>
            <li><Link href="#new">新着用語</Link></li>
            <li><Link href="#about">制作背景</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h2>見て、触って、学べるIT用語辞典</h2>
          <p>ただ読むだけじゃない。デモを通じて、IT技術の「なぜ？」が直感的にわかります。</p>
          <div className="cta-buttons">
            <Link href="#search" className="cta-button">用語を探す</Link>
            <Link href="#demo" className="cta-button">体験デモを見る</Link>
          </div>
        </section>

        <section id="new">
          <h3>新着用語</h3>
          <div className="card-container">
            <div className="card">
              <Link href="/terms/foolproof" className="card-link">
                <span className="category-tag">Web</span>
                <h4>フールプルーフ</h4>
                <p>ユーザーの誤操作を防ぐための設計原則です。</p>
              </Link>
            </div>
            <div className="card">
              <Link href="/terms/stack" className="card-link">
                <span className="category-tag">開発</span>
                <h4>スタック</h4>
                <p>ソフトウェアやプログラムの機能を共有する仕組みのことです。</p>
              </Link>
            </div>
            <div className="card">
              <Link href="/terms/queue" className="card-link">
                <span className="category-tag">開発</span>
                <h4>キュー</h4>
                <p>データを一時的に保持する線形データ構造の一つで、先入れ先出し（FIFO）の原則で動作します。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="popular">
          <h3>人気の用語</h3>
          <div className="card-container">
            <div className="card">
              <Link href="/terms/api" className="card-link">
                <span className="category-tag">Web</span>
                <h4>API</h4>
                <p>ソフトウェアやプログラムの機能を共有する仕組みのことです。</p>
              </Link>
            </div>
            <div className="card">
              <Link href="/terms/json" className="card-link">
                <span className="category-tag">データ</span>
                <h4>JSON</h4>
                <p>JavaScriptのオブジェクト記法をベースにした軽量なデータ交換フォーマットです。</p>
              </Link>
            </div>
            <div className="card">
              <Link href="/terms/local-storage" className="card-link">
                <span className="category-tag">Web</span>
                <h4>ローカルストレージ</h4>
                <p>Webブラウザにデータを永続的に保存するための仕組みです。</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div style={{ marginBottom: '10px' }}>
          <Link href="/privacy" style={{ marginRight: '20px' }}>プライバシーポリシー</Link>
          <Link href="/terms">利用規約</Link>
        </div>
        <p>&copy; 2024 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
