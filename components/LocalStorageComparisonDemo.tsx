'use client'

import { useState, useEffect } from 'react'

export default function LocalStorageComparisonDemo() {
  const [selectedMethod, setSelectedMethod] = useState<'javascript' | 'json' | 'localstorage' | null>(null)
  const [jsValue, setJsValue] = useState('山田太郎')
  const [pageReloaded, setPageReloaded] = useState(false)

  useEffect(() => {
    // ページ読み込み時にローカルストレージの値を確認
    const saved = localStorage.getItem('comparisonDemo')
    if (saved) {
      setPageReloaded(true)
    }
  }, [])

  const handleSave = (method: 'javascript' | 'json' | 'localstorage') => {
    setSelectedMethod(method)
    
    if (method === 'localstorage') {
      localStorage.setItem('comparisonDemo', JSON.stringify({ name: jsValue }))
    }
  }

  const handleReload = () => {
    window.location.reload()
  }

  const handleClear = () => {
    localStorage.removeItem('comparisonDemo')
    setPageReloaded(false)
    setSelectedMethod(null)
  }

  return (
    <div className="demo-section" style={{ marginTop: '20px' }}>
      <p style={{ marginBottom: '15px' }}>
        <strong>3つの方法を比較してみよう</strong>
        <br />
        同じデータ「名前: 山田太郎」を、それぞれの方法で保存してみます。
      </p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button
          className="demo-button"
          onClick={() => handleSave('javascript')}
          style={{
            backgroundColor: selectedMethod === 'javascript' ? '#8abdea' : '#ddd',
            color: selectedMethod === 'javascript' ? 'white' : '#333',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          JavaScript変数
        </button>
        <button
          className="demo-button"
          onClick={() => handleSave('json')}
          style={{
            backgroundColor: selectedMethod === 'json' ? '#82c9a0' : '#ddd',
            color: selectedMethod === 'json' ? 'white' : '#333',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          JSONファイル
        </button>
        <button
          className="demo-button"
          onClick={() => handleSave('localstorage')}
          style={{
            backgroundColor: selectedMethod === 'localstorage' ? '#ea9b8a' : '#ddd',
            color: selectedMethod === 'localstorage' ? 'white' : '#333',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          ローカルストレージ
        </button>
      </div>

      {selectedMethod && (
        <div style={{
          padding: '20px',
          backgroundColor: '#f9f7ef',
          borderRadius: '8px',
          borderLeft: `4px solid ${
            selectedMethod === 'javascript' ? '#8abdea' :
            selectedMethod === 'json' ? '#82c9a0' : '#ea9b8a'
          }`,
          marginBottom: '15px'
        }}>
          {selectedMethod === 'javascript' && (
            <div>
              <h4 style={{ marginTop: 0, color: '#333' }}>JavaScript変数で保存</h4>
              <div style={{
                backgroundColor: '#2d3748',
                color: '#e2e8f0',
                padding: '15px',
                borderRadius: '4px',
                fontFamily: "'Courier New', monospace",
                fontSize: '14px',
                marginBottom: '15px'
              }}>
                {`const name = "${jsValue}";`}
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                <strong>特徴：</strong>メモリに保存。ページを閉じると消えます。
              </p>
              <button
                onClick={handleReload}
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                ページを再読み込みしてみる
              </button>
              <p style={{ fontSize: '12px', color: '#999', marginTop: '10px', marginBottom: 0 }}>
                → 再読み込みすると、値が消えます
              </p>
            </div>
          )}

          {selectedMethod === 'json' && (
            <div>
              <h4 style={{ marginTop: 0, color: '#333' }}>JSONファイルで保存</h4>
              <div style={{
                backgroundColor: '#2d3748',
                color: '#e2e8f0',
                padding: '15px',
                borderRadius: '4px',
                fontFamily: "'Courier New', monospace",
                fontSize: '14px',
                marginBottom: '15px'
              }}>
                {`{\n  "name": "${jsValue}"\n}`}
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: 0 }}>
                <strong>特徴：</strong>サーバーに保存。残りますが、サーバーが必要で重いです。
              </p>
            </div>
          )}

          {selectedMethod === 'localstorage' && (
            <div>
              <h4 style={{ marginTop: 0, color: '#333' }}>ローカルストレージで保存</h4>
              <div style={{
                backgroundColor: '#2d3748',
                color: '#e2e8f0',
                padding: '15px',
                borderRadius: '4px',
                fontFamily: "'Courier New', monospace",
                fontSize: '14px',
                marginBottom: '15px'
              }}>
                {`localStorage.setItem('comparisonDemo', JSON.stringify({ name: "${jsValue}" }));`}
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                <strong>特徴：</strong>ブラウザ内に保存。ページを閉じても残り、軽くてシンプルです。
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleReload}
                  style={{
                    backgroundColor: '#8abdea',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  ページを再読み込みしてみる
                </button>
                <button
                  onClick={handleClear}
                  style={{
                    backgroundColor: '#aaa',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  クリア
                </button>
              </div>
              {pageReloaded && (
                <div style={{
                  marginTop: '15px',
                  padding: '10px',
                  backgroundColor: '#e8f4f8',
                  borderRadius: '5px'
                }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
                    ✓ 再読み込み後も値が残っています！ローカルストレージの特徴です。
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {selectedMethod && (
        <div style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: '#e8f4f8',
          borderRadius: '8px'
        }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            <strong>💡 比較のポイント：</strong>
            <br />
            {selectedMethod === 'javascript' && 'JavaScript変数は軽いですが、ページを閉じると消えます。'}
            {selectedMethod === 'json' && 'JSONは構造化できますが、サーバーが必要で重いです。'}
            {selectedMethod === 'localstorage' && 'ローカルストレージは、軽くてシンプル、しかもページを閉じても残ります。これがローカルストレージの強みです。'}
          </p>
        </div>
      )}
    </div>
  )
}
