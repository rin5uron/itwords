'use client'

import { useState } from 'react'

export default function WebhookDemo() {
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
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>イベントを発生させる</h3>
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
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              textAlign: 'left'
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{event.name}</div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>{event.description}</div>
          </button>
        ))}
      </div>

      <div style={{
        marginTop: '20px',
        backgroundColor: '#282c34',
        color: '#abb2bf',
        padding: '20px',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '13px',
        minHeight: '250px',
        maxHeight: '400px',
        overflow: 'auto'
      }}>
        <div style={{ color: '#61afef', marginBottom: '10px' }}>📡 Webhookログ</div>
        {webhookLog.length === 0 ? (
          <div style={{ color: '#6c757d' }}>
            イベント待機中...<br />
            <br />
            ↑ イベントを選択してWebhookを発火させてください
          </div>
        ) : (
          webhookLog.map((log, index) => (
            <div key={index} style={{
              marginBottom: '5px',
              color: log.includes('✓') ? '#98c379' : '#abb2bf'
            }}>
              {log}
            </div>
          ))
        )}
      </div>

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        実際のWebhookでは、イベントが発生すると即座にHTTP POSTリクエストが送信され、受信側のサーバーで自動処理が実行されます。
      </p>
    </div>
  )
}
