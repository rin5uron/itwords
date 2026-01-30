'use client'

import { useState } from 'react'

type CSSProperty = {
  id: string
  label: string
  property: string
  value: string
  description: string
}

export default function CSSStepByStepDemo() {
  const [appliedStyles, setAppliedStyles] = useState<Set<string>>(new Set())

  const cssProperties: CSSProperty[] = [
    {
      id: 'color',
      label: '文字色を変える',
      property: 'color',
      value: '#2196f3',
      description: '文字の色を青に変更'
    },
    {
      id: 'background',
      label: '背景色を変える',
      property: 'background-color',
      value: '#e3f2fd',
      description: '背景色を水色に変更'
    },
    {
      id: 'padding',
      label: '余白をつける',
      property: 'padding',
      value: '20px',
      description: '内側に余白を追加'
    },
    {
      id: 'borderRadius',
      label: '角を丸くする',
      property: 'border-radius',
      value: '10px',
      description: '角を丸く加工'
    },
    {
      id: 'boxShadow',
      label: '影をつける',
      property: 'box-shadow',
      value: '0 2px 8px rgba(0,0,0,0.2)',
      description: '立体的な影を追加'
    },
  ]

  const toggleStyle = (id: string) => {
    const newAppliedStyles = new Set(appliedStyles)
    if (newAppliedStyles.has(id)) {
      newAppliedStyles.delete(id)
    } else {
      newAppliedStyles.add(id)
    }
    setAppliedStyles(newAppliedStyles)
  }

  const resetAll = () => {
    setAppliedStyles(new Set())
  }

  const getAppliedCSS = () => {
    const styles: any = {}
    cssProperties.forEach(prop => {
      if (appliedStyles.has(prop.id)) {
        const camelCase = prop.property.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
        styles[camelCase] = prop.value
      }
    })
    return styles
  }

  const getAppliedCSSCode = () => {
    const code = cssProperties
      .filter(prop => appliedStyles.has(prop.id))
      .map(prop => `  ${prop.property}: ${prop.value};`)
      .join('\n')
    return code ? `.card {\n${code}\n}` : '/* スタイルなし */'
  }

  const getHTMLCode = () => {
    return `<div class="card">
  <h2>こんにちは</h2>
  <p>これはカードです</p>
</div>`
  }

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
          <i className="fas fa-gamepad" aria-hidden /> CSSを一つずつ適用してみよう
        </h3>

        <p style={{ fontSize: '14px', color: '#555', marginBottom: '15px' }}>
          ボタンを押して、CSSの効果を確認しましょう <i className="fas fa-hand-point-down" aria-hidden />
        </p>

        {/* コントロールボタン */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '20px'
        }}>
          {cssProperties.map(prop => (
            <button
              key={prop.id}
              onClick={() => toggleStyle(prop.id)}
              style={{
                backgroundColor: appliedStyles.has(prop.id) ? '#28a745' : '#6c757d',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
            >
              {appliedStyles.has(prop.id) ? <><i className="fas fa-check" aria-hidden /> </> : ''}{prop.label}
            </button>
          ))}
          <button
            onClick={resetAll}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            <i className="fas fa-sync-alt" aria-hidden /> 全部リセット
          </button>
        </div>

        {/* HTMLとCSSコード */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          marginBottom: '15px'
        }}>
          {/* HTMLコード */}
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
              <i className="fas fa-file-code" aria-hidden /> HTML
            </div>
            <pre style={{
              backgroundColor: '#2d2d2d',
              color: '#f8f8f2',
              padding: '15px',
              borderRadius: '0 0 5px 5px',
              border: '2px solid #ffc107',
              margin: 0,
              fontSize: '13px',
              lineHeight: '1.6',
              fontFamily: 'Consolas, Monaco, monospace',
              whiteSpace: 'pre-wrap'
            }}>
              {getHTMLCode()}
            </pre>
          </div>

          {/* CSSコード */}
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
              <i className="fas fa-palette" aria-hidden /> CSS
            </div>
            <pre style={{
              backgroundColor: '#2d2d2d',
              color: '#f8f8f2',
              padding: '15px',
              borderRadius: '0 0 5px 5px',
              border: '2px solid #17a2b8',
              margin: 0,
              fontSize: '13px',
              lineHeight: '1.6',
              fontFamily: 'Consolas, Monaco, monospace',
              whiteSpace: 'pre-wrap'
            }}>
              {getAppliedCSSCode()}
            </pre>
          </div>
        </div>

        {/* プレビュー */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '2px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          marginBottom: '15px'
        }}>
          <div style={{
            backgroundColor: '#e9ecef',
            padding: '8px 12px',
            borderRadius: '5px',
            marginBottom: '15px',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#495057'
          }}>
            <i className="fas fa-eye" aria-hidden /> プレビュー
          </div>

          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '150px'
          }}>
            <div style={{
              ...getAppliedCSS(),
              transition: 'all 0.3s ease'
            }}>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>こんにちは</h2>
              <p style={{ margin: 0, fontSize: '14px' }}>これはカードです</p>
            </div>
          </div>
        </div>

        {/* 説明エリア */}
        {appliedStyles.size > 0 && (
          <div style={{
            backgroundColor: '#d1ecf1',
            border: '2px solid #17a2b8',
            padding: 'clamp(10px, 2.5vw, 12px)',
            borderRadius: '5px',
            fontSize: 'clamp(13px, 3.2vw, 14px)',
            color: '#0c5460',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            <strong><i className="fas fa-edit" aria-hidden /> 適用中のスタイル：</strong>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
              {cssProperties
                .filter(prop => appliedStyles.has(prop.id))
                .map(prop => (
                  <li key={prop.id}>{prop.description}</li>
                ))}
            </ul>
          </div>
        )}

        {appliedStyles.size === 0 && (
          <div style={{
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            padding: 'clamp(10px, 2.5vw, 12px)',
            borderRadius: '5px',
            fontSize: 'clamp(13px, 3.2vw, 14px)',
            color: '#856404',
            textAlign: 'center',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            👆 ボタンを押してCSSを適用してみましょう！
          </div>
        )}
      </div>
    </div>
  )
}
