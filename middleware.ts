import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // vercel.appドメインでアクセスされた場合、itwords.jpにリダイレクト
  if (hostname.includes('vercel.app')) {
    url.hostname = 'itwords.jp'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301) // 301リダイレクト（永久的な移動）
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * すべてのリクエストパスにマッチするが、以下を除外:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - 画像ファイル (.jpg, .png, .gif, .svg, .webp)
     * - その他の静的ファイル (.ico, .json, .xml, .txt)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|json|xml|txt)$).*)',
  ],
}
