'use client'

import Link from 'next/link'
import { useState, useCallback } from 'react'
import StructuredData from '@/app/components/StructuredData'
import FAQAccordion from '@/app/components/FAQAccordion'
import ExcelGrid from '@/app/components/ExcelGrid'
import TermPageHeader from '@/app/components/TermPageHeader'

type Mission = {
  id: number
  title: string
  description: string
  instruction: string
  checkKey: (e: KeyboardEvent) => boolean
}

export default function ExcelShortcutsPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0)
  const [completedMissions, setCompletedMissions] = useState<number[]>([])
  const [showSuccess, setShowSuccess] = useState(false)

  // レベル1のミッション定義
  const level1Missions: Mission[] = [
    {
      id: 1,
      title: 'Ctrl+矢印でジャンプ',
      description: 'データの端まで一瞬で移動します。',
      instruction: 'Ctrl + → を押して、右端のデータまでジャンプしてください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key === 'ArrowRight',
    },
    {
      id: 2,
      title: 'Ctrl+Shift+矢印で範囲選択',
      description: 'セル範囲を一瞬で選択できます。',
      instruction: 'Ctrl + Shift + → を押して、範囲選択してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.shiftKey && e.key === 'ArrowRight',
    },
    {
      id: 3,
      title: 'Ctrl+C でコピー',
      description: 'セルの内容をコピーします。',
      instruction: 'Ctrl + C を押して、セルをコピーしてください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key.toLowerCase() === 'c',
    },
    {
      id: 4,
      title: 'Ctrl+V で貼り付け',
      description: 'コピーした内容を貼り付けます。',
      instruction: '矢印キーで別のセルに移動して、Ctrl + V を押してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key.toLowerCase() === 'v',
    },
    {
      id: 5,
      title: 'F2 でセル編集モード',
      description: 'セルを編集モードにして数式を直接編集できます。',
      instruction: 'F2 を押して、セルを編集モードにしてください',
      checkKey: (e: KeyboardEvent) => e.key === 'F2',
    },
  ]

  // レベル2のミッション定義
  const level2Missions: Mission[] = [
    {
      id: 6,
      title: 'Ctrl+D で下方向にコピー',
      description: '選択したセルを下方向に一括コピーします。',
      instruction: 'セルを範囲選択して、Ctrl + D を押してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key.toLowerCase() === 'd',
    },
    {
      id: 7,
      title: 'Ctrl+R で右方向にコピー',
      description: '選択したセルを右方向に一括コピーします。',
      instruction: 'セルを範囲選択して、Ctrl + R を押してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key.toLowerCase() === 'r',
    },
    {
      id: 8,
      title: 'Ctrl+Z で元に戻す',
      description: '直前の操作を取り消します。',
      instruction: 'Ctrl + Z を押して、操作を元に戻してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key.toLowerCase() === 'z',
    },
    {
      id: 9,
      title: 'Ctrl+Home で先頭に移動',
      description: 'シートの先頭（A1セル）に一瞬で移動します。',
      instruction: 'Ctrl + Home を押して、A1セルに移動してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key === 'Home',
    },
    {
      id: 10,
      title: 'Ctrl+End でデータ範囲の末尾に移動',
      description: 'データが入力されている範囲の右下端に移動します。',
      instruction: 'Ctrl + End を押して、データ範囲の末尾に移動してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key === 'End',
    },
  ]

  // レベル3のミッション定義
  const level3Missions: Mission[] = [
    {
      id: 11,
      title: 'Ctrl+Shift+Home で先頭まで範囲選択',
      description: '現在のセルから先頭（A1）までを一括で選択します。',
      instruction: 'Ctrl + Shift + Home を押して、先頭まで選択してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.shiftKey && e.key === 'Home',
    },
    {
      id: 12,
      title: 'Ctrl+Shift+End でデータ末尾まで範囲選択',
      description: '現在のセルからデータ範囲の末尾まで選択します。',
      instruction: 'Ctrl + Shift + End を押して、データ末尾まで選択してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.shiftKey && e.key === 'End',
    },
    {
      id: 13,
      title: 'Ctrl+Space で列全体を選択',
      description: '現在のセルの列全体を選択します。',
      instruction: 'Ctrl + Space を押して、列全体を選択してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key === ' ',
    },
    {
      id: 14,
      title: 'Shift+Space で行全体を選択',
      description: '現在のセルの行全体を選択します。',
      instruction: 'Shift + Space を押して、行全体を選択してください',
      checkKey: (e: KeyboardEvent) => e.shiftKey && e.key === ' ',
    },
    {
      id: 15,
      title: 'Ctrl+PageDown でシート移動（右）',
      description: '次のワークシートに移動します。',
      instruction: 'Ctrl + PageDown を押して、次のシートに移動してください',
      checkKey: (e: KeyboardEvent) => e.ctrlKey && e.key === 'PageDown',
    },
  ]

  const getMissionsByLevel = (level: number): Mission[] => {
    switch (level) {
      case 1:
        return level1Missions
      case 2:
        return level2Missions
      case 3:
        return level3Missions
      default:
        return []
    }
  }

  const currentMissions = selectedLevel !== null ? getMissionsByLevel(selectedLevel) : []
  const currentMission = selectedLevel !== null ? currentMissions[currentMissionIndex] : null

  // キー入力検知
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!currentMission || completedMissions.includes(currentMission.id)) return

      if (currentMission.checkKey(e)) {
        setShowSuccess(true)
        setCompletedMissions([...completedMissions, currentMission.id])

        setTimeout(() => {
          setShowSuccess(false)
          if (currentMissionIndex < currentMissions.length - 1) {
            setCurrentMissionIndex(currentMissionIndex + 1)
          }
        }, 1500)
      }
    },
    [currentMission, currentMissionIndex, completedMissions, currentMissions.length]
  )

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

      <TermPageHeader
        termName="Excel ショートカット練習"
        reading="投資銀行スタイル 財務モデリング"
        icon="fas fa-keyboard"
        dateCreated="2026-02-07"
        dateModified="2026-02-07"
        summaryItems={[
          '擬似Excelアプリで実際にショートカットを練習',
          'レベル1：基本操作（Ctrl+矢印、範囲選択、コピペ、F2）',
          'レベル2：移動＆操作（Ctrl+D/R、Ctrl+Z、Ctrl+Home/End）',
          'レベル3：実務スピード（列・行選択、範囲選択、シート移動）',
          'ミッション形式（全15問）で段階的に習得'
        ]}
        summaryHeaderText="このページでできること"
        summaryIcon="fas fa-laptop-code"
      />

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
            <strong>擬似Excelアプリ</strong>で練習できます。
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
              <li>実際のExcelのような操作感</li>
              <li>財務データサンプル付き</li>
              <li>ミッション形式で段階的に習得</li>
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
                      新人1週目・これができないと始まらない
                    </p>
                    <p style={{
                      margin: '10px 0 0 0',
                      fontSize: 'clamp(12px, 3vw, 13px)',
                      color: '#999'
                    }}>
                      Ctrl+矢印、範囲選択、コピペ、F2編集
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

              <div
                onClick={() => startLevel(2)}
                style={{
                  padding: 'clamp(20px, 4vw, 30px)',
                  backgroundColor: '#fff',
                  border: '2px solid #28a745',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(18px, 4vw, 22px)', color: '#28a745' }}>
                      <i className="fas fa-star" aria-hidden /><i className="fas fa-star" aria-hidden /> レベル2：移動＆操作
                    </h3>
                    <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666' }}>
                      新人1ヶ月・迷わず飛べる
                    </p>
                    <p style={{
                      margin: '10px 0 0 0',
                      fontSize: 'clamp(12px, 3vw, 13px)',
                      color: '#999'
                    }}>
                      Ctrl+D/R、Ctrl+Z、Ctrl+Home/End
                    </p>
                  </div>
                  <div style={{
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    borderRadius: '25px',
                    fontSize: 'clamp(13px, 3.2vw, 14px)',
                    fontWeight: 'bold'
                  }}>
                    開始 →
                  </div>
                </div>
              </div>

              <div
                onClick={() => startLevel(3)}
                style={{
                  padding: 'clamp(20px, 4vw, 30px)',
                  backgroundColor: '#fff',
                  border: '2px solid #dc3545',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(18px, 4vw, 22px)', color: '#dc3545' }}>
                      <i className="fas fa-star" aria-hidden /><i className="fas fa-star" aria-hidden /><i className="fas fa-star" aria-hidden /> レベル3：実務スピード
                    </h3>
                    <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666' }}>
                      即戦力・マウス不要の境地
                    </p>
                    <p style={{
                      margin: '10px 0 0 0',
                      fontSize: 'clamp(12px, 3vw, 13px)',
                      color: '#999'
                    }}>
                      Ctrl+Shift+Home/End、Ctrl/Shift+Space、シート移動
                    </p>
                  </div>
                  <div style={{
                    padding: '10px 20px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    borderRadius: '25px',
                    fontSize: 'clamp(13px, 3.2vw, 14px)',
                    fontWeight: 'bold'
                  }}>
                    開始 →
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedLevel !== null && (
          <section>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <h2 style={{ margin: 0 }}>
                {selectedLevel === 1 && 'レベル1：基本操作'}
                {selectedLevel === 2 && 'レベル2：移動＆操作'}
                {selectedLevel === 3 && 'レベル3：実務スピード'}
              </h2>
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
                  ミッション {currentMissionIndex + 1} / {currentMissions.length}
                </h3>
                <div style={{
                  fontSize: 'clamp(13px, 3.2vw, 14px)',
                  color: '#666'
                }}>
                  完了: {completedMissions.length} / {currentMissions.length}
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
                  width: `${(completedMissions.length / currentMissions.length) * 100}%`,
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
                    marginBottom: '20px'
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

                  {/* 擬似Excelグリッド */}
                  <div style={{ marginBottom: '20px' }}>
                    <ExcelGrid onKeyPress={handleKeyPress} />
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
                      color: '#155724',
                      marginTop: '20px'
                    }}>
                      <i className="fas fa-check-circle" aria-hidden /> 正解！次のミッションへ...
                    </div>
                  )}

                  {completedMissions.length === currentMissions.length && (
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
                        <i className="fas fa-trophy" aria-hidden /> レベル{selectedLevel}クリア！
                      </h3>
                      <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', marginBottom: '15px' }}>
                        {selectedLevel === 1 && '基本操作をマスターしました。次はレベル2に挑戦しましょう！'}
                        {selectedLevel === 2 && '移動＆操作をマスターしました。次はレベル3に挑戦しましょう！'}
                        {selectedLevel === 3 && '全てのミッションをクリアしました！あなたはもうExcelマスターです！'}
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
                擬似Excelグリッド上で実際にキーボードショートカットを使ってみてください。正しいキーを押すと次のミッションに進みます。
              </p>
            </div>
          </section>
        )}

        <section>
          <h2>ショートカット一覧</h2>

          <details style={{ marginBottom: '15px' }}>
            <summary style={{
              padding: '15px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: '1px solid #007bff',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              listStyle: 'none'
            }}>
              <span style={{ marginRight: '10px' }}>⭐ レベル1：基本操作</span>
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
                      <td><strong>Ctrl + C</strong></td>
                      <td>コピー</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + V</strong></td>
                      <td>貼り付け</td>
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

          <details style={{ marginBottom: '15px' }}>
            <summary style={{
              padding: '15px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: '1px solid #28a745',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              listStyle: 'none'
            }}>
              <span style={{ marginRight: '10px' }}>⭐⭐ レベル2：移動＆操作</span>
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
                      <td><strong>Ctrl + D</strong></td>
                      <td>選択範囲を下方向にコピー</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + R</strong></td>
                      <td>選択範囲を右方向にコピー</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + Z</strong></td>
                      <td>元に戻す（Undo）</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + Home</strong></td>
                      <td>先頭（A1セル）に移動</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + End</strong></td>
                      <td>データ範囲の末尾に移動</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          <details style={{ marginBottom: '15px' }}>
            <summary style={{
              padding: '15px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: '1px solid #dc3545',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              listStyle: 'none'
            }}>
              <span style={{ marginRight: '10px' }}>⭐⭐⭐ レベル3：実務スピード</span>
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
                      <td><strong>Ctrl + Shift + Home</strong></td>
                      <td>先頭（A1）まで範囲選択</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + Shift + End</strong></td>
                      <td>データ末尾まで範囲選択</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + Space</strong></td>
                      <td>列全体を選択</td>
                    </tr>
                    <tr>
                      <td><strong>Shift + Space</strong></td>
                      <td>行全体を選択</td>
                    </tr>
                    <tr>
                      <td><strong>Ctrl + PageDown</strong></td>
                      <td>次のワークシートに移動</td>
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
