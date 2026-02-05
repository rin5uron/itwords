'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

const HIERARCHY_LAYERS = [
  { name: 'レジスタ', desc: 'CPUのすぐそば。', desc2: '最も速いが数は少ない。', icon: 'fas fa-microchip', color: '#007bff' },
  { name: 'キャッシュ', desc: 'メモリのコピーを置く。', desc2: 'メモリより速い。', icon: 'fas fa-bolt', color: '#28a745' },
  { name: 'メモリ（RAM）', desc: 'プログラムとデータを置く作業場。', desc2: '電源を切ると消える。', icon: 'fas fa-memory', color: '#ffc107' },
  { name: '補助記憶（SSD/HDD）', desc: '長く保存する倉庫。', desc2: '遅いが大容量。', icon: 'fas fa-hdd', color: '#6c757d' },
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
      question: 'メモリとは何ですか？',
      answer: 'メモリ（RAM）は、CPUが「今」実行するプログラムやデータを一時的に置く作業場です。SSD/HDDから読み込んだ内容をここに置き、CPUはメモリから命令やデータを読み書きします。電源を切ると消える記憶装置です。',
    },
    {
      question: 'アドレスとは何ですか？',
      answer: 'アドレス（番地）は、メモリ上の「どの位置」かを表す番号です。CPUは「このアドレスに探しに行け」「このアドレスに書け」のように指定してメモリにアクセスします。命令には「何をするか」の命令部と「どのアドレスを扱うか」のアドレス部があります。',
    },
    {
      question: 'キャッシュはコピーですか？',
      answer: 'はい。キャッシュにはメモリのデータのコピーを置きます。本物はメモリにあり、よく使うデータの写しをCPUの近くに置いて、メモリまで探しに行く回数を減らし、速くしています。',
    },
    {
      question: 'ヒット率（近くにあった割合）とは？',
      answer: 'ヒット率は、探したデータがキャッシュ（近く）にあった割合です。高いほどすぐ見つかることが多く、CPUが待たずにすむので、全体が速く動きます。「だいたいどれくらい待つか」は、この割合とキャッシュ・メモリの探しに行く時間で計算できます。',
    },
    {
      question: '相対アドレス指定と基底アドレス指定の違いは？',
      answer: '「場所の指定のしかた」が違います。相対は「今いるところからどれだけ離れているか」、基底は「決めた基準の場所からどれだけ離れているか」で、実際に探しに行く番地を決めます。',
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

      <TermPageHeader
        termName="メモリ"
        reading="めもり / Memory（主記憶・RAM）"
        icon="fas fa-memory"
        dateCreated="2026-02-01"
        dateModified="2026-02-01"
        summaryItems={[
          'メモリ＝CPUが今使う情報を置く場所',
          'データはどこから探される？（キャッシュ・メモリデモ）',
          'アドレス・命令部とアドレス部',
          '近くにあった割合（ヒット率）・だいたいどれくらい待つか',
          '割り込み・メモリインターリーブの概要',
        ]}
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>メモリ</strong>（RAM）は、
            <strong>CPUが仕事をするために、今使う情報を置いておく場所</strong>です。
            CPUはここから<strong>命令</strong>と<strong>データ</strong>を読み書き（探しに行く・書く）します。
          </p>
        </section>

        <section>
          <h2>データはどこから探される？</h2>
          <p>
            CPUがデータを探しに行くとき、まず<strong>キャッシュ</strong>（近く）を見ます。
            あればそこで終わり（速い）。なければ<strong>メモリ</strong>まで探しに行きます（ちょっと時間がかかる）。
            下のデモで、その様子を体験できる。
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
            <h3 style={{ marginTop: 0 }}>キャッシュとメモリ</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
              {/* 左：表示エリア（キャッシュ・メモリ・結果メッセージ） */}
              <div
                style={{
                  flex: '1 1 240px',
                  minWidth: '200px',
                  border: '2px solid #b2dfdb',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: '#fff',
                }}
              >
                <div style={{ marginBottom: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      backgroundColor: hierarchyStep === 'cache' ? '#e8f5e9' : hierarchyStep === 'main' ? '#fff3e0' : '#f5f5f5',
                      border: `2px solid ${hierarchyStep === 'cache' ? '#28a745' : '#e0e0e0'}`,
                    }}
                  >
                    <i className="fas fa-bolt" style={{ color: '#28a745' }} aria-hidden />
                    <strong>キャッシュ</strong>
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      backgroundColor: hierarchyStep === 'main' ? '#fffde7' : '#f5f5f5',
                      border: `2px solid ${hierarchyStep === 'main' ? '#ffc107' : '#e0e0e0'}`,
                    }}
                  >
                    <i className="fas fa-memory" style={{ color: '#ffc107' }} aria-hidden />
                    <strong>メモリ</strong>
                  </div>
                </div>
                {/* 結果メッセージ（枠内） */}
                {hierarchyStep !== 'idle' && (
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: hierarchyStep === 'cache' ? '#e8f5e9' : '#fff3e0',
                      border: `1px solid ${hierarchyStep === 'cache' ? '#28a745' : '#ff9800'}`,
                      fontSize: '14px',
                      color: hierarchyStep === 'cache' ? '#1b5e20' : '#e65100',
                      fontWeight: 'bold',
                    }}
                  >
                    {hierarchyStep === 'cache'
                      ? '近くにあった！すぐ見つかった（はやい）'
                      : '近くになかった…メモリまで探しに行く（ちょっと時間かかる）'}
                  </div>
                )}
              </div>
              {/* 右：操作ボタン */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '0 0 auto', justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={() => setHierarchyStep(hierarchyStep === 'idle' ? 'cache' : hierarchyStep === 'cache' ? 'main' : 'idle')}
                  style={{
                    padding: '12px 24px',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    backgroundColor: '#17a2b8',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {hierarchyStep === 'idle' ? 'データを探す' : hierarchyStep === 'cache' ? 'もう一度探す（今度はメモリまで）' : '最初からやり直す'}
                </button>
                {hierarchyStep !== 'idle' && (
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
                    リセット
                  </button>
                )}
              </div>
            </div>
          </div>

          <p style={{ marginTop: '20px', fontWeight: 'bold', marginBottom: '8px' }}>記憶装置の種類と役割</p>
          <p style={{ marginTop: '0', marginBottom: '8px', fontSize: '14px', color: '#555' }}>
            CPUに近い順に「探しに行く」先が並んでいます。
          </p>
          <ul style={{ marginTop: '0' }}>
            <li><strong>レジスタ</strong>：計算の途中結果や、今実行している命令を置く。CPUの内部にある。</li>
            <li><strong>キャッシュ</strong>：メモリの写しを置き、よく使うデータに素早く探しに行けるようにする。</li>
            <li><strong>メモリ（RAM）</strong>：今動かしているプログラムとそのデータを置く。電源を切ると消える。</li>
            <li><strong>補助記憶（SSD/HDD）</strong>：プログラムやファイルを長く保存する。電源を切っても残る。</li>
          </ul>
        </section>

        <section>
          <h2>メモリの場所は番地（アドレス）で指定する</h2>
          <p>
            CPUがメモリの「どこ」に探しに行くかは<strong>アドレス（番地）</strong>で指定します。
            1本の命令は、<strong>命令部</strong>（何をするか：足す・読む・書くなど）と<strong>アドレス部</strong>（どの番地を扱うか）の2つに分かれます。
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
          <h2>場所の指定のしかた（相対・基底）</h2>
          <p>
            「どの番地を探しに行くか」の<strong>指定のしかた</strong>がいくつかあります。
            相対アドレス指定は「今いるところからどれだけ離れているか」、基底アドレス指定は「決めた基準の場所からどれだけ離れているか」で場所を表します。
            細かい計算より、「基準が違う」と覚えておけば大丈夫です。
          </p>
          <p>
            下のデモで、基準（PCまたはBR）とアドレス部を変えると、実際に探しに行く番地がどう変わるか確認できます。
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
          <h2>近くにあった割合（ヒット率）</h2>
          <p>
            <strong>ヒット率</strong>は、<strong>探したデータが近く（キャッシュ）にあった割合</strong>です。
            ヒット率が高いと、すぐ見つかることが多く、CPUが待たなくてすむので、全体が速く動きます。
            「できるだけ近くに欲しいデータがあると楽」— それを数字で表したのがヒット率です。
          </p>
          <p>
            下のデモで、キャッシュ・メモリの「探しに行くのにかかる時間」と「近くにあった割合」を変えると、<strong>だいたいどれくらい待つか</strong>（平均）がどう変わるか確認できます。
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
            <h3 style={{ marginTop: 0 }}>だいたいどれくらい待つか（平均）</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '16px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                <span style={{ fontSize: '14px' }}>キャッシュに探しに行く時間（ns）</span>
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
                <span style={{ fontSize: '14px' }}>メモリに探しに行く時間（ns）</span>
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
                <span style={{ fontSize: '14px' }}>近くにあった割合（%）</span>
                <select
                  value={hitRate}
                  onChange={(e) => setHitRate(Number(e.target.value))}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                >
                  {[50, 70, 80, 90, 95, 99].map((v) => (
                    <option key={v} value={v}>{v}%</option>
                  ))}
                </select>
              </label>
            </div>
            <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>結果</p>
              <p style={{ margin: '4px 0' }}>
                だいたいどれくらい待つか ＝ {hitRate}%×{cacheTime} ＋ (1－{hitRate}%)×{mainTime} ＝{' '}
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


        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
