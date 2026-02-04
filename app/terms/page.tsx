import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import SiteHeader from '@/app/components/SiteHeader'
import SearchAutocomplete from '@/app/components/SearchAutocomplete'

export const metadata: Metadata = {
  title: '用語一覧 | 実践型IT用語辞典',
  description: '実践型IT用語辞典の用語一覧。API、JSON、GitHub、DNSなどIT用語を一覧から探せます。',
}

type TermItem = { title: string; description: string; path: string }

function getTerms(): TermItem[] {
  try {
    const indexPath = path.join(process.cwd(), 'public', 'search-index.json')
    const raw = fs.readFileSync(indexPath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function shortTitle(title: string): string {
  const s = title.split('|')[0].trim()
  const m = s.match(/^(.+?)(とは|を|の|とは？)/)
  return (m ? m[1] : s.slice(0, 42)).trim()
}

export default function TermsListPage() {
  const terms = getTerms()

  return (
    <div className="container">
      <SiteHeader showNav={true} />

      <header>
        <div
          style={{
            width: '100%',
            maxWidth: '280px',
            margin: '0 auto 1.5rem',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <Image
            src="/images/terms/it-terms-hero.png"
            alt="IT用語を学ぶ"
            width={1024}
            height={1024}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
        <h1>用語一覧</h1>
        <p>IT用語を一覧から探したり、検索したりできます。</p>
      </header>

      <main>
        <section>
          <div className="search-container" style={{ marginBottom: '2rem' }}>
            <SearchAutocomplete />
          </div>

          <div className="card-container">
            {terms.map(({ title, description, path: p }) => (
              <div key={p} className="card">
                <Link href={p} className="card-link">
                  <h4>{shortTitle(title)}</h4>
                  <p>{description}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
