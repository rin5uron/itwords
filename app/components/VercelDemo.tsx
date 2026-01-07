'use client'

import { useState } from 'react'

export default function VercelDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const deploymentSteps = [
    { title: '1. コードをプッシュ', description: 'GitHubにコードをpushします', icon: '📤', color: '#28a745' },
    { title: '2. 自動検知', description: 'Vercelが変更を自動検知します', icon: '🔍', color: '#007bff' },
    { title: '3. ビルド開始', description: 'プロジェクトをビルドします', icon: '⚙️', color: '#ffc107' },
    { title: '4. デプロイ', description: 'グローバルCDNにデプロイします', icon: '🚀', color: '#17a2b8' },
    { title: '5. 完了', description: 'サイトが公開されました！', icon: '✅', color: '#28a745' }
  ]

  const nextStep = () => {
    if (currentStep < deploymentSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const resetSteps = () => {
    setCurrentStep(0)
  }

  return (
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>デプロイの流れ</h3>

      <div style={{ marginTop: '20px' }}>
        {deploymentSteps.map((step, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              padding: '15px',
              backgroundColor: index <= currentStep ? '#fff' : '#e9ecef',
              border: `2px solid ${index === currentStep ? step.color : '#dee2e6'}`,
              borderRadius: '8px',
              opacity: index <= currentStep ? 1 : 0.5,
              transition: 'all 0.3s'
            }}
          >
            <div style={{
              fontSize: '32px',
              marginRight: '15px',
              minWidth: '40px',
              textAlign: 'center'
            }}>
              {step.icon}
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px 0', color: index <= currentStep ? step.color : '#6c757d' }}>
                {step.title}
              </h4>
              <p style={{ margin: 0, fontSize: '14px' }}>{step.description}</p>
            </div>
            {index === currentStep && (
              <div style={{
                padding: '5px 15px',
                backgroundColor: step.color,
                color: '#fff',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                実行中
              </div>
            )}
            {index < currentStep && (
              <div style={{
                padding: '5px 15px',
                backgroundColor: '#28a745',
                color: '#fff',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                完了
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button
          onClick={nextStep}
          disabled={currentStep === deploymentSteps.length - 1}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: currentStep === deploymentSteps.length - 1 ? '#6c757d' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: currentStep === deploymentSteps.length - 1 ? 'not-allowed' : 'pointer',
          }}
        >
          次のステップ
        </button>
        <button
          onClick={resetSteps}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
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

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
        実際のデプロイでは、これらのステップが数秒〜数分で自動的に実行されます！
      </p>
    </div>
  )
}
