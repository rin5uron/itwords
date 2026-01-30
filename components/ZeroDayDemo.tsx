'use client'

import { useState } from 'react'

export default function ZeroDayDemo() {
  const [isStarted, setIsStarted] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleStart = () => {
    setIsStarted(true)
    setTimeout(() => {
      setShowResult(true)
    }, 1500)
  }

  const handleReset = () => {
    setIsStarted(false)
    setShowResult(false)
  }

  return (
    <div className="demo-section" style={{ marginTop: '20px' }}>
      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '20px', 
        borderRadius: '10px',
        border: '2px solid #ddd',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '18px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
          ゼロデイ攻撃の流れを体験しよう
        </h3>

        {!isStarted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}><i className="fas fa-user" aria-hidden /></div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ea9b8a' }}>攻撃者</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>脆弱性を発見</div>
              </div>
              <div style={{ fontSize: '20px', color: '#999', margin: '0 10px' }}>→</div>
              <div style={{ flex: 1, textAlign: 'center', opacity: 0.5 }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}><i className="fas fa-shield-alt" aria-hidden /></div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8abdea' }}>防御側</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>まだ気づいていない</div>
              </div>
            </div>
            <button
              className="demo-button"
              onClick={handleStart}
              style={{
                backgroundColor: '#ea9b8a',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              攻撃シミュレーションを開始
            </button>
          </div>
        ) : (
          <div>
            {!showResult ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '15px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '2px solid #ea9b8a'
                }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}><i className="fas fa-user" aria-hidden /></div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ea9b8a' }}>攻撃者</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>攻撃を実行中...</div>
                  </div>
                  <div style={{ fontSize: '20px', color: '#ea9b8a', margin: '0 10px', animation: 'pulse 1s infinite' }}><i className="fas fa-bolt" aria-hidden /></div>
                  <div style={{ flex: 1, textAlign: 'center', opacity: 0.5 }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}><i className="fas fa-shield-alt" aria-hidden /></div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8abdea' }}>防御側</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>パッチなし（Day 0）</div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#666' }}>攻撃が進行中...</p>
              </div>
            ) : (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '15px',
                  backgroundColor: '#f8d7da',
                  borderRadius: '8px',
                  border: '2px solid #dc3545'
                }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}><i className="fas fa-user" aria-hidden /></div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#ea9b8a' }}>攻撃者</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>攻撃成功 <i className="fas fa-check" aria-hidden /></div>
                  </div>
                  <div style={{ fontSize: '20px', color: '#dc3545', margin: '0 10px' }}>→</div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}><i className="fas fa-shield-alt" aria-hidden /></div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#8abdea' }}>防御側</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>パッチ公開（Day 1以降）</div>
                  </div>
                </div>
                <div style={{
                  padding: '15px',
                  backgroundColor: '#fff3cd',
                  border: '2px solid #ffc107',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#856404' }}>
                    <i className="fas fa-times-circle" aria-hidden /> 攻撃成功！パッチが存在しない状態（Day 0）で攻撃され、防御不可能でした
                  </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button
                    className="demo-button"
                    onClick={handleReset}
                    style={{
                      backgroundColor: '#6c757d',
                      color: 'white',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    もう一度体験する
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


