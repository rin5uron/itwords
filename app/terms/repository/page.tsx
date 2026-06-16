import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdInArticle from '@/app/components/AdInArticle'
import AdSenseUnit from '@/app/components/AdSenseUnit' 
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'リポジトリとは？小学生でもわかる【コードの保管庫】',
  description: 'リポジトリとは？フォルダ・ディレクトリとの違いを図解で理解。GitHubの「保管庫」の作り方とローカル・リモートの違いまで初心者向けに解説。',
  keywords: ['リポジトリ', 'repository', 'GitHub', 'Git', 'リポジトリ とは', 'リポジトリ フォルダ ディレクトリ 違い', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'リポジトリとは？小学生でもわかる【コードの保管庫】',
    description: 'リポジトリとは？フォルダ・ディレクトリとの違いを図解で理解。GitHubの「保管庫」の作り方とローカル・リモートの違いまで初心者向けに解説。',
    type: 'article',
    url: 'https://itwords.jp/terms/repository',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'リポジトリとは？小学生でもわかる【コードの保管庫】',
    description: 'リポジトリとは？フォルダ・ディレクトリとの違いを図解で理解。GitHubの「保管庫」の作り方とローカル・リモートの違いまで初心者向けに解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/repository',
  },
}

export default function RepositoryPage() {
  const faqs = [
    {
      question: 'リポジトリとは何ですか？',
      answer: 'リポジトリとは、プログラムのソースコードやファイルを保存・管理する「保管庫」のことです。単なるフォルダと違い、変更履歴を記録したり、複数人で同時に作業したりできる仕組みが備わっています。',
    },
    {
      question: 'ローカルリポジトリとリモートリポジトリの違いは？',
      answer: 'ローカルリポジトリは自分のパソコン内にあるリポジトリ、リモートリポジトリはGitHub等のサーバー上にあるリポジトリです。ローカルで作業して、リモートに「push（アップロード）」することで共有します。',
    },
    {
      question: 'GitHubのリポジトリは無料ですか？',
      answer: 'はい、GitHubは無料でパブリックリポジトリ（公開）もプライベートリポジトリ（非公開）も無制限に作成できます。個人開発やオープンソースなら完全無料で使えます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="リポジトリとは？小学生でもわかる【コードの保管庫】"
        description="リポジトリとは？フォルダ・ディレクトリとの違いを図解で理解。GitHubの「保管庫」の作り方とローカル・リモートの違いまで初心者向けに解説。"
        datePublished="2026-01-18"
        dateModified="2026-06-18"
      />

      <TermPageHeader
        termName="リポジトリ"
        reading="Repository / レポジトリ"
        icon="fas fa-folder-open"
        dateCreated="2026-01-18"
        dateModified="2026-06-18"
        summaryItems={[
          'リポジトリ・フォルダ・ディレクトリの違い（図解付き）',
          'ローカルリポジトリとリモートリポジトリの違い',
        ]}
      />

      <AdInArticle adSlot="2892250316" position="below-toc" />

      <main>
        <section>
          <p>
            <strong>リポジトリ（Repository）</strong>とは、<strong>プログラムのソースコードやファイルを保存・管理する「保管庫」</strong>のことです。
          </p>

          <p>
            例えば、あなたがWebサイトを作っているとします。
            HTMLファイル、CSSファイル、画像ファイルなど、たくさんのファイルがあります。
            これらを<strong>まとめて管理する場所がリポジトリ</strong>です。
          </p>

          <p>
            リポジトリは単なる「フォルダ」とは違います。
            <strong>「誰が」「いつ」「何を変更したか」という履歴を全て記録</strong>してくれるので、
            間違えて削除しても過去の状態に戻せます。
          </p>

          <p className="note">
            <strong><i className="fas fa-lightbulb" aria-hidden /> このサイトもGitHubのリポジトリで管理されています</strong>
            <br />
            全ての変更履歴が記録され、いつでも過去の状態に戻せます。
          </p>
        </section>

        <section>
          <h2>リポジトリ・ディレクトリ・ファイルの違い</h2>
          <p>
            まず、基本的な用語を整理しましょう：
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語</th>
                  <th>意味</th>
                  <th>例え</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ファイル</strong></td>
                  <td>1つの書類・データ</td>
                  <td>📄 ノートの1ページ</td>
                </tr>
                <tr>
                  <td><strong>ディレクトリ</strong><br/>（フォルダ）</td>
                  <td>ファイルを入れる箱</td>
                  <td>📁 クリアファイル</td>
                </tr>
                <tr>
                  <td><strong>リポジトリ</strong></td>
                  <td>「変更履歴付き」の箱</td>
                  <td>📚 タイムマシン付きの本棚</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>具体例で理解しよう</strong>：
          </p>

          <div className="code-example">
            <pre><code>{`my-website/         ← これが「リポジトリ」（変更履歴がある本棚）
├── images/         ← これが「ディレクトリ（フォルダ）」（クリアファイル）
│   ├── logo.png    ← これが「ファイル」（ノートの1ページ）
│   └── icon.png    ← これが「ファイル」
├── index.html      ← これが「ファイル」
└── style.css       ← これが「ファイル」`}</code></pre>
          </div>

          <ul>
            <li><strong>ファイル</strong>：<code>logo.png</code>、<code>index.html</code> など1つ1つのデータ</li>
            <li><strong>ディレクトリ</strong>：<code>images/</code> のようにファイルをまとめる箱（フォルダと同じ意味）</li>
            <li><strong>リポジトリ</strong>：<code>my-website/</code> 全体。「いつ・誰が・何を変更したか」という履歴が記録される</li>
          </ul>

          <h3>リポジトリとフォルダの違い</h3>
          <p>
            「リポジトリってフォルダと何が違うの？」という疑問はよくあります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>機能</th>
                  <th>普通のフォルダ</th>
                  <th>リポジトリ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ファイル保存</strong></td>
                  <td>✅ できる</td>
                  <td>✅ できる</td>
                </tr>
                <tr>
                  <td><strong>変更履歴</strong></td>
                  <td>❌ 記録されない</td>
                  <td>✅ 全て記録される</td>
                </tr>
                <tr>
                  <td><strong>過去に戻す</strong></td>
                  <td>❌ できない</td>
                  <td>✅ いつでも戻せる</td>
                </tr>
                <tr>
                  <td><strong>複数人で作業</strong></td>
                  <td>⚠️ 上書きされる</td>
                  <td>✅ 競合を検知・マージ</td>
                </tr>
                <tr>
                  <td><strong>誰が変更したか</strong></td>
                  <td>❌ わからない</td>
                  <td>✅ 記録される</td>
                </tr>
                <tr>
                  <td><strong>ブランチ</strong></td>
                  <td>❌ ない</td>
                  <td>✅ 並行開発できる</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>例え話</strong>：
            <br />
            普通のフォルダは「ノート」。書いた内容は残るけど、消したら終わり。
            <br />
            リポジトリは「タイムマシン付きノート」。いつでも過去のページに戻れる。
          </p>
        </section>

        <section>
          <h2>ローカルリポジトリとリモートリポジトリ</h2>
          <p>
            リポジトリには<strong>2種類</strong>あります：
          </p>

          <h3>1. ローカルリポジトリ</h3>
          <p>
            <strong>自分のパソコンの中にあるリポジトリ</strong>です。
            <br />
            普段の作業はここで行います。
          </p>

          <h3>2. リモートリポジトリ</h3>
          <p>
            <strong><Link href="/terms/github">GitHub</Link>などのサーバー上にあるリポジトリ</strong>です。
            <br />
            複数人で共有したり、バックアップとして使います。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>ローカルリポジトリ</th>
                  <th>リモートリポジトリ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>場所</strong></td>
                  <td>自分のパソコン内</td>
                  <td>GitHubなどのサーバー上</td>
                </tr>
                <tr>
                  <td><strong>アクセス</strong></td>
                  <td>自分だけ</td>
                  <td>チームメンバー全員</td>
                </tr>
                <tr>
                  <td><strong>ネット接続</strong></td>
                  <td>不要</td>
                  <td>必要</td>
                </tr>
                <tr>
                  <td><strong>バックアップ</strong></td>
                  <td>❌ パソコン壊れたら終わり</td>
                  <td>✅ サーバーに保存されている</td>
                </tr>
                <tr>
                  <td><strong>主な操作</strong></td>
                  <td>コミット（変更を記録）</td>
                  <td>プッシュ（送信）、プル（受信）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>流れ</strong>：
          </p>
          <ol>
            <li>ローカルリポジトリで作業する</li>
            <li>変更をコミット（記録）する</li>
            <li>リモートリポジトリにプッシュ（送信）する</li>
            <li>他の人がプル（受信）して、同じ状態になる</li>
          </ol>
        </section>
<AdSenseUnit adSlot="8307635933"/>

        <section>
          <h2>Gitとリポジトリ</h2>
          <p>
            リポジトリは、<strong>Git</strong>というバージョン管理システムで管理するためのフォルダです。
            普通のフォルダに <code>git init</code> コマンドを実行すると、<code>.git</code> という隠しフォルダが作られ、そこからリポジトリになります。
          </p>

          <div className="code-example">
            <pre><code>{`my-website/
├── .git/       ← これがあるとリポジトリ（Git管理中）
├── index.html
├── style.css
└── README.md`}</code></pre>
          </div>

          <p>
            <strong>.git フォルダ</strong>の中に、「誰が」「いつ」「何を変更したか」という履歴が全て記録されます。
            このフォルダを削除すると、ただのフォルダに戻ります。
          </p>

          <p>
            作ったリポジトリは <Link href="/terms/github">GitHub</Link> にアップロード（push）することで、チームで共有したりバックアップとして使えます。
          </p>
        </section>

        <section>
          <h2>リポジトリの命名ルール</h2>
          <p>
            リポジトリ名は<strong>URLに使われる</strong>ので、以下のルールを守りましょう：
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>ルール</th>
                  <th>良い例</th>
                  <th>悪い例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>小文字を使う</strong></td>
                  <td>✅ my-portfolio</td>
                  <td>❌ My-Portfolio</td>
                </tr>
                <tr>
                  <td><strong>ハイフンで区切る</strong></td>
                  <td>✅ todo-app</td>
                  <td>❌ todo_app、todoApp</td>
                </tr>
                <tr>
                  <td><strong>スペース使わない</strong></td>
                  <td>✅ personal-website</td>
                  <td>❌ personal website</td>
                </tr>
                <tr>
                  <td><strong>意味のある名前</strong></td>
                  <td>✅ blog-template</td>
                  <td>❌ project1、test</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>理由</strong>：
            GitHubのURLは <code>https://github.com/username/repository-name</code> という形式なので、
            スペースや大文字は避けるのが一般的です。
          </p>
        </section>

        <section>
          <h2>README.md = リポジトリの説明書</h2>
          <p>
            <strong>README.md</strong>は、そのリポジトリの「説明書」です。
            <Link href="/terms/github">GitHub</Link> でリポジトリを開くと最初に表示されます。
          </p>

          <p>
            書く内容は人それぞれですが、こんな例があります：
          </p>

          <div className="code-example">
            <pre><code>{`# 朝ごはん記録アプリ 🍳

毎朝の朝ごはんを記録するアプリです。
写真を撮って投稿すると、カロリーを自動計算してくれます。

## 使い方
1. アプリを開く
2. 写真を撮る
3. 「記録する」をタップ

## 使用技術
- React Native
- OpenAI API（カロリー解析）`}</code></pre>
          </div>

          <p className="note">
            <strong><i className="fas fa-lightbulb" aria-hidden /> ポイント</strong>
            <br />
            README.mdは<strong>Markdown</strong>という記法で書きます。<code>#</code>で見出し、<code>-</code>で箇条書きが作れます。
          </p>
        </section>

        <section className="term-comparison">
          <h2 data-toc-exclude>関連用語</h2>
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
                    <Link href="/terms/github" className="term-name">
                      GitHub
                    </Link>
                  </td>
                  <td>リポジトリをホスティング（保管・共有）するサービス</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">コミット</span>
                  </td>
                  <td>リポジトリに変更を記録する操作</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">ブランチ</span>
                  </td>
                  <td>リポジトリ内で並行開発するための仕組み</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">クローン</span>
                  </td>
                  <td>リモートリポジトリを自分のパソコンにコピーすること</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/vercel" className="term-name">
                      Vercel
                    </Link>
                  </td>
                  <td>GitHubのリポジトリと連携して自動デプロイできるサービス</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
