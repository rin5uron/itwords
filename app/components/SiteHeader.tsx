import Link from 'next/link'
import SearchAutocomplete from './SearchAutocomplete'

interface SiteHeaderProps {
  showNav?: boolean // トップページの場合はtrue、用語ページの場合はfalse
}

export default function SiteHeader({ showNav = false }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="header-top">
        {showNav && (
          <h1>
            <Link href="/" className="site-title-link">
              実践型IT用語辞典
            </Link>
          </h1>
        )}
        {showNav && (
          <nav>
            <ul>
              <li>
                <Link href="#popular">人気用語</Link>
              </li>
              <li>
                <Link href="#new">新着用語</Link>
              </li>
              <li>
                <Link href="#all-terms">すべての用語</Link>
              </li>
              <li>
                <Link href="#practice">練習</Link>
              </li>
              <li className="nav-item-about">
                <Link href="/about">制作背景</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {showNav && (
        <>
          <p className="site-description">
            このサイトは、現役のWeb開発者が運営する「見て、触って、学べる」をコンセプトにしたIT用語辞典です。プログラミング学習を始めたばかりの方や、IT業界で働く非エンジニアの方を対象に、専門用語を分かりやすく解説します。特に、APIやJSONといった抽象的な概念は、実際に動かせる体験デモを通じて「なぜそうなるのか」を直感的に理解できます。Web開発の基礎知識を確実に習得し、あなたの学習やキャリアアップを力強くサポートします。
          </p>
          <div id="search" className="search-container">
            <SearchAutocomplete />
          </div>
        </>
      )}
    </header>
  )
}
