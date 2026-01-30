'use client'

import { useState } from 'react'

export default function APIDemo() {
  const [apiLoading, setApiLoading] = useState(false)
  const [apiData, setApiData] = useState<any>(null)
  const [apiError, setApiError] = useState('')

  const fetchGitHubUser = async () => {
    setApiLoading(true)
    setApiError('')
    setApiData(null)

    try {
      const response = await fetch('https://api.github.com/users/github')
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      const data = await response.json()
      setApiData(data)
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'エラーが発生しました')
    } finally {
      setApiLoading(false)
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
      <h3>GitHub APIを呼び出す</h3>
      <p>GitHubの公式アカウント情報を取得します</p>

      <button
        onClick={fetchGitHubUser}
        disabled={apiLoading}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: apiLoading ? '#6c757d' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: apiLoading ? 'not-allowed' : 'pointer',
        }}
      >
        {apiLoading ? '読み込み中...' : 'APIを呼び出す'}
      </button>

      {apiError && (
        <div style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '5px',
          color: '#721c24'
        }}>
          エラー: {apiError}
        </div>
      )}

      {apiData && (
        <div style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: '#fff',
          border: '1px solid #dee2e6',
          borderRadius: '5px'
        }}>
          <h4>取得したデータ</h4>
          <div style={{ marginTop: '10px' }}>
            <p><strong>ユーザー名:</strong> {apiData.login}</p>
            <p><strong>名前:</strong> {apiData.name}</p>
            <p><strong>公開リポジトリ数:</strong> {apiData.public_repos}</p>
            <p><strong>フォロワー数:</strong> {apiData.followers}</p>
            <p><strong>プロフィールURL:</strong> <a href={apiData.html_url} target="_blank" rel="noopener noreferrer">{apiData.html_url}</a></p>
          </div>
        </div>
      )}

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        <i className="fas fa-lightbulb" aria-hidden style={{ marginRight: '0.25em' }} /> このデモでは、<code>https://api.github.com/users/github</code> にGETリクエストを送信し、GitHubアカウントの情報を取得しています。
      </p>
    </div>
  )
}
