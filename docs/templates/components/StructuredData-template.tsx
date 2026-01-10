// app/components/StructuredData.tsx テンプレート
// JSON-LD構造化データを生成するコンポーネント

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

export default function StructuredData({ 
  type, 
  title, 
  description, 
  faqs, 
  datePublished, 
  dateModified 
}: StructuredDataProps) {
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
        name: '[サイト名]', // 実際のサイト名に変更
      },
    }
  } else if (type === 'WebSite') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '[サイト名]', // 実際のサイト名に変更
      description: '[サイトの説明]', // 実際の説明に変更
      url: 'https://your-domain.com', // 実際のドメインに変更
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://your-domain.com/search?q={search_term_string}',
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

