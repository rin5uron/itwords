import Link from 'next/link'

interface BreadcrumbProps {
  items: Array<{
    label: string
    href?: string
  }>
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" style={{
      padding: '10px 0',
      fontSize: '14px',
      color: '#666'
    }}>
      <ol style={{
        listStyle: 'none',
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {item.href ? (
              <Link href={item.href} style={{ color: '#ea9b8a', textDecoration: 'none' }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#666' }}>{item.label}</span>
            )}
            {index < items.length - 1 && <span style={{ color: '#999' }}>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
