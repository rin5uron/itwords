'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import StructuredData from '@/app/components/StructuredData'
import FAQAccordion from '@/app/components/FAQAccordion'

type Mission = {
  id: number
  title: string
  description: string
  instruction: string
  requiredKeys: string[]
  checkKey: (e: KeyboardEvent) => boolean
}

export default function ExcelShortcutsPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0)
  const [completedMissions, setCompletedMissions] = useState<number[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedCell, setSelectedCell] = useState<string>('A1')

  // レベル1のミッション定義
  const level1Missions: Mission[] = [
    {
      id: 1,
      title: 'Ctrl+矢印でジャンプ',
      description: '現在のセル（A1）からデータの端まで一瞬で移動します。',
      instruction: 'Ctrl + → を押して、右端のセル（E1）までジャンプしてください',
      requiredKeys: ['Control', 'ArrowRight'],
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key === 'ArrowRight',
    },
    {
      id: 2,
      title: 'Ctrl+Shift+矢印で範囲選択',
      description: 'セル範囲を一瞬で選択できます。',
      instruction: 'Ctrl + Shift + → を押して、A1:E1を選択してください',
      requiredKeys: ['Control', 'Shift', 'ArrowRight'],
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.shiftKey && e.key === 'ArrowRight',
    },
    {
      id: 3,
      title: 'Ctrl+D で下方向にコピー',
      description: '選択したセルの内容を下方向にコピーします。',
      instruction: 'Ctrl + D を押して、セルの内容を下にコピーしてください',
      requiredKeys: ['Control', 'D'],
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key.toLowerCase() === 'd',
    },
    {
      id: 4,
      title: 'Ctrl+R で右方向にコピー',
      description: '選択したセルの内容を右方向にコピーします。',
      instruction: 'Ctrl + R を押して、セルの内容を右にコピーしてください',
      requiredKeys: ['Control', 'R'],
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key.toLowerCase() === 'r',
    },
    {
      id: 5,
      title: 'F2 でセル編集モード',
      description: 'セルを編集モードにして数式を直接編集できます。',
      instruction: 'F2 を押して、セルを編集モードにしてください',
      requiredKeys: ['F2'],
      checkKey: (e: KeyboardEvent) => e.key === 'F2',
    },
  ]

  const currentMission = selectedLevel === 1 ? level1Missions[currentMissionIndex] : null

  // キー入力検知
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!currentMission || completedMissions.includes(currentMission.id)) return

      if (currentMission.checkKey(e)) {
        e.preventDefault()
        setShowSuccess(true)
        setCompletedMissions([...completedMissions, currentMission.id])

        setTimeout(() => {
          setShowSuccess(false)
          if (currentMissionIndex < level1Missions.length - 1) {
            setCurrentMissionIndex(currentMissionIndex + 1)
          }
        }, 1500)
      }
    },
    [currentMission, currentMissionIndex, completedMissions, level1Missions.length]
  )

  useEffect(() => {
    if (selectedLevel !== null) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedLevel, handleKeyDown])

  const resetMissions = () => {
    setCurrentMissionIndex(0)
    setCompletedMissions([])
    setShowSuccess(false)
  }

  const startLevel = (level: number) => {
    setSelectedLevel(level)
    resetMissions()
  }

  const faqs = [
    {
      question: '投資銀行で本当にマウスを使わないのですか？',
      answer: 'はい、多くの投資銀行では財務モデリング作業中にマウスをほとんど使いません。キーボードショートカットを使うことで作業スピードが圧倒的に速くなり、長時間の作業でも疲れにくくなります。新人トレーニングでショートカットキーの習得が必須とされている企業も多いです。',
    },
    {
      question: 'どれくらい練習すれば身につきますか？',
      answer: '基本的なショートカット（レベル1）は1〜2週間の実践で自然に使えるようになります。レベル2は1ヶ月程度、レベル3は3ヶ月程度が目安です。重要なのは毎日少しずつ使うこと。実際の業務やレポート作成で意識的に使うことで、自然と身につきます。',
    },
    {
      question: 'MacとWindowsで違いはありますか？',
      answer: 'はい、MacではCtrlキーの代わりにCommandキー（⌘）を使います。例えば、Windowsの「Ctrl+C」はMacでは「Command+C」になります。ただし、このページはWindows版Excelを想定して作成しています。Mac版Excelをお使いの方は、Ctrl → Command と読み替えてください。',
    },
    {
      question: 'スマホでも練習できますか？',
      answer: 'このページはキーボード操作を前提としているため、スマホでは実際の練習はできません。ただし、ショートカット一覧の確認や、どのような操作があるかを学ぶことはできます。実際の練習はPCで行ってください。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="Excel ショートカット練習 - 投資銀行スタイル【マウス禁止】"
        description="Excelショートカットキーを実践形式で習得。投資銀行の財務モデリングで使われるキーボード操作をレベル別ミッションで体験できます。"
        datePublished="2026-02-07"
        dateModified="2026-02-07"
      />

      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '1rem' }}>
          Excel ショートカット練習
        </h1>
        <p style={{ fontSize: 'clamp(14px, 3.5vw, 16px)', color: '#666' }}>
          投資銀行スタイル 財務モデリング【マウス禁止】
        </p>
        <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: '#999', marginTop: '0.5rem' }}>
          作成日: 2026-02-07 | 最終更新: 2026-02-07
        </p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            投資銀行の財務モデリングでは、<strong>マウスをほとんど使いません</strong>。
          </p>
          <p>
            なぜなら、膨大な数式とデータを扱う財務モデルでは、
            キーボードショートカットを使った方が<strong>圧倒的に速く、正確</strong>だからです。
          </p>
          <p>
            このページでは、投資銀行で実際に使われているExcelショートカットキーを、
            <strong>実践形式のミッション</strong>で習得できます。
          </p>

          <div style={{
            padding: 'clamp(15px, 3vw, 20px)',
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            marginTop: '20px',
            maxWidth: '100%',
            wordWrap: 'break-word'
          }}>
            <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', fontWeight: 'bold' }}>
              <i className="fas fa-info-circle" aria-hidden /> このページの特徴
            </p>
            <ul style={{ marginTop: '10px', marginBottom: 0 }}>
              <li>Windows版Excelを想定</li>
              <li>レベル1〜3の段階的な習得</li>
              <li>実際にキーを押して体験</li>
              <li>財務モデリングの実務を想定したミッション</li>
            </ul>
          </div>
        </section>

        {selectedLevel === null && (
          <section>
            <h2>レベルを選択してください</h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div
                onClick={() => startLevel(1)}
                style={{
                  padding: 'clamp(20px, 4vw, 30px)',
                  backgroundColor: '#fff',
                  border: '2px solid #007bff',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                    <h3 style={{
                      margin: '0 0 10px 0',
                      fontSize: 'clamp(18px, 4vw, 22px)',
                      color: '#007bff'
                    }}>
                      <i className="fas fa-star" aria-hidden /> レベル1：基本操作
                    </h3>
                    <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666' }}>
                      新人1週目・セル移動の基礎
                    </p>
                    <p style={{
                      margin: '10px 0 0 0',
                      fontSize: 'clamp(12px, 3vw, 13px)',
                      color: '#999'
                    }}>
                      Ctrl+矢印、範囲選択、Ctrl+D/R、F2
                    </p>
                  </div>
                  <div style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '25px',
                    fontSize: 'clamp(13px, 3.2vw, 14px)',
                    fontWeight: 'bold'
                  }}>
                    開始 →
                  </div>
                </div>
              </div>

              <div style={{
                padding: 'clamp(20px, 4vw, 30px)',
                backgroundColor: '#f8f9fa',
                border: '2px solid #6c757d',
                borderRadius: '12px',
                opacity: 0.6
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(18px, 4vw, 22px)', color: '#6c757d' }}>
                      <i className="fas fa-star" aria-hidden /><i className="fas fa-star" aria-hidden /> レベル2：書式＆数式
                    </h3>
                    <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666' }}>
                      新人1ヶ月・実務の準備
                    </p>
                  </div>
                  <div style={{
                    padding: '10px 20px',
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    borderRadius: '25px',
                    fontSize: 'clamp(13px, 3.2vw, 14px)',
                    fontWeight: 'bold'
                  }}>
                    近日公開
                  </div>
                </div>
              </div>

              <div style={{
                padding: 'clamp(20px, 4vw, 30px)',
                backgroundColor: '#f8f9fa',
                border: '2px solid #6c757d',
                borderRadius: '12px',
                opacity: 0.6
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(18px, 4vw, 22px)', color: '#6c757d' }}>
                      <i className="fas fa-star" aria-hidden /><i className="fas fa-star" aria-hidden /><i className="fas fa-star" aria-hidden /> レベル3：実務スピード
                    </h3>
                    <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666' }}>
                      即戦力・マウス不要の境地
                    </p>
                  </div>
                  <div style={{
                    padding: '10px 20px',
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    borderRadius: '25px',
                    fontSize: 'clamp(13px, 3.2vw, 14px)',
                    fontWeight: 'bold'
                  }}>
                    近日公開
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedLevel === 1 && (
          <section>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <h2 style={{ margin: 0 }}>レベル1：基本操作</h2>
              <button
                onClick={() => setSelectedLevel(null)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: 'clamp(13px, 3.2vw, 14px)'
                }}
              >
                レベル選択に戻る
              </button>
            </div>

            <div style={{
              backgroundColor: '#fff',
              border: '2px solid #007bff',
              borderRadius: '12px',
              padding: 'clamp(15px, 3vw, 20px)',
              marginBottom: '20px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <h3 style={{ margin: 0, fontSize: 'clamp(16px, 3.8vw, 18px)' }}>
                  ミッション {currentMissionIndex + 1} / {level1Missions.length}
                </h3>
                <div style={{
                  fontSize: 'clamp(13px, 3.2vw, 14px)',
                  color: '#666'
                }}>
                  完了: {completedMissions.length} / {level1Missions.length}
                </div>
              </div>

              <div style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#e9ecef',
                borderRadius: '5px',
                overflow: 'hidden',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: `${(completedMissions.length / level1Missions.length) * 100}%`,
                  height: '100%',
                  backgroundColor: '#28a745',
                  transition: 'width 0.5s'
                }} />
              </div>

              {currentMission && (
                <>
                  <h4 style={{
                    fontSize: 'clamp(16px, 3.8vw, 20px)',
                    marginBottom: '10px',
                    color: '#007bff'
                  }}>
                    {currentMission.title}
                  </h4>
                  <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', marginBottom: '15px' }}>
                    {currentMission.description}
                  </p>
                  <div style={{
                    padding: 'clamp(12px, 3vw, 15px)',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    marginBottom: '15px'
                  }}>
                    <p style={{
                      margin: '0 0 10px 0',
                      fontSize: 'clamp(13px, 3.2vw, 14px)',
                      fontWeight: 'bold'
                    }}>
                      <i className="fas fa-keyboard" aria-hidden /> 指示：
                    </p>
                    <p style={{ margin: 0, fontSize: 'clamp(14px, 3.5vw, 16px)' }}>
                      {currentMission.instruction}
                    </p>
                  </div>

                  {showSuccess && (
                    <div style={{
                      padding: '15px',
                      backgroundColor: '#d4edda',
                      border: '2px solid #28a745',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: 'clamp(14px, 3.5vw, 16px)',
                      fontWeight: 'bold',
                      color: '#155724'
                    }}>
                      <i className="fas fa-check-circle" aria-hidden /> 正解！次のミッションへ...
                    </div>
                  )}

                  {completedMissions.length === level1Missions.length && (
                    <div style={{
                      padding: '20px',
                      backgroundColor: '#d4edda',
                      border: '2px solid #28a745',
                      borderRadius: '8px',
                      textAlign: 'center',
                      marginTop: '20px'
                    }}>
                      <h3 style={{
                        fontSize: 'clamp(18px, 4vw, 22px)',
                        color: '#155724',
                        marginBottom: '10px'
                      }}>
                        <i className="fas fa-trophy" aria-hidden /> レベル1クリア！
                      </h3>
                      <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', marginBottom: '15px' }}>
                        基本操作をマスターしました。次はレベル2に挑戦しましょう！
                      </p>
                      <div style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                      }}>
                        <button
                          onClick={resetMissions}
                          style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: 'clamp(13px, 3.2vw, 14px)'
                          }}
                        >
                          もう一度
                        </button>
                        <button
                          onClick={() => setSelectedLevel(null)}
                          style={{
                            padding: '10px 20px',
                            backgroundColor: '#6c757d',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: 'clamp(13px, 3.2vw, 14px)'
                          }}
                        >
                          レベル選択に戻る
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div style={{
              padding: 'clamp(15px, 3vw, 20px)',
              backgroundColor: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
              fontSize: 'clamp(12px, 3vw, 13px)'
            }}>
              <p style={{ margin: 0 }}>
                <i className="fas fa-lightbulb" aria-hidden /> <strong>ヒント：</strong>
                実際にキーボードで該当するショートカットキーを押してください。正しいキーを押すと次のミッションに進みます。
              </p>
            </div>
          </section>
        )}

        <section>
          <h2>ショートカット一覧（レベル1）</h2>
          <details style={{ marginBottom: '15px' }}>
            <summary style={{
              padding: '15px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              listStyle: 'none'
            }}>
              <span style={{ marginRight: '10px' }}>📋 全ショートカット一覧を見る</span>
            </summary>
            <div style={{
              padding: '15px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderTop: 'none',
              borderRadius: '0 0 5px 5px'
            }}>
              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>ショートカット</th>
                      <th>説明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Ctrl + →</strong></td>
                      <td>データの端まで右にジャンプ</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + Shift + →</strong></td>
                      <td>右方向に範囲選択</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + D</strong></td>
                      <td>選択範囲を下方向にコピー</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + R</strong></td>
                      <td>選択範囲を右方向にコピー</td>
                    </tr>
                    <tr>
                      <td><strong>F2</strong></td>
                      <td>セルを編集モードにする</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </section>

        <section className="term-comparison">
          <h2>関連リンク</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>リンク</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/" className="term-name">IT用語辞典 トップ</Link></td>
                  <td>IT用語をわかりやすく解説</td>
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
