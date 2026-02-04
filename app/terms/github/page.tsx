import Link from 'next/link'
import { Metadata } from 'next'
import GitHubDemo from './GitHubDemo'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'GitHubとは？小学生でもわかる【結局何に使うの？が分かる】',
  description: 'GitHubとは？図解とデモで使い方と仕組みを今すぐ理解。コード保存・共有・チーム開発ができるプラットフォームを初心者向けに解説。',
  keywords: ['GitHub', 'GitHub とは', 'GitHub 使い方', 'GitHub 初心者', 'Git', 'バージョン管理', 'リポジトリ', 'コミット', 'プッシュ', 'わかりやすく'],
  openGraph: {
    title: 'GitHubとは？小学生でもわかる【結局何に使うの？が分かる】',
    description: 'GitHubとは？図解とデモで使い方と仕組みを今すぐ理解。コード保存・共有・チーム開発ができるプラットフォームを初心者向けに解説。',
    type: 'article',
    url: 'https://itwords.jp/terms/github',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/github',
  },
}

export default function GitHubPage() {
  const faqs = [
    {
      question: 'GitHubの読み方は？',
      answer: 'GitHubは「ギットハブ」と読みます。「ギット」+「ハブ」の組み合わせで、「ジットハブ」や「ギフハブ」ではありません。英語圏でも「ギットハブ」と発音されます。'
    },
    {
      question: 'GitHubとGitの違いは何ですか？',
      answer: 'Gitはバージョン管理システム（ソフトウェア）で、あなたのパソコン上で動作します。一方、GitHubはGitを使ったホスティングサービス（Webサービス）で、クラウド上でコードを保存・共有できます。Gitという道具を使って、GitHubという場所にコードを保存・共有するイメージです。'
    },
    {
      question: 'GitHubは無料で使えますか？',
      answer: 'はい、GitHubは無料プランがあり、個人開発者やオープンソースプロジェクトは無料で利用できます。プライベートリポジトリも無制限に作成可能です。高度な機能が必要な場合は有料プラン（GitHub Pro、GitHub Team、GitHub Enterprise）もあります。'
    },
    {
      question: 'GitHubの始め方を教えてください',
      answer: '1. GitHubのWebサイト（github.com）でアカウントを作成します。2. Gitをパソコンにインストールします。3. GitHubで「New repository」をクリックしてリポジトリを作成します。4. ローカルでコードを書いて、git add、git commit、git pushコマンドでGitHubにアップロードします。'
    },
    {
      question: 'プルリクエストとは何ですか？',
      answer: 'プルリクエスト（Pull Request、PR）は、「この変更を本番に反映してください」とお願いする機能です。自分が開発した機能や修正を他の開発者にレビューしてもらい、承認されたらメインブランチにマージ（統合）されます。チーム開発では必須の機能です。詳しくは「GitHubワークフロー」のページをご覧ください。'
    },
    {
      question: 'GitHubのプロフィールは就職・転職で見られますか？',
      answer: 'はい、多くの企業の採用担当者がGitHubのプロフィールを見て技術力を判断します。特にContribution Graph（緑の芝生）や公開リポジトリの品質、オープンソースへの貢献度などが評価されます。GitHubのプロフィールは開発者の「ポートフォリオ」として機能します。'
    }
  ]

  return (
    <div className="container">
      <StructuredData
        type="FAQPage"
        faqs={faqs}
      />
      <StructuredData
        type="Article"
        title="GitHubとは？初心者向けにわかりやすく解説"
        description="GitHubとは？図解とデモで使い方と仕組みを今すぐ理解。コード保存・共有・チーム開発ができるプラットフォームを初心者向けに解説。"
        datePublished="2024-01-01"
        dateModified="2026-01-19"
      />

      <TermPageHeader
        termName="GitHub"
        reading="ギットハブ"
        icon="fab fa-github"
        dateCreated="2024-01-01"
        dateModified="2026-01-19"
        summaryItems={[
          'GitHubとは何か？何に使うのか？',
          'GitとGitHubの違い',
          '実際のGitコマンドの使い方（デモ付き）',
          'GitHubの便利な機能（Issues、Actions、Pagesなど）'
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>

          <p>
            <strong>GitHub</strong>とは、
            <strong>「ソースコードをバージョン管理し、世界中の開発者と共有・協力できるプラットフォーム」</strong>です。
          </p>

          <p>
            想像してみてください。あなたが小説を書いていて、
            「昨日の版に戻したい」「友達に添削してもらいたい」「複数人で共同執筆したい」
            と思ったとき、どうしますか？
          </p>

          <p>
            GitHubは、プログラムのコードでまさにこれを実現します。
            <strong>過去のバージョンを保存し、変更履歴を追跡し、複数人で協力して開発できる</strong>
            環境を提供してくれるのです。
          </p>

          <p className="note">
            <strong>💡 豆知識：</strong>
            GitHubは2008年に誕生し、2018年にMicrosoftに買収されました。
            現在、世界中で1億人以上の開発者が利用しています。
          </p>

          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '15px' }}>🐙 Octocat（オクトキャット）について</h3>
            <p>
              GitHubのマスコットキャラクターが「Octocat（オクトキャット）」です。
              タコと猫を組み合わせたキャラクターで、GitHubのロゴやアイコンとして使われています。
              開発者コミュニティでは、Octocatの様々なバリエーション（忍者、スーパーヒーロー、宇宙飛行士など）が作られており、
              GitHubの公式サイトやイベントでも見ることができます。
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              marginTop: '15px',
              padding: '15px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px'
            }}>
              <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 10px',
                  backgroundColor: '#24292e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px'
                }}>
                  🐙
                </div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>基本のOctocat</p>
              </div>
              <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 10px',
                  backgroundColor: '#24292e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px'
                }}>
                  🥷
                </div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>忍者Octocat</p>
              </div>
              <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 10px',
                  backgroundColor: '#24292e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px'
                }}>
                  🚀
                </div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>宇宙飛行士Octocat</p>
              </div>
              <div style={{ textAlign: 'center', flex: '1', minWidth: '150px' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 10px',
                  backgroundColor: '#24292e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px'
                }}>
                  🦸
                </div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>スーパーヒーローOctocat</p>
              </div>
            </div>
            <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
              <strong>💡 補足：</strong>
              OctocatはGitHubの公式マスコットで、開発者コミュニティで親しまれています。
              様々なバリエーションが<a href="https://octodex.github.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>Octodex</a>で公開されています。
            </p>
          </div>
        </section>

        <section>
          <h2>GitとGitHubの違い</h2>
          <p>よく混同されますが、GitとGitHubは別物です：</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>Git</th>
                  <th>GitHub</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>種類</strong></td>
                  <td>バージョン管理システム（ソフトウェア）</td>
                  <td>Gitを使ったホスティングサービス（Webサービス）</td>
                </tr>
                <tr>
                  <td><strong>場所</strong></td>
                  <td>あなたのパソコン（ローカル）</td>
                  <td>クラウド（インターネット上）</td>
                </tr>
                <tr>
                  <td><strong>役割</strong></td>
                  <td>コードの履歴を記録・管理</td>
                  <td>コードを保存・共有・協力</td>
                </tr>
                <tr>
                  <td><strong>イメージ</strong></td>
                  <td>ノート（記録ツール）</td>
                  <td>図書館（保管・共有の場）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            つまり、<strong>Git</strong>という道具を使って、
            <strong>GitHub</strong>という場所にコードを保存・共有するイメージです。
          </p>
        </section>

        <section>
          <h2>実際にやってみよう：Gitコマンド学習デモ</h2>
          <p>
            まずは実際に触ってみましょう！よく使うGitコマンドを選んで、使い方と説明を確認してみましょう！
          </p>
          <p>
            <strong>このデモで分かること：</strong>
          </p>
          <ul>
            <li>GitHubでよく使うコマンドの意味</li>
            <li>リポジトリ、コミット、プッシュ、プル、ブランチの流れ</li>
            <li>GitHubというサービスが何をしているのか</li>
          </ul>
          <GitHubDemo />
        </section>

        <section>
          <h2>GitHubの基本用語</h2>

          <h3>リポジトリ（Repository）</h3>
          <p>
            プロジェクトのコードやファイルをまとめて保管する「箱」のようなものです。
            1つのプロジェクトに対して1つのリポジトリを作ります。
          </p>

          <h3>コミット（Commit）</h3>
          <p>
            コードの変更を記録することです。
            「この日のこの時点でこんな変更をした」という履歴が残ります。
          </p>
          <div className="code-example">
            <pre><code>{`git commit -m "ログイン機能を追加"`}</code></pre>
          </div>

          <h3>プッシュ（Push）</h3>
          <p>
            ローカル（自分のパソコン）の変更を、
            GitHub（クラウド）にアップロードすることです。
          </p>
          <div className="code-example">
            <pre><code>{`git push origin main`}</code></pre>
          </div>

          <h3>プル（Pull）</h3>
          <p>
            GitHub上の最新の変更を、ローカルにダウンロードすることです。
            チームメンバーの変更を取り込むときに使います。
          </p>
          <div className="code-example">
            <pre><code>{`git pull origin main`}</code></pre>
          </div>

          <h3>ブランチ（Branch）</h3>
          <p>
            コードの「枝分かれ」です。
            本番用の<code>main</code>ブランチとは別に、
            新機能開発用の<code>feature</code>ブランチを作ることで、
            本番に影響を与えずに開発できます。
          </p>

          <h3>プルリクエスト（Pull Request）</h3>
          <p>
            「この変更を本番に反映してください」とお願いする機能です。
            レビューを経てからマージ（統合）されます。
          </p>
          <p>
            <strong>💡 詳しく学ぶ：</strong>
            <Link href="/terms/github-workflow" style={{ color: '#14b8a6', textDecoration: 'underline' }}>
              プルリクエストとブランチ戦略について詳しく →
            </Link>
          </p>
        </section>

        <section>
          <h2>GitHubの使い方（基本的な流れ）</h2>

          <h3>1. リポジトリを作成</h3>
          <p>GitHubのWebサイトで「New repository」をクリック</p>
          <ul>
            <li>リポジトリ名を入力（例：<code>my-first-project</code>）</li>
            <li>Public（公開）かPrivate（非公開）かを選択</li>
            <li>「Create repository」をクリック</li>
          </ul>

          <h3>2. ローカルで開発</h3>
          <div className="code-example">
            <pre><code>{`# リポジトリをクローン（ダウンロード）
git clone https://github.com/username/my-first-project.git

# ディレクトリに移動
cd my-first-project

# ファイルを編集
# ... コードを書く ...

# 変更を記録
git add .
git commit -m "初めてのコミット"`}</code></pre>
          </div>

          <h3>3. GitHubにプッシュ</h3>
          <div className="code-example">
            <pre><code>{`# GitHubにアップロード
git push origin main`}</code></pre>
          </div>

          <p>これで、あなたのコードがGitHub上に公開されます！</p>
        </section>

        <section>
          <h2>チーム開発とワークフロー</h2>
          <p>
            GitHubを使ったチーム開発では、<strong>プルリクエスト</strong>や<strong>ブランチ戦略</strong>が重要になります。
          </p>
          <p>
            <strong>💡 詳しく学ぶ：</strong>
            <Link href="/terms/github-workflow" style={{ color: '#14b8a6', textDecoration: 'underline' }}>
              GitHubワークフロー（プルリクエストとブランチ戦略）について詳しく →
            </Link>
          </p>
        </section>

        <section>
          <h2>GitHubの便利な機能</h2>

          <h3>Issues（イシュー）</h3>
          <p>
            バグ報告や機能要望を管理する掲示板のようなものです。
            タスク管理にも使えます。
          </p>
          <p>
            <strong>イメージ：</strong> プロジェクトの「ToDoリスト」や「問題管理ボード」のようなものです。
            チームメンバーが「この機能を追加したい」「このバグを直したい」と書き込むと、
            他のメンバーが対応できます。
          </p>
          <div style={{
            marginTop: '15px',
            marginBottom: '15px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              <strong>📋 Issuesの画面イメージ：</strong>
              <br />
              GitHubのリポジトリページで「Issues」タブを開くと、バグ報告や機能要望が一覧で表示されます。
              各Issueにはタイトル、説明、ラベル、担当者、マイルストーンなどの情報が表示され、
              コメントで議論を進めることができます。
            </p>
          </div>
          <p className="note" style={{ marginTop: '10px' }}>
            <strong>💡 補足：</strong>
            Issuesでは、ラベルを付けて分類したり、マイルストーンを設定して進捗を管理したりできます。
            画像やスクリーンショットを添付して、問題を視覚的に説明することもできます。
          </p>
          <p>
            <a href="https://docs.github.com/ja/issues" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>
              詳しくはGitHub公式ドキュメント →
            </a>
          </p>

          <h3>GitHub Actions</h3>
          <p>
            コードをpushしたときに自動的にテストを実行したり、
            <Link href="/terms/vercel">Vercel</Link>にデプロイしたりできる自動化機能です。
          </p>
          <p>
            <strong>イメージ：</strong> 「コードをpushしたら、自動的にテストを走らせて、問題なければ本番環境にデプロイする」
            という一連の流れを自動化できます。手動でやっていた作業を、GitHubが自動でやってくれます。
          </p>
          <div style={{
            marginTop: '15px',
            marginBottom: '15px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              <strong>⚙️ GitHub Actionsの画面イメージ：</strong>
              <br />
              GitHubのリポジトリページで「Actions」タブを開くと、自動化されたワークフローの実行履歴が表示されます。
              各ワークフローの実行状況（成功・失敗）が緑や赤のマークで表示され、
              クリックすると詳細なログを確認できます。
            </p>
          </div>
          <p className="note" style={{ marginTop: '10px' }}>
            <strong>💡 補足：</strong>
            GitHub Actionsでは、ワークフローをYAMLファイルで定義します。
            例えば「プルリクエストが作成されたら自動テストを実行」「mainブランチにマージされたら本番環境にデプロイ」といった設定ができます。
          </p>
          <p>
            <a href="https://docs.github.com/ja/actions" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>
              詳しくはGitHub公式ドキュメント →
            </a>
          </p>

          <h3>GitHub Pages</h3>
          <p>
            静的なWebサイトを無料でホスティングできる機能です。
            ポートフォリオサイトやドキュメントの公開に便利です。
          </p>
          <p>
            <a href="https://docs.github.com/ja/pages" target="_blank" rel="noopener noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline' }}>
              詳しくはGitHub公式ドキュメント →
            </a>
          </p>

          <h3>README.md</h3>
          <p>
            リポジトリの「顔」となるファイルです。
            プロジェクトの説明、使い方、インストール方法などを書きます。
          </p>
          <div style={{
            marginTop: '15px',
            marginBottom: '15px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              <strong>📝 READMEの画面イメージ：</strong>
              <br />
              GitHubのリポジトリページを開くと、一番上にREADME.mdの内容が表示されます。
              プロジェクトの概要、インストール方法、使い方などが分かりやすく書かれていると、
              他の開発者がプロジェクトを理解しやすくなります。
            </p>
          </div>
          <p className="note" style={{ marginTop: '10px' }}>
            <strong>💡 ポイント：</strong>
            READMEは、プロジェクトを見た人が最初に読むファイルです。
            分かりやすく書くことで、他の開発者がプロジェクトに参加しやすくなります。
          </p>
          <p>
            <strong>実在のREADME例：</strong>
            このサイト（IT用語辞典）のREADMEも、GitHubで公開されています。
            実際のプロジェクトでは、こんな感じで書かれています：
          </p>
          <div className="code-example">
            <pre><code>{`# 実践型IT用語辞典

## 概要
見習いエンジニアやIT初心者向けの、実践的なIT用語辞典サイトです。
「見て、触って、学べる」をコンセプトに、実際に動かせる体験デモを通じて
専門用語を分かりやすく解説します。

## 技術スタック
- Next.js 14 (App Router)
- TypeScript
- React

## セットアップ
\`\`\`
# 依存関係のインストール
npm install

# 開発サーバーを起動
npm run dev
\`\`\`

## 使い方
1. 用語ページで専門用語を検索
2. 体験デモで実際に動かして理解
3. コード例を見て実装方法を学ぶ

## ライセンス
MIT`}</code></pre>
          </div>
          <p style={{ marginTop: '15px' }}>
            <strong>READMEに書くべき内容：</strong>
          </p>
          <ul>
            <li>プロジェクトの目的と概要</li>
            <li>インストール方法</li>
            <li>使い方や実行方法</li>
            <li>技術スタック（使っている技術）</li>
            <li>貢献方法（他の人が参加する方法）</li>
            <li>ライセンス情報</li>
          </ul>
        </section>

        <section>
          <h2>オープンソースとGitHub</h2>
          <p>
            GitHubは<strong>オープンソースプロジェクト</strong>の中心地でもあります。
          </p>

          <h3>オープンソースとは？</h3>
          <p>
            ソースコードを無料で公開し、誰でも自由に使える・改良できるプロジェクトのことです。
          </p>

          <h3>有名なオープンソースプロジェクト</h3>
          <ul>
            <li><strong>React：</strong> Facebookが開発したUI<Link href="/terms/framework">フレームワーク</Link></li>
            <li><strong>Vue.js：</strong> 人気のJavaScriptフレームワーク</li>
            <li><strong>TensorFlow：</strong> Googleの機械学習ライブラリ</li>
            <li><strong>VS Code：</strong> Microsoftの人気コードエディタ</li>
          </ul>

          <p>
            これらのプロジェクトは、世界中の開発者が協力して開発しています。
            あなたも、バグ報告やドキュメント修正から、オープンソースに貢献できます！
          </p>
        </section>

        <section>
          <h2>GitHubのプロフィール</h2>
          <p>
            GitHubのプロフィールは、開発者の<strong>「ポートフォリオ」</strong>になります。
          </p>

          <h3>緑の芝生（Contribution Graph）と「草を生やす」</h3>
          <p>
            プロフィールに表示される緑色のマス目は、あなたの活動履歴を示します。
            毎日コミットすると、緑のマスが増えていきます。
          </p>
          <p>
            <strong>「草を生やす」</strong>とは、GitHubのContribution Graph（緑の芝生）に緑色のマスを増やすことを指すスラングです。
            毎日コミットをすると、その日のマスが緑色になり、まるで「草が生える」ように見えることから、この表現が生まれました。
          </p>
          <p>
            開発者コミュニティでは「今日も草を生やした！」「草が途切れないように頑張る」など、継続的な開発活動を表現する言葉として使われています。
          </p>
          <p className="note">
            <strong>💡 就職・転職でも注目される！</strong>
            企業の採用担当者は、GitHubのプロフィールを見て技術力を判断することもあります。
            特にContribution Graph（緑の芝生）が充実していると、継続的に開発活動をしていることが分かり、評価されやすくなります。
          </p>
        </section>

        <section>
          <h2>GitHub vs 他のサービス</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>向いている人</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GitHub</strong></td>
                  <td>最大手、オープンソースに強い、豊富な機能</td>
                  <td>個人開発者、オープンソース貢献者</td>
                </tr>
                <tr>
                  <td>GitLab</td>
                  <td>CI/CDに強い、自社サーバーに構築可能</td>
                  <td>企業、DevOpsチーム</td>
                </tr>
                <tr>
                  <td>Bitbucket</td>
                  <td>Jiraと連携しやすい、小規模チームは無料</td>
                  <td>Atlassian製品を使う企業</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>GitHubを使うメリット・デメリット</h2>

          <h3>メリット</h3>
          <ul>
            <li><strong>バージョン管理：</strong> 過去のコードにいつでも戻せる</li>
            <li><strong>バックアップ：</strong> クラウドに保存されるので、PCが壊れても安心</li>
            <li><strong>コラボレーション：</strong> チームで効率的に開発できる</li>
            <li><strong>ポートフォリオ：</strong> 自分のスキルを証明できる</li>
            <li><strong>学習リソース：</strong> 他人のコードを見て学べる</li>
          </ul>

          <h3>デメリット</h3>
          <ul>
            <li><strong>学習コスト：</strong> Git/GitHubの使い方を覚える必要がある</li>
            <li><strong>コンフリクト：</strong> 複数人で同じファイルを編集すると衝突が起きる</li>
            <li><strong>公開リスク：</strong> Publicリポジトリは誰でも見られる（APIキーなどに注意）</li>
          </ul>

          <p>
            詳しくは<a href="https://docs.github.com/ja" target="_blank" rel="noopener noreferrer">GitHub公式ドキュメント</a>や
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">Git公式ドキュメント</a>で確認できます。
          </p>
        </section>

        <section>
          <h2>初心者向けのヒント</h2>

          <h3>1. まずは自分のプロジェクトから</h3>
          <p>
            いきなりチーム開発は難しいので、まずは自分のプロジェクトで練習しましょう。
          </p>

          <h3>2. コミットメッセージは丁寧に</h3>
          <p>
            「修正」「更新」ではなく、「ログイン画面のレイアウトを修正」のように、
            何をしたか具体的に書きましょう。
          </p>

          <h3>3. .gitignoreを活用</h3>
          <p>
            <code>node_modules</code>や<code>.env</code>など、
            GitHubにアップロードしたくないファイルは<code>.gitignore</code>に記載しましょう。
          </p>
          <div className="code-example">
            <pre><code>{`# .gitignore
node_modules/
.env
.DS_Store`}</code></pre>
          </div>

          <h3>4. READMEを書く習慣を</h3>
          <p>
            未来の自分や他の人が見たときに、すぐに理解できるようにREADMEを書きましょう。
          </p>
        </section>

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
                  <td><Link href="/terms/vercel" className="term-name">Vercel</Link></td>
                  <td>GitHubと連携して自動デプロイできるホスティングサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>GitHub APIを使ってプログラムから操作できる</td>
                </tr>
                <tr>
                  <td><Link href="/terms/github-workflow" className="term-name">GitHubワークフロー</Link></td>
                  <td>プルリクエストとブランチ戦略について</td>
                </tr>
                <tr>
                  <td>Git</td>
                  <td>GitHubの基盤となるバージョン管理システム</td>
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
