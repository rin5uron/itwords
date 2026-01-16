'use client'

import { useState } from 'react'

export default function GitFlowDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const gitFlowSteps = [
    {
      title: '1. mainブランチ（本番）',
      description: '本番環境で動いているコード',
      icon: '🌳',
      color: '#28a745',
      branch: 'main',
      action: '安定版のコード'
    },
    {
      title: '2. ブランチを作成',
      description: '新機能開発用のブランチを作る',
      icon: '🔀',
      color: '#007bff',
      branch: 'feature/login',
      action: 'git checkout -b feature/login'
    },
    {
      title: '3. 開発＆コミット',
      description: 'ブランチ上で開発し、変更を記録',
      icon: '💻',
      color: '#ffc107',
      branch: 'feature/login',
      action: 'git add . && git commit'
    },
    {
      title: '4. プッシュ',
      description: 'GitHubにブランチをアップロード',
      icon: '📤',
      color: '#17a2b8',
      branch: 'feature/login',
      action: 'git push origin feature/login'
    },
    {
      title: '5. プルリクエスト作成',
      description: 'mainに統合したいとお願いする',
      icon: '📝',
      color: '#6f42c1',
      branch: 'feature/login → main',
      action: 'GitHub上でPR作成'
    },
    {
      title: '6. コードレビュー',
      description: 'チームメンバーがコードを確認',
      icon: '👀',
      color: '#fd7e14',
      branch: 'feature/login',
      action: 'レビュー＆承認'
    },
    {
      title: '7. マージ',
      description: 'mainブランチに統合される',
      icon: '✅',
      color: '#28a745',
      branch: 'main',
      action: 'マージ完了！本番反映'
    }
  ]

  const nextStep = () => {
    if (currentStep < gitFlowSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetSteps = () => {
    setCurrentStep(0)
  }

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #ddd',
      marginTop: '20px'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '15px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
        🎮 Gitフロー体験デモ
      </h3>

      <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>
        実際のチーム開発の流れをステップごとに確認してみましょう👇
      </p>

      {/* 現在のステップ表示 */}
      <div style={{
        backgroundColor: gitFlowSteps[currentStep].color,
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>
          {gitFlowSteps[currentStep].icon}
        </div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>
          {gitFlowSteps[currentStep].title}
        </h4>
        <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
          {gitFlowSteps[currentStep].description}
        </p>
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          padding: '10px',
          borderRadius: '5px',
          fontFamily: 'Consolas, Monaco, monospace',
          fontSize: '14px'
        }}>
          <strong>ブランチ：</strong> {gitFlowSteps[currentStep].branch}
          <br />
          <strong>アクション：</strong> {gitFlowSteps[currentStep].action}
        </div>
      </div>

      {/* プログレスバー */}
      <div style={{
        display: 'flex',
        gap: '5px',
        marginBottom: '20px'
      }}>
        {gitFlowSteps.map((step, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: '8px',
              backgroundColor: index <= currentStep ? step.color : '#e0e0e0',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* 全ステップ一覧 */}
      <div style={{
        display: 'grid',
        gap: '10px',
        marginBottom: '20px'
      }}>
        {gitFlowSteps.map((step, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              backgroundColor: index === currentStep ? '#fff' : index < currentStep ? '#f0f0f0' : '#fafafa',
              border: `2px solid ${index === currentStep ? step.color : '#e0e0e0'}`,
              borderRadius: '8px',
              opacity: index <= currentStep ? 1 : 0.5,
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{
              fontSize: '24px',
              marginRight: '12px',
              minWidth: '30px',
              textAlign: 'center'
            }}>
              {step.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontWeight: 'bold',
                fontSize: '14px',
                color: index <= currentStep ? step.color : '#999'
              }}>
                {step.title}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                {step.description}
              </div>
            </div>
            {index === currentStep && (
              <div style={{
                padding: '4px 12px',
                backgroundColor: step.color,
                color: '#fff',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>
                現在
              </div>
            )}
            {index < currentStep && (
              <div style={{
                padding: '4px 12px',
                backgroundColor: '#28a745',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}>
                完了
              </div>
            )}
          </div>
        ))}
      </div>

      {/* コントロールボタン */}
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center'
      }}>
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: currentStep === 0 ? '#ccc' : '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          ← 前へ
        </button>
        <button
          onClick={resetSteps}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🔄 リセット
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === gitFlowSteps.length - 1}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: currentStep === gitFlowSteps.length - 1 ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: currentStep === gitFlowSteps.length - 1 ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          次へ →
        </button>
      </div>

      <p style={{
        marginTop: '15px',
        fontSize: '13px',
        color: '#6c757d',
        textAlign: 'center'
      }}>
        💡 これがチーム開発の基本的な流れです。ブランチを切って開発し、PRでレビューしてからマージします。
      </p>
    </div>
  )
}
