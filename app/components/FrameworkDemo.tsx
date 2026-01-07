'use client'

import { useState } from 'react'

export default function FrameworkDemo() {
  const [selectedFramework, setSelectedFramework] = useState<string>('')

  const frameworks = [
    { name: 'React', description: 'UI構築のためのJavaScriptライブラリ', code: 'const App = () => <h1>Hello, React!</h1>' },
    { name: 'Next.js', description: 'Reactベースのフルスタックフレームワーク', code: 'export default function Page() { return <h1>Hello, Next.js!</h1> }' },
    { name: 'Vue.js', description: 'プログレッシブなJavaScriptフレームワーク', code: '<template><h1>{{ message }}</h1></template>' },
  ]

  const handleFrameworkSelect = (framework: typeof frameworks[0]) => {
    setSelectedFramework(framework.name)
  }

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>フレームワークを選択</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
        {frameworks.map((fw) => (
          <button
            key={fw.name}
            onClick={() => handleFrameworkSelect(fw)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: selectedFramework === fw.name ? '#007bff' : '#fff',
              color: selectedFramework === fw.name ? '#fff' : '#007bff',
              border: '2px solid #007bff',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {fw.name}
          </button>
        ))}
      </div>

      {selectedFramework && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          border: '1px solid #dee2e6'
        }}>
          <h4>{selectedFramework}</h4>
          <p>{frameworks.find(f => f.name === selectedFramework)?.description}</p>
          <pre style={{
            backgroundColor: '#282c34',
            color: '#abb2bf',
            padding: '15px',
            borderRadius: '5px',
            overflow: 'auto',
            whiteSpace: 'pre-wrap'
          }}>
            <code>{frameworks.find(f => f.name === selectedFramework)?.code}</code>
          </pre>
        </div>
      )}

      {!selectedFramework && (
        <p style={{ marginTop: '15px', color: '#6c757d' }}>
          ↑ フレームワークを選択してください
        </p>
      )}
    </div>
  )
}
