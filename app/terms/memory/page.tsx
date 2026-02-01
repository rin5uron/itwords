'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import PageSummary from '@/app/components/PageSummary'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

const HIERARCHY_LAYERS = [
  { name: 'レジスタ', desc: 'CPUのすぐそば。', desc2: '最も速いが数は少ない。', icon: 'fas fa-microchip', color: '#007bff' },
  { name: 'キャッシュメモリ', desc: '主記憶のコピーを置く。', desc2: '主記憶より速い。', icon: 'fas fa-bolt', color: '#28a745' },
  { name: '主記憶（RAM）', desc: 'プログラムとデータを置く作業場。', desc2: '揮発性。', icon: 'fas fa-memory', color: '#ffc107' },
  { name: '補助記憶（SSD/HDD）', desc: '長く保存する倉庫。', desc2: '遅いが大容量・不揮発。', icon: 'fas fa-hdd', color: '#6c757d' },
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
        datePublished="2026-02-01"
        dateModified="2026-02-01"
      />

      <TermHeader
        termName="メモリ"
        reading="めもり / Memory（主記憶・RAM）"
        icon="fas fa-memory"
        dateCreated="2026-02-01"
        dateModified="2026-02-01"
      />

      <div className="date-info-toc">
        <span>作成日: 2026-02-01 | 最終更新: 2026-02-01</span>
      </div>

      <main>
        <PageSummary
          items={[
            'メモリ＝CPUが今使う情報を置く場所',
            'データはどこから探される？（記憶階層デモ）',
            'アドレス・命令部とアドレス部',
            'アドレス指定方式・実効アクセス時間の計算デモ',
            '割り込み・メモリインターリーブの概要',
          ]}
        />

        <TableOfContents />

        <section>
          <h2>概要</h2>
          <p>
            <strong>メモリ</strong>（主記憶・RAM）は、
            <strong>CPUが仕事をするために、今使う情報を置いておく場所</strong>である。
            CPUはここから<strong>命令</strong>と<strong>データ</strong>を読み書きする。
          </p>
        </section>

        <section>
          <h2>データはどこから探される？</h2>
          <p>
            コンピュータには複数の記憶装置があり、<strong>CPUに近い順</strong>に「探しに行く」順番になっている。
            下のデモで、その並びと「今どこを探しているか」を確認できる。
          </p>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '12px' }}>
            CPUがデータを探すとき、まずキャッシュを見る。あればキャッシュで終わり（速い）、なければ主記憶まで行く（遅い）。これは例え話としてイメージしてほしい。
          </p>

          <div
            className="demo-section"
            style={{
              border: '2px solid #17a2b8',
              borderRadius: '8px',
              padding: 'clamp(12px, 3vw, 20px)',
              marginTop: '12px',
              backgroundColor: '#e8f4f8',
              maxWidth: '100%',
              maxHeight: 'none',
              overflow: 'visible',
            }}
          >
            <h3 style={{ marginTop: 0 }}>記憶装置の並び（CPUに近い順）</h3>
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
                  backgroundColor: hierarchyStep === 'idle' ? '#fff' : hierarchyStep === 'cache' ? (i <= 1 ? '#e8f5e9' : '#fff') : (i <= 2 ? '#fffde7' : '#fff'),
                  border: `2px solid ${hierarchyStep === 'idle' ? layer.color : hierarchyStep === 'cache' ? (i === 1 ? '#28a745' : i < 1 ? layer.color : '#dee2e6') : (i === 2 ? '#ffc107' : i < 2 ? layer.color : '#dee2e6')}`,
                  borderRadius: '8px',
                  opacity: hierarchyStep === 'idle' ? 1 : hierarchyStep === 'cache' ? (i <= 1 ? 1 : 0.6) : (i <= 2 ? 1 : 0.6),
                }}
              >
                <i className={layer.icon} style={{ color: layer.color, fontSize: 'clamp(18px, 4vw, 22px)' }} aria-hidden />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong>{layer.name}</strong>
                  <span style={{ display: 'block', marginTop: '4px', fontSize: '14px', color: '#555' }}>{layer.desc}{layer.desc2}</span>
                </div>
                {hierarchyStep === 'cache' && i === 1 && (
                  <span style={{ fontSize: '12px', color: '#28a745', fontWeight: 'bold' }}>ここで見つかった</span>
                )}
                {hierarchyStep === 'main' && i === 2 && (
                  <span style={{ fontSize: '12px', color: '#d97706', fontWeight: 'bold' }}>ここまで探しにいった</span>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              <button
                type="button"
                onClick={() => setHierarchyStep(hierarchyStep === 'idle' ? 'cache' : hierarchyStep === 'cache' ? 'main' : 'idle')}
                disabled={hierarchyStep === 'main'}
                style={{
                  padding: '10px 20px',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  backgroundColor: hierarchyStep === 'main' ? '#6c757d' : '#17a2b8',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: hierarchyStep === 'main' ? 'default' : 'pointer',
                }}
              >
                {hierarchyStep === 'idle' ? 'データを探す（キャッシュヒット）' : hierarchyStep === 'cache' ? 'データを探す（主記憶まで）' : '主記憶まで見たあと'}
              </button>
              <button
                type="button"
                onClick={() => setHierarchyStep('idle')}
                style={{
                  padding: '10px 20px',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                最初からやり直す
              </button>
            </div>
          </div>

          {hierarchyStep === 'cache' && (
            <p style={{ marginTop: '16px', marginBottom: '0', fontSize: '14px', color: '#28a745' }}>
              キャッシュにあったので、ここで終わり（速い）。
            </p>
          )}
          {hierarchyStep === 'main' && (
            <p style={{ marginTop: '16px', marginBottom: '0', fontSize: '14px', color: '#d97706' }}>
              キャッシュになかったので、主記憶まで取りに行った（遅い）。
            </p>
          )}

          <p style={{ marginTop: '20px', fontWeight: 'bold', marginBottom: '8px' }}>記憶装置の種類と役割</p>
          <p style={{ marginTop: '0', marginBottom: '8px', fontSize: '14px', color: '#555' }}>
            上は「CPUに近い順」の並び。それぞれの役割は次のとおりである。
          </p>
          <ul style={{ marginTop: '0' }}>
            <li><strong>レジスタ</strong>：計算の途中結果や、今実行している命令を置く。CPUの内部にある。</li>
            <li><strong>キャッシュメモリ</strong>：主記憶の写しを置き、よく使うデータに素早くアクセスするため。</li>
            <li><strong>主記憶（RAM）</strong>：今動かしているプログラムとそのデータを置く。電源を切ると消える。</li>
            <li><strong>補助記憶（SSD/HDD）</strong>：プログラムやファイルを長く保存する。電源を切っても残る。</li>
          </ul>
        </section>

        <section>
          <h2>メモリの場所は番地（アドレス）で指定する</h2>
          <p>
            CPUがメモリの「どこ」を読むかは<strong>アドレス（番地）</strong>で指定する。
            1本の命令は、<strong>命令部</strong>（何をするか：足す・読む・書くなど）と<strong>アドレス部</strong>（どの番地を扱うか）の2つに分かれる。
          </p>
          <div style={{ margin: '16px 0', padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fafafa', maxWidth: '100%' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>1本の命令のイメージ</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
              <span style={{ padding: '8px 12px', backgroundColor: '#e3f2fd', border: '1px solid #2196f3', borderRadius: '4px' }}>命令部</span>
              <span style={{ color: '#666' }}>（何をするか）</span>
              <span style={{ marginLeft: '8px', color: '#999' }}>+</span>
              <span style={{ padding: '8px 12px', backgroundColor: '#fff3e0', border: '1px solid #ff9800', borderRadius: '4px', marginLeft: '8px' }}>アドレス部</span>
              <span style={{ color: '#666' }}>（どの番地を扱うか）</span>
            </div>
          </div>
          <p>
            バイト単位で場所を指定する話や、アドレス空間・メモリマップは、基本情報では後半の単元で扱う。ここでは「番地で場所を指定する」イメージがわかれば十分である。
          </p>
        </section>

        <section>
          <h2>実際にアクセスする番地の求め方（相対・基底）</h2>
          <p>
            命令のアドレス部には「基準からの距離」が書かれていることがある。それに「基準の番地」を足すと、実際にアクセスする番地（実効アドレス）になる。
          </p>
          <ul>
            <li><strong>相対アドレス指定</strong>：基準が「プログラムカウンタ（PC）」＝今実行している命令の番地。実効アドレス ＝ PC ＋ アドレス部。</li>
            <li><strong>基底アドレス指定</strong>：基準が「基底レジスタ（BR）」＝プログラムごとに決めた基準の番地。実効アドレス ＝ BR ＋ アドレス部。</li>
          </ul>
          <p>
            下のデモで、基準（PCまたはBR）とアドレス部を変えて実効アドレスを確認できる。
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
              maxHeight: 'none',
              overflow: 'visible',
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
          <h2>キャッシュを考慮した平均アクセス時間</h2>
          <p>
            キャッシュに欲しいデータがある確率を<strong>ヒット率</strong>という。ヒット率を考慮した平均のアクセス時間を、ここでは「キャッシュを考慮した平均アクセス時間」として説明する。
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
              maxHeight: 'none',
              overflow: 'visible',
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

        <AdBelowRelatedTerms />

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
