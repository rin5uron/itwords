'use client'

import { useState } from 'react'

type DiagnosisStep = {
  id: number
  title: string
  description: string
  finding?: string
  severity?: 'high' | 'medium' | 'low'
}

export default function WhiteHatDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [foundVulnerabilities, setFoundVulnerabilities] = useState<string[]>([])

  const steps: DiagnosisStep[] = [
    {
      id: 0,
      title: '契約・スコープ確認',
      description: '依頼企業と正式契約。テスト対象範囲を明確化。',
    },
    {
      id: 1,
      title: '情報収集',
      description: 'ターゲットシステムの技術スタック、ネットワーク構成を調査。',
    },
    {
      id: 2,
      title: '脆弱性スキャン',
      description: '自動ツールでシステム全体をスキャン。',
      finding: 'SQLインジェクションの可能性を検出',
      severity: 'high',
    },
    {
      id: 3,
      title: '手動検証',
      description: '実際に攻撃を試みて脆弱性を確認（ペネトレーションテスト）。',
      finding: 'SQLインジェクションの脆弱性を確認',
      severity: 'high',
    },
    {
      id: 4,
      title: 'レポート作成',
      description: '発見した脆弱性と対策方法をまとめて企業に報告。',
      finding: '修正パッチ適用を推奨',
      severity: 'high',
    },
  ]

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      if (currentStep === 1) {
        setIsScanning(true)
        setTimeout(() => {
          setFoundVulnerabilities(['SQLインジェクション', 'XSS', '古いライブラリ'])
          setIsScanning(false)
          setCurrentStep(currentStep + 1)
        }, 2000)
      } else {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsScanning(false)
    setFoundVulnerabilities([])
  }

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case 'high':
        return '#dc3545'
      case 'medium':
        return '#ffc107'
      case 'low':
        return '#28a745'
      default:
        return '#6c757d'
    }
  }

  const getSeverityLabel = (severity?: string) => {
    switch (severity) {
      case 'high':
        return '🔴 高'
      case 'medium':
        return '🟡 中'
      case 'low':
        return '🟢 低'
      default:
        return ''
    }
  }

  return (
    <div className="demo-section" style={{ marginTop: '20px' }}>
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '15px',
        borderRadius: '10px',
        border: '2px solid #ddd',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          🎮 脆弱性診断の流れを体験しよう
        </h3>

        <div style={{ marginBottom: '15px' }}>
          {steps.map((step, index) => {
            const isActive = index === currentStep
            const isCompleted = index < currentStep
            const isPending = index > currentStep

            return (
              <div
                key={step.id}
                style={{
                  marginBottom: '10px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: `2px solid ${isActive ? '#82c9a0' : '#ddd'}`,
                  backgroundColor: isActive ? '#82c9a020' : isCompleted ? '#f5f5f5' : '#fff',
                  opacity: isPending ? 0.5 : 1,
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '20px', marginRight: '8px' }}>
                    {isCompleted ? '✅' : isActive ? '🔍' : '⏳'}
                  </span>
                  <h4 style={{
                    margin: 0,
                    color: isActive ? '#82c9a0' : '#222',
                    fontWeight: isActive ? 'bold' : '600',
                    fontSize: '16px'
                  }}>
                    {step.title}
                  </h4>
                </div>
                <p style={{
                  margin: 0,
                  marginBottom: step.finding && isActive ? '8px' : 0,
                  color: '#555',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
                {step.finding && isActive && (
                  <div style={{
                    backgroundColor: '#fff3cd',
                    border: `2px solid ${getSeverityColor(step.severity)}`,
                    padding: '10px',
                    borderRadius: '5px',
                    fontSize: '14px',
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                      {getSeverityLabel(step.severity)} 発見：
                    </div>
                    <div style={{ color: '#333' }}>{step.finding}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {isScanning && (
          <div style={{
            padding: '12px',
            backgroundColor: '#d1ecf1',
            border: '2px solid #17a2b8',
            borderRadius: '8px',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#0c5460' }}>
              🔍 スキャン中...
            </p>
          </div>
        )}

        {foundVulnerabilities.length > 0 && currentStep >= 2 && (
          <div style={{
            padding: '12px',
            backgroundColor: '#f8d7da',
            border: '2px solid #dc3545',
            borderRadius: '8px',
            marginBottom: '12px',
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#721c24' }}>
              ⚠️ 発見された脆弱性：
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#721c24' }}>
              {foundVulnerabilities.map((vuln, idx) => (
                <li key={idx}>{vuln}</li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button
            onClick={handleNextStep}
            disabled={currentStep >= steps.length - 1 || isScanning}
            style={{
              backgroundColor: currentStep >= steps.length - 1 ? '#ccc' : '#82c9a0',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: currentStep >= steps.length - 1 || isScanning ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            {currentStep >= steps.length - 1 ? '完了' : '次のステップ'}
          </button>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  )
}
