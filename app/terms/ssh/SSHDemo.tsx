'use client'

import { useState } from 'react'

const STEPS = [
  { label: '手元のPC', desc: 'ターミナルで ssh コマンドを打つ', icon: 'fas fa-laptop', color: '#14b8a6' },
  { label: 'ネットワーク', desc: '暗号化してサーバーへ送る', icon: 'fas fa-network-wired', color: '#0ea5e9' },
  { label: 'サーバー（sshd）', desc: '22番ポートで受け付け、鍵を確認', icon: 'fas fa-server', color: '#8b5cf6' },
  { label: '接続完了', desc: 'サーバーの中に入れた', icon: 'fas fa-check-circle', color: '#22c55e' },
]

export default function SSHDemo() {
  const [step, setStep] = useState(0)
  const done = step >= STEPS.length

  return (
    <div
      className="demo-section"
      style={{
        border: '2px solid #14b8a6',
        borderRadius: '8px',
        padding: 'clamp(12px, 3vw, 20px)',
        marginTop: '16px',
        backgroundColor: '#f0fdfa',
        maxWidth: '100%',
      }}
    >
      <h3 style={{ marginTop: 0 }}>SSHでサーバーに入る流れ</h3>
      <p style={{ marginBottom: '16px', fontSize: 'clamp(13px, 2.8vw, 14px)', color: '#555' }}>
        ボタンを押して、手元のPCからサーバーに「入る」までの4ステップを確認しよう。
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        {STEPS.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              padding: 'clamp(10px, 2.5vw, 14px)',
              borderRadius: '8px',
              backgroundColor: step >= i ? '#fff' : '#f8fafc',
              border: step >= i ? `2px solid ${s.color}` : '1px solid #e2e8f0',
              opacity: step >= i ? 1 : 0.7,
            }}
          >
            <div
              style={{
                width: 'clamp(36px, 9vw, 42px)',
                height: 'clamp(36px, 9vw, 42px)',
                borderRadius: '50%',
                backgroundColor: step >= i ? s.color : '#cbd5e1',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                flexShrink: 0,
              }}
            >
              <i className={s.icon} aria-hidden />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 'clamp(13px, 3vw, 15px)', color: step >= i ? '#0d9488' : '#64748b' }}>
                {i + 1}. {s.label}
              </div>
              <div style={{ fontSize: 'clamp(12px, 2.5vw, 13px)', color: '#64748b', marginTop: '2px' }}>
                {s.desc}
              </div>
            </div>
            {step > i && (
              <i className="fas fa-check-circle" style={{ color: '#22c55e', fontSize: '18px' }} aria-hidden />
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-end', borderTop: '1px solid #b2dfdb', paddingTop: '16px' }}>
        <button
          type="button"
          onClick={() => setStep((n) => (n < STEPS.length ? n + 1 : n))}
          disabled={done}
          style={{
            padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 20px)',
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            backgroundColor: done ? '#94a3b8' : '#14b8a6',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: done ? 'not-allowed' : 'pointer',
            flex: 1,
            minWidth: '120px',
          }}
        >
          {done ? '完了' : '次のステップ'}
        </button>
        <button
          type="button"
          onClick={() => setStep(0)}
          style={{
            padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 20px)',
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            backgroundColor: '#64748b',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            flex: 1,
            minWidth: '100px',
          }}
        >
          リセット
        </button>
      </div>
    </div>
  )
}
