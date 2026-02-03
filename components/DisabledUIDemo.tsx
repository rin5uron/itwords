'use client'

import { useState } from 'react'

export default function DisabledUIDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [points, setPoints] = useState(50)
  const REQUIRED_POINTS = 100

  const canRedeem = isLoggedIn && points >= REQUIRED_POINTS

  return (
    <div className="demo-section">
      <p>
        権限がない操作は最初から表示しない、条件未達成の操作は選択不可にします。
      </p>
      <div style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <button
            className="demo-button"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            style={{ marginRight: '8px' }}
          >
            {isLoggedIn ? 'ログアウト' : 'ログイン'}
          </button>
          <span style={{ fontSize: '0.95em', color: '#666' }}>
            現在: {isLoggedIn ? 'ログイン中' : '未ログイン'}
          </span>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>
            ポイント: {points}pt（景品交換には{REQUIRED_POINTS}pt必要）
          </label>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              className="demo-button"
              onClick={() => setPoints((p) => Math.max(0, p - 10))}
              style={{ padding: '6px 12px', fontSize: '0.9em' }}
            >
              -10pt
            </button>
            <button
              className="demo-button"
              onClick={() => setPoints((p) => p + 10)}
              style={{ padding: '6px 12px', fontSize: '0.9em' }}
            >
              +10pt
            </button>
          </div>
        </div>
        <div>
          <button
            className="demo-button"
            disabled={!canRedeem}
            style={{
              opacity: canRedeem ? 1 : 0.6,
              cursor: canRedeem ? 'pointer' : 'not-allowed',
            }}
          >
            景品を交換する
          </button>
          {!canRedeem && (
            <p style={{ marginTop: '8px', fontSize: '0.9em', color: '#666' }}>
              {!isLoggedIn
                ? 'ログインすると利用できます'
                : points < REQUIRED_POINTS
                  ? `${REQUIRED_POINTS - points}pt足りません`
                  : ''}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
