'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

const FDESTEPS = [
  { phase: 'Fetch（取り出し）', desc: 'メモリから「次に実行する命令」を1本取り出す', icon: 'fas fa-download', color: '#007bff' },
  { phase: 'Decode（解読）', desc: '取り出した命令が「何をさせる命令か」を解釈する', icon: 'fas fa-search', color: '#28a745' },
  { phase: 'Execute（実行）', desc: '解読した内容に従って計算したり、メモリにアクセスしたりする', icon: 'fas fa-play', color: '#ffc107' },
]

export default function CPUPage() {
  const [memoryStep, setMemoryStep] = useState(0)
  const [fdeStep, setFdeStep] = useState(0)
  const [clockGHz, setClockGHz] = useState(1)
  const [cmdAClocks, setCmdAClocks] = useState(10)
  const [cmdARate, setCmdARate] = useState(60)
  const [cmdBClocks, setCmdBClocks] = useState(5)

  const cmdBRate = 100 - cmdARate
  const avgClocks = (cmdAClocks * cmdARate + cmdBClocks * cmdBRate) / 100
  const mips = avgClocks > 0 ? (clockGHz * 1000) / avgClocks : 0

  const faqs = [
    {
      question: 'CPUとは何ですか？',
      answer: 'CPU（Central Processing Unit）は、コンピュータの「頭脳」にあたる部品です。メモリから命令を取り出し（Fetch）、解読し（Decode）、実行する（Execute）という流れを、クロックに合わせて何億回も繰り返します。',
    },
    {
      question: '命令はどこにありますか？',
      answer: 'プログラムは起動時にハードディスクやSSDからメモリ（RAM）に読み込まれます。CPUはメモリから命令を1本ずつ取り出して実行します。CPUが毎回ディスクから読むと遅いため、「今実行する分」はメモリに置いておき、そこから読む形になっています。',
    },
    {
      question: 'クロック周波数（GHz）が高いとどうなりますか？',
      answer: 'クロック周波数が高いほど、1秒間に「取り出し→解読→実行」のサイクルが多く回ります。ただし体感速度は、コア数・キャッシュ・命令の効率（アーキテクチャ）にも左右されるため、「GHzが高い＝必ず速い」とは限りません。',
    },
    {
      question: 'コアとは何ですか？',
      answer: 'コアは、CPUの中で実際に命令を実行する「1つ分の処理ユニット」です。デュアルコアなら2つ、クアッドコアなら4つあり、複数の処理を同時に進められます。',
    },
    {
      question: 'MIPSとは何ですか？',
      answer: 'MIPS（Million Instructions Per Second）は、CPUが1秒間に実行できる命令数を百万単位で表した性能指標です。基本情報技術者試験では「MIPS＝クロック周波数÷平均命令実行クロック数」で求める問題が出題されます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="CPUとは？基本情報でも出る仕組みをわかりやすく【クロック・MIPSデモ付き】"
        description="CPUの役割とFetch/Decode/Executeの流れを初心者向けに解説。クロック周波数とMIPSの計算をデモで体感。基本情報技術者試験のイメージがつかめます。"
        datePublished="2026-02-01"
        dateModified="2026-02-01"
      />

      <TermPageHeader
        termName="CPU"
        reading="しーぴーゆー / Central Processing Unit（中央処理装置）"
        icon="fas fa-microchip"
        dateCreated="2026-02-01"
        dateModified="2026-02-01"
        summaryItems={[
          '命令はメモリの中にあり、CPUが取りに行く（デモで体験）',
          'プログラム→ハードディスク→メモリ→CPUの流れ',
          'クロック・コア・キャッシュ、MIPSについて',
        ]}
      />

      <main>
        <section>
          <h2>命令はメモリの中にあり、CPUが取りに行く</h2>
          <p>
            下のデモでは、<strong>メモリの「枠の中」に命令があり、CPUがそこに取りに行く</strong>様子が一目でわかります。
            ボタンで「次の命令を取りにいく」を押して、関係を体験してみよう。
          </p>
          <div
            className="demo-section"
            style={{
              border: '2px solid #14b8a6',
              borderRadius: '8px',
              padding: 'clamp(12px, 3vw, 20px)',
              marginTop: '16px',
              backgroundColor: '#f0fdfa',
              maxWidth: '100%',
            }}
          >
            <h3 style={{ marginTop: 0 }}>メモリとCPUの関係</h3>
            {/* 左：メモリ（大きな枠） 右：CPU 下：ボタン */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div
                style={{
                  flex: '1 1 200px',
                  minWidth: '180px',
                  border: '2px solid #14b8a6',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: '#e6f7f5',
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', color: '#0d9488' }}>メモリ（今使うものを置く机）</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['命令1', '命令2', '命令3'].map((cmd, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        backgroundColor: memoryStep >= i ? '#fff' : '#f0f0f0',
                        border: memoryStep === i ? '2px solid #14b8a6' : '1px solid #b2dfdb',
                        fontWeight: memoryStep === i ? 700 : 400,
                        boxShadow: memoryStep === i ? '0 0 0 2px rgba(20,184,166,0.3)' : 'none',
                      }}
                    >
                      {cmd}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: '0 0 auto' }}>
                {memoryStep < 3 && (
                  <div style={{ fontSize: '14px', color: '#007bff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <i className="fas fa-arrow-right" aria-hidden />
                    <span>取りにいく</span>
                  </div>
                )}
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    backgroundColor: '#e3f2fd',
                    border: '2px solid #007bff',
                    textAlign: 'center',
                  }}
                >
                  <i className="fas fa-microchip" style={{ color: '#007bff', fontSize: '28px', display: 'block', marginBottom: '8px' }} aria-hidden />
                  <span style={{ fontWeight: 'bold', fontSize: '14px' }}>CPU</span>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#555' }}>
                    {memoryStep < 3 ? `「${['命令1', '命令2', '命令3'][memoryStep]}」を取りにいった` : '3本とも取り終えた'}
                  </p>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid #b2dfdb', paddingTop: '16px' }}>
              <button
                type="button"
                onClick={() => setMemoryStep((n) => (n < 3 ? n + 1 : n))}
                disabled={memoryStep >= 3}
                style={{
                  padding: '10px 20px',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  backgroundColor: memoryStep >= 3 ? '#6c757d' : '#14b8a6',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: memoryStep >= 3 ? 'not-allowed' : 'pointer',
                }}
              >
                次の命令を取りにいく
              </button>
              <button
                type="button"
                onClick={() => setMemoryStep(0)}
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
            </div>
          </div>
        </section>

        <section>
          <h2>CPUは何をしている？</h2>
          <p>
            まず「プログラム」「ハードディスク」「メモリ」が何かをおさえておくと、CPUの役割がわかりやすくなります。
          </p>
          <p>
            <strong>プログラム</strong>は、「やることを書いた設計図」です。ゲームを動かす・文字を表示する・計算するなど、コンピュータにさせたいことを順番に書いたものです。
          </p>
          <p>
            <strong>ハードディスク</strong>（やSSD）は、「しまっておく場所」です。電源を切っても消えません。ゲームのデータ・アプリ・写真……まだ「使っていない」状態のプログラムが、ここに置いてあります。
          </p>
          <p>
            <strong>メモリ</strong>は、「今使うものを置く机」です。電源を切ると消えます。CPUのすぐ近くにあります。プログラムは、ハードディスク → メモリにコピーされてから使われます。
          </p>
          <p>
            では<strong>CPU</strong>は？ CPUは「考えて実行する人」のようなものです。メモリにある命令を、1つ取りに行く → 実行する → また次を取りに行く、を繰り返します。CPUはハードディスクには直接行きません。必ずメモリから命令を取り出して実行します。
          </p>
        </section>

        <section>
          <h2>CPUの3ステップ：取り出し → 解読 → 実行</h2>
          <p>
            命令は<strong>メモリ（RAM）</strong>に置かれている。プログラムは起動時に<strong>ハードディスク／SSD</strong>から<strong>メモリ</strong>に読み込まれる。CPUは、そのメモリ上の命令を1本ずつ次のように処理する。
          </p>
          <ol>
            <li><strong>Fetch（取り出し）</strong>：メモリから「次に実行する命令」を1本取り出す。</li>
            <li><strong>Decode（解読）</strong>：取り出した命令が「何をさせる命令か」を解釈する。</li>
            <li><strong>Execute（実行）</strong>：解読した内容に従って計算したり、メモリや入出力にアクセスしたりする。</li>
          </ol>
          <p>
            この一連の流れを、下のデモで「今どの段階か」を追いながら確認してみよう。
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
            <h3 style={{ marginTop: 0 }}>命令の流れを体験</h3>
            {FDESTEPS.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                  padding: 'clamp(10px, 2vw, 16px)',
                  backgroundColor: i <= fdeStep ? '#fff' : '#e9ecef',
                  border: `2px solid ${i === fdeStep ? step.color : '#dee2e6'}`,
                  borderRadius: '8px',
                  opacity: i <= fdeStep ? 1 : 0.6,
                  transition: 'all 0.3s',
                }}
              >
                <i className={step.icon} style={{ color: step.color, fontSize: 'clamp(18px, 4vw, 24px)' }} aria-hidden />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong style={{ color: i === fdeStep ? step.color : undefined }}>{step.phase}</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: 'clamp(14px, 2.5vw, 15px)' }}>{step.desc}</p>
                </div>
                {i === fdeStep && (
                  <span
                    style={{
                      padding: '4px 12px',
                      backgroundColor: step.color,
                      color: '#fff',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    実行中
                  </span>
                )}
                {i < fdeStep && (
                  <span
                    style={{
                      padding: '4px 12px',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    完了
                  </span>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
              <button
                type="button"
                onClick={() => setFdeStep((n) => (n < FDESTEPS.length - 1 ? n + 1 : n))}
                disabled={fdeStep === FDESTEPS.length - 1}
                style={{
                  padding: '10px 20px',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  backgroundColor: fdeStep === FDESTEPS.length - 1 ? '#6c757d' : '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: fdeStep === FDESTEPS.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                次のステップ
              </button>
              <button
                type="button"
                onClick={() => setFdeStep(0)}
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
            </div>
          </div>
        </section>

        <section>
          <h2>タイミングを決める：クロック</h2>
          <p>
            <strong>クロック</strong>は、CPUが「次に進んでいいよ」と合図する<strong>リズム</strong>です。
            プログラムは「何を」するかを決め、クロックは「いつ」進めるかを決めます。
            クロック周波数（例：3GHz）が高いほど、1秒間に刻まれる回数は増えます。
          </p>
        </section>

        <section>
          <h2>同時に考えられる人数：コア</h2>
          <p>
            <strong>コア</strong>は、CPUのなかで「考えて実行する人」が何人分いるか、というイメージです。
            1人で考える（シングルコア）、2人で考える（デュアルコア）、4人で考える（クアッドコア）などがあり、コアが多いほど複数の処理を同時に進められます。
          </p>
        </section>

        <section>
          <h2>すぐ取り出せる引き出し：キャッシュ</h2>
          <p>
            <strong>キャッシュ</strong>は、メモリよりさらにCPUに近いところにある「引き出し」です。
            よく使うデータや命令の<strong>コピー</strong>をここに置いておくので、毎回メモリまで探しに行かなくてすみ、速く動きます。
          </p>
        </section>

        <section>
          <h2>どれくらい速い？（MIPS）</h2>
          <p>
            <strong>クロック</strong>が「いつ進めるか」を決め、<strong>クロック周波数</strong>（例：3GHz）が高いほど1秒間にこなせる処理は増えます。
            <strong>MIPS</strong>は、1秒間に実行できる命令数を百万単位で表した指標で、基本情報技術者試験でも計算問題が出ます。
          </p>
          <p>
            <strong>この数字、いつ気にすればいいの？</strong>
            クロック周波数が高いと単純な処理が速くなりやすい。一方、低くても<strong>キャッシュ</strong>が効いていると体感は速い場合があります。スマホとPCでは省電力と性能のバランスが違うので、同じ数字でも「速い」の意味合いは変わります。
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>
            ※ 次の「MIPS計算デモ」は、数字や式が少し難しめです。計算が苦手な人は飛ばして、次の「全体のイメージのまとめ」へ進んで大丈夫です。
          </p>
          <ul>
            <li><strong>MIPS</strong> ＝ クロック周波数 ÷ 平均命令実行クロック数</li>
            <li>例：1GHz、1命令あたり平均8クロックなら、MIPS ＝ 1,000,000,000 ÷ 8 ＝ <strong>125MIPS</strong></li>
          </ul>
          <p>
            下のデモで、クロック周波数と「命令ごとのクロック数・出現率」を変えると、平均クロック数とMIPSがどう変わるか確認できます。
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
            <h3 style={{ marginTop: 0 }}>MIPS計算デモ</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '16px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px' }}>
                <span style={{ fontSize: '14px' }}>クロック周波数（GHz）</span>
                <select
                  value={clockGHz}
                  onChange={(e) => setClockGHz(Number(e.target.value))}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                >
                  {[0.5, 1, 2, 3, 4].map((g) => (
                    <option key={g} value={g}>{g} GHz</option>
                  ))}
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                <span style={{ fontSize: '14px' }}>命令A：クロック数</span>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={cmdAClocks}
                  onChange={(e) => setCmdAClocks(Number(e.target.value) || 1)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                <span style={{ fontSize: '14px' }}>命令A：出現率（%）</span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={cmdARate}
                  onChange={(e) => setCmdARate(Number(e.target.value) || 0)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px' }}>
                <span style={{ fontSize: '14px' }}>命令B：クロック数</span>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={cmdBClocks}
                  onChange={(e) => setCmdBClocks(Number(e.target.value) || 1)}
                  style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
                />
              </label>
            </div>
            <p style={{ fontSize: '14px', color: '#555' }}>
              命令Bの出現率は {cmdBRate}%（100 − 命令Aの出現率）として計算しています。
            </p>
            <div
              style={{
                marginTop: '16px',
                padding: '16px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '1px solid #dee2e6',
              }}
            >
              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>計算結果</p>
              <p style={{ margin: '4px 0' }}>
                平均クロック数 ＝ {cmdAClocks}×{cmdARate}% ＋ {cmdBClocks}×{cmdBRate}% ＝{' '}
                <strong>{(avgClocks * 10) / 10} クロック/命令</strong>
              </p>
              <p style={{ margin: '4px 0' }}>
                MIPS ＝ {clockGHz}×1,000 ÷ {avgClocks.toFixed(1)} ＝ <strong>{Math.round(mips)} MIPS</strong>
              </p>
              <p style={{ margin: '12px 0 0 0', fontSize: '14px', color: '#555' }}>
                1秒間に約 <strong>{mips >= 1000 ? `${(mips / 1000).toFixed(1)}億` : `${Math.round(mips)}百万`}</strong>{' '}
                命令実行できるイメージです。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>全体のイメージのまとめ</h2>
          <p>
            CPUは「メモリに並んだ命令」を、<strong>クロック</strong>に合わせて
            <strong>取り出し（Fetch）→ 解読（Decode）→ 実行（Execute）</strong>する。
            この流れを、何コアかで並列に、<strong>キャッシュ</strong>でメモリの遅さを補いながら繰り返している。
            <strong>クロック</strong>が活きるのは、キャッシュが効いているときだという感覚を持っておくとよい。
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
                  <td><Link href="/terms/server" className="term-name">サーバー</Link></td>
                  <td>CPUを搭載したコンピュータが、クライアントにサービスを提供する役割</td>
                </tr>
                <tr>
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>プログラム同士が「命令」のようにやり取りする窓口</td>
                </tr>
                <tr>
                  <td><Link href="/terms/memory" className="term-name">メモリ（RAM）</Link></td>
                  <td>命令やデータを置く場所。アドレス指定・レジスタ・実効アクセス時間はメモリのページで解説</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdBelowRelatedTerms />

        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
