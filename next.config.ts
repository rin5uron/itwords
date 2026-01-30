import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Vercel uses dynamic hosting, no need for static export
  trailingSlash: false,
  async redirects() {
    return [
      // 不合格対策: /icon.ico を /icon.png へ統一（404を防ぐ）
      { source: '/icon.ico', destination: '/icon.png', permanent: true },
    ]
  },
}

export default nextConfig
