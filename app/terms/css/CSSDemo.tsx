'use client'

import { useState } from 'react'

export default function CSSDemo() {
  const [cssCode, setCssCode] = useState('color: blue;\nfont-size: 24px;\nfont-weight: bold;')
  const [textContent, setTextContent] = useState('スタイルを変更してみよう！')

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>テキストを編集</h3>
      <input
        type="text"
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          marginTop: '10px'
        }}
      />

      <h3 style={{ marginTop: '20px' }}>CSSスタイルを編集</h3>
      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '10px',
          fontFamily: 'monospace',
          fontSize: '14px',
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          marginTop: '10px'
        }}
        placeholder="CSSプロパティを入力（セレクタ不要）"
      />

      <h3 style={{ marginTop: '20px' }}>プレビュー</h3>
      <div
        style={{
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          padding: '30px',
          backgroundColor: '#fff',
          marginTop: '10px',
          textAlign: 'center'
        }}
      >
        <div style={
          cssCode.split(';').reduce((acc: any, rule) => {
            const [prop, value] = rule.split(':').map(s => s.trim())
            if (prop && value) {
              const camelProp = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
              acc[camelProp] = value
            }
            return acc
          }, {})
        }>
          {textContent}
        </div>
      </div>

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        💡 試してみよう：<br />
        • <code>color: red;</code> で文字色を赤に<br />
        • <code>font-size: 48px;</code> で文字を大きく<br />
        • <code>text-decoration: underline;</code> で下線を付ける<br />
        • <code>background-color: yellow;</code> で背景色を黄色に
      </p>
    </div>
  )
}
