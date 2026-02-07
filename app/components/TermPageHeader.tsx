import type { ReactNode } from 'react'
import TermHeader from './TermHeader'
import PageSummary from './PageSummary'
import TableOfContents from './TableOfContents'

export type TermPageHeaderProps = {
  /** 用語名（タイトル） */
  termName: string
  /** 読み方（例: しーぴーゆー / Central Processing Unit） */
  reading?: string
  /** Font Awesome クラス（例: fas fa-microchip） */
  icon?: string
  /** 作成日（例: 2026-02-01） */
  dateCreated?: string
  /** 最終更新日（例: 2026-02-01） */
  dateModified?: string
  /** 「このページでわかること」の項目。省略時は表示しない */
  summaryItems?: string[]
  /** サマリーヘッダーのカスタムテキスト（例: 「このページでできること」） */
  summaryHeaderText?: string
  /** サマリーアイコンのカスタムクラス */
  summaryIcon?: string
  /** ヒーロー画像（わかることの直後・目次の直前に表示。省略時は表示しない） */
  heroImage?: ReactNode
}

/**
 * 用語ページ共通：タイトル → 日付 → このページでわかること → 目次 を一括で表示。
 * デザインは globals.css の .term-page-header 系で一括指定できる。
 */
export default function TermPageHeader({
  termName,
  reading,
  icon,
  dateCreated,
  dateModified,
  summaryItems,
  summaryHeaderText,
  summaryIcon,
  heroImage,
}: TermPageHeaderProps) {
  const showDate =
    (dateCreated != null || dateModified != null) &&
    (dateCreated !== '' || dateModified !== '')

  return (
    <div className="term-page-header">
      <TermHeader
        termName={termName}
        reading={reading}
        icon={icon}
        dateCreated={dateCreated}
        dateModified={dateModified}
      />

      {showDate && (
        <div className="term-page-header__date">
          <span>
            作成日: {dateCreated ?? '—'} | 最終更新: {dateModified ?? '—'}
          </span>
        </div>
      )}

      {summaryItems != null && summaryItems.length > 0 && (
        <div className="term-page-header__summary">
          <PageSummary
            items={summaryItems}
            headerText={summaryHeaderText}
            icon={summaryIcon}
          />
        </div>
      )}

      {heroImage != null && (
        <div className="term-page-header__hero">
          {heroImage}
        </div>
      )}

      <div className="term-page-header__toc">
        <TableOfContents />
      </div>
    </div>
  )
}
