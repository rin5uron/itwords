'use client'

import { useState, useEffect } from 'react'

export default function LocalStorageDemo() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    // ページ読み込み時に、保存された下書きを復元
    const savedDraft = localStorage.getItem('contactDraft')
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft)
        setName(draft.name || '')
        setEmail(draft.email || '')
        setMessage(draft.message || '')
        setIsSaved(true)
      } catch (e) {
        console.error('下書きの復元に失敗しました')
      }
    }
  }, [])

  // 入力内容をリアルタイムで保存
  useEffect(() => {
    if (name || email || message) {
      const draft = {
        name,
        email,
        message
      }
      localStorage.setItem('contactDraft', JSON.stringify(draft))
      setIsSaved(true)
    }
  }, [name, email, message])

  const clearDraft = () => {
    localStorage.removeItem('contactDraft')
    setName('')
    setEmail('')
    setMessage('')
    setIsSaved(false)
  }

  const handleSubmit = () => {
    // 送信時に下書きを削除
    localStorage.removeItem('contactDraft')
    setIsSaved(false)
    alert('送信完了！下書きを削除しました。')
  }

  return (
    <div className="demo-section">
      <p>
        <strong>フォームの下書き保存を体験しよう</strong>
        <br />
        入力中にブラウザを閉じても、再度開くと入力内容が残っています。
      </p>
      
      <div style={{
        backgroundColor: '#f9f7ef',
        padding: '20px',
        borderRadius: '8px',
        borderLeft: '4px solid #ea9b8a',
        marginBottom: '15px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            お名前
          </label>
          <input
            type="text"
            placeholder="山田太郎"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '1em',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            メールアドレス
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '1em',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            お問い合わせ内容
          </label>
          <textarea
            placeholder="お問い合わせ内容を入力してください"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '1em',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="demo-button"
            onClick={handleSubmit}
            style={{
              backgroundColor: '#8abdea',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            送信する
          </button>
          <button
            className="demo-button"
            onClick={clearDraft}
            style={{
              backgroundColor: '#aaa',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            下書きを削除
          </button>
        </div>

        {isSaved && (
          <div id="demo-message" style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: '#e8f4f8',
            borderRadius: '5px',
            fontSize: '14px',
            color: '#333'
          }}>
            ✓ 下書きが自動保存されました。ブラウザを閉じても、再度開くと入力内容が残ります。
          </div>
        )}
      </div>
    </div>
  )
}
