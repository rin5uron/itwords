'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Term {
  title: string
  keywords?: string[]
  description: string
  path: string
}

// ひらがな・カタカナ・英数字を正規化する関数
function normalizeText(text: string): string {
  // ひらがなをカタカナに変換
  let normalized = text.replace(/[ぁ-ゖ]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) + 0x60)
  })
  // 全角英数字を半角に変換
  normalized = normalized.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) - 0xFEE0)
  })
  // 大文字を小文字に変換
  normalized = normalized.toLowerCase()
  return normalized
}

export default function SearchAutocomplete() {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<Term[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [terms, setTerms] = useState<Term[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // 検索インデックスを読み込む
  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then((data: Term[]) => {
        setTerms(data)
      })
      .catch(err => console.error('検索インデックスの読み込みに失敗しました', err))
  }, [])

  // 検索処理
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([])
      setIsOpen(false)
      return
    }

    const normalizedQuery = normalizeText(searchTerm)
    
    const filtered = terms.filter(term => {
      // タイトルを正規化して検索
      const normalizedTitle = normalizeText(term.title)
      const titleMatch = normalizedTitle.includes(normalizedQuery)

      // 説明文を正規化して検索
      const normalizedDesc = normalizeText(term.description)
      const descMatch = normalizedDesc.includes(normalizedQuery)

      // キーワード配列も検索（オプショナル）
      let keywordMatch = false
      if (term.keywords && Array.isArray(term.keywords) && term.keywords.length > 0) {
        keywordMatch = term.keywords.some(keyword => {
          const normalizedKeyword = normalizeText(keyword)
          return normalizedKeyword.includes(normalizedQuery)
        })
      }

      return titleMatch || descMatch || keywordMatch
    })

    // 最大10件まで表示
    setSuggestions(filtered.slice(0, 10))
    setIsOpen(filtered.length > 0)
  }, [searchTerm, terms])

  // クリックアウトサイドで候補を閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (suggestions.length > 0) {
      window.location.href = suggestions[0].path
    }
  }

  return (
    <div ref={searchRef} className="search-autocomplete-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="search"
            name="q"
            className="search-input"
            placeholder="サイト内を検索..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => {
              if (suggestions.length > 0) {
                setIsOpen(true)
              }
            }}
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="search-suggestions">
          <ul>
            {suggestions.map((term, index) => (
              <li key={term.path}>
                <Link
                  href={term.path}
                  className="suggestion-link"
                  onClick={() => {
                    setSearchTerm('')
                    setIsOpen(false)
                  }}
                >
                  <div className="suggestion-content">
                    <h4 className="suggestion-title">{term.title.replace(' | 実践型IT用語辞典', '')}</h4>
                    <p className="suggestion-description">{term.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOpen && searchTerm.trim() !== '' && suggestions.length === 0 && (
        <div className="search-suggestions">
          <div className="no-results">
            <p>該当する用語は見つかりませんでした</p>
          </div>
        </div>
      )}
    </div>
  )
}
