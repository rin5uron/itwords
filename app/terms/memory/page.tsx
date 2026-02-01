'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import PageSummary from '@/app/components/PageSummary'
import FAQAccordion from '@/app/components/FAQAccordion'

const HIERARCHY_LAYERS = [
  { name: 'レジスタ', desc: 'CPUのすぐそば。最も速いが数は少ない', icon: 'fas fa-microchip', color: '#007bff' },
  { name: 'キャッシュメモリ', desc: '主記憶のコピーを置く。主記憶より速い', icon: 'fas fa-bolt', color: '#28a745' },
  { name: '主記憶（RAM）', desc: 'プログラムとデータを置く作業場。揮発性', icon: 'fas fa-memory', color: '#ffc107' },
  { name: '補助記憶（SSD/HDD）', desc: '長く保存する倉庫。遅いが大容量・不揮発', icon: 'fas fa-hdd', color: '#6c757d' },
]

export default function MemoryPage() {
  const [cacheTime, setCacheTime] = useState(10)
  const [mainTime, setMainTime] = useState(100)
  const [hitRate, setHitRate] = useState(90)
  const [addrMode, setAddrMode] = useState<'relative' | 'base'>('relative')
  const [pcOrBr, setPcOrBr] = useState(1000)
  const [addrPart, setAddrPart] = useState(50)
  const [hierarchyStep, setHierarchyStep] = useState<'idle' | 'cache' | 'main'>('idle')

  const effectiveTime = (hitRate / 100) * cacheTime + (1 - hitRate / 100) * mainTime
  const effectiveAddr = pcOrBr + addrPart

  const faqs = [
    {
      question: 'メモリ（主記憶）とは何ですか？',
      answer: 'メモリ（主記憶・RAM）は、CPUが「今」実行するプログラムやデータを一時的に置く作業場です。SSD/HDDから読み込んだ内容をここに置き、CPUはメモリから命令やデータを読み書きします。電源を切ると消える揮発性の記憶装置です。',
    },
    {
      question: 'アドレスとは何ですか？',
      answer: 'アドレス（番地）は、メモリ上の「どの位置」かを表す番号です。CPUは「このアドレスのデータを読め」「このアドレスに書け」のように指定してメモリにアクセスします。命令には「何をするか」の命令部と「どのアドレスを扱うか」のアドレス部があります。',
    },
    {
      question: 'キャッシュはコピーですか？',
      answer: 'はい。キャッシュメモリには主記憶のデータのコピーを置きます。本物は主記憶にあり、よく使うデータの写しをCPUの近くに置いて、メモリまで取りに行く回数を減らし、アクセスを速くしています。',
    },
    {
      question: '実効アクセス時間とは何ですか？',
      answer: 'キャッシュに欲しいデータがある確率（ヒット率）を考慮した、平均的なアクセス時間です。式は「実効アクセス時間＝ヒット率×キャッシュアクセス時間＋(1－ヒット率)×主記憶アクセス時間」で、基本情報技術者試験で計算問題として出題されます。',
    },
    {
      question: '相対アドレス指定と基底アドレス指定の違いは？',
      answer: '相対アドレス指定は、命令のアドレス部にプログラムカウンタ（PC）の値を足して実効アドレスを求めます。基底アドレス指定は、アドレス部に基底レジスタ（BR）の値を足して実効アドレスを求めます。どちらも「基準となる値＋アドレス部」で実際にアクセスする番地を決めます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="メモリとは？主記憶・アドレス・実効アクセス時間を基本情報向けに解説【デモ付き】"
        description="メモリ（主記憶）の役割と記憶階層を解説。アドレス指定方式・実効アクセス時間の計算をデモで体感。基本情報技術者試験のイメージがつかめます。"
        datePublished="2026-01-26"
        dateModified="2026-01-26"
      />

      <TermHeader
        termName="メモリ"
        reading="めもり / Memory（主記憶・RAM）"
        icon="fas fa-memory"
        dateCreated="2026-01-26"
        dateModified="2026-01-26"
      />

      <div className="date-info-toc">
        <span>作成日: 2026-01-26 | 最終更新: 2026-01-26</span>
      </div>

      <main>
        <PageSummary
          items={[
            'メモリ（主記憶）の役割と記憶装置の種類',
            '記憶階層のイメージデモ',
            'アドレス・命令部とアドレス部',
            'アドレス指定方式（相対・基底）の計算デモ',
            '実効アクセス時間の計算デモ',
            '割り込み・メモリインターリーブの概要',
          ]}
        />

        <section>
          <h2>概要</h2>
          <p>
            <strong>メモリ</strong>（主記憶・RAM）は、
            <strong>CPUが「今」使うプログラムやデータを一時的に置く作業場</strong>である。
            補助記憶（SSD/HDD）から読み込んだ内容をここに置き、CPUはメモリから命令やデータを読み書きする。
          </p>
          <p>
            メモリは「番地（アドレス）」で場所を指定する。命令には「何をするか」を表す<strong>命令部</strong>と「どの番地を扱うか」を表す<strong>アドレス部</strong>がある。
            このページでは、記憶装置の種類・記憶階層・アドレス指定方式・実効アクセス時間を、基本情報技術者試験を意識したデモとともに説明する。
          </p>
        </section>

        <section>
          <h2>記憶装置の種類と記憶階層</h2>
          <p>
            コンピュータには複数の記憶装置があり、<strong>CPUに近いほど速いが容量は小さい</strong>という階層になっている。
          </p>
          <ul>
            <li><strong>レジスタ</strong>：CPUのすぐそば。最も速いが数は少ない（数十個程度）。今まさに計算に使う値を置く。</li>
            <li><strong>キャッシュメモリ</strong>：主記憶の<strong>コピー</strong>を置く。主記憶より速いが容量は小さい。本物は主記憶にある。</li>
            <li><strong>主記憶（RAM）</strong>：プログラムとデータを置く作業場。揮発性（電源で消える）。</li>
            <li><strong>補助記憶（SSD/HDD）</strong>：長く保存する倉庫。遅いが大容量で不揮発性。</li>
          </ul>
          <p>
            下のデモで、階層の順序と「CPUに近いほど速い」イメージを確認できる。
          </p>

          <div
            className="demo-section"
            style={{
              border: '2px solid #17a2b8',
              borderRadius: '8px',
              padding: 'clamp(12px, 3vw, 20px)',
              marginTop: '20px',
              backgroundColor: '#e8f4f8',
              maxWidth: '100%',
            }}
          >
            <h3 style={{ marginTop: 0 }}>記憶階層のイメージ</h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              CPUがデータを探すとき、まずキャッシュを見る。あればキャッシュで終わり（速い）、なければ主記憶まで行く（遅い）。
            </p>
            {HIERARCHY_LAYERS.map((layer, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '10px',
                  padding: 'clamp(10px, 2vw, 14px)',
                  backgroundColor: '#fff',
                  border: `2px solid ${layer.color}`,
                  borderRadius: '8px',
                  opacity: hierarchyStep === 'idle' ? 1 : hierarchyStep === 'cache' ? (i <= 1 ? 1 : 0.5) : (i <= 2 ? 1 : 0.5),
                }}
              >
                <i className={layer.icon} style={{ color: layer.color, fontSize: 'clamp(18px, 4vw, 22px)' }} aria-hidden />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong>{layer.name}</strong>
                  <span style={{ marginLeft: '8px', fontSize: '14px', color: '#555' }}>{layer.desc}</span>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              <button
                type="button"
                onClick={() => setHierarchyStep(hierarchyStep === 'idle' ? 'cache' : hierarchyStep === 'cache' ? 'main' : 'idle')}
                style={{
                  padding: '10px 20px',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  backgroundColor: '#17a2b8',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {hierarchyStep === 'idle' ? 'データを探す（キャッシュヒット）' : hierarchyStep === 'cache' ? 'データを探す（主記憶まで）' : 'リセット'}
              </button>
            </div>
            {hierarchyStep === 'cache' && (
              <p style={{ marginTop: '12px', fontSize: '14px', color: '#28a745' }}>
                キャッシュにあったので、ここで終わり（速い）。
              </p>
            )}
            {hierarchyStep === 'main' && (
              <p style={{ marginTop: '12px', fontSize: '14px', color: '#ffc107' }}>
                キャッシュになかったので、主記憶まで取りに行った（遅い）。
              </p>
            )}
          </div>
        </section>

        <section>
          <h2>メモリの役割とアドレス</h2>
          <p>
            CPUがメモリの「どこ」を読むかは<strong>アドレス（番地）</strong>で指定する。
            1本の命令には、<strong>命令部</strong>（何をするか：足す・読む・書くなど）と<strong>アドレス部</strong>（どの番地を扱うか）がある。
          </p>
          <p>
            アドレス空間は「CPUが使える番地の範囲全体」、メモリマップは「その範囲のどこに何を置くかの地図」のようなものだと考えるとよい。
          </p>
        </section>

        <section>
          <h2>アドレス指定方式（相対・基底）</h2>
          <p>
            命令のアドレス部だけでは「実際にアクセスする番地」が決まらないことがある。そのときに使うのが<strong>相対アドレス指定</strong>と<strong>基底アドレス指定</strong>である。
          </p>
          <ul>
            <li><strong>相対アドレス指定</strong>：実効アドレス ＝ プログラムカウンタ（PC）＋ アドレス部</li>
            <li><strong>基底アドレス指定</strong>：実効アドレス ＝ 基底レジスタ（BR）＋ アドレス部</li>
          </ul>
          <p>
            下のデモで、PCまたはBRとアドレス部を変えて実効アドレスを確認できる。
          </p>

          <div
            className="demo-section"
            style={{
              border: '2px solid #28a745',
              borderRadius: '8px',
              padding: 'clamp(12px, 3vw, 20px)',
              marginTop: '20px',
              backgroundColor: '#f0f8f0',
              maxWidth: '100%',
            }}
          >
            <h3 style={{ marginTop: 0 }}>実効アドレスの計算</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '12px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '14px' }}>方式</span>
                <select
                  value={addrMode}
                  onChange={(e) => setAddrMode(e.target.value as 'relative' | 'base')}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                >
                  <option value="relative">相対（PC＋アドレス部）</option>
                  <option value="base">基底（BR＋アドレス部）</option>
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '14px' }}>{addrMode === 'relative' ? 'PC' : 'BR'}の値</span>
                <input
                  type="number"
                  value={pcOrBr}
                  onChange={(e) => setPcOrBr(Number(e.target.value) || 0)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', width: '100px' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '14px' }}>アドレス部</span>
                <input
                  type="number"
                  value={addrPart}
                  onChange={(e) => setAddrPart(Number(e.target.value) || 0)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', width: '80px' }}
                />
              </label>
            </div>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              実効アドレス ＝ {pcOrBr} ＋ {addrPart} ＝ <strong>{effectiveAddr}</strong>
            </p>
          </div>
        </section>

        <section>
          <h2>実効アクセス時間（基本情報で出る）</h2>
          <p>
            キャッシュに欲しいデータがある確率を<strong>ヒット率</strong>という。ヒット率を考慮した平均のアクセス時間が<strong>実効アクセス時間</strong>である。
          </p>
          <p>
            式：<strong>実効アクセス時間 ＝ ヒット率×キャッシュアクセス時間 ＋ (1－ヒット率)×主記憶アクセス時間</strong>
          </p>
          <p>
            下のデモで、キャッシュ・主記憶のアクセス時間（ナノ秒）とヒット率（%）を変えて実効アクセス時間を確認できる。
          </p>

          <div
            className="demo-section"
            style={{
              border: '2px solid #007bff',
              borderRadius: '8px',
              padding: 'clamp(12px, 3vw, 20px)',
              marginTop: '20px',
              backgroundColor: '#f8f9fa',
              maxWidth: '100%',
            }}
          >
            <h3 style={{ marginTop: 0 }}>実効アクセス時間の計算</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '16px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                <span style={{ fontSize: '14px' }}>キャッシュアクセス時間（ns）</span>
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={cacheTime}
                  onChange={(e) => setCacheTime(Number(e.target.value) || 1)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                <span style={{ fontSize: '14px' }}>主記憶アクセス時間（ns）</span>
                <input
                  type="number"
                  min={10}
                  max={500}
                  value={mainTime}
                  onChange={(e) => setMainTime(Number(e.target.value) || 10)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                <span style={{ fontSize: '14px' }}>ヒット率（%）</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={hitRate}
                  onChange={(e) => setHitRate(Number(e.target.value) || 0)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                />
              </label>
            </div>
            <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>計算結果</p>
              <p style={{ margin: '4px 0' }}>
                実効アクセス時間 ＝ {hitRate}%×{cacheTime} ＋ (1－{hitRate}%)×{mainTime} ＝{' '}
                <strong>{(effectiveTime * 10) / 10} ns</strong>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>割り込み</h2>
          <p>
            <strong>割り込み</strong>は、CPUが通常のプログラム実行を一時止めて、別の処理（入出力の完了通知やエラーなど）に移る仕組みである。
            基本情報では、外部割り込み（ハードウェア由来）と内部割り込み（プログラムやCPU由来）、マスク可能・マスク不可などの分類が出題される。
          </p>
        </section>

        <section>
          <h2>メモリインターリーブ</h2>
          <p>
            <strong>メモリインターリーブ</strong>は、主記憶を複数のバンクに分け、CPUからのアクセス要求を並列に処理して、見かけのアクセスを速くする技術である。
            連続したアドレスを別々のバンクに振り分けることで、連続アクセスでも待ち時間を減らせる。
          </p>
        </section>

        <section>
          <h2>メモリの種類（DRAM・SRAM・フラッシュ）</h2>
          <p>
            主記憶には<strong>DRAM</strong>（Dynamic RAM）が使われることが多い。リフレッシュが必要だが大容量化しやすい。
            <strong>SRAM</strong>（Static RAM）は高速だがコストが高く、キャッシュメモリに使われる。
            <strong>フラッシュメモリ</strong>は不揮発性で、SSDやUSBメモリに使われる。
          </p>
        </section>

        <TableOfContents />

        <section className="term-comparison">
          <h2>関連用語</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/terms/cpu" className="term-name">CPU</Link></td>
                  <td>メモリから命令を読み取り、取り出し・解読・実行する。キャッシュは主記憶のコピーを置く場所</td>
                </tr>
                <tr>
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>メモリを搭載したコンピュータが、クライアントにサービスを提供する</td>
                </tr>
                <tr>
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>プログラム同士がデータをやり取りする窓口</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <span style={{ margin: '0 8px', color: '#999' }}>|</span>
        <Link href="/privacy">プライバシーポリシー</Link>
        <span style={{ margin: '0 8px', color: '#999' }}>|</span>
        <Link href="/terms-of-service">利用規約</Link>
        <span style={{ margin: '0 8px', color: '#999' }}>|</span>
        <Link href="/contact">お問い合わせ</Link>
      </footer>
    </div>
  )
}
