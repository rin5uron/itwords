'use client'

import { useEffect, useState } from 'react'

type TocItem = {
  id: string
  title: string
}

type TableOfContentsProps = {
  minHeadings?: number // 最低何個のh2があったら表示するか（デフォルト: 4）
}

export default function TableOfContents({ minHeadings = 4 }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // ページ内のh2タグを全て取得
    const h2Elements = Array.from(document.querySelectorAll('main h2'))

    const items: TocItem[] = h2Elements.map((heading, index) => {
      // idがない場合は自動生成
      if (!heading.id) {
        heading.id = `section-${index}`
      }
      return {
        id: heading.id,
        title: heading.textContent || ''
      }
    })

    // 最低個数以上ある場合のみ表示
    if (items.length >= minHeadings) {
      setHeadings(items)
    }

    // スクロール位置に応じてアクティブな見出しをハイライト
    const handleScroll = () => {
      const scrollY = window.scrollY + 100

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id)
        if (element && element.offsetTop <= scrollY) {
          setActiveId(items[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期位置を設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [minHeadings])

  // 見出しが少ない場合は何も表示しない
  if (headings.length < minHeadings) {
    return null
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -20
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      border: '2px solid #dee2e6',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '30px',
      marginTop: '20px'
    }}>
      <h3 style={{
        margin: '0 0 15px 0',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#495057',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        📖 この記事でわかること
      </h3>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToSection(heading.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                backgroundColor: activeId === heading.id ? '#007bff' : 'transparent',
                color: activeId === heading.id ? '#fff' : '#495057',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                fontWeight: activeId === heading.id ? 'bold' : 'normal'
              }}
              onMouseEnter={(e) => {
                if (activeId !== heading.id) {
                  e.currentTarget.style.backgroundColor = '#e9ecef'
                }
              }}
              onMouseLeave={(e) => {
                if (activeId !== heading.id) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              {heading.title}
            </button>
          </li>
        ))}
      </ul>

      <p style={{
        margin: '15px 0 0 0',
        fontSize: '12px',
        color: '#6c757d',
        fontStyle: 'italic'
      }}>
        💡 クリックで各セクションにジャンプできます
      </p>
    </nav>
  )
}
