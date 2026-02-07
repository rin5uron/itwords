interface PageSummaryProps {
  items: string[]
  /** カスタムヘッダーテキスト（省略時は「このページで分かること」） */
  headerText?: string
  /** カスタムアイコン（省略時は fas fa-book-open） */
  icon?: string
}

export default function PageSummary({ items, headerText = 'このページで分かること', icon = 'fas fa-book-open' }: PageSummaryProps) {
  return (
    <div className="page-summary">
      <div className="page-summary-header">
        <i className={icon} aria-hidden="true"></i>
        <span>{headerText}</span>
      </div>
      <ul className="page-summary-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
