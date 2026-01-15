'use client'

import { useState } from 'react'

export default function CSSToggleDemo() {
  const [cssEnabled, setCssEnabled] = useState(true)

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid #ddd',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          🎮 CSSのON/OFFを切り替えてみよう
        </h3>

        <p style={{ fontSize: '14px', color: '#555', marginBottom: '15px' }}>
          ボタンを押して、CSSがある世界とない世界を比べてみましょう👇
        </p>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={() => setCssEnabled(!cssEnabled)}
            style={{
              backgroundColor: cssEnabled ? '#28a745' : '#dc3545',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            {cssEnabled ? '✅ CSS ON' : '❌ CSS OFF'}
          </button>
        </div>

        {/* プレビューエリア */}
        <div style={{
          backgroundColor: '#fff',
          border: '2px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          minHeight: '300px'
        }}>
          {cssEnabled ? (
            // CSS適用後（美しいカード）
            <div>
              <h2 style={{
                color: '#007bff',
                fontSize: '24px',
                marginBottom: '15px',
                borderBottom: '2px solid #007bff',
                paddingBottom: '8px'
              }}>
                ようこそ！実践型IT用語辞典へ
              </h2>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
                <div style={{
                  flex: '1 1 200px',
                  backgroundColor: '#e3f2fd',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '2px solid #2196f3',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ color: '#1976d2', fontSize: '18px', marginBottom: '8px' }}>🎨 API</h3>
                  <p style={{ color: '#333', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    プログラム同士が会話する仕組み
                  </p>
                </div>

                <div style={{
                  flex: '1 1 200px',
                  backgroundColor: '#f3e5f5',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '2px solid #9c27b0',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ color: '#7b1fa2', fontSize: '18px', marginBottom: '8px' }}>📦 JSON</h3>
                  <p style={{ color: '#333', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    データをやり取りする形式
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#fff3cd',
                border: '1px solid #ffc107',
                borderRadius: '5px'
              }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#856404' }}>
                  💡 CSSのおかげで、色・配置・余白が整っています！
                </p>
              </div>
            </div>
          ) : (
            // CSS適用前（味気ない）
            <div>
              <h2>ようこそ！実践型IT用語辞典へ</h2>

              <div>
                <div>
                  <h3>API</h3>
                  <p>プログラム同士が会話する仕組み</p>
                </div>

                <div>
                  <h3>JSON</h3>
                  <p>データをやり取りする形式</p>
                </div>
              </div>

              <div>
                <p>CSSのおかげで、色・配置・余白が整っています！</p>
              </div>
            </div>
          )}
        </div>

        <div style={{
          marginTop: '15px',
          padding: '12px',
          backgroundColor: cssEnabled ? '#d4edda' : '#f8d7da',
          border: `2px solid ${cssEnabled ? '#28a745' : '#dc3545'}`,
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: cssEnabled ? '#155724' : '#721c24' }}>
            {cssEnabled ? '✨ これがCSSの力！見た目が整理されて読みやすい' : '⚠️ CSSなしだと...全部同じ見た目で味気ない'}
          </p>
        </div>
      </div>
    </div>
  )
}
