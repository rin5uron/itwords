// app/robots.ts テンプレート
// robots.txtを自動生成

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // クロールを拒否したいページがある場合
      // disallow: ['/admin', '/private'],
    },
    sitemap: 'https://your-domain.com/sitemap.xml', // 実際のドメインに変更
  }
}

