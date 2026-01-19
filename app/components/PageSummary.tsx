interface PageSummaryProps {
  items: string[]
}

export default function PageSummary({ items }: PageSummaryProps) {
  return (
    <div className="page-summary">
      <div className="page-summary-header">
        <i className="fas fa-book-open" aria-hidden="true"></i>
        <span>このページで分かること</span>
      </div>
      <ul className="page-summary-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
