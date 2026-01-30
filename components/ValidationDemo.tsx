'use client'

import { useState } from 'react'

export default function ValidationDemo() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)

  const validateEmail = (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (value === '') {
      setEmailError('')
      setEmailValid(false)
      return
    }

    if (!pattern.test(value)) {
      setEmailError('正しいメールアドレスの形式で入力してください（例: user@example.com）')
      setEmailValid(false)
    } else {
      setEmailError('')
      setEmailValid(true)
    }
  }

  const validatePassword = (value: string) => {
    if (value === '') {
      setPasswordError('')
      setPasswordValid(false)
      return
    }

    if (value.length < 8) {
      setPasswordError('パスワードは8文字以上にしてください')
      setPasswordValid(false)
      return
    }

    if (!/[a-zA-Z]/.test(value)) {
      setPasswordError('パスワードに英字を含めてください')
      setPasswordValid(false)
      return
    }

    if (!/[0-9]/.test(value)) {
      setPasswordError('パスワードに数字を含めてください')
      setPasswordValid(false)
      return
    }

    setPasswordError('')
    setPasswordValid(true)
  }

  const validatePhone = (value: string) => {
    const pattern = /^[0-9]{2,4}-[0-9]{2,4}-[0-9]{4}$/

    if (value === '') {
      setPhoneError('')
      setPhoneValid(false)
      return
    }

    if (!pattern.test(value)) {
      setPhoneError('正しい電話番号の形式で入力してください（例: 03-1234-5678）')
      setPhoneValid(false)
    } else {
      setPhoneError('')
      setPhoneValid(true)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    validateEmail(value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    validatePassword(value)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhone(value)
    validatePhone(value)
  }

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      borderRadius: '8px',
      margin: '1.5rem 0'
    }}>
      <h3 style={{ marginTop: 0 }}><i className="fas fa-edit" aria-hidden /> リアルタイムバリデーションデモ</h3>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        各項目を入力してみてください。リアルタイムでバリデーションが実行されます。
      </p>

      {/* Email */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'block',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          fontSize: '14px'
        }}>
          メールアドレス
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@example.com"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '16px',
              border: `2px solid ${emailError ? '#dc3545' : emailValid ? '#28a745' : '#dee2e6'}`,
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box'
            }}
          />
          {emailValid && (
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#28a745',
              fontSize: '20px'
            }}><i className="fas fa-check" aria-hidden /></span>
          )}
        </div>
        {emailError && (
          <p style={{
            color: '#dc3545',
            fontSize: '14px',
            marginTop: '0.5rem',
            marginBottom: 0
          }}>
            <i className="fas fa-exclamation-triangle" aria-hidden /> {emailError}
          </p>
        )}
        {emailValid && (
          <p style={{
            color: '#28a745',
            fontSize: '14px',
            marginTop: '0.5rem',
            marginBottom: 0
          }}>
            <i className="fas fa-check" aria-hidden /> 正しい形式です
          </p>
        )}
      </div>

      {/* Password */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'block',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          fontSize: '14px'
        }}>
          パスワード
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="8文字以上、英数字を含む"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '16px',
              border: `2px solid ${passwordError ? '#dc3545' : passwordValid ? '#28a745' : '#dee2e6'}`,
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box'
            }}
          />
          {passwordValid && (
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#28a745',
              fontSize: '20px'
            }}><i className="fas fa-check" aria-hidden /></span>
          )}
        </div>
        {passwordError && (
          <p style={{
            color: '#dc3545',
            fontSize: '14px',
            marginTop: '0.5rem',
            marginBottom: 0
          }}>
            <i className="fas fa-exclamation-triangle" aria-hidden /> {passwordError}
          </p>
        )}
        {passwordValid && (
          <p style={{
            color: '#28a745',
            fontSize: '14px',
            marginTop: '0.5rem',
            marginBottom: 0
          }}>
            <i className="fas fa-check" aria-hidden /> 強力なパスワードです
          </p>
        )}
      </div>

      {/* Phone */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{
          display: 'block',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          fontSize: '14px'
        }}>
          電話番号
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="03-1234-5678"
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '16px',
              border: `2px solid ${phoneError ? '#dc3545' : phoneValid ? '#28a745' : '#dee2e6'}`,
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box'
            }}
          />
          {phoneValid && (
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#28a745',
              fontSize: '20px'
            }}><i className="fas fa-check" aria-hidden /></span>
          )}
        </div>
        {phoneError && (
          <p style={{
            color: '#dc3545',
            fontSize: '14px',
            marginTop: '0.5rem',
            marginBottom: 0
          }}>
            <i className="fas fa-exclamation-triangle" aria-hidden /> {phoneError}
          </p>
        )}
        {phoneValid && (
          <p style={{
            color: '#28a745',
            fontSize: '14px',
            marginTop: '0.5rem',
            marginBottom: 0
          }}>
            <i className="fas fa-check" aria-hidden /> 正しい形式です
          </p>
        )}
      </div>
    </div>
  )
}
