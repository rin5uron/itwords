'use client'

import { useState } from 'react'

export default function GitHubDemo() {
  const [selectedCommand, setSelectedCommand] = useState('')

  const gitCommands = [
    { name: 'git clone', description: 'リポジトリを複製する', explanation: 'GitHubからリポジトリをダウンロード（クローン）して、ローカル環境にコピーします。', example: 'git clone https://github.com/username/repo.git', color: '#28a745' },
    { name: 'git add', description: '変更をステージングに追加', explanation: '変更したファイルをコミット対象として登録します。', example: 'git add .', color: '#007bff' },
    { name: 'git commit', description: '変更を記録する', explanation: 'ステージングエリアの変更を履歴として記録します。', example: 'git commit -m "機能を追加"', color: '#ffc107' },
    { name: 'git push', description: 'GitHubにアップロード', explanation: 'ローカルの変更をGitHubリポジトリにアップロードします。', example: 'git push origin main', color: '#dc3545' },
    { name: 'git pull', description: '最新の変更を取得', explanation: 'GitHub上の最新の変更をローカルにダウンロードして統合します。', example: 'git pull origin main', color: '#17a2b8' },
    { name: 'git status', description: '状態を確認する', explanation: '現在の変更状況やブランチの状態を確認します。', example: 'git status', color: '#6c757d' }
  ]

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>Gitコマンドを選択</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginTop: '15px' }}>
        {gitCommands.map((cmd) => (
          <button
            key={cmd.name}
            onClick={() => setSelectedCommand(cmd.name)}
            style={{
              padding: '12px 15px',
              fontSize: '14px',
              backgroundColor: selectedCommand === cmd.name ? cmd.color : '#fff',
              color: selectedCommand === cmd.name ? '#fff' : cmd.color,
              border: `2px solid ${cmd.color}`,
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontWeight: 'bold',
              fontFamily: 'monospace'
            }}
          >
            {cmd.name}
          </button>
        ))}
      </div>

      {selectedCommand && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          border: `2px solid ${gitCommands.find(c => c.name === selectedCommand)?.color}`
        }}>
          <h4 style={{
            color: gitCommands.find(c => c.name === selectedCommand)?.color,
            fontFamily: 'monospace',
            fontSize: '20px',
            marginBottom: '10px'
          }}>
            {selectedCommand}
          </h4>
          <p style={{ marginBottom: '10px' }}>
            <strong>用途:</strong> {gitCommands.find(c => c.name === selectedCommand)?.description}
          </p>
          <p style={{ marginBottom: '15px' }}>
            <strong>説明:</strong> {gitCommands.find(c => c.name === selectedCommand)?.explanation}
          </p>
          <div style={{
            backgroundColor: '#282c34',
            color: '#abb2bf',
            padding: '15px',
            borderRadius: '5px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
            $ {gitCommands.find(c => c.name === selectedCommand)?.example}
          </div>
        </div>
      )}

      {!selectedCommand && (
        <p style={{ marginTop: '15px', color: '#6c757d' }}>
          ↑ コマンドを選択してください
        </p>
      )}

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        💡 基本的な流れ：<code>git add</code> → <code>git commit</code> → <code>git push</code> でGitHubに変更を反映できます！
      </p>
    </div>
  )
}
