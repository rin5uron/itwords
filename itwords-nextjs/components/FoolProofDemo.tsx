'use client'

import { useState } from 'react'

export default function FoolProofDemo() {
  const [message, setMessage] = useState('')
  const [messageColor, setMessageColor] = useState('#4a4a4a')

  const startDemo = () => {
    setMessage('') // メッセージをリセット

    const confirm1 = window.confirm('本当にこのファイルを削除しますか？この操作は取り消せません。')
    if (!confirm1) {
      setMessage('キャンセルされました。')
      setMessageColor('#4a4a4a')
      return
    }

    const confirm2 = window.confirm(
      '最終確認です。関連するデータもすべて失われますが、よろしいですか？'
    )
    if (confirm2) {
      setMessage('削除しました！ (という想定です)')
      setMessageColor('#d9534f')
    } else {
      setMessage('削除を中止しました。')
      setMessageColor('#4a4a4a')
    }
  }

  return (
    <div className="demo-section">
      <p>下のボタンを押して、二段階の確認ダイアログを体験してみましょう。</p>
      <button className="demo-button" onClick={startDemo}>
        削除を実行
      </button>
      <p id="demo-message" style={{ marginTop: '25px', fontSize: '1.5em', fontWeight: 'bold', minHeight: '1.5em', color: messageColor }}>
        {message}
      </p>
    </div>
  )
}
