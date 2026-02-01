'use client'

import { useState } from 'react'

export default function SSHAccessFromOtherDemo() {
  const [step, setStep] = useState(0)
  const done = step >= 2

  return (
    <div
      className="demo-section demo-section--no-max-height"
      style={{
        border: '2px solid #8b5cf6',
        borderRadius: '8px',
        padding: 'clamp(12px, 3vw, 20px)',
        marginTop: '16px',
        backgroundColor: '#f5f3ff',
        maxWidth: '100%',
      }}
    >
      <h4 style={{ marginTop: 0, color: '#6d28d9' }}>別のPCから自分のPCに入る流れ</h4>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            padding: 'clamp(10px, 2.5vw, 14px)',
            borderRadius: '8px',
            backgroundColor: step >= 0 ? '#fff' : '#f8fafc',
            border: step >= 0 ? '2px solid #8b5cf6' : '1px solid #e2e8f0',
          }}
        >
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: step >= 0 ? '#8b5cf6' : '#cbd5e1',
              color: '#fff',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            1
          </span>
          <div>
            <strong>自分のPCで sshd を動かす<br>（誰かが「SSH
            で入ってくる」を待つ）</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: 'clamp(12px, 2.5vw, 13px)', color: '#64748b' }}>
              sshd が22番の入口で待っているので、自分のPCが“入り先”になる。このとき自分のPCが“サーバー”の役。
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            padding: 'clamp(10px, 2.5vw, 14px)',
            borderRadius: '8px',
            backgroundColor: step >= 1 ? '#fff' : '#f8fafc',
            border: step >= 1 ? '2px solid #8b5cf6' : '1px solid #e2e8f0',
          }}
        >
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: step >= 1 ? '#8b5cf6' : '#cbd5e1',
              color: '#fff',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            2
          </span>
          <div>
            <strong>別のPCから ssh ユーザー名@自分のPCのアドレス を打つ</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: 'clamp(12px, 2.5vw, 13px)', color: '#64748b' }}>
              別のPCが“クライアント”になり、自分のPCの中に入れる
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => setStep((n) => (n < 2 ? n + 1 : n))}
          disabled={done}
          style={{
            padding: 'clamp(8px, 2vw, 10px) clamp(14px, 3vw, 18px)',
            fontSize: 'clamp(13px, 2.5vw, 14px)',
            backgroundColor: done ? '#94a3b8' : '#8b5cf6',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: done ? 'not-allowed' : 'pointer',
          }}
        >
          {done ? '完了' : '次のステップ'}
        </button>
        <button
          type="button"
          onClick={() => setStep(0)}
          style={{
            padding: 'clamp(8px, 2vw, 10px) clamp(14px, 3vw, 18px)',
            fontSize: 'clamp(13px, 2.5vw, 14px)',
            backgroundColor: '#64748b',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          リセット
        </button>
      </div>
    </div>
  )
}
