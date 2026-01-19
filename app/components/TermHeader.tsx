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
        {(dateCreated || dateModified) && (
          <div className="date-info" style={{
            display: 'flex',
            gap: '15px',
            fontSize: '14px',
            color: '#666',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {dateCreated && <span>作成日: {dateCreated}</span>}
            {dateModified && <span>更新日: {dateModified}</span>}
          </div>
        )}
        {reading && <p className="reading">{reading}</p>}
      </header>
    </>
  )
}
