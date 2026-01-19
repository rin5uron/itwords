'use client'

import Link from 'next/link'
import { useState } from 'react'
import TermHeader from '@/app/components/TermHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import StructuredData from '@/app/components/StructuredData'

const faqs = [
  {
    question: 'Webhookとは何ですか？',
    answer: 'Webhook（ウェブフック）とは、あるイベントが発生したときに、自動的にHTTPリクエストを送信する仕組みです。GitHubにコードをpushしたら自動的にビルドサーバーに通知が送られたり、ECサイトで注文が入ったら在庫管理システムに自動で連絡が行ったりします。',
  },
  {
    question: 'WebhookとAPIの違いは？',
    answer: 'APIはクライアントから要求するプル型で、必要なときに都度リクエストします。Webhookはサーバーから自動送信するプッシュ型で、イベント発生時に自動送信されます。APIは「電話をかけて聞く」、Webhookは「着信があったら自動で通知が来る」という感じです。',
  },
  {
    question: 'Webhookはどこで使われていますか？',
    answer: 'GitHubのpush通知、決済完了時の通知、ECサイトの注文通知、Slackへの通知、CI/CDパイプラインのトリガーなど、様々な場面で使われています。',
  },
  {
    question: 'Webhookのセキュリティはどう確保しますか？',
    answer: 'Webhookのセキュリティは、署名検証、HTTPSの使用、認証トークンの使用、IPアドレスのホワイトリストなどで確保します。特に署名検証は重要で、送信元が正しいことを確認できます。',
  },
]

export default function WebhookPage() {
  const [selectedEvent, setSelectedEvent] = useState('')
  const [webhookLog, setWebhookLog] = useState<string[]>([])

  const webhookEvents = [
    {
      name: '新規注文',
      event: 'order.created',
      description: 'ECサイトで注文が確定したとき',
      payload: { orderId: '12345', amount: 5000, customer: '山田太郎' },
      action: '在庫システムに通知、配送システムを起動',
      color: '#28a745'
    },
    {
      name: 'GitHubプッシュ',
      event: 'push',
      description: 'GitHubにコードがpushされたとき',
      payload: { repository: 'my-app', branch: 'main', author: 'developer' },
      action: 'ビルドサーバーで自動テスト・デプロイを実行',
      color: '#007bff'
    },
    {
      name: '決済完了',
      event: 'payment.success',
      description: 'クレジットカード決済が完了したとき',
      payload: { transactionId: 'tx_98765', amount: 3000, status: 'success' },
      action: '商品のダウンロードリンクをメール送信',
      color: '#ffc107'
    },
    {
      name: 'フォーム送信',
      event: 'form.submitted',
      description: 'お問い合わせフォームが送信されたとき',
      payload: { name: '佐藤花子', email: 'hanako@example.com', message: 'お問い合わせ内容' },
      action: 'Slackに通知、担当者にメール転送',
      color: '#dc3545'
    }
  ]

  const triggerWebhook = (event: typeof webhookEvents[0]) => {
    setSelectedEvent(event.name)
    setWebhookLog([
      `[${new Date().toLocaleTimeString()}] イベント発生: ${event.name}`,
      `[${new Date().toLocaleTimeString()}] Webhook送信中...`,
      `[${new Date().toLocaleTimeString()}] POST https://your-server.com/webhook`,
      `[${new Date().toLocaleTimeString()}] ペイロード: ${JSON.stringify(event.payload)}`,
      `[${new Date().toLocaleTimeString()}] ✓ 200 OK - Webhook受信完了`,
      `[${new Date().toLocaleTimeString()}] 自動処理: ${event.action}`,
      `[${new Date().toLocaleTimeString()}] ✓ 処理完了`
    ])
  }

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="Webhookとは？初心者向けにわかりやすく解説"
        description="Webhookとは？イベントデモで仕組みを今すぐ体験。APIとの違い、GitHubやSlackでの使い方、セキュリティ対策まで初心者向けに解説します。"
        datePublished="2024-01-10"
        dateModified="2026-01-19"
      />

      <TermHeader
        termName="Webhook"
        reading="ウェブフック"
        icon="fas fa-webhook"
        dateCreated="2024-01-10"
        dateModified="2026-01-19"
      />

      <main>
        <section>
          <h2>概要</h2>

          <div style={{
            padding: '15px',
            backgroundColor: '#e6f7f5',
            borderRadius: '8px',
            marginBottom: '20px',
            borderLeft: '4px solid #14b8a6'
          }}>
            <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#0d9488' }}>
              📚 このページで分かること
            </p>
            <ul style={{ marginTop: '10px', marginBottom: 0 }}>
              <li>Webhookとは何か？APIとの違いは？</li>
              <li>イベントデモで実際に体験</li>
              <li>GitHubやSlackでの実際の使い方</li>
              <li>セキュリティ対策と実装方法</li>
            </ul>
          </div>

          <p>
            <strong>Webhook</strong>（ウェブフック）とは、
            <strong>「あるイベントが発生したときに、自動的にHTTPリクエストを送信する仕組み」</strong>です。
          </p>

          <p>
            例えば、<Link href="/terms/github">GitHub</Link>にコードをpushしたら自動的にビルドサーバーに通知が送られたり、
            ECサイトで注文が入ったら在庫管理システムに自動で連絡が行ったりします。
            これがWebhookの仕組みです。
          </p>

          <p>
            Webhookは<Link href="/terms/api">API</Link>と組み合わせて使われることが多く、
            <Link href="/terms/json">JSON</Link>形式でデータをやり取りします。
            <Link href="/terms/http">HTTP</Link> POSTリクエストで自動通知を実現する、
            現代のWeb開発に欠かせない技術です。
          </p>

          <p>
            想像してみてください。あなたが宅配便を注文したとき、配達員が「荷物が到着しました」と
            いちいち確認の電話をかけてくるのではなく、自動的にSMSで通知が来ますよね。
            Webhookは、まさにこの「自動通知」をプログラム間で実現する技術です。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>Webhookの仕組みを体験してみよう</h3>
            <p>
              下のデモで、Webhookがどのように動作するか確認できます。
              実際に手を動かすことで、Webhookの動作が理解しやすくなります。
            </p>
            <div style={{
              border: '2px solid #007bff',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
              backgroundColor: '#f8f9fa'
            }}>
              <h3>イベントを選択してWebhookを送信</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '15px' }}>
                {webhookEvents.map((event) => (
                  <button
                    key={event.name}
                    onClick={() => triggerWebhook(event)}
                    style={{
                      padding: '15px',
                      fontSize: '14px',
                      backgroundColor: selectedEvent === event.name ? event.color : '#fff',
                      color: selectedEvent === event.name ? '#fff' : event.color,
                      border: `2px solid ${event.color}`,
                      borderRadius: '5px',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{event.name}</div>
                    <div style={{ fontSize: '12px', opacity: 0.9 }}>{event.description}</div>
                  </button>
                ))}
              </div>

              {webhookLog.length > 0 && (
                <div style={{
                  marginTop: '20px',
                  backgroundColor: '#282c34',
                  color: '#abb2bf',
                  padding: '20px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  maxHeight: '400px',
                  overflow: 'auto'
                }}>
                  {webhookLog.map((log, index) => (
                    <div key={index} style={{ marginBottom: '8px' }}>
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2>WebhookとAPIの違い</h2>
          <p>WebhookとAPIは似ているようで、動作の仕組みが異なります：</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>API（通常）</th>
                  <th>Webhook</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>通信の開始</strong></td>
                  <td>クライアントから要求（プル型）</td>
                  <td>サーバーから自動送信（プッシュ型）</td>
                </tr>
                <tr>
                  <td><strong>タイミング</strong></td>
                  <td>必要なときに都度リクエスト</td>
                  <td>イベント発生時に自動送信</td>
                </tr>
                <tr>
                  <td><strong>効率性</strong></td>
                  <td>定期的なポーリングが必要</td>
                  <td>イベント発生時だけなので効率的</td>
                </tr>
                <tr>
                  <td><strong>例</strong></td>
                  <td>「最新の注文はありますか？」と定期的に確認</td>
                  <td>「新しい注文が入りました！」と自動通知</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 イメージ：</strong>
            APIは「電話をかけて聞く」、Webhookは「着信があったら自動で通知が来る」という感じです。
          </p>
        </section>

        <section>
          <h2>Webhookの仕組み</h2>
          <p>Webhookは以下のような流れで動作します：</p>

          <ol>
            <li>
              <strong>イベント登録：</strong>
              事前に「こういうイベントが起きたら、このURLに通知してください」と設定する
            </li>
            <li>
              <strong>イベント発生：</strong>
              実際にそのイベントが発生する（例：GitHubへのpush、決済完了など）
            </li>
            <li>
              <strong>HTTP POSTリクエスト送信：</strong>
              登録されたURLに、イベントの詳細情報をJSONなどの形式で自動送信
            </li>
            <li>
              <strong>受信側の処理：</strong>
              Webhookを受け取ったサーバーが、必要な処理を実行する
            </li>
          </ol>
        </section>

        <section>
          <h2>Webhookの使用例</h2>

          <h3>GitHubとCI/CD</h3>
          <p>
            GitHubにコードをpushすると、自動的にビルドサーバー（GitHub Actions、CircleCIなど）に通知が送られ、
            テストやデプロイが自動実行されます。
          </p>

          <h3>Stripe（決済サービス）</h3>
          <p>
            決済が完了したら、あなたのサーバーに自動で通知が送られます。
            それを受け取って、商品のダウンロードリンクをメール送信したり、会員登録を完了させたりします。
          </p>

          <h3>Slack通知</h3>
          <p>
            お問い合わせフォームが送信されたら、Slackのチャンネルに自動で通知を送ることができます。
          </p>

          <h3>Trello / Notion</h3>
          <p>
            カードが追加されたり、ステータスが変更されたりしたら、
            他のツールやシステムに自動で情報を連携できます。
          </p>
        </section>

        <section>
          <h2>Webhookのペイロード</h2>
          <p>
            Webhookで送信されるデータを<strong>ペイロード（Payload）</strong>と呼びます。
            通常はJSON形式で送られます。
          </p>

          <div className="code-example">
            <pre><code>{`{
  "event": "order.created",
  "timestamp": "2026-01-06T10:30:00Z",
  "data": {
    "order_id": "12345",
    "customer": {
      "name": "山田太郎",
      "email": "yamada@example.com"
    },
    "items": [
      { "product": "商品A", "quantity": 2, "price": 2500 }
    ],
    "total": 5000
  }
}`}</code></pre>
          </div>

          <p>
            受信側のサーバーは、このJSONデータを解析して、必要な処理を実行します。
          </p>
        </section>

        <section>
          <h2>Webhookのセキュリティ</h2>
          <p>Webhookは外部からHTTPリクエストを受け取るため、セキュリティ対策が重要です：</p>

          <h3>1. 署名検証（Signature Verification）</h3>
          <p>
            多くのサービスは、Webhookに「署名」を付けて送信します。
            受信側はこの署名を検証することで、本当にそのサービスから送られてきたか確認できます。
          </p>

          <h3>2. HTTPS必須</h3>
          <p>
            WebhookのエンドポイントURLは必ずHTTPSにしましょう。
            通信が暗号化されるため、中間者攻撃を防げます。
          </p>

          <h3>3. IPアドレス制限</h3>
          <p>
            可能であれば、特定のIPアドレスからのリクエストのみを受け付けるように設定します。
          </p>

          <h3>4. リトライ処理</h3>
          <p>
            受信側のサーバーがダウンしていた場合、多くのサービスは自動的に再送信してくれます。
            冪等性（何度実行しても結果が同じ）を保つ設計が大切です。
          </p>
        </section>

        <section>
          <h2>Webhookの設定方法（GitHub例）</h2>
          <p>GitHubでWebhookを設定する手順：</p>

          <ol>
            <li>GitHubリポジトリの「Settings」→「Webhooks」→「Add webhook」</li>
            <li><strong>Payload URL</strong>: Webhookを受け取るURLを入力（例：<code>https://your-server.com/webhook</code>）</li>
            <li><strong>Content type</strong>: <code>application/json</code>を選択</li>
            <li><strong>イベント選択</strong>: どのイベントで通知するか選択（push、pull requestなど）</li>
            <li>「Add webhook」をクリックして完了</li>
          </ol>

          <p>これで、選択したイベントが発生するたびに、指定したURLに自動でPOSTリクエストが送信されます。</p>
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
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>Webhookはイベント駆動型のAPI呼び出し</td>
                </tr>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP/HTTPS</Link></td>
                  <td>WebhookはHTTP POSTリクエストで通信する</td>
                </tr>
                <tr>
                  <td><Link href="/terms/json" className="term-name">JSON</Link></td>
                  <td>Webhookのペイロードは通常JSON形式</td>
                </tr>
                <tr>
                  <td><Link href="/terms/github" className="term-name">GitHub</Link></td>
                  <td>GitHubはWebhookを活用したCI/CDの代表例</td>
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
