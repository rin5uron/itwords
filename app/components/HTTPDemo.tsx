'use client'

import { useState } from 'react'

export default function HTTPDemo() {
  const [selectedMethod, setSelectedMethod] = useState('')

  const httpMethods = [
    { name: 'GET', description: 'データを取得する', example: 'Webページを表示したり、検索結果を取得したりします。データは変更されません。', color: '#28a745' },
    { name: 'POST', description: 'データを送信する', example: 'フォームを送信したり、ログイン情報を送ったり、新しいデータを作成します。', color: '#007bff' },
    { name: 'PUT', description: 'データを更新する', example: '既存のデータを完全に置き換えます。プロフィール情報の更新などに使われます。', color: '#ffc107' },
    { name: 'DELETE', description: 'データを削除する', example: '投稿を削除したり、アカウントを削除したりします。', color: '#dc3545' }
  ]

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>HTTPメソッドを選択</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
        {httpMethods.map((method) => (
          <button
            key={method.name}
            onClick={() => setSelectedMethod(method.name)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: selectedMethod === method.name ? method.color : '#fff',
              color: selectedMethod === method.name ? '#fff' : method.color,
              border: `2px solid ${method.color}`,
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 'bold'
            }}
          >
            {method.name}
          </button>
        ))}
      </div>

      {selectedMethod && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          border: '1px solid #dee2e6'
        }}>
          <h4 style={{ color: httpMethods.find(m => m.name === selectedMethod)?.color }}>
            {selectedMethod}メソッド
          </h4>
          <p><strong>用途:</strong> {httpMethods.find(m => m.name === selectedMethod)?.description}</p>
          <p><strong>具体例:</strong> {httpMethods.find(m => m.name === selectedMethod)?.example}</p>
        </div>
      )}

      {!selectedMethod && (
        <p style={{ marginTop: '15px', color: '#6c757d' }}>
          ↑ HTTPメソッドを選択してください
        </p>
      )}

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        💡 ヒント：一般的なWebサイト閲覧では主にGETメソッドが使われ、フォーム送信ではPOSTメソッドが使われます。
      </p>
    </div>
  )
}
