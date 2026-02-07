'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export default function MipsPage() {
  const [executedInstructions1, setExecutedInstructions1] = useState(0)
  const [executedInstructions10, setExecutedInstructions10] = useState(0)
  const [executedInstructions100, setExecutedInstructions100] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  // デモの実行
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setExecutedInstructions1((prev) => {
        if (prev >= 100) return 100
        return prev + 1
      })
      setExecutedInstructions10((prev) => {
        if (prev >= 1000) return 1000
        return prev + 10
      })
      setExecutedInstructions100((prev) => {
        if (prev >= 10000) return 10000
        return prev + 100
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isRunning])

  const startDemo = () => {
    setExecutedInstructions1(0)
    setExecutedInstructions10(0)
    setExecutedInstructions100(0)
    setIsRunning(true)
  }

  const stopDemo = () => {
    setIsRunning(false)
  }

  const resetDemo = () => {
    setIsRunning(false)
    setExecutedInstructions1(0)
    setExecutedInstructions10(0)
    setExecutedInstructions100(0)
  }

  // 計算デモの状態
  const [mipsValue, setMipsValue] = useState('10')
  const [executionTime, setExecutionTime] = useState('0.1')

  // MIPSから命令実行時間を計算
  const calculateExecutionTime = (mips: string) => {
    const mipsNum = parseFloat(mips)
    if (isNaN(mipsNum) || mipsNum <= 0) return '---'
    const timeInMicroseconds = 1 / mipsNum
    return timeInMicroseconds.toFixed(3)
  }

  // 命令実行時間からMIPSを計算
  const calculateMips = (time: string) => {
    const timeNum = parseFloat(time)
    if (isNaN(timeNum) || timeNum <= 0) return '---'
    const mips = 1 / timeNum
    return mips.toFixed(2)
  }

  // 単位階段デモの状態
  const [currentUnit, setCurrentUnit] = useState(0)

  const units = [
    { name: 'キロ (kilo)', symbol: 'k', value: '10³', multiplier: '1000', example: '1km = 1000m' },
    { name: '基本単位', symbol: '', value: '10⁰', multiplier: '1', example: '1m = 1m' },
    { name: 'ミリ (milli)', symbol: 'm', value: '10⁻³', multiplier: '1/1000', example: '1mm = 0.001m' },
    { name: 'マイクロ (micro)', symbol: 'μ', value: '10⁻⁶', multiplier: '1/1,000,000', example: '1μs = 0.000001秒' },
    { name: 'ナノ (nano)', symbol: 'n', value: '10⁻⁹', multiplier: '1/1,000,000,000', example: '1ns = 0.000000001秒' },
    { name: 'ピコ (pico)', symbol: 'p', value: '10⁻¹²', multiplier: '1/1,000,000,000,000', example: '1ps = 0.000000000001秒' },
  ]

  const goDown = () => {
    if (currentUnit < units.length - 1) {
      setCurrentUnit(currentUnit + 1)
    }
  }

  const goUp = () => {
    if (currentUnit > 0) {
      setCurrentUnit(currentUnit - 1)
    }
  }

  const resetUnits = () => {
    setCurrentUnit(0)
  }

  const faqs = [
    {
      question: 'MIPSの値が大きいほど速いコンピュータですか？',
      answer: 'はい、MIPSの値が大きいほど、1秒間により多くの命令を実行できるため、処理が速いと言えます。ただし、MIPSだけでは性能を完全に評価できません。命令の複雑さやメモリアクセス速度なども影響するためです。',
    },
    {
      question: '基本情報技術者試験ではどう出題されますか？',
      answer: 'MIPSと平均命令実行時間の計算問題がよく出ます。公式「平均命令実行時間（μs）= 1 ÷ MIPS値」を覚えておきましょう。また、クロック周波数やCPIとの関係を問う問題もあります。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="MIPSとは？小学生でもわかる【速度デモ＋単位計算】"
        description="MIPSとは？アニメーションデモで命令実行速度を今すぐ体感。なぜマイクロ秒を使うのか、10のマイナス6乗の意味、計算方法まで初心者向けに解説します。"
        datePublished="2026-02-07"
        dateModified="2026-02-07"
      />

      <TermPageHeader
        termName="MIPS"
        reading="ミップス / Million Instructions Per Second"
        icon="fas fa-tachometer-alt"
        dateCreated="2026-02-07"
        dateModified="2026-02-07"
        summaryItems={[
          'MIPSとは何か？なぜこの単位が必要なのか',
          'アニメーションデモで命令実行速度の違いを体験',
          'MIPS ↔ 平均命令実行時間の計算方法',
          '単位の階段デモでマイクロ秒・10のマイナス6乗を理解'
        ]}
      />

      <main>
        <section>
          <h2>MIPSとは？</h2>

          <p>
            <strong>MIPS</strong>（ミップス）とは、
            <strong>Million Instructions Per Second</strong>（100万命令/秒）の略で、
            <strong>コンピュータの処理速度を表す単位</strong>です。
          </p>

          <p>
            コンピュータは、プログラムを「命令」の集まりとして実行します。
            例えば、「2つの数を足す」「データをメモリに保存する」といった1つ1つの処理が「命令」です。
          </p>

          <p>
            MIPSは、<strong>1秒間に何百万回の命令を実行できるか</strong>を表します。
          </p>

          <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666', marginBottom: '8px' }}>
            下の枠は、プログラミングの画面（ターミナル）をイメージした表示です。数値や式を「画面に出る形」で見せることで、現場で使われるツールに近い形で理解できます。
          </p>
          <div className="code-example">
            <pre><code>{`MIPSの例:

1 MIPS  = 1秒間に 100万回 命令を実行
10 MIPS = 1秒間に 1000万回 命令を実行
100 MIPS = 1秒間に 1億回 命令を実行`}</code></pre>
          </div>

          <p>
            なぜこの単位が必要なのでしょうか？
          </p>

          <p>
            それは、<strong>コンピュータの処理速度を比較するため</strong>です。
            10MIPSのコンピュータと100MIPSのコンピュータでは、
            100MIPSの方が10倍速く処理を終えることができます。
          </p>

          <div className="key-point-box">
            <strong><i className="fas fa-lightbulb" aria-hidden /> ポイント：</strong>
            MIPSは「1秒間に実行できる命令の数」を表す単位。
            値が大きいほど処理が速いコンピュータと言えます。
          </div>
        </section>

        <section>
          <h2>命令実行速度の意味を体験しよう</h2>
          <p>
            「命令実行が速い」とは、具体的にどういうことでしょうか？
            下のデモで、1MIPS、10MIPS、100MIPSの速度の違いを体験してみましょう。
          </p>

          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: 'clamp(15px, 3vw, 20px)',
            marginTop: '20px',
            backgroundColor: '#f8f9fa',
            maxWidth: '100%'
          }}>
            <h3>命令実行速度デモ</h3>
            <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)' }}>
              同じ時間（5秒間）でどれだけ多くの命令を実行できるかを比較します。
            </p>

            <div style={{ marginTop: '20px' }}>
              {/* 1 MIPS */}
              <div style={{
                marginBottom: '20px',
                padding: 'clamp(12px, 3vw, 15px)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '2px solid #17a2b8'
              }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#17a2b8', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                  1 MIPS（100万回/秒）
                </h4>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    height: '30px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${(executedInstructions1 / 100) * 100}%`,
                      height: '100%',
                      backgroundColor: '#17a2b8',
                      transition: 'width 0.05s linear'
                    }} />
                  </div>
                  <div style={{
                    minWidth: '100px',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 'clamp(13px, 3.2vw, 14px)'
                  }}>
                    {executedInstructions1.toLocaleString()} 個完了
                  </div>
                </div>
              </div>

              {/* 10 MIPS */}
              <div style={{
                marginBottom: '20px',
                padding: 'clamp(12px, 3vw, 15px)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '2px solid #ffc107'
              }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#ffc107', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                  10 MIPS（1000万回/秒）
                </h4>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    height: '30px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${(executedInstructions10 / 1000) * 100}%`,
                      height: '100%',
                      backgroundColor: '#ffc107',
                      transition: 'width 0.05s linear'
                    }} />
                  </div>
                  <div style={{
                    minWidth: '100px',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 'clamp(13px, 3.2vw, 14px)'
                  }}>
                    {executedInstructions10.toLocaleString()} 個完了
                  </div>
                </div>
              </div>

              {/* 100 MIPS */}
              <div style={{
                marginBottom: '20px',
                padding: 'clamp(12px, 3vw, 15px)',
                backgroundColor: '#fff',
                borderRadius: '8px',
                border: '2px solid #28a745'
              }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#28a745', fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                  100 MIPS（1億回/秒）
                </h4>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    flex: '1',
                    minWidth: '200px',
                    height: '30px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${(executedInstructions100 / 10000) * 100}%`,
                      height: '100%',
                      backgroundColor: '#28a745',
                      transition: 'width 0.05s linear'
                    }} />
                  </div>
                  <div style={{
                    minWidth: '100px',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 'clamp(13px, 3.2vw, 14px)'
                  }}>
                    {executedInstructions100.toLocaleString()} 個完了
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '10px',
              marginTop: '20px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={startDemo}
                disabled={isRunning}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: isRunning ? '#6c757d' : '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  flex: '1',
                  minWidth: '100px'
                }}
              >
                スタート
              </button>
              <button
                onClick={stopDemo}
                disabled={!isRunning}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: !isRunning ? '#6c757d' : '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: !isRunning ? 'not-allowed' : 'pointer',
                  flex: '1',
                  minWidth: '100px'
                }}
              >
                ストップ
              </button>
              <button
                onClick={resetDemo}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  flex: '1',
                  minWidth: '100px'
                }}
              >
                リセット
              </button>
            </div>

            <p style={{ marginTop: '15px', fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#6c757d' }}>
              <strong>→ MIPSが10倍になると、同じ時間で10倍の処理ができる！</strong>
            </p>
          </div>

          <div className="key-point-box" style={{ marginTop: '20px' }}>
            <strong><i className="fas fa-lightbulb" aria-hidden /> わかったこと：</strong>
            「命令実行が速い = 処理が終わるのが速い」ということ。
            MIPSの値が大きいほど、同じ時間でより多くの処理を完了できます。
          </div>
        </section>

        <section>
          <h2>平均命令実行時間との関係</h2>
          <p>
            MIPSは「1秒間に何回命令を実行できるか」を表しますが、
            逆に「1つの命令を実行するのに何秒かかるか」を計算することもできます。
          </p>

          <p>
            この「1つの命令を実行するのにかかる時間」を<strong>平均命令実行時間</strong>と呼びます。
          </p>

          <div className="code-example">
            <pre><code>{`計算式（シンプル）:
平均命令実行時間（マイクロ秒） = 1 ÷ MIPS値

例: 10 MIPS → 1 ÷ 10 = 0.1 マイクロ秒（μs）

なぜこれでよいか:
MIPSは「100万回/秒」の単位。1命令の時間 = 1秒 ÷ (MIPS×100万) = 10⁻⁶/MIPS 秒。
10⁻⁶ 秒 = 1マイクロ秒なので、答は「1/MIPS マイクロ秒」で表せる。`}</code></pre>
          </div>

          <h3>なぜマイクロ秒を使うのか？</h3>
          <p>
            上の例を見てください。10MIPSの場合、1命令あたりの実行時間は「0.0000001秒」になります。
          </p>

          <p>
            この数値は<strong>とても小さくて読みにくい</strong>ですよね。
            そこで、<strong>マイクロ秒（μs）</strong>という単位を使います。
          </p>

          <p>
            マイクロ秒は「100万分の1秒」なので、上の例は「0.1マイクロ秒」と表現できます。
            これなら分かりやすいですね！
          </p>

          <div className="key-point-box">
            <strong><i className="fas fa-lightbulb" aria-hidden /> ポイント：</strong>
            MIPSは「100万回/秒」という単位なので、1命令あたりの時間は「1秒 ÷ 100万」で計算される。
            この結果は非常に小さい数になるため、マイクロ秒（μs = 10⁻⁶秒）を使うと分かりやすくなる。
          </div>

          <h3>計算デモ</h3>
          <p>
            下のデモでは、<strong>MIPSと平均命令実行時間を相互に変換</strong>できます。
            MIPSを入力すると平均命令実行時間が自動で出ます。逆に平均命令実行時間を入力するとMIPSが出ます。
            どちらかの入力欄を変えると、もう一方が自動で更新されます。
          </p>

          <div style={{
            border: '2px solid #28a745',
            borderRadius: '8px',
            padding: 'clamp(15px, 3vw, 20px)',
            marginTop: '20px',
            backgroundColor: '#f8f9fa',
            maxWidth: '100%'
          }}>
            <h4>MIPS ↔ 平均命令実行時間 計算デモ</h4>
            <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', marginTop: '10px' }}>
              どちらかの入力欄を変えると、もう一方が自動で更新されます。MIPSか平均命令実行時間のどちらかを入力すれば、相互に変換できます。
            </p>

            <div style={{ marginTop: '20px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 3.5vw, 16px)'
                }}>
                  MIPS値を入力：
                </label>
                <input
                  type="number"
                  value={mipsValue}
                  onChange={(e) => {
                    setMipsValue(e.target.value)
                    setExecutionTime(calculateExecutionTime(e.target.value))
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    padding: '10px',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    border: '1px solid #ced4da',
                    borderRadius: '5px'
                  }}
                />
                <p style={{ marginTop: '10px', fontSize: 'clamp(13px, 3.2vw, 14px)' }}>
                  → 平均命令実行時間：<strong>{executionTime} マイクロ秒（μs）</strong>
                </p>
              </div>

              <div style={{
                borderTop: '1px solid #dee2e6',
                paddingTop: '20px',
                marginTop: '20px'
              }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 3.5vw, 16px)'
                }}>
                  平均命令実行時間（マイクロ秒）を入力：
                </label>
                <input
                  type="number"
                  value={executionTime}
                  onChange={(e) => {
                    setExecutionTime(e.target.value)
                    setMipsValue(calculateMips(e.target.value))
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    padding: '10px',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    border: '1px solid #ced4da',
                    borderRadius: '5px'
                  }}
                />
                <p style={{ marginTop: '10px', fontSize: 'clamp(13px, 3.2vw, 14px)' }}>
                  → MIPS値：<strong>{mipsValue} MIPS</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>単位の階段デモ：なぜマイクロ秒は10のマイナス6乗？</h2>
          <p>
            平均命令実行時間を計算するとき、「2マイクロ秒」と言われても、
            <strong>「マイクロ秒って10のマイナス何乗だっけ？」</strong>と混乱しますよね。
          </p>

          <p>
            ここでは、ミリ・マイクロ・ナノ・ピコの単位を「階段を降りる」イメージで理解しましょう。
          </p>

          <h3>階段デモ</h3>
          <p>
            キロ（k）から始めて、1000倍ずつ小さくなる階段を降りていきます。
          </p>

          <div style={{
            border: '2px solid #ffc107',
            borderRadius: '8px',
            padding: 'clamp(15px, 3vw, 20px)',
            marginTop: '20px',
            backgroundColor: '#f8f9fa',
            maxWidth: '100%'
          }}>
            <h4>単位の階段</h4>

            <div style={{ marginTop: '20px' }}>
              {units.map((unit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    padding: 'clamp(12px, 3vw, 15px)',
                    backgroundColor: index === currentUnit ? '#fff3cd' : '#fff',
                    border: `2px solid ${index === currentUnit ? '#ffc107' : '#dee2e6'}`,
                    borderRadius: '8px',
                    opacity: index === currentUnit ? 1 : 0.6,
                    transition: 'all 0.3s',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}
                >
                  <div style={{
                    minWidth: 'clamp(150px, 30vw, 200px)',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    fontWeight: 'bold'
                  }}>
                    {unit.name}
                  </div>
                  <div style={{
                    flex: '1',
                    minWidth: '150px',
                    fontSize: 'clamp(13px, 3.2vw, 14px)'
                  }}>
                    <div><strong>{unit.value}</strong> = {unit.multiplier}</div>
                    <div style={{ fontSize: 'clamp(12px, 3vw, 13px)', color: '#666', marginTop: '5px' }}>
                      例：{unit.example}
                    </div>
                  </div>
                  {index === currentUnit && (
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#ffc107',
                      flexShrink: 0
                    }}
                    aria-label="現在の位置"
                    />
                  )}
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              gap: '10px',
              marginTop: '20px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={goUp}
                disabled={currentUnit === 0}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: currentUnit === 0 ? '#6c757d' : '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentUnit === 0 ? 'not-allowed' : 'pointer',
                  flex: '1',
                  minWidth: '100px'
                }}
              >
                ×1000
              </button>
              <button
                onClick={goDown}
                disabled={currentUnit === units.length - 1}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: currentUnit === units.length - 1 ? '#6c757d' : '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentUnit === units.length - 1 ? 'not-allowed' : 'pointer',
                  flex: '1',
                  minWidth: '100px'
                }}
              >
                ÷1000
              </button>
              <button
                onClick={resetUnits}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  flex: '1',
                  minWidth: '100px'
                }}
              >
                リセット
              </button>
            </div>
          </div>

          <h3>なぜマイクロは10のマイナス6乗？</h3>
          <p>
            階段を見ると分かりますが、マイクロ（μ）は「基本単位から3段階下」にあります。
          </p>

          <ul>
            <li>基本単位：10⁰ = 1</li>
            <li>ミリ（m）：10⁻³ = 1/1000（1段階下）</li>
            <li>マイクロ（μ）：10⁻⁶ = 1/1,000,000（2段階下）</li>
          </ul>

          <p>
            つまり、<strong>ミリ（10⁻³）からさらに1000倍小さくなる（10⁻³）と、マイクロ（10⁻⁶）</strong>になります。
          </p>

          <div className="code-example">
            <pre><code>{`計算:
10⁻³ × 10⁻³ = 10⁻⁶

言葉で言うと:
「ミリ」のさらに1000分の1 = 「マイクロ」`}</code></pre>
          </div>

          <div className="key-point-box">
            <strong><i className="fas fa-lightbulb" aria-hidden /> 覚え方：</strong>
            階段を1段降りるごとに1000倍（10³）小さくなる。
            ミリ（10⁻³）→ マイクロ（10⁻⁶）→ ナノ（10⁻⁹）→ ピコ（10⁻¹²）
          </div>

          <h3>日常生活での例</h3>
          <p>
            単位の階段は、日常生活でもよく使われています。
          </p>

          <ul>
            <li><strong>長さ</strong>：km（キロメートル）→ m（メートル）→ mm（ミリメートル）</li>
            <li><strong>周波数</strong>：GHz（ギガヘルツ）→ MHz（メガヘルツ）→ kHz（キロヘルツ）</li>
            <li><strong>時間</strong>：秒 → ms（ミリ秒）→ μs（マイクロ秒）→ ns（ナノ秒）</li>
          </ul>

          <p>
            コンピュータの世界では、処理速度が非常に速いため、
            マイクロ秒（μs）やナノ秒（ns）といった小さな単位がよく登場します。
          </p>
        </section>

        <section>
          <h2>まとめ</h2>
          <p>
            MIPSを理解するための3つの柱を押さえましょう。
          </p>

          <ul>
            <li>
              <strong>① MIPSとは</strong>：1秒間に何百万回の命令を実行できるかを表す単位。値が大きいほど速い。
            </li>
            <li>
              <strong>② 平均命令実行時間との関係</strong>：1 ÷ MIPS値 = 平均命令実行時間（マイクロ秒）。デモで相互変換を確認できる。
            </li>
            <li>
              <strong>③ なぜマイクロ秒か</strong>：1命令の時間は非常に小さいため、マイクロ秒（10⁻⁶秒）で表す。ミリ→マイクロ→ナノと1000倍ずつ小さくなる階段を覚える。
            </li>
          </ul>

          <div className="key-point-box">
            <strong><i className="fas fa-lightbulb" aria-hidden /> 基本情報技術者試験のヒント：</strong>
            MIPS ↔ 平均命令実行時間の計算問題がよく出ます。
            「1 ÷ MIPS値 = 平均命令実行時間（マイクロ秒）」を覚えておきましょう！
          </div>
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
                  <td>MIPSで速度を測定する中央処理装置</td>
                </tr>
                <tr>
                  <td><span className="term-name">クロック周波数</span></td>
                  <td>CPUの動作速度を表す別の指標（Hz単位）</td>
                </tr>
                <tr>
                  <td><span className="term-name">命令セット</span></td>
                  <td>CPUが実行できる命令の集まり</td>
                </tr>
                <tr>
                  <td><span className="term-name">CPI（Cycles Per Instruction）</span></td>
                  <td>1命令あたりのクロックサイクル数</td>
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
