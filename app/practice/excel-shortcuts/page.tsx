'use client'

import { useState, useCallback } from 'react'
import StructuredData from '@/app/components/StructuredData'
import FAQAccordion from '@/app/components/FAQAccordion'
import ExcelGrid from '@/app/components/ExcelGrid'
import TermPageHeader from '@/app/components/TermPageHeader'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

// テンプレートカラー（.cursorrules 準拠）
const ACCENT = '#14b8a6'
const ACCENT_DARK = '#0d9488'
const ACCENT_TEA = '#ea9b8a'
const BG_SUCCESS = '#f9f7ef'
const BG_HINT = '#f0fdfa'

interface ShortcutAccordionProps {
  level: number
  title: string
  color: string
  shortcuts: { key: string; desc: string }[]
  completedMissions: number[]
  shortcutToMissionId: Record<string, number>
}

function ShortcutAccordion({ level, title, color, shortcuts, completedMissions, shortcutToMissionId }: ShortcutAccordionProps) {
  const stars = Array(level).fill(null).map((_, i) => <i key={i} className="fas fa-star" aria-hidden />)
  return (
    <details style={{ marginBottom: '15px' }}>
      <summary style={{
        padding: 'clamp(12px, 3vw, 15px)',
        backgroundColor: color,
        color: '#fff',
        border: `2px solid ${color}`,
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 'clamp(14px, 3.5vw, 16px)',
        listStyle: 'none',
        WebkitTapHighlightColor: 'transparent'
      }}>
        <span style={{ marginRight: '10px' }}>{stars} {title}</span>
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
              {shortcuts.map(({ key, desc }) => {
                const missionId = shortcutToMissionId[key]
                const isCompleted = missionId != null && completedMissions.includes(missionId)
                return (
                  <tr
                    key={key}
                    style={isCompleted ? { backgroundColor: BG_HINT } : undefined}
                  >
                    <td><strong>{key}</strong>{isCompleted && <><span style={{ marginLeft: '6px' }}><i className="fas fa-check-circle" style={{ color: ACCENT }} aria-hidden /></span></>}</td>
                    <td>{desc}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </details>
  )
}

interface LevelCardProps {
  level: number
  title: string
  desc: string
  keys: string
  color: string
  selectedLevel: number | null
  startLevel: (n: number) => void
  setSelectedLevel: (n: number | null) => void
  children: React.ReactNode
}

function LevelCard({ level, title, desc, keys, color, selectedLevel, startLevel, setSelectedLevel, children }: LevelCardProps) {
  const isExpanded = selectedLevel === level
  return (
    <div
      style={{
        padding: 'clamp(20px, 4vw, 30px)',
        backgroundColor: '#fff',
        border: `2px solid ${color}`,
        borderRadius: '12px',
        transition: 'all 0.3s',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <div
        onClick={() => !isExpanded && startLevel(level)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          cursor: isExpanded ? 'default' : 'pointer'
        }}
        onMouseEnter={(e) => {
          if (!isExpanded && e.currentTarget.parentElement) {
            e.currentTarget.parentElement.style.transform = 'translateY(-5px)'
            e.currentTarget.parentElement.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)'
          }
        }}
        onMouseLeave={(e) => {
          if (e.currentTarget.parentElement) {
            e.currentTarget.parentElement.style.transform = 'translateY(0)'
            e.currentTarget.parentElement.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
          }
        }}
      >
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h3 style={{
            margin: '0 0 10px 0',
            fontSize: 'clamp(18px, 4vw, 22px)',
            color,
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px'
          }}>
            <span>{Array(level).fill(null).map((_, i) => <i key={i} className="fas fa-star" aria-hidden />)}</span>
            <span>{title}</span>
          </h3>
          <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666' }}>{desc}</p>
          <p style={{ margin: '10px 0 0 0', fontSize: 'clamp(12px, 3vw, 13px)', color: '#999' }}>{keys}</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {isExpanded ? (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedLevel(null) }}
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
              Close
            </button>
          ) : (
            <div style={{
              padding: '10px 20px',
              backgroundColor: color,
              color: '#fff',
              borderRadius: '25px',
              fontSize: 'clamp(13px, 3.2vw, 14px)',
              fontWeight: 'bold'
            }}>
              Start →
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

interface LevelDemoContentProps {
  selectedLevel: number
  currentMissionIndex: number
  currentMissions: Mission[]
  currentMission: Mission | null
  completedMissions: number[]
  showSuccess: boolean
  goToNextMission: () => void
  resetMissions: () => void
  setSelectedLevel: (n: number | null) => void
  handleKeyPress: (e: KeyboardEvent) => void
  ExcelGrid: React.ComponentType<{ onKeyPress: (e: KeyboardEvent) => void }>
  accentColor: string
  bgSuccess: string
  accentTea: string
}

function LevelDemoContent({
  selectedLevel,
  currentMissionIndex,
  currentMissions,
  currentMission,
  completedMissions,
  showSuccess,
  goToNextMission,
  resetMissions,
  setSelectedLevel,
  handleKeyPress,
  ExcelGrid,
  accentColor,
  bgSuccess,
  accentTea,
}: LevelDemoContentProps) {
  const hasNext = currentMissionIndex < currentMissions.length - 1
  const allCompleted = completedMissions.length === currentMissions.length

  return (
    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
        <h3 style={{ margin: 0, fontSize: 'clamp(16px, 3.8vw, 18px)' }}>
          ミッション {currentMissionIndex + 1} / {currentMissions.length}
        </h3>
        <div style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', color: '#666' }}>
          完了: {completedMissions.length} / {currentMissions.length}
        </div>
      </div>
      <div style={{ width: '100%', height: '10px', backgroundColor: '#e9ecef', borderRadius: '5px', overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ width: `${(completedMissions.length / currentMissions.length) * 100}%`, height: '100%', backgroundColor: accentColor, transition: 'width 0.5s' }} />
      </div>

      {currentMission && !allCompleted && (
        <>
          <h4 style={{ fontSize: 'clamp(16px, 3.8vw, 20px)', marginBottom: '10px', color: accentColor }}>
            {currentMission.title}
          </h4>
          <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', marginBottom: '15px' }}>{currentMission.description}</p>
          <div style={{
            padding: 'clamp(12px, 3vw, 15px)',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <p style={{ margin: '0 0 10px 0', fontSize: 'clamp(13px, 3.2vw, 14px)', fontWeight: 'bold' }}>
              <i className="fas fa-keyboard" aria-hidden /> 指示：
            </p>
            <p style={{ margin: 0, fontSize: 'clamp(14px, 3.5vw, 16px)' }}>{currentMission.instruction}</p>
          </div>
          <p style={{ margin: '0 0 10px 0', fontSize: 'clamp(12px, 3vw, 13px)', color: '#666' }}>
            ※ 下のグリッドをクリックしてからキーを押してください
          </p>
          <div style={{ marginBottom: '20px' }}>
            <ExcelGrid onKeyPress={handleKeyPress} />
          </div>

          {showSuccess && (
            <div style={{
              padding: '15px',
              backgroundColor: bgSuccess,
              borderLeft: `4px solid ${accentTea}`,
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              fontWeight: 'bold',
              color: '#333',
              marginTop: '20px'
            }}>
              <i className="fas fa-check-circle" aria-hidden /> 正解！
              {hasNext && (
                <button
                  onClick={goToNextMission}
                  style={{
                    display: 'block',
                    margin: '10px auto 0',
                    padding: '10px 24px',
                    backgroundColor: accentColor,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: 'clamp(13px, 3.2vw, 14px)',
                    fontWeight: 'bold'
                  }}
                >
                  次のミッションへ →
                </button>
              )}
            </div>
          )}
        </>
      )}

      {allCompleted && (
        <div style={{
          padding: '20px',
          backgroundColor: bgSuccess,
          borderLeft: `4px solid ${accentTea}`,
          borderRadius: '8px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <h3 style={{ fontSize: 'clamp(18px, 4vw, 22px)', color: '#333', marginBottom: '10px' }}>
            <i className="fas fa-trophy" aria-hidden /> レベル{selectedLevel}クリア！
          </h3>
          <p style={{ fontSize: 'clamp(13px, 3.2vw, 14px)', marginBottom: '15px' }}>
            {selectedLevel === 1 && '基本操作をマスターしました。次はレベル2に挑戦しましょう！'}
            {selectedLevel === 2 && '移動＆操作をマスターしました。次はレベル3に挑戦しましょう！'}
            {selectedLevel === 3 && '全てのミッションをクリアしました！'}
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={resetMissions}
              style={{
                padding: '10px 20px',
                backgroundColor: accentColor,
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
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

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

  // キー入力検知（正解時は「次のミッションへ」ボタンで進む導線を明確に）
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!currentMission || completedMissions.includes(currentMission.id)) return

      if (currentMission.checkKey(e)) {
        setShowSuccess(true)
        setCompletedMissions([...completedMissions, currentMission.id])
      }
    },
    [currentMission, completedMissions]
  )

  const goToNextMission = useCallback(() => {
    setShowSuccess(false)
    setCurrentMissionIndex((prev) => Math.min(prev + 1, currentMissions.length - 1))
  }, [currentMissions.length])

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
      question: '投資銀行の財務モデリングとは何ですか？',
      answer: '企業の価値や将来の業績を評価するために、Excelで数式や計算を組み立てた「財務モデル」を作る作業です。投資銀行では、M&A（企業買収）の相談や株式の評価などで膨大なセルを扱うため、マウスよりキーボードショートカットの方が圧倒的に速く、正確に作業できます。',
    },
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
      question: 'このページはスマホでも練習できますか？',
      answer: 'このページはキーボード操作を前提としているため、スマホでは実際の練習はできません。ただし、ショートカット一覧の確認や、どのような操作があるかを学ぶことはできます。実際の練習はPCで行ってください。',
    },
  ]

  // ショートカット一覧の各項目とmission idの対応（体験済みハイライト用）
  const shortcutToMissionId: Record<string, number> = {
    'Ctrl + →': 1, 'Ctrl + Shift + →': 2, 'Ctrl + C': 3, 'Ctrl + V': 4, 'F2': 5,
    'Ctrl + D': 6, 'Ctrl + R': 7, 'Ctrl + Z': 8, 'Ctrl + Home': 9, 'Ctrl + End': 10,
    'Ctrl + Shift + Home': 11, 'Ctrl + Shift + End': 12, 'Ctrl + Space': 13,
    'Shift + Space': 14, 'Ctrl + PageDown': 15,
  }

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="Excel ショートカット練習 - 投資銀行スタイル【マウス禁止】"
        description="Excelショートカットキーを実践形式で習得。投資銀行の財務モデリングで使われるキーボード操作をレベル別ミッションで体験できます。"
        datePublished="2026-02-07"
        dateModified="2026-02-08"
      />

      <TermPageHeader
        termName="Excel ショートカット練習"
        reading="擬似Excelでキーボード操作を習得"
        icon="fas fa-keyboard"
        dateCreated="2026-02-07"
        dateModified="2026-02-08"
        summaryItems={[
          'Excelショートカットの基本〜応用を擬似Excelで体験',
          'レベル1：基本操作（Ctrl+矢印、範囲選択、コピペ、F2）',
          'レベル2：移動＆操作（Ctrl+D/R、Ctrl+Z、Ctrl+Home/End）',
          'レベル3：実務スピード（列・行選択、範囲選択、シート移動）',
          'デモは財務モデリング想定・PC推奨（Macは⌘で可）'
        ]}
        summaryHeaderText="このページでできること"
        summaryIcon="fas fa-laptop-code"
      />

      <main>
        <section>
          <h2>このページでできること</h2>
          <p>
            Excelショートカットキーの<strong>基本から応用まで</strong>、擬似Excelアプリで体験できます。
            レベル1〜3のミッション形式で段階的に習得できます。
          </p>
          <p>
            デモでは、Excelショートカットを使いこなす<strong>財務モデリング</strong>を想定しています。
            投資銀行ではマウスをほとんど使わず、キーボードショートカットで膨大な数式とデータを扱います。
          </p>

          <div style={{
            padding: 'clamp(15px, 3vw, 20px)',
            backgroundColor: BG_HINT,
            border: `2px solid ${ACCENT}`,
            borderRadius: '8px',
            marginTop: '20px',
            maxWidth: '100%',
            wordWrap: 'break-word'
          }}>
            <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)' }}>
              <i className="fas fa-info-circle" aria-hidden /> Windows版Excelに沿っています。タイムデータ（サンプル）付き。ミッション形式で段階的に習得できます。
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ wordWrap: 'break-word', overflowWrap: 'break-word', minWidth: 0 }}>疑似Excelで実際に体験</h2>
          <div style={{
            padding: 'clamp(12px, 3vw, 16px)',
            backgroundColor: '#fefce8',
            border: '2px solid #eab308',
            borderRadius: '8px',
            marginTop: '15px',
            marginBottom: '15px',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            <p style={{ margin: 0, fontSize: 'clamp(13px, 3.2vw, 14px)', lineHeight: 1.6 }}>
              <i className="fas fa-desktop" aria-hidden /> このデモはPC推奨です。MacはCtrlを⌘（Command）に置き換えると使えます。
            </p>
          </div>
          {selectedLevel !== null && (
            <p style={{ margin: '0 0 15px 0', fontSize: 'clamp(12px, 3vw, 13px)', color: '#666' }}>
              レベル2・3は下にスクロールすると表示されます
            </p>
          )}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <LevelCard
              level={1}
              title="レベル1：基本操作"
              desc="Excelを使うなら絶対知っておきたいショートカット"
              keys="Ctrl+矢印、範囲選択、コピペ、F2編集"
              color={ACCENT}
              selectedLevel={selectedLevel}
              startLevel={startLevel}
              setSelectedLevel={setSelectedLevel}
            >
              {selectedLevel === 1 && (
                <LevelDemoContent
                  selectedLevel={1}
                  currentMissionIndex={currentMissionIndex}
                  currentMissions={currentMissions}
                  currentMission={currentMission}
                  completedMissions={completedMissions}
                  showSuccess={showSuccess}
                  goToNextMission={goToNextMission}
                  resetMissions={resetMissions}
                  setSelectedLevel={setSelectedLevel}
                  handleKeyPress={handleKeyPress}
                  ExcelGrid={ExcelGrid}
                  accentColor={ACCENT}
                  bgSuccess={BG_SUCCESS}
                  accentTea={ACCENT_TEA}
                />
              )}
            </LevelCard>

            <LevelCard
              level={2}
              title="レベル2：移動＆操作"
              desc="業種問わず「業務で使えたら作業効率爆上がり」ショートカット"
              keys="Ctrl+D/R、Ctrl+Z、Ctrl+Home/End"
              color={ACCENT_DARK}
              selectedLevel={selectedLevel}
              startLevel={startLevel}
              setSelectedLevel={setSelectedLevel}
            >
              {selectedLevel === 2 && (
                <LevelDemoContent
                  selectedLevel={2}
                  currentMissionIndex={currentMissionIndex}
                  currentMissions={currentMissions}
                  currentMission={currentMission}
                  completedMissions={completedMissions}
                  showSuccess={showSuccess}
                  goToNextMission={goToNextMission}
                  resetMissions={resetMissions}
                  setSelectedLevel={setSelectedLevel}
                  handleKeyPress={handleKeyPress}
                  ExcelGrid={ExcelGrid}
                  accentColor={ACCENT_DARK}
                  bgSuccess={BG_SUCCESS}
                  accentTea={ACCENT_TEA}
                />
              )}
            </LevelCard>

            <LevelCard
              level={3}
              title="レベル3：実務スピード"
              desc="投資銀行の財務モデリングでも活用できるショートカット"
              keys="Ctrl+Shift+Home/End、Ctrl/Shift+Space、シート移動"
              color={ACCENT_TEA}
              selectedLevel={selectedLevel}
              startLevel={startLevel}
              setSelectedLevel={setSelectedLevel}
            >
              {selectedLevel === 3 && (
                <LevelDemoContent
                  selectedLevel={3}
                  currentMissionIndex={currentMissionIndex}
                  currentMissions={currentMissions}
                  currentMission={currentMission}
                  completedMissions={completedMissions}
                  showSuccess={showSuccess}
                  goToNextMission={goToNextMission}
                  resetMissions={resetMissions}
                  setSelectedLevel={setSelectedLevel}
                  handleKeyPress={handleKeyPress}
                  ExcelGrid={ExcelGrid}
                  accentColor={ACCENT_TEA}
                  bgSuccess={BG_SUCCESS}
                  accentTea={ACCENT_TEA}
                />
              )}
            </LevelCard>
          </div>

          {selectedLevel !== null && (
            <div style={{
              padding: 'clamp(15px, 3vw, 20px)',
              backgroundColor: BG_HINT,
              border: `2px solid ${ACCENT}`,
              borderRadius: '8px',
              marginTop: '20px',
              fontSize: 'clamp(12px, 3vw, 13px)'
            }}>
              <p style={{ margin: 0 }}>
                <i className="fas fa-lightbulb" aria-hidden /> <strong>ヒント：</strong>
                グリッドをクリックしてからキーを押してください。正解したら「次のミッションへ」ボタンで次へ進めます。
              </p>
            </div>
          )}
        </section>

        <section>
          <h2>ショートカット一覧</h2>
          <p style={{ margin: '0 0 15px 0', fontSize: 'clamp(12px, 3vw, 13px)', color: '#666', lineHeight: 1.6, overflowWrap: 'break-word' }}>
            色の意味：<span style={{ color: ACCENT, fontWeight: 'bold' }}>レベル1＝基本</span> / <span style={{ color: ACCENT_DARK, fontWeight: 'bold' }}>レベル2＝応用</span> / <span style={{ color: ACCENT_TEA, fontWeight: 'bold' }}>レベル3＝実務</span> / <span style={{ color: '#6366f1', fontWeight: 'bold' }}>応用編＝Alt</span>
          </p>

          <ShortcutAccordion
            level={1}
            title="レベル1：基本操作"
            color={ACCENT}
            shortcuts={[
              { key: 'Ctrl + →', desc: 'データの端まで右にジャンプ' },
              { key: 'Ctrl + Shift + →', desc: '右方向に範囲選択' },
              { key: 'Ctrl + C', desc: 'コピー' },
              { key: 'Ctrl + V', desc: '貼り付け' },
              { key: 'F2', desc: 'セルを編集モードにする' },
            ]}
            completedMissions={completedMissions}
            shortcutToMissionId={shortcutToMissionId}
          />

          <ShortcutAccordion
            level={2}
            title="レベル2：移動＆操作"
            color={ACCENT_DARK}
            shortcuts={[
              { key: 'Ctrl + D', desc: '選択範囲を下方向にコピー' },
              { key: 'Ctrl + R', desc: '選択範囲を右方向にコピー' },
              { key: 'Ctrl + Z', desc: '元に戻す（Undo）' },
              { key: 'Ctrl + Home', desc: '先頭（A1セル）に移動' },
              { key: 'Ctrl + End', desc: 'データ範囲の末尾に移動' },
            ]}
            completedMissions={completedMissions}
            shortcutToMissionId={shortcutToMissionId}
          />

          <ShortcutAccordion
            level={3}
            title="レベル3：実務スピード"
            color={ACCENT_TEA}
            shortcuts={[
              { key: 'Ctrl + Shift + Home', desc: '先頭（A1）まで範囲選択' },
              { key: 'Ctrl + Shift + End', desc: 'データ末尾まで範囲選択' },
              { key: 'Ctrl + Space', desc: '列全体を選択' },
              { key: 'Shift + Space', desc: '行全体を選択' },
              { key: 'Ctrl + PageDown', desc: '次のワークシートに移動' },
            ]}
            completedMissions={completedMissions}
            shortcutToMissionId={shortcutToMissionId}
          />

          <details style={{ marginBottom: '15px' }}>
            <summary style={{
              padding: 'clamp(12px, 3vw, 15px)',
              backgroundColor: '#6366f1',
              color: '#fff',
              border: '2px solid #4f46e5',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              listStyle: 'none',
              WebkitTapHighlightColor: 'transparent'
            }}>
              <span style={{ marginRight: '10px' }}><i className="fas fa-plus" aria-hidden /> 応用編：Alt（リボン操作）</span>
            </summary>
            <div style={{
              padding: '15px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderTop: 'none',
              borderRadius: '0 0 5px 5px'
            }}>
              <p style={{ marginBottom: '15px' }}>
                実務では<strong>Altキー</strong>でリボンメニューをキーボード操作します。色変更や書式設定など、UI的にマウス向けの操作もキーボードでこなせます。慣れが必要ですが、財務モデリングをやるならこのレベルの知識は必須です。
              </p>
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
                      <td><strong>Alt</strong></td>
                      <td>リボンのキーヒントを表示</td>
                    </tr>
                    <tr>
                      <td><strong>Alt + H</strong></td>
                      <td>ホームタブを開く</td>
                    </tr>
                    <tr>
                      <td><strong>Alt + H, F, C</strong></td>
                      <td>フォント色を変更</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </section>

        <section>
          <h2>ショートカットを身につけるコツ</h2>
          <ul>
            <li><strong>とにかく日常業務でどんどん使う</strong>：使わないと忘れます。毎日少しずつでも使う習慣を。</li>
            <li><strong>目に見えるところに置く</strong>：よく見る場所に一覧を貼っておく。デスクの横、モニターの端など。</li>
            <li><strong>覚えたいショートカットを書き出す</strong>：自分用のメモにまとめると頭に入りやすい。</li>
            <li><strong>ショートカットシール（ステッカー）を活用</strong>：キーボードに貼るタイプも市販されています。手元を見ればすぐ確認できるのでおすすめです。</li>
          </ul>
        </section>

        <AdBelowRelatedTerms />

        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
