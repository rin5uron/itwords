'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mvzgebjl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            お名前 <span style={{ color: '#dc3545' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            メールアドレス <span style={{ color: '#dc3545' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            件名 <span style={{ color: '#dc3545' }}>*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            お問い合わせ内容 <span style={{ color: '#dc3545' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: status === 'submitting' ? '#6c757d' : '#007bff',
            border: 'none',
            borderRadius: '4px',
            cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
          }}
        >
          {status === 'submitting' ? '送信中...' : '送信する'}
        </button>

        {status === 'success' && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '4px'
          }}>
            お問い合わせありがとうございます。送信が完了しました。
          </div>
        )}

        {status === 'error' && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
            borderRadius: '4px'
          }}>
            送信に失敗しました。お手数ですが、もう一度お試しください。
          </div>
        )}
      </form>
    </div>
  )
}
