'use client'

import { useState } from 'react'

type Method = 'external' | 'internal' | 'inline'

export default function CSSWritingMethodsDemo() {
  const [openMethod, setOpenMethod] = useState<Method | null>('external')

  const toggleMethod = (method: Method) => {
    setOpenMethod(openMethod === method ? null : method)
  }

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      {/* Method 1: External File */}
      <div style={{
        border: '2px solid #28a745',
        borderRadius: '8px',
        marginBottom: '15px',
        overflow: 'hidden'
      }}>
        <button
          onClick={() => toggleMethod('external')}
          style={{
            width: '100%',
            padding: '15px 20px',
            backgroundColor: openMethod === 'external' ? '#28a745' : '#f8f9fa',
            color: openMethod === 'external' ? 'white' : '#333',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          <span>① 外部ファイル（一番おすすめ！）</span>
          <span style={{ fontSize: '20px' }}>{openMethod === 'external' ? '▼' : '▶'}</span>
        </button>

        {openMethod === 'external' && (
          <div style={{ padding: '20px', backgroundColor: '#fff' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              marginBottom: '15px'
            }}>
              {/* HTML File */}
              <div>
                <div style={{
                  backgroundColor: '#fff3cd',
                  padding: '8px 12px',
                  borderRadius: '5px 5px 0 0',
                  border: '2px solid #ffc107',
                  borderBottom: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#856404'
                }}>
                  📄 index.html
                </div>
                <pre style={{
                  backgroundColor: '#2d2d2d',
                  color: '#f8f8f2',
                  padding: '15px',
                  borderRadius: '0 0 5px 5px',
                  border: '2px solid #ffc107',
                  margin: 0,
                  fontSize: '12px',
                  lineHeight: '1.6',
                  overflow: 'auto',
                  fontFamily: 'Consolas, Monaco, monospace'
                }}>
{`<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <p>この文字が赤くなる</p>
  </body>
</html>`}
                </pre>
              </div>

              {/* CSS File */}
              <div>
                <div style={{
                  backgroundColor: '#d1ecf1',
                  padding: '8px 12px',
                  borderRadius: '5px 5px 0 0',
                  border: '2px solid #17a2b8',
                  borderBottom: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#0c5460'
                }}>
                  🎨 style.css
                </div>
                <pre style={{
                  backgroundColor: '#2d2d2d',
                  color: '#f8f8f2',
                  padding: '15px',
                  borderRadius: '0 0 5px 5px',
                  border: '2px solid #17a2b8',
                  margin: 0,
                  fontSize: '12px',
                  lineHeight: '1.6',
                  overflow: 'auto',
                  fontFamily: 'Consolas, Monaco, monospace'
                }}>
{`p {
  color: red;
}`}
                </pre>
              </div>
            </div>

            <div style={{
              backgroundColor: '#d4edda',
              border: '2px solid #28a745',
              padding: '12px',
              borderRadius: '5px',
              fontSize: '14px',
              color: '#155724'
            }}>
              <strong>✅ メリット：</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                <li>複数ページで使い回せる</li>
                <li>管理しやすい</li>
                <li>プロも使う方法</li>
              </ul>
              <strong style={{ display: 'block', marginTop: '8px' }}>📁 ファイル数：2つ（HTMLとCSS）</strong>
            </div>
          </div>
        )}
      </div>

      {/* Method 2: Internal Style */}
      <div style={{
        border: '2px solid #ffc107',
        borderRadius: '8px',
        marginBottom: '15px',
        overflow: 'hidden'
      }}>
        <button
          onClick={() => toggleMethod('internal')}
          style={{
            width: '100%',
            padding: '15px 20px',
            backgroundColor: openMethod === 'internal' ? '#ffc107' : '#f8f9fa',
            color: openMethod === 'internal' ? '#333' : '#333',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          <span>② &lt;style&gt;タグ（テスト用）</span>
          <span style={{ fontSize: '20px' }}>{openMethod === 'internal' ? '▼' : '▶'}</span>
        </button>

        {openMethod === 'internal' && (
          <div style={{ padding: '20px', backgroundColor: '#fff' }}>
            <div style={{ marginBottom: '15px' }}>
              {/* Single HTML File */}
              <div>
                <div style={{
                  backgroundColor: '#fff3cd',
                  padding: '8px 12px',
                  borderRadius: '5px 5px 0 0',
                  border: '2px solid #ffc107',
                  borderBottom: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#856404'
                }}>
                  📄 index.html
                </div>
                <pre style={{
                  backgroundColor: '#2d2d2d',
                  color: '#f8f8f2',
                  padding: '15px',
                  borderRadius: '0 0 5px 5px',
                  border: '2px solid #ffc107',
                  margin: 0,
                  fontSize: '12px',
                  lineHeight: '1.6',
                  overflow: 'auto',
                  fontFamily: 'Consolas, Monaco, monospace'
                }}>
{`<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>この文字が青くなる</p>
  </body>
</html>`}
                </pre>
              </div>
            </div>

            <div style={{
              backgroundColor: '#fff3cd',
              border: '2px solid #ffc107',
              padding: '12px',
              borderRadius: '5px',
              fontSize: '14px',
              color: '#856404'
            }}>
              <strong>⚠️ 注意：</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                <li>そのページだけに適用される</li>
                <li>他のページでは使えない</li>
              </ul>
              <strong style={{ display: 'block', marginTop: '8px' }}>📁 ファイル数：1つ（HTML内に全部入り）</strong>
            </div>
          </div>
        )}
      </div>

      {/* Method 3: Inline Style */}
      <div style={{
        border: '2px solid #17a2b8',
        borderRadius: '8px',
        marginBottom: '15px',
        overflow: 'hidden'
      }}>
        <button
          onClick={() => toggleMethod('inline')}
          style={{
            width: '100%',
            padding: '15px 20px',
            backgroundColor: openMethod === 'inline' ? '#17a2b8' : '#f8f9fa',
            color: openMethod === 'inline' ? 'white' : '#333',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          <span>③ style属性（ピンポイント用）</span>
          <span style={{ fontSize: '20px' }}>{openMethod === 'inline' ? '▼' : '▶'}</span>
        </button>

        {openMethod === 'inline' && (
          <div style={{ padding: '20px', backgroundColor: '#fff' }}>
            <div style={{ marginBottom: '15px' }}>
              {/* Single HTML File */}
              <div>
                <div style={{
                  backgroundColor: '#fff3cd',
                  padding: '8px 12px',
                  borderRadius: '5px 5px 0 0',
                  border: '2px solid #ffc107',
                  borderBottom: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#856404'
                }}>
                  📄 index.html
                </div>
                <pre style={{
                  backgroundColor: '#2d2d2d',
                  color: '#f8f8f2',
                  padding: '15px',
                  borderRadius: '0 0 5px 5px',
                  border: '2px solid #ffc107',
                  margin: 0,
                  fontSize: '12px',
                  lineHeight: '1.6',
                  overflow: 'auto',
                  fontFamily: 'Consolas, Monaco, monospace'
                }}>
{`<!DOCTYPE html>
<html>
  <body>
    <p style="color: red;">この文字だけ赤くする</p>
    <p>この文字は普通</p>
  </body>
</html>`}
                </pre>
              </div>
            </div>

            <div style={{
              backgroundColor: '#d1ecf1',
              border: '2px solid #17a2b8',
              padding: '12px',
              borderRadius: '5px',
              fontSize: '14px',
              color: '#0c5460'
            }}>
              <strong>💡 使い分け：</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                <li><strong>style属性</strong>：ピンポイントでその要素だけにスタイルを適用したいとき</li>
                <li><strong>外部ファイル</strong>：全体で管理しやすくしたいとき</li>
              </ul>
              <strong style={{ display: 'block', marginTop: '8px' }}>📁 ファイル数：1つ（HTML内に直接記述）</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
