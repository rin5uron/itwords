'use client'

import { useState } from 'react'

export default function JavaScriptDemo() {
  const [jsCode, setJsCode] = useState('// コードを書いてみましょう！\nconst greeting = "こんにちは！";\nconsole.log(greeting);')
  const [jsOutput, setJsOutput] = useState('')

  const runJavaScript = () => {
    try {
      // console.logをキャプチャ
      const logs: string[] = []
      const originalLog = console.log
      console.log = (...args) => {
        logs.push(args.map(arg => String(arg)).join(' '))
      }

      // コードを実行
      // eslint-disable-next-line no-eval
      eval(jsCode)

      // console.logを元に戻す
      console.log = originalLog

      // 結果を表示
      setJsOutput(logs.length > 0 ? logs.join('\n') : '出力がありません')
    } catch (error) {
      setJsOutput(`エラー: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>コードを書いてみよう</h3>
      <textarea
        value={jsCode}
        onChange={(e) => setJsCode(e.target.value)}
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
        placeholder="JavaScriptコードを入力してください"
      />

      <button
        onClick={runJavaScript}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        実行
      </button>

      <h3 style={{ marginTop: '20px' }}>実行結果</h3>
      <div
        style={{
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          padding: '15px',
          backgroundColor: '#fff',
          marginTop: '10px',
          minHeight: '80px',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap'
        }}
      >
        {jsOutput || 'ここに実行結果が表示されます'}
      </div>

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        試してみよう：<br />
        • <code>console.log("Hello")</code> でメッセージを出力<br />
        • <code>const x = 5 + 3; console.log(x);</code> で計算結果を表示<br />
        • <code>alert("こんにちは")</code> でアラートを表示
      </p>
    </div>
  )
}
