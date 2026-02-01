'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export default function HostingServicePage() {
  const [selectedType, setSelectedType] = useState<'shared' | 'vps' | 'cloud' | 'serverless'>('shared')

  const hostingTypes = {
    shared: {
      name: '共有ホスティング',
      price: '月額 数百円〜',
      performance: '★★☆☆☆',
      difficulty: '★☆☆☆☆（簡単）',
      scalability: '★☆☆☆☆',
      description: '1つのサーバーを複数人で共有。初心者向けで安価だが、性能は控えめ。',
      suitable: '個人ブログ、小規模サイト',
      examples: 'さくらインターネット、ロリポップ、エックスサーバー'
    },
    vps: {
      name: 'VPS',
      price: '月額 数千円〜',
      performance: '★★★☆☆',
      difficulty: '★★★☆☆（中級者向け）',
      scalability: '★★★☆☆',
      description: '仮想的な専用サーバー。自由度が高く、root権限で自由に設定できる。',
      suitable: '中規模サイト、Webアプリケーション',
      examples: 'ConoHa VPS、さくらのVPS、Linode'
    },
    cloud: {
      name: 'クラウド',
      price: '従量課金',
      performance: '★★★★★',
      difficulty: '★★★★☆（上級者向け）',
      scalability: '★★★★★',
      description: '必要に応じてリソースを増減できる。大規模サービス向け。',
      suitable: '大規模サイト、エンタープライズ',
      examples: 'AWS (EC2), GCP (Compute Engine), Azure'
    },
    serverless: {
      name: 'サーバーレス',
      price: '月額 無料〜',
      performance: '★★★★☆',
      difficulty: '★★☆☆☆（初心者向け）',
      scalability: '★★★★★',
      description: 'サーバー管理不要。コードをデプロイするだけで公開できる。',
      suitable: 'モダンなWebアプリ、JAMstack',
      examples: 'Vercel, Netlify, Cloudflare Pages'
    }
  }

  const faqs = [
    {
      question: 'ホスティングサービスとは何ですか？',
      answer: 'ホスティングサービスとは、Webサイトやアプリケーションを公開するためのサーバーを提供するサービスです。自分でサーバーを用意・管理しなくても、サービス事業者が用意したサーバーを借りてWebサイトを公開できます。',
    },
    {
      question: 'ドメインとホスティングの違いは何ですか？',
      answer: 'ドメインはWebサイトの「住所」（例: itwords.jp）で、ホスティングはWebサイトのファイルを保存する「土地と建物」です。Webサイトを公開するには、両方が必要です。ドメインはレジストラで取得し、ホスティングサービスと紐付けます。',
    },
    {
      question: '初心者におすすめのホスティングサービスは？',
      answer: '初心者には、サーバー管理が不要でデプロイが簡単な「サーバーレス」タイプがおすすめです。Vercel、Netlify、Cloudflare Pagesなどは、GitHubと連携するだけで自動デプロイでき、無料プランも充実しています。',
    },
    {
      question: 'ホスティングサービスの料金はどれくらいですか？',
      answer: 'サービスの種類によって異なります。共有ホスティングは月額数百円〜、VPSは月額数千円〜、クラウドは従量課金、サーバーレスは無料〜月額数千円程度です。個人の学習用なら、無料プランで十分な場合が多いです。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="ホスティングサービスとは？初心者向けにわかりやすく解説"
        description="ホスティングサービスの種類と選び方を初心者向けに解説。共有ホスティング、VPS、クラウド、サーバーレスの違いを比較できます。"
        datePublished="2026-01-12"
        dateModified="2026-01-12"
      />

      <TermHeader
        termName="ホスティングサービス"
        reading="ホスティングサービス / Hosting Service"
        icon="fas fa-cloud"
        dateCreated="2026-01-12"
        dateModified="2026-01-12"
      />

      <main>
        <TableOfContents />

        {/* 更新日（概要の上） */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2026-01-12 | 最終更新: 2026-01-12</span>
        </div>

        <section>
          <h2>概要</h2>
          <p>
            <strong>ホスティングサービス</strong>（Hosting Service）とは、
            <strong>Webサイトやアプリケーションを公開するためのサーバーを提供するサービス</strong>です。
          </p>

          <p>
            あなたがWebサイトを作ったとき、それを世界中の人に見てもらうには、
            <Link href="/terms/server">サーバー</Link>が必要です。
          </p>

          <p>
            しかし、自分でサーバーを用意・管理するのは大変です。
          </p>

          <ul>
            <li>サーバー機器の購入（数万円〜数十万円）</li>
            <li>電気代・通信費の負担</li>
            <li>24時間365日の監視</li>
            <li>セキュリティ対策</li>
            <li>障害対応</li>
          </ul>

          <p>
            <strong>ホスティングサービス</strong>を使えば、これらの面倒な作業をすべて事業者に任せることができます。
            あなたはWebサイトのファイルをアップロードするだけで、すぐに公開できます。
          </p>

          <p className="note">
            <strong>例</strong>: このサイト（itwords.jp）も、
            <Link href="/terms/vercel">Vercel</Link>というホスティングサービスで公開しています。
            サーバー管理は一切不要で、コードをpushするだけで自動的にデプロイされます。
          </p>
        </section>

        <section>
          <h2>ホスティングサービスが提供するもの</h2>
          <p>
            ホスティングサービスは、Webサイト公開に必要なものをまとめて提供します。
          </p>

          <h3>1. サーバー（計算資源）</h3>
          <p>
            CPU、メモリ、ストレージなど、Webサイトを動かすための計算資源。
          </p>

          <h3>2. IPアドレス</h3>
          <p>
            サーバーの<Link href="/terms/ip-address">IPアドレス</Link>が自動的に割り当てられます。
          </p>

          <h3>3. DNS設定</h3>
          <p>
            <Link href="/terms/domain">ドメイン</Link>と<Link href="/terms/ip-address">IPアドレス</Link>を紐付ける
            <Link href="/terms/dns">DNS</Link>の設定をサポート。
          </p>

          <h3>4. SSL証明書（HTTPS）</h3>
          <p>
            多くのホスティングサービスは、無料でSSL証明書を発行し、
            自動的にHTTPS化してくれます。
          </p>

          <h3>5. バックアップ</h3>
          <p>
            定期的にデータをバックアップし、障害時に復旧できるようにします。
          </p>

          <h3>6. 監視・サポート</h3>
          <p>
            サーバーの稼働を24時間監視し、障害時に対応します。
          </p>
        </section>

        <section>
          <h2>ホスティングサービスの種類</h2>
          <p>
            ホスティングサービスには、いくつかの種類があります。
            用途や予算に応じて選びましょう。
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3>ホスティングタイプ比較</h3>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
              {Object.entries(hostingTypes).map(([key, type]) => (
                <button
                  key={key}
                  onClick={() => setSelectedType(key as 'shared' | 'vps' | 'cloud' | 'serverless')}
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    backgroundColor: selectedType === key ? '#007bff' : '#fff',
                    color: selectedType === key ? '#fff' : '#007bff',
                    border: '2px solid #007bff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: selectedType === key ? 'bold' : 'normal'
                  }}
                >
                  {type.name}
                </button>
              ))}
            </div>

            <div style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '2px solid #007bff'
            }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#007bff' }}>
                {hostingTypes[selectedType].name}
              </h4>
              <p style={{ margin: '10px 0' }}>
                <strong>料金:</strong> {hostingTypes[selectedType].price}
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>性能:</strong> {hostingTypes[selectedType].performance}
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>難易度:</strong> {hostingTypes[selectedType].difficulty}
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>拡張性:</strong> {hostingTypes[selectedType].scalability}
              </p>
              <p style={{ margin: '10px 0', paddingTop: '10px', borderTop: '1px solid #dee2e6' }}>
                {hostingTypes[selectedType].description}
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>向いている用途:</strong> {hostingTypes[selectedType].suitable}
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>代表的なサービス:</strong> {hostingTypes[selectedType].examples}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>各ホスティングタイプの詳細</h2>

          <h3>1. 共有ホスティング（Shared Hosting）</h3>
          <p>
            1台の物理サーバーを複数のユーザーで共有するタイプです。
          </p>
          <h4>メリット</h4>
          <ul>
            <li><strong>安価</strong>: 月額数百円から利用可能</li>
            <li><strong>簡単</strong>: サーバー管理の知識不要</li>
            <li><strong>サポート充実</strong>: 日本語サポートがある場合が多い</li>
          </ul>
          <h4>デメリット</h4>
          <ul>
            <li><strong>性能制限</strong>: 他のユーザーの影響を受ける</li>
            <li><strong>自由度低い</strong>: ソフトウェアを自由にインストールできない</li>
            <li><strong>拡張性低い</strong>: アクセスが急増しても対応しづらい</li>
          </ul>

          <h3>2. VPS（Virtual Private Server）</h3>
          <p>
            仮想的な専用サーバーを提供するタイプです。
          </p>
          <h4>メリット</h4>
          <ul>
            <li><strong>高い自由度</strong>: root権限で自由に設定可能</li>
            <li><strong>安定した性能</strong>: 他ユーザーの影響を受けにくい</li>
            <li><strong>カスタマイズ可能</strong>: 好きなソフトウェアをインストール可能</li>
          </ul>
          <h4>デメリット</h4>
          <ul>
            <li><strong>技術が必要</strong>: Linuxの知識が必要</li>
            <li><strong>管理が必要</strong>: セキュリティ対策やアップデートを自分で行う</li>
            <li><strong>料金が高め</strong>: 月額数千円〜</li>
          </ul>

          <h3>3. クラウド（Cloud Hosting）</h3>
          <p>
            AWS、GCP、Azureなどの大規模クラウドプラットフォームです。
          </p>
          <h4>メリット</h4>
          <ul>
            <li><strong>無限に拡張可能</strong>: アクセスが増えても自動でスケール</li>
            <li><strong>高い可用性</strong>: 世界中のデータセンターを利用可能</li>
            <li><strong>豊富なサービス</strong>: データベース、AI、ストレージなど多数</li>
          </ul>
          <h4>デメリット</h4>
          <ul>
            <li><strong>複雑</strong>: 設定項目が多く、学習コストが高い</li>
            <li><strong>料金が読みづらい</strong>: 従量課金のため、予想外の請求の可能性</li>
            <li><strong>上級者向け</strong>: インフラの深い知識が必要</li>
          </ul>

          <h3>4. サーバーレス（Serverless Hosting）</h3>
          <p>
            サーバー管理が不要な、最も手軽なタイプです。
          </p>
          <h4>メリット</h4>
          <ul>
            <li><strong>超簡単</strong>: コードをpushするだけで自動デプロイ</li>
            <li><strong>無料プラン充実</strong>: 個人利用なら無料で十分</li>
            <li><strong>自動スケール</strong>: アクセスが増えても自動対応</li>
            <li><strong>高速</strong>: グローバルCDNで世界中から高速アクセス</li>
          </ul>
          <h4>デメリット</h4>
          <ul>
            <li><strong>制約がある</strong>: 実行時間や処理内容に制限</li>
            <li><strong>従来型サーバーの知識が使えない</strong>: 新しい考え方が必要</li>
          </ul>
        </section>

        <section>
          <h2>ホスティングサービスの選び方</h2>

          <h3>初心者の方へ</h3>
          <p>
            <strong>サーバーレス</strong>タイプがおすすめです。
          </p>
          <ul>
            <li><Link href="/terms/vercel">Vercel</Link>: Next.js、Reactに最適</li>
            <li>Netlify: 静的サイト、JAMstackに最適</li>
            <li>Cloudflare Pages: 高速でセキュア</li>
          </ul>
          <p>
            これらは無料プランが充実しており、GitHubと連携するだけで
            自動デプロイできます。サーバー管理の知識は一切不要です。
          </p>

          <h3>WordPressを使いたい方へ</h3>
          <p>
            <strong>共有ホスティング</strong>がおすすめです。
          </p>
          <ul>
            <li>エックスサーバー</li>
            <li>ロリポップ</li>
            <li>さくらインターネット</li>
          </ul>
          <p>
            WordPress専用プランがあり、簡単にインストールできます。
          </p>

          <h3>中級者以上の方へ</h3>
          <p>
            <strong>VPS</strong>または<strong>クラウド</strong>がおすすめです。
          </p>
          <ul>
            <li>VPS: ConoHa VPS、さくらのVPS</li>
            <li>クラウド: AWS EC2、GCP Compute Engine</li>
          </ul>
          <p>
            自由度が高く、独自の構成を組むことができます。
          </p>
        </section>

        <section>
          <h2>ドメインとホスティングの関係</h2>
          <p>
            Webサイトを公開するには、<Link href="/terms/domain">ドメイン</Link>と
            ホスティングの両方が必要です。
          </p>

          <h3>必要なステップ</h3>
          <ol>
            <li><strong>ドメインを取得</strong>: お名前.com、Google Domainsなどで購入</li>
            <li><strong>ホスティングを用意</strong>: Vercelなどでサーバーを用意</li>
            <li><strong>DNSを設定</strong>: ドメインとサーバーを紐付ける</li>
          </ol>

          <p>
            多くのホスティングサービスは、ドメインを入力するだけで
            自動的に<Link href="/terms/dns">DNS</Link>設定をしてくれます。
          </p>
        </section>

        <section>
          <h2>このサイトの構成例</h2>
          <p>
            参考までに、このサイト（itwords.jp）の構成を紹介します。
          </p>

          <div className="code-example">
            <pre><code>{`ドメイン: itwords.jp
├─ レジストラ: お名前.com（ドメイン取得）
│
ホスティング: Vercel（サーバーレス）
├─ 自動デプロイ: GitHubにpushすると自動公開
├─ DNS: 自動設定（Cloudflare経由）
├─ SSL: 自動発行（Let's Encrypt）
└─ CDN: グローバルエッジネットワーク

料金: 無料プラン（月額0円）`}</code></pre>
          </div>

          <p>
            個人サイトなら、このように無料プランだけで十分運用できます。
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
                  <td><Link href="/terms/data-center" className="term-name">データセンター</Link></td>
                  <td>ホスティングサービスがサーバーを置く施設</td>
                </tr>
                <tr>
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>ホスティングサービスが提供するコンピュータ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/vercel" className="term-name">Vercel</Link></td>
                  <td>サーバーレス型ホスティングサービスの代表例</td>
                </tr>
                <tr>
                  <td><Link href="/terms/domain" className="term-name">ドメイン</Link></td>
                  <td>ホスティングと紐付けるWebサイトの住所</td>
                </tr>
                <tr>
                  <td><Link href="/terms/dns" className="term-name">DNS</Link></td>
                  <td>ドメインとホスティングを紐付けるシステム</td>
                </tr>
                <tr>
                  <td><Link href="/terms/ip-address" className="term-name">IPアドレス</Link></td>
                  <td>ホスティングサービスが提供するサーバーの住所</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdBelowRelatedTerms />
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
