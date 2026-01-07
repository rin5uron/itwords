'use client'

import { useState } from 'react'

export default function HTMLDemo() {
  const [htmlCode, setHtmlCode] = useState('<h1>こんにちは！</h1>\n<p>これはHTMLで書かれた段落です。</p>')
  const [previewKey, setPreviewKey] = useState(0)

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>HTMLを書いてみよう</h3>
      <textarea
        value={htmlCode}
        onChange={(e) => {
          setHtmlCode(e.target.value)
          setPreviewKey(prev => prev + 1)
        }}
        style={{
          width: '100%',
          minHeight: '150px',
          padding: '10px',
          fontFamily: 'monospace',
          fontSize: '14px',
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          marginTop: '10px'
        }}
        placeholder="HTMLコードを入力してください"
      />

      <h3 style={{ marginTop: '20px' }}>プレビュー</h3>
      <div
        key={previewKey}
        style={{
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          padding: '15px',
          backgroundColor: '#fff',
          marginTop: '10px',
          minHeight: '100px'
        }}
        dangerouslySetInnerHTML={{ __html: htmlCode }}
      />

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        💡 試してみよう：<br />
        • <code>&lt;h2&gt;見出し&lt;/h2&gt;</code> で見出しを追加<br />
        • <code>&lt;strong&gt;太字&lt;/strong&gt;</code> で文字を太くする<br />
        • <code>&lt;a href=&quot;https://example.com&quot;&gt;リンク&lt;/a&gt;</code> でリンクを作成
      </p>
    </div>
  )
}
