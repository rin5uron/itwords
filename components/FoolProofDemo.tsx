'use client'

import { useState, useEffect } from 'react'

export default function FoolProofDemo() {
  const [mounted, setMounted] = useState(false)
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  const [messageColor, setMessageColor] = useState('#4a4a4a')

  useEffect(() => {
    setMounted(true)
  }, [])

  const isValid = input.trim().length >= 3
  const handleSubmit = () => {
    setMessage(`「${input}」を送信しました！（想定）`)
    setMessageColor('#0d9488')
  }

  if (!mounted) {
    return (
      <div className="demo-section demo-section--foolproof">
        <p>読み込み中…</p>
      </div>
    )
  }

  return (
    <div className="demo-section demo-section--foolproof">
      <p>
        入力欄が空のまま、または3文字未満では送信ボタンが押せません。
        正しい形式（3文字以上）を入力するとボタンが有効になります。
      </p>
      <div style={{ marginTop: '1rem', width: '100%', minWidth: 0, maxWidth: '100%' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="3文字以上入力してください"
          autoComplete="off"
          style={{
            padding: '10px 14px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        />
        <button
          type="button"
          className="demo-button"
          onClick={handleSubmit}
          disabled={!isValid}
          style={{
            marginTop: '12px',
            width: '100%',
            maxWidth: '100%',
            opacity: isValid ? 1 : 0.6,
            cursor: isValid ? 'pointer' : 'not-allowed',
          }}
        >
          送信する
        </button>
      </div>
      <p
        id="demo-message"
        style={{
          marginTop: '25px',
          fontSize: '1.5em',
          fontWeight: 'bold',
          minHeight: '1.5em',
          color: messageColor,
        }}
      >
        {message}
      </p>
    </div>
  )
}
