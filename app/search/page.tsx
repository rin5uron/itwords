'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'

interface Term {
  title: string;
  keywords: string[];
  description: string;
  path: string;
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState<Term[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (query) {
      fetch('/search-index.json')
        .then(res => res.json())
        .then((data: Term[]) => {
          // 検索クエリを小文字に変換
          const normalizedQuery = query.toLowerCase()

          const filteredResults = data.filter(term => {
            // タイトルと説明文を小文字にして検索
            const titleMatch = term.title.toLowerCase().includes(normalizedQuery)
            const descMatch = term.description.toLowerCase().includes(normalizedQuery)

            // キーワード配列も小文字にして検索
            const keywordMatch = term.keywords.some(keyword =>
              keyword.toLowerCase().includes(normalizedQuery)
            )

            return titleMatch || descMatch || keywordMatch
          })

          setResults(filteredResults)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [query])

  return (
    <>
      {loading ? (
        <p>検索中...</p>
      ) : query ? (
        <>
          <p>「{query}」の検索結果: {results.length}件</p>
          {results.length > 0 ? (
            <div className="card-container">
              {results.map(term => (
                <div className="card" key={term.path}>
                  <Link href={term.path} className="card-link">
                    <h4>{term.title}</h4>
                    <p>{term.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>該当する用語は見つかりませんでした。</p>
          )}
        </>
      ) : (
        <p>検索キーワードを入力してください。</p>
      )}
    </>
  )
}

export default function SearchPage() {
  return (
    <div className="container">
      <header className="site-header">
        <h1>検索結果</h1>
      </header>
      <main>
        <Suspense fallback={<p>検索中...</p>}>
          <SearchResults />
        </Suspense>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/">トップページに戻る</Link>
        </div>
      </main>
    </div>
  )
}
