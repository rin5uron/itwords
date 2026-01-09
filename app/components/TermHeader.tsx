import Link from 'next/link'

interface TermHeaderProps {
  termName: string
  reading?: string
  icon?: string
}

export default function TermHeader({ termName, reading, icon }: TermHeaderProps) {
  return (
    <>
      <nav style={{
        padding: '10px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ fontSize: '14px', color: '#666' }}>
            <Link href="/" style={{ color: '#ea9b8a', textDecoration: 'none' }}>
              TOP
            </Link>
            <span style={{ margin: '0 8px', color: '#999' }}>›</span>
            <Link href="/" style={{ color: '#ea9b8a', textDecoration: 'none' }}>
              用語一覧
            </Link>
            <span style={{ margin: '0 8px', color: '#999' }}>›</span>
            <span>{termName}</span>
          </div>
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
