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
      description: '攻撃者がソフトウェアのセキュリティ上の欠陥を発見しました。この時点では、開発者も一般ユーザーもその脆弱性の存在を知りません。',
      role: 'attacker',
      status: 'pending'
    },
    {
      id: 1,
      title: '攻撃コードを作成',
      description: '攻撃者は発見した脆弱性を悪用するための攻撃コード（エクスプロイト）を作成します。',
      role: 'attacker',
      status: 'pending'
    },
    {
      id: 2,
      title: '攻撃を実行',
      description: '開発者が脆弱性に気づく前、または気づいても修正パッチを公開する前に、攻撃を実行します。',
      role: 'attacker',
      status: 'pending'
    },
    {
      id: 3,
      title: '開発者が気づく',
      description: '攻撃が発覚し、開発者が脆弱性を認識します。しかし、既に攻撃を受けてしまったシステムには手遅れです。',
      role: 'developer',
      status: 'pending'
    },
    {
      id: 4,
      title: 'パッチを開発・公開',
      description: '開発者が修正パッチを開発し、公開します。しかし、攻撃を受けたシステムには既に被害が発生しています。',
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
    <div className="demo-section" style={{ marginTop: '30px' }}>
      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '20px', 
        borderRadius: '10px',
        border: '2px solid #ddd',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '15px' }}>
          🎮 ゼロデイ攻撃のタイムラインを体験しよう
        </h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          あなたは攻撃者の視点で、ゼロデイ攻撃の流れを体験できます。
          <br />
          「次のステップ」ボタンを押して、攻撃の進行を確認してみましょう。
        </p>

        <div style={{ marginBottom: '20px' }}>
          {timeline.map((step, index) => {
            const status = getStepStatus(index)
            const isActive = status === 'active'
            const isCompleted = status === 'completed'
            
            return (
              <div
                key={step.id}
                style={{
                  marginBottom: '15px',
                  padding: '15px',
                  borderRadius: '8px',
                  border: `2px solid ${isActive ? getRoleColor(step.role) : '#ddd'}`,
                  backgroundColor: isActive ? `${getRoleColor(step.role)}15` : isCompleted ? '#f0f0f0' : '#fff',
                  opacity: status === 'pending' ? 0.5 : 1,
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '24px', marginRight: '10px' }}>
                    {getRoleIcon(step.role)}
                  </span>
                  <h4 style={{ 
                    margin: 0, 
                    color: isActive ? getRoleColor(step.role) : '#333',
                    fontWeight: isActive ? 'bold' : 'normal'
                  }}>
                    {step.title}
                    {isCompleted && ' ✓'}
                    {isActive && ' → 進行中'}
                  </h4>
                </div>
                <p style={{ 
                  margin: 0, 
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {isAttacking && (
          <div style={{
            padding: '20px',
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#856404' }}>
              ⚠️ 攻撃を実行中...
            </p>
          </div>
        )}

        {attackResult && (
          <div style={{
            padding: '20px',
            backgroundColor: '#f8d7da',
            border: '2px solid #dc3545',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#721c24' }}>
              ❌ {attackResult}
            </p>
            <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#721c24' }}>
              開発者が脆弱性に気づく前に、攻撃が成功してしまいました。
              <br />
              これが「ゼロデイ攻撃」の恐ろしさです。
            </p>
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button
            className="demo-button"
            onClick={handleNextStep}
            disabled={currentStep >= timeline.length - 1}
            style={{
              backgroundColor: currentStep >= timeline.length - 1 ? '#ccc' : '#8abdea',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '5px',
              cursor: currentStep >= timeline.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: '16px',
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
              padding: '12px 24px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            リセット
          </button>
        </div>

        {currentStep >= timeline.length - 1 && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#d1ecf1',
            border: '2px solid #bee5eb',
            borderRadius: '8px'
          }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#0c5460' }}>
              <strong>💡 ポイント：</strong>
              ゼロデイ攻撃では、脆弱性が発見されてから修正パッチが提供されるまでの時間が「ゼロ日」、
              つまり対策する時間が全くない状態で攻撃が行われます。
              これが「ゼロデイ」という名前の由来です。
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

