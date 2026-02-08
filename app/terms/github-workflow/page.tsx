'use client'

import Link from 'next/link'
import GitFlowDemo from '../github/GitFlowDemo'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdInArticle from '@/app/components/AdInArticle'
import FAQAccordion from '@/app/components/FAQAccordion'
export default function GitHubWorkflowPage() {
  const faqs = [
    {
      question: 'プルリクエストとは何ですか？',
      answer: 'プルリクエスト（Pull Request、PR）は、「この変更を本番に反映してください」とお願いする機能です。自分が開発した機能や修正を他の開発者にレビューしてもらい、承認されたらメインブランチにマージ（統合）されます。チーム開発では必須の機能です。'
    },
    {
      question: 'プルリクエストはなぜ必要ですか？',
      answer: 'プルリクエストを使うことで、コードレビューを経てから本番に反映できるため、バグの混入を防げます。また、チームメンバーが変更内容を確認し、議論できる場を提供します。直接mainブランチに変更を加えると、動かないコードが本番に混入したり、他人の変更と衝突したりするリスクがあります。'
    },
    {
      question: 'GitHub FlowとGit Flowの違いは？',
      answer: 'GitHub Flowは、mainブランチから直接featureブランチを切り、PRでマージするシンプルな戦略です。小〜中規模のプロジェクトや頻繁にデプロイする場合に適しています。Git Flowは、main、develop、feature、releaseなど複数のブランチを使う戦略で、大規模プロジェクトやリリースサイクルが明確な場合に適しています。'
    },
    {
      question: 'コードレビューでは何を確認すべきですか？',
      answer: 'コードレビューでは、ロジックが正しいか、読みやすいか、テストがあるか、セキュリティリスクがないかを確認します。また、コードの品質だけでなく、チームの学びの場として、新しいやり方を共有したり、ベストプラクティスを議論したりすることも重要です。'
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
        title="GitHubワークフローとは？プルリクエストとブランチ戦略を学ぶ"
        description="GitHubのプルリクエストとブランチ戦略を初心者向けに解説。GitHub Flow、Git Flow、Trunk-basedの違いと使い分け、コードレビューのポイントを学べます。"
        datePublished="2026-01-19"
        dateModified="2026-01-19"
      />

      <TermPageHeader
        termName="GitHubワークフロー"
        reading="ギットハブワークフロー"
        icon="fab fa-github"
        dateCreated="2026-01-19"
        dateModified="2026-01-19"
        summaryItems={[
          'プルリクエストとは何か？なぜ必要か？',
          'プルリクエストの基本的な流れ',
          'コードレビューのポイント',
          'よくあるブランチ戦略（GitHub Flow、Git Flow、Trunk-based）'
        ]}
      />

      <AdInArticle adSlot="2892250316" position="below-toc" />

      <main>
        <section>
          <h2>概要</h2>

          <p>
            <strong>GitHubワークフロー</strong>とは、
            <strong>「チームで協力してコードを開発・管理するための一連の流れ」</strong>です。
          </p>

          <p>
            個人で開発しているときは、直接コードを書いて保存すればOKです。
            でも、チームで開発するときは、誰かが書いたコードが他の人のコードと衝突したり、
            バグが混入したりするリスクがあります。
          </p>

          <p>
            GitHubワークフローを使えば、<strong>安全に、効率的に、チームで開発</strong>できるようになります。
          </p>

          <p className="note">
            <strong><i className="fas fa-lightbulb" aria-hidden /> 豆知識：</strong>
            このページでは、<Link href="/terms/github">GitHubの基本</Link>を理解していることを前提に、
            より実践的なワークフローについて説明します。
          </p>
        </section>

        <section>
          <h2>GitHubの全体の流れを理解する</h2>
          <p>
            以下のデモで、GitHubでよく使われる概念（リポジトリ、コミット、プッシュ、プル、ブランチ）の流れを体験できます。
            「何をしているサービスなのか」が一目で分かります。
          </p>
          <GitFlowDemo />
        </section>

        <section>
          <h2>プルリクエスト（Pull Request）とは？</h2>
          <p>
            プルリクエストは、<strong>「この変更をmainに取り込んでください」とお願いする機能</strong>です。
            単なる統合ではなく、<strong>レビューのプロセス</strong>が含まれます。
          </p>

          <h3>なぜプルリクエストが必要なのか？</h3>
          <p>
            もし全員が直接<code>main</code>ブランチに変更を加えたら、
            どうなるでしょうか？
          </p>
          <ul>
            <li><i className="fas fa-times-circle" aria-hidden /> <strong>動かないコード</strong>が本番に混入する</li>
            <li><i className="fas fa-times-circle" aria-hidden /> <strong>他人の変更</strong>と衝突して壊れる</li>
            <li><i className="fas fa-times-circle" aria-hidden /> <strong>誰の変更が原因</strong>でバグったか分からない</li>
          </ul>

          <p>
            プルリクエストを使えば、これらの問題を防げます！
          </p>

          <h3>プルリクエストの基本的な流れ</h3>
          <ol>
            <li>
              <strong>ブランチを作成</strong>: 新機能開発用に<code>feature/login</code>などの名前でブランチを切る
            </li>
            <li>
              <strong>開発＆コミット</strong>: ブランチ上で自由に開発・コミット
            </li>
            <li>
              <strong>プッシュ</strong>: GitHubにブランチをアップロード
            </li>
            <li>
              <strong>プルリクエスト（PR）作成</strong>: 「mainに統合してください」とお願い
            </li>
            <li>
              <strong>コードレビュー</strong>: チームメンバーがコードを確認・承認
            </li>
            <li>
              <strong>マージ</strong>: 問題なければmainブランチに統合される
            </li>
          </ol>

          <p style={{ marginTop: '20px' }}>
            <strong><i className="fas fa-lightbulb" aria-hidden /> 補足：</strong>
            プルリクエストの流れを視覚的に理解したい場合は、上の「GitHubの全体の流れを理解する」デモを参照してください。
          </p>

          <h3>PRのメリット</h3>
          <ul>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>コードレビュー</strong>: 他の開発者が確認できる</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>議論の場</strong>: コメントで「ここはこうした方が良い」と提案</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>履歴が残る</strong>: なぜこの変更をしたのか記録される</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>テスト自動化</strong>: PR作成時に自動テストを走らせられる</li>
          </ul>

          <h3>PRの作り方</h3>
          <ol>
            <li>GitHubのリポジトリページで「Pull requests」タブをクリック</li>
            <li>「New pull request」をクリック</li>
            <li>統合したいブランチ（例：<code>feature/login</code>）を選択</li>
            <li>変更内容を説明するタイトルと本文を書く</li>
            <li>「Create pull request」をクリック</li>
          </ol>

          <div className="code-example">
            <pre><code>{`# PRのタイトル例
feat: ユーザーログイン機能を追加

# PRの説明例
## 変更内容
- ログインフォームのUI実装
- JWT認証の実装
- ログインAPIエンドポイント追加

## テスト
- [x] ログイン成功時のテスト
- [x] ログイン失敗時のエラーハンドリング

## スクリーンショット
（画像を貼る）

## 関連Issue
Closes #123`}</code></pre>
          </div>

          <h3>コードレビューのポイント</h3>
          <p>
            PRを見る側（レビュアー）も重要な役割です：
          </p>
          <ul>
            <li><i className="fas fa-search" aria-hidden /> <strong>ロジックは正しいか</strong>: バグがないか確認</li>
            <li><i className="fas fa-search" aria-hidden /> <strong>読みやすいか</strong>: 他の人が理解できるコードか</li>
            <li><i className="fas fa-search" aria-hidden /> <strong>テストはあるか</strong>: 動作確認ができるか</li>
            <li><i className="fas fa-search" aria-hidden /> <strong>セキュリティリスクはないか</strong>: 脆弱性がないか</li>
          </ul>

          <p className="note">
            <strong><i className="fas fa-lightbulb" aria-hidden /> ポイント：</strong>
            PRは「マージするかしないか」だけでなく、<strong>チームの学びの場</strong>でもあります。
            新しいやり方を共有したり、ベストプラクティスを議論したりできます。
          </p>
        </section>

        <section>
          <h2>よくあるブランチ戦略</h2>
          <p>
            ブランチ戦略とは、<strong>「どのようにブランチを管理して開発を進めるか」</strong>というルールです。
            プロジェクトの規模や開発スタイルによって、適切な戦略が変わります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>戦略</th>
                  <th>説明</th>
                  <th>向いている規模</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GitHub Flow</strong></td>
                  <td>mainから直接featureブランチを切り、PRでマージ</td>
                  <td>小〜中規模、頻繁デプロイ</td>
                </tr>
                <tr>
                  <td><strong>Git Flow</strong></td>
                  <td>main、develop、feature、releaseなど複数ブランチを使う</td>
                  <td>大規模、リリースサイクルが明確</td>
                </tr>
                <tr>
                  <td><strong>Trunk-based</strong></td>
                  <td>mainブランチに直接コミット、短命なブランチのみ</td>
                  <td>超高速開発、CI/CD完備</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>GitHub Flow（おすすめ）</h3>
          <p>
            初心者やスタートアップには<strong>GitHub Flow</strong>がおすすめです。
            シンプルで理解しやすく、それでいて十分強力です。
          </p>
          <ul>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>シンプル</strong>: mainブランチとfeatureブランチだけ</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>理解しやすい</strong>: 複雑なルールがない</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>頻繁にデプロイ</strong>: 小規模な変更をすぐに反映できる</li>
          </ul>

          <h3>Git Flow</h3>
          <p>
            大規模なプロジェクトや、リリースサイクルが明確な場合に適しています。
          </p>
          <ul>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>安定版と開発版を分離</strong>: main（本番）とdevelop（開発）を分ける</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>リリース管理</strong>: releaseブランチでリリース準備</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>ホットフィックス対応</strong>: 緊急修正用のhotfixブランチ</li>
          </ul>

          <h3>Trunk-based</h3>
          <p>
            超高速開発や、CI/CDが完備されている場合に適しています。
          </p>
          <ul>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>高速開発</strong>: ブランチを切らずに直接mainにコミット</li>
            <li><i className="fas fa-check-circle" aria-hidden /> <strong>短命なブランチ</strong>: 必要最小限のブランチのみ</li>
            <li><i className="fas fa-exclamation-triangle" aria-hidden /> <strong>高度なCI/CDが必要</strong>: 自動テストとデプロイが必須</li>
          </ul>
        </section>

        <section>
          <h2>実践的なヒント</h2>

          <h3>1. ブランチ名は分かりやすく</h3>
          <p>
            <code>feature/login</code>、<code>fix/bug-123</code>のように、
            何のためのブランチか分かる名前を付けましょう。
          </p>

          <h3>2. PRは小さく、頻繁に</h3>
          <p>
            大きなPRはレビューが大変です。
            小さな変更を頻繁にPRすることで、レビューも早く、マージも早くなります。
          </p>

          <h3>3. PRの説明は丁寧に</h3>
          <p>
            「何を変更したか」「なぜ変更したか」「どうテストしたか」を
            明確に書くと、レビューがスムーズに進みます。
          </p>

          <h3>4. レビューは建設的に</h3>
          <p>
            レビューは「間違いを指摘する場」ではなく、
            <strong>「より良いコードを作る場」</strong>です。
            建設的なコメントを心がけましょう。
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
                  <td><Link href="/terms/github" className="term-name">GitHub</Link></td>
                  <td>基本的な使い方や機能について</td>
                </tr>
                <tr>
                  <td><Link href="/terms/vercel" className="term-name">Vercel</Link></td>
                  <td>GitHubと連携して自動デプロイできるホスティングサービス</td>
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
