import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'リポジトリとは？小学生でもわかる【コードの保管庫】',
  description: 'GitHubの「リポジトリ」って何？プログラムの「保管庫」を3分で理解。「フォルダとの違いは？」を実例で学べます。',
  keywords: ['リポジトリ', 'repository', 'GitHub', 'Git', 'リポジトリ とは', 'IT用語 わかりやすく'],
  openGraph: {
    title: 'リポジトリとは？小学生でもわかる【コードの保管庫】',
    description: 'GitHubの「リポジトリ」って何？プログラムの「保管庫」を3分で理解。フォルダとの違いを実例で学べます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'リポジトリとは？小学生でもわかる【コードの保管庫】',
    description: 'GitHubの「リポジトリ」って何？プログラムの「保管庫」を3分で理解。フォルダとの違いを実例で学べます。',
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
      question: 'リポジトリとフォルダの違いは？',
      answer: 'フォルダは単なる「ファイルの入れ物」ですが、リポジトリは「変更履歴」「誰が」「いつ」「何を変更したか」を全て記録します。間違えて削除しても、過去の状態に戻せるのがリポジトリの強みです。',
    },
    {
      question: 'ローカルリポジトリとリモートリポジトリの違いは？',
      answer: 'ローカルリポジトリは自分のパソコン内にあるリポジトリ、リモートリポジトリはGitHub等のサーバー上にあるリポジトリです。ローカルで作業して、リモートに「push（アップロード）」することで共有します。',
    },
    {
      question: 'GitHubのリポジトリは無料ですか？',
      answer: 'はい、GitHubは無料でパブリックリポジトリ（公開）もプライベートリポジトリ（非公開）も無制限に作成できます。個人開発やオープンソースなら完全無料で使えます。',
    },
    {
      question: 'リポジトリの名前はどう付ければいいですか？',
      answer: 'プロジェクト名をそのまま使うのが一般的です。例：「my-portfolio」「todo-app」「personal-website」。小文字とハイフンを使い、スペースは避けましょう（URLに使われるため）。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="リポジトリとは？小学生でもわかる【コードの保管庫】"
        description="GitHubの「リポジトリ」って何？プログラムの「保管庫」を3分で理解。フォルダとの違いを実例で学べます。"
        datePublished="2026-01-18"
        dateModified="2026-01-18"
      />

      <TermHeader
        termName="リポジトリ"
        reading="Repository / レポジトリ"
        icon="fas fa-folder-open"
        dateCreated="2026-01-18"
        dateModified="2026-01-18"
      />

      <TableOfContents />

      <main>
        {/* 更新日（概要の上） */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2026-01-18 | 最終更新: 2026-01-18</span>
        </div>

        <section>
          <h2>概要</h2>
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
            <strong>💡 このサイトもGitHubのリポジトリで管理されています</strong>
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

        <section>
          <h2>GitHubでリポジトリを作る方法</h2>
          <p>
            <Link href="/terms/github">GitHub</Link>でリポジトリを作るのは簡単です。
            詳しい手順は<a href="https://docs.github.com/ja/repositories/creating-and-managing-repositories" target="_blank" rel="noopener noreferrer">GitHub公式ドキュメント</a>でも確認できます：
          </p>

          <ol>
            <li>
              <strong>GitHubにログイン</strong>
              <br />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>にアクセス
            </li>
            <li>
              <strong>「New repository」をクリック</strong>
              <br />
              右上の「+」ボタンから「New repository」を選択
            </li>
            <li>
              <strong>リポジトリ名を入力</strong>
              <br />
              例：<code>my-first-website</code>
            </li>
            <li>
              <strong>Public / Private を選択</strong>
              <br />
              Public = 誰でも見れる（オープンソース）
              <br />
              Private = 自分だけ見れる
            </li>
            <li>
              <strong>「Create repository」をクリック</strong>
              <br />
              これでリポジトリが完成！
            </li>
          </ol>

          <p className="note">
            <strong>💡 ポイント</strong>
            <br />
            「Initialize this repository with a README」にチェックを入れると、
            最初からREADME.mdファイルが作られて便利です。
          </p>
        </section>

        <section>
          <h2>リポジトリの構造</h2>
          <p>
            リポジトリの中身はこんな感じです：
          </p>

          <div className="code-example">
            <pre><code>{`my-website/
├── .git/           # ← Git管理用フォルダ（変更履歴がここに記録される）
├── index.html      # HTMLファイル
├── style.css       # CSSファイル
├── script.js       # JavaScriptファイル
├── images/         # 画像フォルダ
│   └── logo.png
└── README.md       # プロジェクト説明ファイル`}</code></pre>
          </div>

          <p>
            <strong>.gitフォルダ</strong>が重要です。
            ここに全ての変更履歴が記録されています。
            このフォルダがあることで、普通のフォルダが「リポジトリ」になります。
          </p>
        </section>

        <section>
          <h2>リポジトリでできること</h2>
          <ul>
            <li>
              <strong>変更履歴の確認</strong>：
              いつ、誰が、何を変更したかが一目でわかる
            </li>
            <li>
              <strong>過去の状態に戻す</strong>：
              「昨日の状態に戻したい」が簡単にできる
            </li>
            <li>
              <strong>ブランチで並行開発</strong>：
              「新機能」「バグ修正」を同時進行できる
            </li>
            <li>
              <strong>チームでの共同作業</strong>：
              複数人で同じプロジェクトを編集できる
            </li>
            <li>
              <strong>Issue（課題管理）</strong>：
              「ここバグってる」「この機能追加したい」をメモできる
            </li>
            <li>
              <strong>プルリクエスト</strong>：
              「この変更を反映してください」とレビュー依頼できる
            </li>
          </ul>
        </section>

        <section>
          <h2>有名なリポジトリの例</h2>
          <p>
            GitHubには、世界中の有名なプロジェクトのリポジトリがあります：
          </p>

          <ul>
            <li>
              <strong>React</strong>：
              <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">facebook/react</a>
              <br />
              Facebookが開発したJavaScriptライブラリ（⭐ 220,000以上）
            </li>
            <li>
              <strong>TensorFlow</strong>：
              <a href="https://github.com/tensorflow/tensorflow" target="_blank" rel="noopener noreferrer">tensorflow/tensorflow</a>
              <br />
              Googleの機械学習ライブラリ（⭐ 180,000以上）
            </li>
            <li>
              <strong>Visual Studio Code</strong>：
              <a href="https://github.com/microsoft/vscode" target="_blank" rel="noopener noreferrer">microsoft/vscode</a>
              <br />
              Microsoftのエディタ（⭐ 160,000以上）
            </li>
          </ul>

          <p>
            これらは全て「オープンソース」で、誰でもコードを見たり、改善提案したりできます。
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
          <h2>README.mdの重要性</h2>
          <p>
            リポジトリには<strong>README.md</strong>というファイルを必ず作りましょう。
          </p>

          <p>
            README.mdは<strong>「このプロジェクトの説明書」</strong>です。
            GitHubのリポジトリページを開くと、最初に表示されます。
          </p>

          <p>書くべき内容：</p>
          <ul>
            <li><strong>プロジェクト名</strong></li>
            <li><strong>何をするプロジェクトか</strong></li>
            <li><strong>使い方・インストール方法</strong></li>
            <li><strong>技術スタック</strong>（使っている言語やライブラリ）</li>
            <li><strong>ライセンス</strong></li>
          </ul>

          <div className="code-example">
            <pre><code>{`# My Portfolio

個人ポートフォリオサイトです。

## 使用技術
- Next.js 15
- TypeScript
- Tailwind CSS

## インストール
\`\`\`bash
npm install
npm run dev
\`\`\`

## ライセンス
MIT`}</code></pre>
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
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; {new Date().getFullYear()} itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
