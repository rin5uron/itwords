'use client'

import { useState } from 'react'

export default function NpmDemo() {
  const [selectedCommand, setSelectedCommand] = useState('')
  const [output, setOutput] = useState<string[]>([])

  const npmCommands = [
    {
      name: 'npm install',
      description: 'package.jsonの全パッケージをインストール',
      output: [
        '> npm install',
        '',
        'added 142 packages in 3s',
        '',
        '25 packages are looking for funding',
        '  run `npm fund` for details'
      ],
      color: '#28a745'
    },
    {
      name: 'npm install react',
      description: 'Reactをインストール',
      output: [
        '> npm install react',
        '',
        'added 3 packages in 1.2s',
        '',
        '+ react@18.2.0'
      ],
      color: '#007bff'
    },
    {
      name: 'npm run dev',
      description: '開発サーバーを起動',
      output: [
        '> npm run dev',
        '',
        '> my-app@0.1.0 dev',
        '> next dev',
        '',
        '  ▲ Next.js 15.0.0',
        '  - Local:        http://localhost:3000',
        '',
        '✓ Ready in 1.2s'
      ],
      color: '#ffc107'
    },
    {
      name: 'npm run build',
      description: 'プロジェクトをビルド',
      output: [
        '> npm run build',
        '',
        '> my-app@0.1.0 build',
        '> next build',
        '',
        '  ▲ Next.js 15.0.0',
        '',
        '✓ Creating an optimized production build',
        '✓ Compiled successfully',
        '✓ Collecting page data',
        '✓ Generating static pages (5/5)',
        '',
        '✓ Build completed successfully'
      ],
      color: '#dc3545'
    },
    {
      name: 'npm update',
      description: 'パッケージを最新版に更新',
      output: [
        '> npm update',
        '',
        'updated 8 packages in 2.5s',
        '',
        '3 packages are looking for funding',
        '  run `npm fund` for details'
      ],
      color: '#17a2b8'
    },
    {
      name: 'npm uninstall lodash',
      description: 'パッケージを削除',
      output: [
        '> npm uninstall lodash',
        '',
        'removed 1 package in 0.8s'
      ],
      color: '#6c757d'
    }
  ]

  const runCommand = (cmd: typeof npmCommands[0]) => {
    setSelectedCommand(cmd.name)
    setOutput([])

    // アニメーション効果で1行ずつ表示
    cmd.output.forEach((line, index) => {
      setTimeout(() => {
        setOutput(prev => [...prev, line])
      }, index * 150)
    })
  }

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>コマンドを選択して実行</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginTop: '15px' }}>
        {npmCommands.map((cmd) => (
          <button
            key={cmd.name}
            onClick={() => runCommand(cmd)}
            style={{
              padding: '12px 15px',
              fontSize: '13px',
              backgroundColor: selectedCommand === cmd.name ? cmd.color : '#fff',
              color: selectedCommand === cmd.name ? '#fff' : cmd.color,
              border: `2px solid ${cmd.color}`,
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              textAlign: 'left'
            }}
          >
            <div style={{ fontSize: '14px', marginBottom: '5px' }}>{cmd.name}</div>
            <div style={{
              fontSize: '11px',
              opacity: selectedCommand === cmd.name ? 0.9 : 0.7,
              fontFamily: 'sans-serif',
              fontWeight: 'normal'
            }}>
              {cmd.description}
            </div>
          </button>
        ))}
      </div>

      <div style={{
        marginTop: '20px',
        backgroundColor: '#282c34',
        color: '#abb2bf',
        padding: '20px',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '14px',
        minHeight: '200px',
        maxHeight: '400px',
        overflow: 'auto'
      }}>
        {output.length === 0 ? (
          <div style={{ color: '#6c757d' }}>
            $ ターミナル待機中...<br />
            <br />
            ↑ コマンドを選択して実行してください
          </div>
        ) : (
          output.map((line, index) => (
            <div key={index} style={{ marginBottom: '4px' }}>
              {line}
            </div>
          ))
        )}
        {output.length > 0 && output.length === npmCommands.find(c => c.name === selectedCommand)?.output.length && (
          <div style={{ marginTop: '10px', color: '#28a745' }}>
            $<span style={{ animation: 'blink 1s infinite' }}>_</span>
          </div>
        )}
      </div>

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        これらのコマンドは実際の開発でよく使われます。コマンドを選ぶと、ターミナルでの実行結果をシミュレートします！
      </p>
    </div>
  )
}
