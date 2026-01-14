'use client'

import { useState } from 'react'

type TimelineStep = {
  id: number
  title: string
  description: string
  role: 'attacker' | 'developer' | 'system'
  status: 'pending' | 'active' | 'completed'
}

export default function ZeroDayDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAttacking, setIsAttacking] = useState(false)
  const [attackResult, setAttackResult] = useState<string>('')

  const timeline: TimelineStep[] = [
    {
      id: 0,
      title: '脆弱性を発見',
      description: '攻撃者だけが知っている。開発者も誰も気づいていない。',
      role: 'attacker',
      status: 'pending'
    },
    {
      id: 1,
      title: '攻撃コードを作成',
      description: '脆弱性を悪用する攻撃コード（エクスプロイト）を準備。',
      role: 'attacker',
      status: 'pending'
    },
    {
      id: 2,
      title: '攻撃を実行 → Day 0',
      description: 'パッチが存在しない状態で攻撃。防御は不可能。',
      role: 'attacker',
      status: 'pending'
    },
    {
      id: 3,
      title: '開発者が気づく',
      description: '攻撃が発覚。でも既に手遅れ…',
      role: 'developer',
      status: 'pending'
    },
    {
      id: 4,
      title: 'パッチを公開 → Day 1',
      description: '修正パッチを公開。でも被害は既に発生している。',
      role: 'developer',
      status: 'pending'
    }
  ]

  const handleNextStep = () => {
    if (currentStep < timeline.length - 1) {
      setCurrentStep(currentStep + 1)
      
      // 攻撃実行のステップで特別な処理
      if (currentStep === 1) {
        setIsAttacking(true)
        setTimeout(() => {
          setAttackResult('攻撃成功！システムに侵入されました。')
          setIsAttacking(false)
        }, 2000)
      }
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsAttacking(false)
    setAttackResult('')
  }

  const getStepStatus = (stepId: number): 'pending' | 'active' | 'completed' => {
    if (stepId < currentStep) return 'completed'
    if (stepId === currentStep) return 'active'
    return 'pending'
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'attacker':
        return '#ea9b8a' // 赤系（攻撃者）
      case 'developer':
        return '#8abdea' // 青系（開発者）
      case 'system':
        return '#82c9a0' // 緑系（システム）
      default:
        return '#ddd'
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'attacker':
        return '👤'
      case 'developer':
        return '👨‍💻'
      case 'system':
        return '🖥️'
      default:
        return '📌'
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
          🎮 ゼロデイ攻撃のタイムラインを体験しよう
        </h3>

        <div style={{ marginBottom: '12px', maxHeight: '400px', overflowY: 'auto' }}>
          {timeline.map((step, index) => {
            const status = getStepStatus(index)
            const isActive = status === 'active'
            const isCompleted = status === 'completed'
            
            return (
              <div
                key={step.id}
                style={{
                  marginBottom: '10px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: `2px solid ${isActive ? getRoleColor(step.role) : '#ddd'}`,
                  backgroundColor: isActive ? `${getRoleColor(step.role)}20` : isCompleted ? '#f5f5f5' : '#fff',
                  opacity: status === 'pending' ? 0.6 : 1,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? `0 2px 4px ${getRoleColor(step.role)}30` : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '20px', marginRight: '8px' }}>
                    {getRoleIcon(step.role)}
                  </span>
                  <h4 style={{ 
                    margin: 0, 
                    color: isActive ? getRoleColor(step.role) : '#222',
                    fontWeight: isActive ? 'bold' : '600',
                    fontSize: '16px'
                  }}>
                    {step.title}
                    {isCompleted && ' ✓'}
                    {isActive && ' →'}
                  </h4>
                </div>
                <p style={{ 
                  margin: 0, 
                  color: isActive ? '#444' : '#555',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  fontWeight: isActive ? '500' : 'normal'
                }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {isAttacking && (
          <div style={{
            padding: '12px',
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#856404' }}>
              ⚠️ 攻撃を実行中...
            </p>
          </div>
        )}

        {attackResult && (
          <div style={{
            padding: '12px',
            backgroundColor: '#f8d7da',
            border: '2px solid #dc3545',
            borderRadius: '8px',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#721c24' }}>
              ❌ {attackResult}
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button
            className="demo-button"
            onClick={handleNextStep}
            disabled={currentStep >= timeline.length - 1}
            style={{
              backgroundColor: currentStep >= timeline.length - 1 ? '#ccc' : '#8abdea',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '5px',
              cursor: currentStep >= timeline.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            {currentStep >= timeline.length - 1 ? '完了' : '次のステップ'}
          </button>
          <button
            className="demo-button"
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


