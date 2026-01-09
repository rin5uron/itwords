'use client'

import { useState } from 'react'
import Link from 'next/link'

// 全用語のデータ
const allTerms = [
  { name: 'API', path: '/terms/api', description: 'ソフトウェアやプログラムの機能を共有する仕組み', category: 'Web' },
  { name: 'JSON', path: '/terms/json', description: 'JavaScriptのオブジェクト記法をベースにした軽量なデータ交換フォーマット', category: 'データ' },
  { name: 'HTTP/HTTPS', path: '/terms/http', description: 'Webブラウザとサーバー間でデータをやり取りするための通信規約', category: 'Web' },
  { name: 'Cookie', path: '/terms/cookie', description: 'Webサイトがブラウザに保存する小さなデータファイル', category: 'Web' },
  { name: 'Framework', path: '/terms/framework', description: 'アプリケーション開発のための土台となる枠組み', category: '開発' },
  { name: 'GitHub', path: '/terms/github', description: 'ソースコードをバージョン管理し、世界中の開発者と共有できるプラットフォーム', category: 'ツール' },
  { name: 'HTML', path: '/terms/html', description: 'Webページの構造を作るマークアップ言語', category: 'Web' },
  { name: 'CSS', path: '/terms/css', description: 'Webページの見た目を整えるスタイルシート言語', category: 'Web' },
  { name: 'JavaScript', path: '/terms/javascript', description: 'Webページに動きを付けるプログラミング言語', category: 'Web' },
  { name: 'npm', path: '/terms/npm', description: 'JavaScriptのパッケージを管理するツール', category: 'ツール' },
  { name: 'Vercel', path: '/terms/vercel', description: 'Webサイトを簡単に公開できるホスティングサービス', category: 'ツール' },
  { name: 'スタック', path: '/terms/stack', description: '後入れ先出し（LIFO）のデータ構造', category: '開発' },
  { name: 'キュー', path: '/terms/queue', description: '先入れ先出し（FIFO）のデータ構造', category: '開発' },
  { name: 'ローカルストレージ', path: '/terms/localstorage', description: 'ブラウザにデータを保存する仕組み', category: 'Web' },
  { name: 'フールプルーフ', path: '/terms/foolproof', description: 'ユーザーの誤操作を防ぐための設計原則', category: 'Web' },
  { name: 'Webhook', path: '/terms/webhook', description: 'イベント駆動型のHTTP通信の仕組み', category: 'Web' },
]

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTerms, setFilteredTerms] = useState(allTerms)

  const handleSearch = (value: string) => {
    setSearchTerm(value)

    if (value.trim() === '') {
      setFilteredTerms(allTerms)
      return
    }

    const filtered = allTerms.filter(term =>
      term.name.toLowerCase().includes(value.toLowerCase()) ||
      term.description.toLowerCase().includes(value.toLowerCase()) ||
      term.category.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredTerms(filtered)
  }

  return (
    <div style={{ margin: '30px 0' }}>
      <div style={{
        position: 'relative',
        marginBottom: '20px'
      }}>
        <input
          type="text"
          placeholder="用語を検索... (例: API, JSON, フレームワーク)"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 45px 12px 15px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.3s',
            boxSizing: 'border-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
          onFocus={(e) => e.target.style.borderColor = '#ea9b8a'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
        <i className="fas fa-search" style={{
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '16px',
          color: '#999',
          pointerEvents: 'none'
        }}></i>
      </div>

      {searchTerm && (
        <div style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '15px'
        }}>
          {filteredTerms.length > 0
            ? `${filteredTerms.length}件の用語が見つかりました`
            : '該当する用語が見つかりませんでした'}
        </div>
      )}

      <div className="card-container">
        {filteredTerms.map((term) => (
          <div key={term.path} className="card" data-category={term.category.toLowerCase()}>
            <Link href={term.path} className="card-link">
              <span className="category-tag">{term.category}</span>
              <h4>{term.name}</h4>
              <p>{term.description}</p>
            </Link>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#999'
        }}>
          <p>検索キーワードを変更してみてください</p>
        </div>
      )}
    </div>
  )
}
