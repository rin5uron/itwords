'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import PageSummary from '@/app/components/PageSummary'
import FAQAccordion from '@/app/components/FAQAccordion'

const FDESTEPS = [
  { phase: 'Fetch（取り出し）', desc: 'メモリから「次に実行する命令」を1本取り出す', icon: 'fas fa-download', color: '#007bff' },
  { phase: 'Decode（解読）', desc: '取り出した命令が「何をさせる命令か」を解釈する', icon: 'fas fa-search', color: '#28a745' },
  { phase: 'Execute（実行）', desc: '解読した内容に従って計算したり、メモリにアクセスしたりする', icon: 'fas fa-play', color: '#ffc107' },
]

export default function CPUPage() {
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
        datePublished="2026-01-26"
        dateModified="2026-01-26"
      />

      <TermHeader
        termName="CPU"
        reading="しーぴーゆー / Central Processing Unit（中央処理装置）"
        icon="fas fa-microchip"
        dateCreated="2026-01-26"
        dateModified="2026-01-26"
      />

      <div className="date-info-toc">
        <span>作成日: 2026-01-26 | 最終更新: 2026-01-26</span>
      </div>

      <TableOfContents />

      <main>
        <PageSummary
          items={[
            'CPUの役割（命令の取り出し・解読・実行）',
            'Fetch → Decode → Execute の流れをデモで体験',
            '命令はメモリから読む理由',
            'クロック・コア・キャッシュのイメージ',
            '基本情報で出るクロック周波数とMIPSの計算デモ',
          ]}
        />

        <section>
          <h2>概要</h2>
          <p>
            <strong>CPU</strong>（Central Processing Unit、中央処理装置）は、
            <strong>コンピュータの「頭脳」</strong>にあたる部品である。
            プログラムの命令を読み取り、計算・判断・メモリの読み書きなどを実行する。
          </p>
          <p>
            CPUは「<strong>取り出し（Fetch）→ 解読（Decode）→ 実行（Execute）</strong>」という3ステップを、
            クロックという「タイミングのリズム」に合わせて、1秒間に何億回も繰り返している。
            このページでは、その全体の流れと、基本情報技術者試験でも出る「クロック周波数」「MIPS」を、
            イメージしやすいデモとともに説明する。
          </p>
        </section>

        <section>
          <h2>CPUの3ステップ：Fetch → Decode → Execute</h2>
          <p>
            CPUはメモリに置かれた命令を、1本ずつ次のように処理する。
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
          <h2>命令はメモリから読む</h2>
          <p>
            プログラムは起動時に、ハードディスクやSSDから<strong>メモリ（RAM）</strong>に読み込まれる。
            CPUが実行する「命令」は、このメモリ上に並んでいる。
          </p>
          <p>
            CPUが毎回ディスクから読むと非常に遅いため、
            「今実行する分」はメモリに置いておき、CPUは<strong>メモリから</strong>命令を1本ずつ取り出して実行する。
            メモリはディスクよりずっと速いので、処理がスムーズになる。
          </p>
          <p>
            メモリの「どの位置（アドレス）に何があるか」や、CPUのすぐそばにある「レジスタ」については、
            別ページ（メモリの解説）でアドレス指定やレジスタとあわせて説明する予定である。
          </p>
        </section>

        <section>
          <h2>クロック・コア・キャッシュのイメージ</h2>

          <h3>クロック（クロック周波数）</h3>
          <p>
            「いつ次のステップに進むか」のタイミングを決めているのが<strong>クロック（クロック信号）</strong>である。
            プログラムは「何を」するかを決めるが、クロックは「いつ」進めるかを決める。
            例：3GHzなら1秒間に約30億回、クロックが刻まれる。
          </p>

          <h3>コア</h3>
          <p>
            <strong>コア</strong>は、CPUの中で実際に命令を実行する「1つ分の処理ユニット」である。
            デュアルコアなら2つ、クアッドコアなら4つあり、複数の処理を同時に進められる。
          </p>

          <h3>キャッシュ</h3>
          <p>
            <strong>キャッシュ</strong>は、メモリ（主記憶）より速いが容量の小さい記憶領域で、CPUの近くにある。
            主記憶にある「今さっき使った／これから使いそうな」データや命令の<strong>コピー</strong>をここに置いておき、
            毎回メモリまで取りに行く回数を減らして待ち時間を短くする。本物のデータは主記憶にあり、キャッシュはその写しを置く場所である。
          </p>
        </section>

        <section>
          <h2>クロック周波数とMIPSの計算（基本情報で出る）</h2>
          <p>
            基本情報技術者試験では、<strong>クロック周波数</strong>と<strong>MIPS</strong>（1秒間に実行できる命令数を百万単位で表した指標）の計算が出題される。
          </p>
          <ul>
            <li><strong>MIPS</strong> ＝ クロック周波数 ÷ 平均命令実行クロック数</li>
            <li>例：1GHz、1命令あたり平均8クロックなら、MIPS ＝ 1,000,000,000 ÷ 8 ＝ <strong>125MIPS</strong></li>
          </ul>
          <p>
            下のデモで、クロック周波数と「命令ごとのクロック数・出現率」を変えると、平均クロック数とMIPSがどう変わるか確認できる。
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
            この流れを、何コアかで並列に、キャッシュでメモリの遅さを補いながら繰り返している。
          </p>
          <p>
            基本情報技術者試験では、この「クロック周波数」と「1命令あたりのクロック数」から
            <strong>MIPS</strong>を求める問題が出るので、上のデモで式と感覚をセットで押さえておくとよい。
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

        <FAQAccordion faqs={faqs} />
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
