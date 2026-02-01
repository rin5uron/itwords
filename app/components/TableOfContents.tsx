'use client'

import { useEffect, useState } from 'react'

type TocItem = {
  id: string
  title: string
}

type TableOfContentsProps = {
  minHeadings?: number // 最低何個のh2があったら表示するか（デフォルト: 4）
  className?: string // カスタムクラス名を指定可能
}

export default function TableOfContents({ minHeadings = 4, className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = () => setIsMobile(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    // ページ内のh2タグのみ取得（h3は目次に含めない）
    const allInMain = document.querySelectorAll('main h2')
    const h2Elements = Array.from(allInMain).filter((el) => el.tagName === 'H2')

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
    if (isMobile) setIsOpen(false)
  }

  const showCollapsed = isMobile && !isOpen

  return (
    <div className="toc-wrapper">
      <nav className={`table-of-contents ${className || ''}`} aria-label="目次">
        <div className="table-of-contents-header">
          <i className="fas fa-list" aria-hidden="true"></i>
          <span>目次</span>
          {isMobile && (
            <button
              type="button"
              className="toc-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="toc-list"
            >
              {isOpen ? '目次を閉じる' : '目次を開く'}
            </button>
          )}
        </div>
        <ul id="toc-list" style={showCollapsed ? { display: 'none' } : undefined}>
          {headings.map((heading, index) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(heading.id)
                }}
              >
                <span className="toc-number">{index + 1}</span>
                <span className="toc-title">{heading.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
