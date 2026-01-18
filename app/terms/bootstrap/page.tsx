import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Bootstrapとは？小学生でもわかる【賛否両論のCSSフレームワーク】',
  description: 'なぜ人気なのに批判もされる？Bootstrapの賛否を実例で理解。「似たデザインになる」問題と「爆速開発」メリットを3分で学べます。',
  keywords: ['Bootstrap', 'Bootstrap とは', 'CSSフレームワーク', 'Bootstrap 特徴', 'Bootstrap メリット デメリット', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'Bootstrapとは？小学生でもわかる【賛否両論のCSSフレームワーク】',
    description: 'なぜ人気なのに批判もされる？Bootstrapの賛否を実例で理解。「似たデザインになる」問題を体験デモで学べます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bootstrapとは？小学生でもわかる【賛否両論のCSSフレームワーク】',
    description: 'なぜ人気なのに批判もされる？Bootstrapの賛否を実例で理解。「似たデザインになる」問題を体験デモで学べます。',
  },
}

export default function BootstrapPage() {
  const faqs = [
    {
      question: 'Bootstrapとは何ですか？',
      answer: 'Bootstrap（ブートストラップ）とは、Webサイトのデザインを効率的に作るためのCSSフレームワークです。ボタン、ナビゲーション、カードなどのデザインパーツが最初から用意されており、HTMLにクラス名を追加するだけで見栄えの良いサイトが作れます。',
    },
    {
      question: 'Bootstrapは無料で使えますか？',
      answer: 'はい、Bootstrapは完全無料のオープンソースです。商用利用も可能で、ライセンス料などは一切かかりません。',
    },
    {
      question: 'BootstrapとTailwind CSSの違いは？',
      answer: 'Bootstrapは「コンポーネント型」で、ボタンやカードなどの完成品パーツが用意されています。Tailwind CSSは「ユーティリティ型」で、小さなCSSクラスを組み合わせて自分でデザインを作ります。Bootstrapは速く作れるが似たデザインになりがち、Tailwindは自由度が高いが習得に時間がかかります。',
    },
    {
      question: 'Bootstrapを使うべきでないケースは？',
      answer: 'ブランドサイトやECサイトなど、オリジナルのデザインで他社と差別化したい場合は避けた方が良いでしょう。Bootstrapは便利ですが「Bootstrap感」が出やすく、デザインの独自性が失われがちです。管理画面やプロトタイプなど、見た目より機能が重要な場面で使うのが最適です。',
    },
    {
      question: 'Bootstrap感とは何ですか？',
      answer: 'Bootstrap感とは、「このサイト、Bootstrapで作られてるな」と分かってしまう特有のデザインの雰囲気のことです。デフォルトの青いボタン、12分割グリッド、均等な余白などが特徴で、色やフォントを変えても消しにくい「雰囲気」があります。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="Bootstrapとは？小学生でもわかる【賛否両論のCSSフレームワーク】"
        description="なぜ人気なのに批判もされる？Bootstrapの賛否を実例で理解。「似たデザインになる」問題と「爆速開発」メリットを3分で学べます。"
        datePublished="2026-01-18"
        dateModified="2026-01-18"
      />

      <TermHeader
        termName="Bootstrap"
        reading="ブートストラップ"
        icon="fab fa-bootstrap"
      />

      <TableOfContents />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>Bootstrap（ブートストラップ）</strong>とは、<strong>Webサイトのデザインを効率的に作るためのCSSフレームワーク</strong>です。
          </p>

          <p>
            想像してみてください。Webサイトを作るとき、ボタン、ナビゲーションバー、カードなど、
            毎回ゼロから<Link href="/terms/css">CSS</Link>を書くのは大変ですよね。
          </p>

          <p>
            Bootstrapは、<strong>よく使うデザインパーツが最初から用意されている</strong>ので、
            <Link href="/terms/html">HTML</Link>にクラス名を追加するだけで、
            見栄えの良いサイトが作れます。
          </p>

          <p className="note">
            <strong>💡 このサイトはBootstrapを使っていません</strong>
            <br />
            なぜなら、オリジナルのデザインで差別化したいから。
            でも、管理画面などでは大活躍しています！
          </p>
        </section>

        <section>
          <h2>CSSフレームワークとJSフレームワークの違い</h2>
          <p>
            <Link href="/terms/framework">フレームワーク</Link>には、大きく分けて2種類あります：
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>役割</th>
                  <th>代表例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>CSSフレームワーク</strong></td>
                  <td>見た目（デザイン）を楽にする</td>
                  <td>Bootstrap、Tailwind CSS、Bulma</td>
                </tr>
                <tr>
                  <td><strong>JSフレームワーク</strong></td>
                  <td>動き（機能）を楽にする</td>
                  <td>React、Vue.js、Angular</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Bootstrap = CSSフレームワーク</strong>なので、
            「見た目をキレイにする」のが得意です。
            React や Vue.js と<strong>組み合わせて使う</strong>ことも多いです。
          </p>
        </section>

        <section>
          <h2>Bootstrapの賛否両論</h2>
          <p>
            Bootstrapは世界中で使われている人気のフレームワークですが、
            <strong>賛成派と反対派で意見が分かれます</strong>。
          </p>

          <h3>✅ 賛成派の意見（メリット）</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>メリット</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>⚡ 爆速開発</strong></td>
                  <td>ボタン、ナビゲーション、カードなどが最初から用意されているので、デザインに悩まず実装できる</td>
                </tr>
                <tr>
                  <td><strong>🎨 デザイン知識不要</strong></td>
                  <td>CSSを書かなくても、クラス名を追加するだけで見栄えの良いサイトが作れる</td>
                </tr>
                <tr>
                  <td><strong>📱 レスポンシブ自動対応</strong></td>
                  <td>PC、タブレット、スマホに自動で対応。1つのHTMLで全デバイスOK</td>
                </tr>
                <tr>
                  <td><strong>🆓 完全無料</strong></td>
                  <td>オープンソースで商用利用も可能。ライセンス料なし</td>
                </tr>
                <tr>
                  <td><strong>📚 情報が豊富</strong></td>
                  <td>世界中で使われているので、困ったときの解決策がすぐ見つかる</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>❌ 反対派の意見（デメリット）</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>デメリット</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>😐 どのサイトも似たデザイン</strong></td>
                  <td>みんな同じフレームワークを使うと、見た目が似てしまう。差別化が難しい</td>
                </tr>
                <tr>
                  <td><strong>👀 Bootstrap感が消せない</strong></td>
                  <td>色やフォントを変えても「Bootstrap感」が残る。プロが見ると一発で分かる</td>
                </tr>
                <tr>
                  <td><strong>🔧 カスタマイズが難しい</strong></td>
                  <td>Bootstrapのデフォルトから外れたデザインにするのは、逆に時間がかかる</td>
                </tr>
                <tr>
                  <td><strong>📦 ファイルサイズが大きい</strong></td>
                  <td>使わない機能も含まれているため、サイトの読み込みが遅くなる可能性</td>
                </tr>
                <tr>
                  <td><strong>📖 学習コスト</strong></td>
                  <td>クラス名のルールを覚える必要がある。CSS書いた方が早いこともある</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Bootstrap使ってるサイトの実例</h2>
          <p>
            Bootstrapを使うべきケースと、使わない方が良いケースを見てみましょう。
          </p>

          <h3>✅ Bootstrap使って正解なケース</h3>
          <ul>
            <li>
              <strong>管理画面・ダッシュボード</strong>
              <br />
              → 見た目より「機能」が重要。データを見やすく表示できればOK
            </li>
            <li>
              <strong>プロトタイプ（試作品）</strong>
              <br />
              → アイデアを素早く形にしたい。デザインは後で考える
            </li>
            <li>
              <strong>社内ツール</strong>
              <br />
              → 社内でしか使わないので、見た目より使いやすさ優先
            </li>
            <li>
              <strong>ドキュメントサイト</strong>
              <br />
              → 読みやすさ優先。オリジナリティは不要
            </li>
            <li>
              <strong>短期間のイベントサイト</strong>
              <br />
              → 数週間で終わるイベント。開発スピード最優先
            </li>
          </ul>

          <h3>⚠️ Bootstrap使わない方が良いケース</h3>
          <ul>
            <li>
              <strong>ブランドサイト（企業HP）</strong>
              <br />
              → 他社と差別化したい。オリジナルのブランドイメージが重要
            </li>
            <li>
              <strong>ECサイト（ネットショップ）</strong>
              <br />
              → デザインで商品を魅力的に見せたい。競合と似ると困る
            </li>
            <li>
              <strong>ポートフォリオサイト</strong>
              <br />
              → デザイナー・クリエイターなら独自性が命。Bootstrap感は避けたい
            </li>
            <li>
              <strong>ランディングページ（LP）</strong>
              <br />
              → CVR（成約率）を上げるには、オリジナルのデザインで目を引きたい
            </li>
          </ul>
        </section>

        <section>
          <h2>Bootstrap感の見分け方</h2>
          <p>
            「このサイト、Bootstrapで作られてるな」と分かってしまう特徴があります。
          </p>

          <h3>1. デフォルトの青いボタン</h3>
          <p>
            Bootstrapのボタンは、デフォルトで<strong>青色（#007bff）</strong>です。
            この色をそのまま使っているサイトは、高確率でBootstrap製です。
          </p>

          <h3>2. 12分割グリッドシステム</h3>
          <p>
            Bootstrapは画面を<strong>12分割</strong>して、レイアウトを作ります。
            そのため、「なんかキレイに3列に並んでるな」「4:8の比率だな」というレイアウトが多いです。
          </p>

          <div className="code-example">
            <pre><code>{`<!-- Bootstrapの典型的なレイアウト -->
<div class="row">
  <div class="col-md-4">左カラム（12分の4）</div>
  <div class="col-md-8">右カラム（12分の8）</div>
</div>`}</code></pre>
          </div>

          <h3>3. 均等な余白（padding/margin）</h3>
          <p>
            Bootstrapは、余白が<strong>均等</strong>です。
            <code>p-3</code>、<code>m-4</code> などのクラスで余白を指定するので、
            「なんかキレイに揃ってるな」という印象になります。
          </p>

          <h3>4. 角丸のカード</h3>
          <p>
            Bootstrapの<strong>カード</strong>コンポーネントは、角が丸く、影がついています。
            この「カード感」がBootstrapの特徴です。
          </p>

          <h3>5. ナビゲーションバーの形</h3>
          <p>
            Bootstrapのナビゲーションバー（navbar）は、独特の形をしています。
            ハンバーガーメニュー（☰）の位置、ロゴの配置などに「Bootstrap感」が出ます。
          </p>
        </section>

        <section>
          <h2>いつBootstrapを使うべき？</h2>
          <p>
            Bootstrapを使うかどうかは、<strong>「デザインの独自性」と「開発スピード」のどちらを優先するか</strong>で決めましょう。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>優先事項</th>
                  <th>Bootstrap使う？</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>開発スピード最優先</strong></td>
                  <td>✅ 使う</td>
                  <td>デザインに悩まず、機能実装に集中できる</td>
                </tr>
                <tr>
                  <td><strong>デザインの独自性優先</strong></td>
                  <td>❌ 使わない</td>
                  <td>カスタムCSSで1から作る方が自由度高い</td>
                </tr>
                <tr>
                  <td><strong>見た目より機能重視</strong></td>
                  <td>✅ 使う</td>
                  <td>管理画面、ダッシュボードなど</td>
                </tr>
                <tr>
                  <td><strong>ブランドイメージ重視</strong></td>
                  <td>❌ 使わない</td>
                  <td>企業HP、ECサイトなど</td>
                </tr>
                <tr>
                  <td><strong>学習目的</strong></td>
                  <td>✅ 使う</td>
                  <td>レスポンシブデザインの基本が学べる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Bootstrapの基本的な使い方</h2>
          <p>
            Bootstrapを使うには、2つの方法があります：
          </p>

          <h3>1. CDN経由で使う（簡単）</h3>
          <p>
            HTMLに以下を追加するだけで、すぐ使えます。
            最新バージョンは<a href="https://getbootstrap.jp/" target="_blank" rel="noopener noreferrer">Bootstrap公式サイト</a>で確認してください：
          </p>

          <div className="code-example">
            <pre><code>{`<!DOCTYPE html>
<html>
<head>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <button class="btn btn-primary">ボタン</button>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code></pre>
          </div>

          <h3>2. <Link href="/terms/npm">npm</Link>でインストールする（本格開発）</h3>
          <div className="code-example">
            <pre><code>{`npm install bootstrap`}</code></pre>
          </div>
        </section>

        <section>
          <h2>Bootstrapの代替フレームワーク</h2>
          <p>
            「Bootstrap感が嫌だ」という人は、他のCSSフレームワークも検討しましょう：
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>フレームワーク</th>
                  <th>特徴</th>
                  <th>向いている人</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tailwind CSS</strong></td>
                  <td>ユーティリティ型。小さいクラスを組み合わせる</td>
                  <td>オリジナルデザインを作りたい人</td>
                </tr>
                <tr>
                  <td><strong>Bulma</strong></td>
                  <td>モダンでシンプル。JavaScript不要</td>
                  <td>軽量なサイトを作りたい人</td>
                </tr>
                <tr>
                  <td><strong>Foundation</strong></td>
                  <td>企業向け。カスタマイズ性高い</td>
                  <td>大規模サイトを作る人</td>
                </tr>
                <tr>
                  <td><strong>Material-UI</strong></td>
                  <td>Googleのマテリアルデザイン</td>
                  <td>Reactを使う人</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                    <Link href="/terms/framework" className="term-name">
                      フレームワーク
                    </Link>
                  </td>
                  <td>BootstrapはCSSフレームワークの一種</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/css" className="term-name">
                      CSS
                    </Link>
                  </td>
                  <td>BootstrapはCSSを楽にするツール</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/html" className="term-name">
                      HTML
                    </Link>
                  </td>
                  <td>BootstrapはHTMLにクラス名を追加して使う</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/npm" className="term-name">
                      npm
                    </Link>
                  </td>
                  <td>Bootstrapをnpmでインストールできる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; {new Date().getFullYear()} itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
