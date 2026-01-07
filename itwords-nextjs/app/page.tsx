import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT用語辞典 - 見て、触って、学べる実践型IT用語辞典',
  description:
    'ただ読むだけじゃない。デモを通じて、IT技術の「なぜ？」が直感的にわかります。初心者向けのやさしい解説で、楽しく学習しましょう。',
  keywords: 'IT用語,プログラミング,初心者,体験デモ,学習,辞典',
}

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>IT用語辞典</h1>
        <nav>
          <ul>
            <li>
              <Link href="#popular">人気用語</Link>
            </li>
            <li>
              <Link href="#demo">体験デモ</Link>
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
          <h2>見て、触って、学べるIT用語辞典</h2>
          <p>ただ読むだけじゃない。デモを通じて、IT技術の「なぜ？」が直感的にわかります。</p>
          <div className="cta-buttons">
            <Link href="#new" className="cta-button">
              用語を探す
            </Link>
            <Link href="#demo" className="cta-button">
              体験デモを見る
            </Link>
          </div>
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
              <Link href="/terms/localstorage" className="card-link">
                <span className="category-tag">Web</span>
                <h4>ローカルストレージ</h4>
                <p>Webブラウザにデータを永続的に保存するための仕組みです。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="demo">
          <h3>体験デモ</h3>
          <p>以下の用語ページで実際に動かせるデモを体験できます：</p>
          <div className="card-container">
            <div className="card" data-category="programming">
              <Link href="/terms/stack" className="card-link">
                <span className="category-tag">開発</span>
                <h4>スタック構造の体験</h4>
                <p>Push/Popボタンでスタックの動きを実際に体験できます。</p>
              </Link>
            </div>
            <div className="card" data-category="programming">
              <Link href="/terms/queue" className="card-link">
                <span className="category-tag">開発</span>
                <h4>キュー構造の体験</h4>
                <p>Enqueue/Dequeueボタンでキューの動きを実際に体験できます。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/localstorage" className="card-link">
                <span className="category-tag">Web</span>
                <h4>ローカルストレージの体験</h4>
                <p>データ保存とページリロード後も残ることを体験できます。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/json" className="card-link">
                <span className="category-tag">データ</span>
                <h4>JSONデータ構造の体験</h4>
                <p>実際のJSONデータを見て、構造を理解できます。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/foolproof" className="card-link">
                <span className="category-tag">UX</span>
                <h4>フールプルーフの体験</h4>
                <p>二段階確認ダイアログで誤操作防止の仕組みを体験できます。</p>
              </Link>
            </div>
            <div className="card" data-category="web">
              <Link href="/terms/api" className="card-link">
                <span className="category-tag">Web</span>
                <h4>APIの仕組み</h4>
                <p>GitHub APIを使った実践的な例を学べます。</p>
              </Link>
            </div>
          </div>
        </section>

        <section id="about">
          <h3>制作の背景と意図</h3>
          <p>
            このIT用語辞典は、「見て、触って、学べる」をコンセプトに、初心者が直感的にIT技術を理解できることを目指しています。
            <br />
            従来の辞典のように説明を読むだけでなく、実際に動かせるデモを通じて「なぜそうなるのか」を体験できます。
          </p>
        </section>
      </main>

      <footer>
        <Link href="/privacy">プライバシーポリシー</Link>
        {' | '}
        <Link href="/terms">利用規約</Link>
        <p>&copy; 2024 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
