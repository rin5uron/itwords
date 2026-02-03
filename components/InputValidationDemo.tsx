'use client'

import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LENGTH = 20

export default function InputValidationDemo() {
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const emailValid = email === '' || EMAIL_REGEX.test(email)
  const emailError = email !== '' && !emailValid
  const textOver = text.length > MAX_LENGTH
  const textError = textOver

  return (
    <div className="demo-section">
      <p>
        メールアドレス形式でないと警告表示、文字数オーバーで即時エラー表示されます。
      </p>
      <div style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>
            メールアドレス
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            style={{
              padding: '10px 14px',
              fontSize: '1rem',
              border: emailError ? '2px solid #d9534f' : '1px solid #ccc',
              borderRadius: '6px',
              width: '100%',
              maxWidth: '300px',
              backgroundColor: emailError ? '#f8d7da' : undefined,
            }}
          />
          {emailError && (
            <p style={{ color: '#d9534f', marginTop: '6px', fontSize: '0.9em' }}>
              メールアドレスの形式が正しくありません
            </p>
          )}
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>
            テキスト（20文字まで）
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="20文字以内で入力"
            style={{
              padding: '10px 14px',
              fontSize: '1rem',
              border: textError ? '2px solid #d9534f' : '1px solid #ccc',
              borderRadius: '6px',
              width: '100%',
              maxWidth: '300px',
              backgroundColor: textError ? '#f8d7da' : undefined,
            }}
          />
          <p
            style={{
              marginTop: '6px',
              fontSize: '0.9em',
              color: textError ? '#d9534f' : '#666',
            }}
          >
            {text.length} / {MAX_LENGTH} 文字
            {textError && '（文字数オーバーです）'}
          </p>
        </div>
      </div>
    </div>
  )
}
