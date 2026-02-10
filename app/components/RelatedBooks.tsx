'use client'

/**
 * 関連おすすめ書籍（用語ページのFAQの下・一番下に表示）
 * 最大3冊。用語ごとの書籍は props で渡すか、後からマッピングで差し替え可能。
 */
export type RelatedBook = {
  title: string
  amazonUrl?: string
  rakutenUrl?: string
  imageUrl?: string
}

export default function RelatedBooks({ books }: { books: RelatedBook[] }) {
  if (!books || books.length === 0) return null

  const displayBooks = books.slice(0, 3)

  return (
    <section className="related-books" aria-label="関連おすすめ書籍">
      <h2 className="related-books-title">関連おすすめ書籍</h2>
      <ul className="related-books-list">
        {displayBooks.map((book, i) => (
          <li key={i} className="related-books-item">
            {book.imageUrl && (
              <a
                href={book.amazonUrl || book.rakutenUrl || '#'}
                rel="nofollow"
                target="_blank"
                className="related-books-image-link"
              >
                <img
                  src={book.imageUrl}
                  alt=""
                  width={80}
                  height={80}
                  className="related-books-image"
                />
              </a>
            )}
            <div className="related-books-body">
              <p className="related-books-name">{book.title}</p>
              <div className="related-books-links">
                {book.amazonUrl && (
                  <a href={book.amazonUrl} rel="nofollow" target="_blank">
                    Amazonで見る
                  </a>
                )}
                {book.amazonUrl && book.rakutenUrl && <span className="related-books-sep">|</span>}
                {book.rakutenUrl && (
                  <a href={book.rakutenUrl} rel="nofollow" target="_blank">
                    楽天で見る
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
