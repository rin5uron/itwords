'use client'

/**
 * 楽天アフィリエイト（A8.net経由）サイドバー
 * PCのみ表示。用語ページの右横に配置。
 * Issue #38 アフィリエイト広告の配置
 */
export default function AffiliateRakutenSidebar() {
  return (
    <aside className="affiliate-rakuten-sidebar" aria-label="楽天広告">
      <a
        href="https://rpx.a8.net/svt/ejp?a8mat=4AX6CG+BUADWY+2HOM+65ME9&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa26020876785_4AX6CG_BUADWY_2HOM_65ME9%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F"
        rel="nofollow"
        target="_blank"
      >
        <img
          src="http://hbb.afl.rakuten.co.jp/hsb/0ec09ba5.4d3660f9.0eb4bbaa.95151395/"
          border={0}
          alt="お買い物は楽天で"
        />
      </a>
      <img
        border={0}
        width={1}
        height={1}
        src="https://www19.a8.net/0.gif?a8mat=4AX6CG+BUADWY+2HOM+65ME9"
        alt=""
        aria-hidden
      />
    </aside>
  )
}
