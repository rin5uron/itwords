'use client'

import { useState } from 'react'

type CVEExample = {
  id: string
  year: string
  number: string
  description: string
  cvss: number
  severity: 'Low' | 'Medium' | 'High' | 'Critical'
  affected: string
}

export default function CVEDemo() {
  const [selectedCVE, setSelectedCVE] = useState<CVEExample | null>(null)

  const exampleCVEs: CVEExample[] = [
    {
      id: 'CVE-2021-44228',
      year: '2021',
      number: '44228',
      description: 'Log4j（Javaでログを記録するためのライブラリ）に、攻撃者が遠隔から好きなプログラムを実行できる重大な穴がありました。通称「Log4Shell」。',
      cvss: 10.0,
      severity: 'Critical',
      affected: 'Apache Log4j 2.0-beta9 〜 2.14.1',
    },
    {
      id: 'CVE-2024-3094',
      year: '2024',
      number: '3094',
      description: 'XZ Utils（データを圧縮するソフト。多くのLinuxで使われている）に、開発者が意図的に仕込んだ不正なコード（バックドア）が混入していた事件です。',
      cvss: 9.8,
      severity: 'Critical',
      affected: 'XZ Utils 5.6.0, 5.6.1',
    },
    {
      id: 'CVE-2023-23397',
      year: '2023',
      number: '23397',
      description: 'Microsoft Outlookで、攻撃者が他人のメールを読んだり、権限を乗っ取ったりできる脆弱性です。',
      cvss: 9.1,
      severity: 'Critical',
      affected: 'Microsoft Outlook (複数バージョン)',
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return '#dc3545'
      case 'High':
        return '#fd7e14'
      case 'Medium':
        return '#ffc107'
      case 'Low':
        return '#28a745'
      default:
        return '#6c757d'
    }
  }

  const getSeverityIcon = (severity: string) => (
    <i
      className="fas fa-circle"
      style={{ color: getSeverityColor(severity), marginRight: '6px', fontSize: '0.85em' }}
      aria-hidden
    />
  )

  return (
    <div
      className="demo-section"
      style={{
        marginTop: '20px',
        maxHeight: 'min(85vh, 720px)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: 'clamp(10px, 2.5vw, 15px)',
          borderRadius: '10px',
          border: '2px solid #ddd',
          flex: '1 1 auto',
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <h3 style={{ marginTop: 0, marginBottom: '8px', fontSize: 'clamp(16px, 3.5vw, 18px)', fontWeight: 'bold', color: '#333' }}>
            <i className="fas fa-gamepad" aria-hidden /> 実際のCVE番号を調べてみよう
          </h3>

          <p style={{ fontSize: 'clamp(13px, 2.8vw, 14px)', color: '#555', marginBottom: '10px' }}>
            下のCVE番号をクリックして詳細を確認：
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
          {exampleCVEs.map((cve) => (
            <button
              key={cve.id}
              onClick={() => setSelectedCVE(cve)}
              style={{
                flex: '1 1 auto',
                minWidth: 'min(100%, 140px)',
                padding: 'clamp(8px, 2vw, 12px)',
                backgroundColor: selectedCVE?.id === cve.id ? '#8abdea' : '#fff',
                color: selectedCVE?.id === cve.id ? '#fff' : '#333',
                border: '2px solid #8abdea',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: 'clamp(12px, 2.8vw, 15px)',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'monospace',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedCVE?.id !== cve.id) {
                  e.currentTarget.style.backgroundColor = '#e8f4f8'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCVE?.id !== cve.id) {
                  e.currentTarget.style.backgroundColor = '#fff'
                }
              }}
            >
              {cve.id}
            </button>
          ))}
          </div>
        </div>

        {selectedCVE && (
          <div
            style={{
              backgroundColor: '#fff',
              border: '3px solid #8abdea',
              borderRadius: '10px',
              padding: 'clamp(10px, 2.5vw, 15px)',
              marginTop: '8px',
              flex: '1 1 auto',
              minHeight: 0,
              overflowY: 'auto',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <h4 style={{
                margin: 0,
                fontSize: '20px',
                fontFamily: 'monospace',
                color: '#333'
              }}>
                {selectedCVE.id}
              </h4>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: getSeverityColor(selectedCVE.severity),
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '5px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {getSeverityIcon(selectedCVE.severity)} {selectedCVE.severity}
                <span style={{ marginLeft: '8px' }}>CVSS {selectedCVE.cvss}</span>
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: 'clamp(15px, 3.2vw, 17px)', color: '#333', lineHeight: '1.65', fontWeight: '500' }}>
                {selectedCVE.description}
              </div>
            </div>

            <div style={{ marginBottom: 0 }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                alignItems: 'center',
              }}>
                {selectedCVE.affected.split(/[,、]/).map((part, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 'clamp(12px, 2.6vw, 14px)',
                      fontFamily: 'monospace',
                      backgroundColor: '#e9ecef',
                      color: '#495057',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {part.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {!selectedCVE && (
          <div
            style={{
              backgroundColor: '#f8f9fa',
              border: '2px dashed #ddd',
              borderRadius: '8px',
              padding: 'clamp(12px, 2.5vw, 20px)',
              textAlign: 'center',
              color: '#6c757d',
              fontSize: 'clamp(13px, 2.8vw, 14px)',
              flexShrink: 0,
            }}
          >
            <i className="fas fa-hand-point-up" aria-hidden /> 上のCVE番号をクリックして詳細を表示
          </div>
        )}
      </div>
    </div>
  )
}
