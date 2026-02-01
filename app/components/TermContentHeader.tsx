import PageSummary from './PageSummary'
import TableOfContents from './TableOfContents'

export type TermContentHeaderProps = {
  /** 「このページでわかること」の項目。省略時は PageSummary を表示しない */
  summaryItems?: string[]
  /** 作成日（例: 2026-02-01） */
  dateCreated?: string
  /** 最終更新日（例: 2026-02-01） */
  dateModified?: string
}

/**
 * 用語ページ共通：このページでわかること → 目次 → 作成日 の順で一括表示。
 * 全用語ページでこのコンポーネントを使うと、順序・作成日の位置を一括で統一できる。
 */
export default function TermContentHeader({
  summaryItems,
  dateCreated,
  dateModified,
}: TermContentHeaderProps) {
  const showDate =
    (dateCreated != null || dateModified != null) &&
    (dateCreated !== '' || dateModified !== '')

  return (
    <>
      {summaryItems != null && summaryItems.length > 0 && (
        <PageSummary items={summaryItems} />
      )}

      <TableOfContents />

      {showDate && (
        <div
          className="date-info"
          style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '20px',
            paddingBottom: '15px',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <span>
            作成日: {dateCreated ?? '—'} | 最終更新: {dateModified ?? '—'}
          </span>
        </div>
      )}
    </>
  )
}
