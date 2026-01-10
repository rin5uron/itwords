'use client'

import { useState } from 'react'

export default function AESDemo() {
  const [originalText, setOriginalText] = useState('秘密のメッセージ')
  const [encryptedText, setEncryptedText] = useState('')
  const [decryptedText, setDecryptedText] = useState('')
  const [isEncrypted, setIsEncrypted] = useState(false)
  const [key, setKey] = useState('mySecretKey123')

  // 簡易的な暗号化（実際のAESではないが、概念を理解するためのデモ）
  // 日本語対応の簡易暗号化
  const encrypt = () => {
    if (!originalText) {
      alert('暗号化するテキストを入力してください')
      return
    }
    
    try {
      // テキストと鍵を結合してBase64エンコード
      const combined = `${originalText}|${key}`
      const encoded = btoa(unescape(encodeURIComponent(combined)))
      
      // 文字列を逆順にして、各文字をシフト
      const reversed = encoded.split('').reverse().join('')
      const shifted = reversed.split('').map((char, index) => {
        const code = char.charCodeAt(0)
        // ASCII文字のみシフト（日本語はそのまま）
        if (code >= 32 && code <= 126) {
          return String.fromCharCode(((code - 32 + 3) % 95) + 32)
        }
        return char
      }).join('')
      
      setEncryptedText(shifted)
      setIsEncrypted(true)
      setDecryptedText('')
    } catch (error) {
      alert('暗号化に失敗しました')
    }
  }

  const decrypt = () => {
    if (!encryptedText) {
      alert('復号化するテキストがありません')
      return
    }
    
    try {
      // シフトを元に戻す
      const unshifted = encryptedText.split('').map((char) => {
        const code = char.charCodeAt(0)
        if (code >= 32 && code <= 126) {
          return String.fromCharCode(((code - 32 - 3 + 95) % 95) + 32)
        }
        return char
      }).join('')
      
      // 逆順に戻す
      const reversed = unshifted.split('').reverse().join('')
      
      // Base64デコード
      const decoded = decodeURIComponent(escape(atob(reversed)))
      const parts = decoded.split('|')
      
      // 鍵が一致するか確認
      if (parts[1] === key) {
        setDecryptedText(parts[0])
      } else {
        setDecryptedText('復号化に失敗しました（鍵が間違っている可能性があります）')
      }
    } catch (error) {
      setDecryptedText('復号化に失敗しました（鍵が間違っている可能性があります）')
    }
  }

  const reset = () => {
    setOriginalText('秘密のメッセージ')
    setEncryptedText('')
    setDecryptedText('')
    setIsEncrypted(false)
    setKey('mySecretKey123')
  }

  return (
    <div className="demo-section" style={{ marginTop: '20px' }}>
      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '15px', 
        borderRadius: '10px',
        border: '2px solid #ddd',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          🔐 AES暗号化を体験してみよう
        </h3>
        <p style={{ marginBottom: '15px', color: '#555', fontSize: '14px', fontWeight: '500' }}>
          <strong>💡 ポイント：</strong> 同じ鍵を使わないと復号化できません。
        </p>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px', color: '#222' }}>
            鍵（Key）:
          </label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
            placeholder="暗号化に使用する鍵を入力"
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px', color: '#222' }}>
            元のテキスト（平文）:
          </label>
          <input
            type="text"
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
            placeholder="暗号化したいテキストを入力"
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <button
            className="demo-button"
            onClick={encrypt}
            style={{
              backgroundColor: '#8abdea',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              flex: '1',
              minWidth: '100px'
            }}
          >
            🔒 暗号化
          </button>
          <button
            className="demo-button"
            onClick={decrypt}
            disabled={!isEncrypted}
            style={{
              backgroundColor: isEncrypted ? '#82c9a0' : '#ccc',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: isEncrypted ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              fontWeight: 'bold',
              flex: '1',
              minWidth: '100px'
            }}
          >
            🔓 復号化
          </button>
          <button
            className="demo-button"
            onClick={reset}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              flex: '1',
              minWidth: '100px'
            }}
          >
            🔄 リセット
          </button>
        </div>

        {isEncrypted && (
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px', color: '#222' }}>
              暗号化されたテキスト:
            </label>
            <div style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #8abdea',
              borderRadius: '5px',
              backgroundColor: '#e7f3ff',
              fontSize: '13px',
              wordBreak: 'break-all',
              fontFamily: 'monospace',
              maxHeight: '80px',
              overflowY: 'auto',
              color: '#333',
              fontWeight: '500'
            }}>
              {encryptedText || '（暗号化されていません）'}
            </div>
          </div>
        )}

        {decryptedText && (
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px', color: '#222' }}>
              復号化されたテキスト:
            </label>
            <div style={{
              width: '100%',
              padding: '10px',
              border: '2px solid #82c9a0',
              borderRadius: '5px',
              backgroundColor: '#e7f5e7',
              fontSize: '14px',
              wordBreak: 'break-all',
              color: '#222',
              fontWeight: '500'
            }}>
              {decryptedText}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


