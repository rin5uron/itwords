'use client'

import { useState } from 'react'

export default function CookieDemo() {
  const [cookieName, setCookieName] = useState('myTestCookie')
  const [cookieValue, setCookieValue] = useState('こんにちは')
  const [savedCookie, setSavedCookie] = useState('')
  const [message, setMessage] = useState('')

  // Cookieを設定
  const setCookie = () => {
    document.cookie = `${cookieName}=${cookieValue}; max-age=3600; path=/`
    setMessage(`Cookieを保存しました: ${cookieName}=${cookieValue}`)
    setTimeout(() => setMessage(''), 3000)
  }

  // Cookieを取得
  const getCookie = () => {
    const cookies = document.cookie.split('; ')
    const cookie = cookies.find(c => c.startsWith(cookieName + '='))
    if (cookie) {
      const value = cookie.split('=')[1]
      setSavedCookie(value)
      setMessage(`Cookieを取得しました: ${value}`)
    } else {
      setSavedCookie('')
      setMessage(`Cookieが見つかりませんでした`)
    }
    setTimeout(() => setMessage(''), 3000)
  }

  // Cookieを削除
  const deleteCookie = () => {
    document.cookie = `${cookieName}=; max-age=0; path=/`
    setSavedCookie('')
    setMessage(`Cookieを削除しました: ${cookieName}`)
    setTimeout(() => setMessage(''), 3000)
  }

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>Cookieを操作する</h3>

      <div style={{ marginTop: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Cookie名:
        </label>
        <input
          type="text"
          value={cookieName}
          onChange={(e) => setCookieName(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #dee2e6',
            borderRadius: '5px'
          }}
        />
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Cookie値:
        </label>
        <input
          type="text"
          value={cookieValue}
          onChange={(e) => setCookieValue(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #dee2e6',
            borderRadius: '5px'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
        <button
          onClick={setCookie}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          保存
        </button>
        <button
          onClick={getCookie}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          取得
        </button>
        <button
          onClick={deleteCookie}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          削除
        </button>
      </div>

      {message && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
          color: '#155724'
        }}>
          {message}
        </div>
      )}

      {savedCookie && (
        <div style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: '#fff',
          border: '1px solid #dee2e6',
          borderRadius: '5px'
        }}>
          <h4>保存されている値</h4>
          <p style={{ fontFamily: 'monospace', fontSize: '16px' }}>{savedCookie}</p>
        </div>
      )}

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        <i className="fas fa-lightbulb" aria-hidden style={{ marginRight: '0.25em' }} /> このデモでは、ブラウザにCookieを保存します。保存したCookieは1時間後に自動的に削除されます。
      </p>
    </div>
  )
}
