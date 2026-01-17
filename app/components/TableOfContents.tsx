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
    <nav className="table-of-contents">
      <ul>
        {headings.map((heading, index) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(heading.id)
              }}
            >
              {index + 1}. {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
