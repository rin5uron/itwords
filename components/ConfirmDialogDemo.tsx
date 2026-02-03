'use client'

import { useState } from 'react'

export default function ConfirmDialogDemo() {
  const [message, setMessage] = useState('')
  const [messageColor, setMessageColor] = useState('#4a4a4a')

  const startDemo = () => {
    setMessage('')

    const confirmed = window.confirm('本当にこの操作を実行しますか？')
    if (confirmed) {
      setMessage('実行しました！（想定）')
      setMessageColor('#0d9488')
    } else {
      setMessage('キャンセルされました。')
      setMessageColor('#4a4a4a')
    }
  }

  return (
    <div className="demo-section">
      <p>
        削除・送信・購入前などに「本当に実行しますか？」と確認する仕組みです。
        下のボタンを押して体験してみましょう。
      </p>
      <button className="demo-button" onClick={startDemo}>
        削除を実行
      </button>
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
