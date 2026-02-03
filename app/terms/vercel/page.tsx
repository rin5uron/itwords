'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export default function VercelPage() {
  const faqs = [
    {
      question: 'Vercelの読み方は？',
      answer: 'Vercelは「ヴァーセル」と読みます。「バーセル」と読まれることもありますが、公式の発音は「ヴァーセル」です。',
    },
    {
      question: 'Vercelは無料で使える？',
      answer: 'はい、個人プロジェクトなら無料プラン（Hobby）で十分使えます。無制限のWebサイト、100GB/月の帯域幅、自動HTTPS、カスタムドメイン対応などが含まれます。',
    },
    {
      question: 'VercelとNetlifyの違いは？',
      answer: 'Vercelはフロントエンド全般に対応し、特にNext.jsに最適化されています。Netlifyは静的サイトに特化し、フォーム機能が充実しています。どちらも無料プランがありますが、Next.jsを使うならVercelが最適です。',
    },
    {
      question: 'Vercelでデプロイにかかる時間は？',
      answer: '小〜中規模のプロジェクトなら、数秒〜数分でデプロイが完了します。GitHubにpushすると自動的にビルド・デプロイが始まります。',
    },
  ]

  const [currentStep, setCurrentStep] = useState(0)

  const deploymentSteps = [
    { title: '1. コードをプッシュ', description: 'GitHubにコードをpushします', icon: '📤', color: '#28a745' },
    { title: '2. 自動検知', description: 'Vercelが変更を自動検知します', icon: '🔍', color: '#007bff' },
    { title: '3. ビルド開始', description: 'プロジェクトをビルドします', icon: '⚙️', color: '#ffc107' },
    { title: '4. デプロイ', description: 'グローバルCDNにデプロイします', icon: '🚀', color: '#17a2b8' },
    { title: '5. 完了', description: 'サイトが公開されました！', icon: '✅', color: '#28a745' }
  ]

  const nextStep = () => {
    if (currentStep < deploymentSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const resetSteps = () => {
    setCurrentStep(0)
  }

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="Vercel（ヴァーセル）とは？読み方から使い方まで初心者向けに解説"
        description="Vercelとは？デプロイデモで使い方を今すぐ体験。読み方、Next.jsとの相性、無料プラン、GitHubとの自動連携まで初心者向けに解説します。"
        datePublished="2024-01-09"
        dateModified="2026-01-16"
      />
      <TermPageHeader
        termName="Vercel"
        reading="ヴァーセル"
        icon="fas fa-server"
        dateCreated="2024-01-09"
        dateModified="2026-01-16"
        summaryItems={[
          'Vercelとは何か？読み方は？',
          'GitHubと連携した自動デプロイの仕組み',
          'Next.jsとの相性が抜群な理由',
          '無料プランでできること'
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>

          <p>
            <strong>Vercel</strong>とは、
            <strong>「Webサイトやアプリを簡単に公開できるホスティングサービス」</strong>です。
          </p>

          <p>
            想像してみてください。あなたが一生懸命作ったWebサイトを、
            世界中の人に見てもらうには、サーバーを用意して、設定して、公開する必要があります。
            でも初心者にとって、これはかなりハードルが高いですよね。
          </p>

          <p>
            Vercelは、そんな面倒な作業を<strong>ほぼ自動で</strong>やってくれます。
            <Link href="/terms/github">GitHub</Link>にコードを push するだけで、
            数秒後には世界中からアクセスできる状態になります。
          </p>

          <p>
            Vercelは<Link href="/terms/data-center">データセンター</Link>上で<Link href="/terms/server">Webサーバー</Link>を提供しています。
            URLでアクセスできるようにするため、<Link href="/terms/dns">DNS</Link>と連携しており、
            ドメインを入力するだけで自動的にDNS設定を行ってくれます。
          </p>

          <p className="note">
            <strong>💡 このサイトもVercelで動いています！</strong>
            <code>https://itwords.jp</code> は、Vercelを使って公開されています。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>Vercelのデプロイフローを体験してみよう</h3>
            <p>
              下のデモでVercelのデプロイフローを確認できます。
              実際に手を動かすことで、Vercelの動作が理解しやすくなります。
            </p>
            <div style={{
              border: '2px solid #007bff',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
              backgroundColor: '#f8f9fa'
            }}>
              <h3>デプロイステップ</h3>
              <div style={{ marginTop: '20px' }}>
                {deploymentSteps.map((step, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '15px',
                      opacity: index <= currentStep ? 1 : 0.5,
                      transition: 'opacity 0.3s'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: index <= currentStep ? step.color : '#ccc',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      marginRight: '15px',
                      fontWeight: 'bold'
                    }}>
                      {index <= currentStep ? step.icon : '○'}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, color: index <= currentStep ? step.color : '#999' }}>
                        {step.title}
                      </h4>
                      <p style={{ margin: '5px 0 0 0', color: '#666' }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button
                  onClick={nextStep}
                  disabled={currentStep >= deploymentSteps.length - 1}
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: currentStep >= deploymentSteps.length - 1 ? '#ccc' : '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: currentStep >= deploymentSteps.length - 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  {currentStep >= deploymentSteps.length - 1 ? '完了' : '次のステップ'}
                </button>
                <button
                  onClick={resetSteps}
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  リセット
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Vercelの特徴</h2>

          <h3>1. Next.jsとの相性が抜群</h3>
          <p>
            Vercelは、人気の<Link href="/terms/framework">フレームワーク</Link>である
            <strong>Next.js</strong>を開発している会社です。
            そのため、Next.jsで作ったプロジェクトは、特別な設定なしで最適な状態でデプロイできます。
          </p>

          <h3>2. 自動デプロイ</h3>
          <p>
            GitHubにコードをpushすると、自動的にビルド・デプロイされます。
            「デプロイ忘れた！」ということがありません。
          </p>

          <h3>3. プレビュー環境</h3>
          <p>
            プルリクエストを作ると、自動的にプレビュー用のURLが生成されます。
            本番環境に影響を与えずに、変更内容を確認できます。
          </p>

          <h3>4. グローバルCDN</h3>
          <p>
            世界中にあるサーバー（CDN）から配信されるため、
            どこからアクセスしても高速に表示されます。
          </p>

          <h3>5. 無料プランが充実</h3>
          <p>
            個人プロジェクトなら、無料プランで十分使えます。
            商用利用でなければ、ほとんどの機能が無料で利用できます。
          </p>
        </section>

        <section>
          <h2>Vercelでデプロイする流れ</h2>
          <p>実際にVercelを使ってサイトを公開する手順は、驚くほど簡単です：</p>

          <ol>
            <li>
              <strong>Vercelアカウント作成：</strong>
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
              にアクセスして、GitHubアカウントでサインアップ
            </li>
            <li>
              <strong>プロジェクトをインポート：</strong>
              「New Project」ボタンを押して、GitHubのリポジトリを選択
            </li>
            <li>
              <strong>設定確認：</strong>
              Next.jsプロジェクトなら自動検出されるので、そのまま「Deploy」をクリック
            </li>
            <li>
              <strong>デプロイ完了：</strong>
              数十秒〜数分で、<code>https://your-project.vercel.app</code> のようなURLが発行される
            </li>
          </ol>

          <p>
            たったこれだけで、世界中からアクセスできるWebサイトが完成します！
          </p>
        </section>

        <section>
          <h2>Vercel vs 他のホスティングサービス</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>向いている用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Vercel</strong></td>
                  <td>Next.jsに最適化、自動デプロイ、プレビュー環境</td>
                  <td>Next.js、React、静的サイト</td>
                </tr>
                <tr>
                  <td>Netlify</td>
                  <td>静的サイト特化、フォーム機能、関数機能</td>
                  <td>静的サイト、JAMstack</td>
                </tr>
                <tr>
                  <td>GitHub Pages</td>
                  <td>完全無料、GitHubと統合</td>
                  <td>個人サイト、ドキュメント、ポートフォリオ</td>
                </tr>
                <tr>
                  <td>AWS / GCP</td>
                  <td>高度な設定が可能、スケーラビリティ高い</td>
                  <td>大規模アプリ、エンタープライズ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Vercelの料金プラン</h2>

          <h3>Hobby（無料プラン）</h3>
          <ul>
            <li>個人プロジェクト向け</li>
            <li>無制限のWebサイト</li>
            <li>100GB/月の帯域幅</li>
            <li>自動HTTPS</li>
            <li>カスタムドメイン対応</li>
          </ul>

          <h3>Pro（$20/月）</h3>
          <ul>
            <li>商用利用可能</li>
            <li>1TB/月の帯域幅</li>
            <li>パスワード保護</li>
            <li>アナリティクス機能</li>
          </ul>

          <p className="note">
            <strong>💡 ポイント：</strong>
            個人の学習や趣味のプロジェクトなら、無料プランで十分です。
            このサイトも無料プランで運用しています！
          </p>

          <p className="note">
            <strong>⚠️ 注意：</strong>
            Vercelの料金プランは変更されることがあります。
            最新の情報は<a href="https://vercel.com/pricing" target="_blank" rel="noopener noreferrer">公式サイト</a>で確認してください。
            <br />
            <small>（最終更新：2026年1月16日）</small>
          </p>
        </section>

        <section>
          <h2>カスタムドメインの設定</h2>
          <p>
            Vercelでは、独自ドメイン（例：<code>itwords.jp</code>）を簡単に設定できます。
          </p>

          <ol>
            <li>
              <strong>ドメインを取得：</strong>
              お名前.comやGoogle Domainsなどでドメインを購入
            </li>
            <li>
              <strong>Vercelに追加：</strong>
              プロジェクト設定から「Domains」を開き、取得したドメインを入力
            </li>
            <li>
              <strong>DNS設定：</strong>
              Vercelが指示するDNSレコードを、ドメイン管理画面で設定
            </li>
            <li>
              <strong>SSL証明書：</strong>
              自動的にHTTPS化される（Let&apos;s Encryptを使用）
            </li>
          </ol>

          <p>
            設定が完了すれば、<code>https://your-domain.com</code> でアクセスできるようになります。
          </p>
        </section>

        <section>
          <h2>環境変数の設定</h2>
          <p>
            APIキーやデータベースの接続情報など、公開したくない情報は
            <strong>環境変数</strong>として設定できます。
          </p>

          <div className="code-example">
            <pre><code>{`# .env.local ファイル（ローカル開発用）
NEXT_PUBLIC_API_KEY=your_api_key_here
DATABASE_URL=postgresql://...`}</code></pre>
          </div>

          <p>
            Vercelのダッシュボードから「Environment Variables」を設定すれば、
            本番環境でも同じ環境変数が使えます。
          </p>
        </section>

        <section>
          <h2>Vercelのアナリティクス</h2>
          <p>
            有料プランでは、詳細なアクセス解析機能が使えます：
          </p>

          <ul>
            <li>ページビュー数</li>
            <li>訪問者数</li>
            <li>デバイス別の統計</li>
            <li>地域別のアクセス状況</li>
            <li>Core Web Vitals（ページ速度など）</li>
          </ul>

          <p>
            無料プランでも、デプロイ履歴やビルドログは確認できます。
          </p>
        </section>

        <section>
          <h2>Vercelを使うメリット・デメリット</h2>

          <h3>メリット</h3>
          <ul>
            <li><strong>超簡単デプロイ：</strong> GitHubと連携するだけで自動デプロイ</li>
            <li><strong>高速：</strong> グローバルCDNで世界中から高速アクセス</li>
            <li><strong>無料で始められる：</strong> 個人利用なら無料プランで十分</li>
            <li><strong>Next.js最適化：</strong> Next.jsの機能をフル活用できる</li>
            <li><strong>プレビュー環境：</strong> PRごとに自動生成</li>
          </ul>

          <h3>デメリット</h3>
          <ul>
            <li><strong>帯域制限：</strong> 無料プランは100GB/月まで（超えると課金）</li>
            <li><strong>Next.js以外には弱い：</strong> 他のフレームワークだと少し不便</li>
            <li><strong>サーバーレス前提：</strong> 常時起動のサーバーには不向き</li>
          </ul>
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
                  <td><Link href="/terms/data-center" className="term-name">データセンター</Link></td>
                  <td>Vercelはデータセンター上でWebサーバーを提供</td>
                </tr>
                <tr>
                  <td><Link href="/terms/hosting-service" className="term-name">ホスティングサービス</Link></td>
                  <td>Vercelはサーバーレス型のホスティングサービス</td>
                </tr>
                <tr>
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>Vercelはサーバーレスで動作し、サーバー管理が不要</td>
                </tr>
                <tr>
                  <td><Link href="/terms/domain" className="term-name">ドメイン</Link></td>
                  <td>カスタムドメインを簡単に設定できる</td>
                </tr>
                <tr>
                  <td><Link href="/terms/dns" className="term-name">DNS</Link></td>
                  <td>VercelはDNS設定を自動化してくれる</td>
                </tr>
                <tr>
                  <td><Link href="/terms/ip-address" className="term-name">IPアドレス</Link></td>
                  <td>VercelがIPアドレスを自動管理</td>
                </tr>
                <tr>
                  <td><Link href="/terms/github" className="term-name">GitHub</Link></td>
                  <td>Vercelと連携してソースコードを管理</td>
                </tr>
                <tr>
                  <td><Link href="/terms/framework" className="term-name">Framework</Link></td>
                  <td>VercelはNext.jsなどのフレームワークに最適化</td>
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
