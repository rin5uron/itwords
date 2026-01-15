'use client'

import { useState } from 'react'

export default function HTMLCSSFilesDemo() {
  const [highlightedLine, setHighlightedLine] = useState<string | null>(null)

  const htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="card">
      <h2>こんにちは</h2>
      <p>これはカードです</p>
    </div>
  </body>
</html>`

  const cssCode = `.card {
  color: #2196f3;
  background-color: #e3f2fd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`

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
          🎮 HTML と CSS の分離を体験
        </h3>

        <p style={{ fontSize: '14px', color: '#555', marginBottom: '15px' }}>
          HTMLは「構造」、CSSは「見た目」を担当します。2つのファイルに分けることで管理しやすくなります👇
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          {/* HTML ファイル */}
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
              📄 index.html（構造）
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
              <code dangerouslySetInnerHTML={{
                __html: htmlCode
                  .replace(
                    /<link rel="stylesheet" href="style.css">/,
                    '<span style="background: rgba(255, 193, 7, 0.3);">&lt;link rel="stylesheet" href="style.css"&gt;</span> <span style="color: #4CAF50;">← CSSファイルを読み込む</span>'
                  )
                  .replace(
                    /class="card"/,
                    '<span style="background: rgba(33, 150, 243, 0.3);">class="card"</span> <span style="color: #2196F3;">← CSSの.cardが効く</span>'
                  )
              }} />
            </pre>
          </div>

          {/* CSS ファイル */}
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
              🎨 style.css（見た目）
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
              <code dangerouslySetInnerHTML={{
                __html: cssCode
                  .replace(
                    /\.card/,
                    '<span style="background: rgba(33, 150, 243, 0.3);">.card</span> <span style="color: #2196F3;">← HTMLのclass="card"に効く</span>'
                  )
                  .replace(
                    /color: #2196f3;/,
                    '<span style="color: #66D9EF;">color</span>: <span style="color: #E6DB74;">#2196f3</span>; <span style="color: #4CAF50;">← 文字色</span>'
                  )
                  .replace(
                    /background-color: #e3f2fd;/,
                    '<span style="color: #66D9EF;">background-color</span>: <span style="color: #E6DB74;">#e3f2fd</span>; <span style="color: #4CAF50;">← 背景色</span>'
                  )
                  .replace(
                    /padding: 20px;/,
                    '<span style="color: #66D9EF;">padding</span>: <span style="color: #E6DB74;">20px</span>; <span style="color: #4CAF50;">← 内側の余白</span>'
                  )
                  .replace(
                    /border-radius: 10px;/,
                    '<span style="color: #66D9EF;">border-radius</span>: <span style="color: #E6DB74;">10px</span>; <span style="color: #4CAF50;">← 角を丸く</span>'
                  )
              }} />
            </pre>
          </div>
        </div>

        {/* プレビュー */}
        <div style={{
          backgroundColor: '#fff',
          border: '2px solid #28a745',
          borderRadius: '8px',
          padding: '15px',
          marginBottom: '15px'
        }}>
          <div style={{
            backgroundColor: '#d4edda',
            padding: '8px 12px',
            borderRadius: '5px',
            border: '1px solid #28a745',
            marginBottom: '10px',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#155724'
          }}>
            ✨ 実際の表示結果
          </div>
          <div style={{
            color: '#2196f3',
            backgroundColor: '#e3f2fd',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>こんにちは</h2>
            <p style={{ margin: 0, fontSize: '14px' }}>これはカードです</p>
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
          <strong>💡 ポイント：</strong>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
            <li>HTMLで <code>class="card"</code> を指定</li>
            <li>CSSで <code>.card</code> にスタイルを適用</li>
            <li>2つのファイルが <code>&lt;link&gt;</code> で繋がる</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
