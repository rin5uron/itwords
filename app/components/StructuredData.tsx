interface FAQItem {
  question: string
  answer: string
}

interface StructuredDataProps {
  type: 'FAQPage' | 'Article' | 'WebSite'
  title?: string
  description?: string
  faqs?: FAQItem[]
  datePublished?: string
  dateModified?: string
}

export default function StructuredData({ type, title, description, faqs, datePublished, dateModified }: StructuredDataProps) {
  let structuredData: any

  if (type === 'FAQPage' && faqs) {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
  } else if (type === 'Article' && title && description) {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      datePublished: datePublished || new Date().toISOString(),
      dateModified: dateModified || new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'IT用語辞典',
        logo: {
          '@type': 'ImageObject',
          url: 'https://itwords.jp/icon.svg',
        },
      },
      publisher: {
        '@type': 'Organization',
        name: 'IT用語辞典',
        logo: {
          '@type': 'ImageObject',
          url: 'https://itwords.jp/icon.svg',
        },
      },
    }
  } else if (type === 'WebSite') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'IT用語辞典',
      description: '見て、触って、学べる実践型のIT用語辞典',
      url: 'https://itwords.jp',
      publisher: {
        '@type': 'Organization',
        name: 'IT用語辞典',
        logo: {
          '@type': 'ImageObject',
          url: 'https://itwords.jp/icon.svg',
        },
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://itwords.jp/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
