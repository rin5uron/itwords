import Link from 'next/link'
import SiteHeader from './SiteHeader'

interface TermHeaderProps {
  termName: string
  reading?: string
  icon?: string
  dateCreated?: string
  dateModified?: string
}

export default function TermHeader({ termName, reading, icon, dateCreated, dateModified }: TermHeaderProps) {
  return (
    <>
      <SiteHeader showNav={false} />
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-container">
          <Link href="/" className="breadcrumb-link">TOP</Link>
          <span className="breadcrumb-separator">›</span>
          <Link href="/#search" className="breadcrumb-link">用語一覧</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{termName}</span>
        </div>
      </nav>

      <header>
        <h1>
          {icon && <i className={icon}></i>} {termName}
        </h1>
        {reading && <p className="reading">{reading}</p>}
      </header>
    </>
  )
}
