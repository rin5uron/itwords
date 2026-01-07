'use client'

import { useState } from 'react'

export default function JsonDemo() {
  const [showDemo, setShowDemo] = useState(false)

  const sampleData = {
    user: {
      name: '山田花子',
      age: 28,
      email: 'hanako@example.com'
    },
    hobbies: ['写真撮影', '料理', '旅行'],
    isActive: true,
    loginCount: 42
  }

  const startJsonDemo = () => {
    setShowDemo(true)
  }

  const jsonString = JSON.stringify(sampleData, null, 2)

  return (
    <div className="demo-section">
      <p>
        <strong>JSONデータ編集デモ</strong>
      </p>
      <button className="demo-button" onClick={startJsonDemo}>
        JSONを表示・編集する
      </button>
      <div id="demo-message">
        {showDemo && (
          <div style={{ marginTop: '20px' }}>
            <div
              style={{
                padding: '20px',
                backgroundColor: '#f9f7ef',
                borderRadius: '8px',
                borderLeft: '4px solid #ea9b8a'
              }}
            >
              <h4 style={{ marginTop: 0, color: '#333' }}>JSONデータの例：</h4>
              <pre
                style={{
                  backgroundColor: '#2d3748',
                  color: '#e2e8f0',
                  padding: '15px',
                  borderRadius: '4px',
                  overflowX: 'auto',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '14px',
                  lineHeight: '1.4'
                }}
              >
                {jsonString}
              </pre>
              <p style={{ marginBottom: 0, fontSize: '0.9em', color: '#888' }}>
                ✨ この構造で様々なデータを表現できます
              </p>
            </div>
            <div
              style={{
                marginTop: '15px',
                padding: '15px',
                backgroundColor: '#e8f4f8',
                borderRadius: '8px'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                <strong>📝 使い方：</strong>
                <br />
                JavaScriptで <code>JSON.parse()</code> と <code>JSON.stringify()</code>{' '}
                を使って、このデータを自由に読み書きできます。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
