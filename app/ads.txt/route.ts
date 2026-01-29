// AdSense用 ads.txt を配信するRoute Handler
// public/ads.txt が本番で404になるため、Route Handlerで明示的に配信

export async function GET() {
  const adsContent = `google.com, pub-6439411211038936, DIRECT, f08c47fec0942fa0`

  return new Response(adsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
