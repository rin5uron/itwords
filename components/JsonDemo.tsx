'use client'

import { useState } from 'react'

export default function JsonDemo() {
  const [selectedFormat, setSelectedFormat] = useState<'json' | 'csv' | 'java' | null>(null)

  const sampleData = {
    name: '山田太郎',
    age: 28,
    city: '東京'
  }

  const jsonData = JSON.stringify(sampleData, null, 2)
  const csvData = '名前,年齢,都市\n山田太郎,28,東京'
  const javaData = 'public class User {\n  private String name = "山田太郎";\n  private int age = 28;\n  private String city = "東京";\n}'

  const getFormatInfo = (format: 'json' | 'csv' | 'java') => {
    switch (format) {
      case 'json':
        return {
          title: 'JSON',
          description: '軽量・シンプル・人間にも読みやすい',
          size: `${jsonData.length}文字`,
          color: '#8abdea'
        }
      case 'csv':
        return {
          title: 'CSV',
          description: 'シンプルだが構造が複雑になると読みにくい',
          size: `${csvData.length}文字`,
          color: '#82c9a0'
        }
      case 'java':
        return {
          title: 'Java',
          description: '構造化できるが重い・複雑',
          size: `${javaData.length}文字`,
          color: '#ea9b8a'
        }
    }
  }

  return (
    <div className="demo-section">
      <p style={{ marginBottom: '20px' }}>
        <strong>JSONの特徴を比較で理解しよう</strong>
        <br />
        同じデータを異なる形式で表現すると、JSONの「軽い」「シンプル」「読みやすい」という特徴が一目で分かります。
      </p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button
          className="demo-button"
          onClick={() => setSelectedFormat('json')}
          style={{
            backgroundColor: selectedFormat === 'json' ? '#8abdea' : '#ddd',
            color: selectedFormat === 'json' ? 'white' : '#333',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          JSON
        </button>
        <button
          className="demo-button"
          onClick={() => setSelectedFormat('csv')}
          style={{
            backgroundColor: selectedFormat === 'csv' ? '#82c9a0' : '#ddd',
            color: selectedFormat === 'csv' ? 'white' : '#333',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          CSV
        </button>
        <button
          className="demo-button"
          onClick={() => setSelectedFormat('java')}
          style={{
            backgroundColor: selectedFormat === 'java' ? '#ea9b8a' : '#ddd',
            color: selectedFormat === 'java' ? 'white' : '#333',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          Java
        </button>
      </div>

      {selectedFormat && (
        <div id="demo-message" style={{ marginTop: '20px' }}>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#f9f7ef',
              borderRadius: '8px',
              borderLeft: `4px solid ${getFormatInfo(selectedFormat).color}`
            }}
          >
            <h4 style={{ marginTop: 0, color: '#333', marginBottom: '10px' }}>
              {getFormatInfo(selectedFormat).title}
            </h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
              {getFormatInfo(selectedFormat).description}（データサイズ: {getFormatInfo(selectedFormat).size}）
            </p>
            <pre
              style={{
                backgroundColor: '#2d3748',
                color: '#e2e8f0',
                padding: '15px',
                borderRadius: '4px',
                overflowX: 'auto',
                fontFamily: "'Courier New', monospace",
                fontSize: '14px',
                lineHeight: '1.4',
                margin: 0
              }}
            >
              {selectedFormat === 'json' && jsonData}
              {selectedFormat === 'csv' && csvData}
              {selectedFormat === 'java' && javaData}
            </pre>
          </div>
          {selectedFormat === 'json' && (
            <div
              style={{
                marginTop: '15px',
                padding: '15px',
                backgroundColor: '#e8f4f8',
                borderRadius: '8px'
              }}
            >
              <p style={{ margin: 0, fontSize: '14px' }}>
                <strong><i className="fas fa-lightbulb" aria-hidden /> JSONのメリット：</strong>
                <br />
                軽量でシンプル、しかも人間にも読みやすい。これがJSONが広く使われる理由です。
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
