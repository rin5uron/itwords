'use client'

import { useState } from 'react'

export default function StackDemo() {
  const [stack, setStack] = useState<string[]>(['データ 1', 'データ 2'])
  const [itemCount, setItemCount] = useState(2)
  const [message, setMessage] = useState('')

  const pushItem = () => {
    if (stack.length >= 5) {
      setMessage('スタックがいっぱいです！')
      return
    }
    const newItemCount = itemCount + 1
    const newItem = `データ ${newItemCount}`
    setStack([...stack, newItem])
    setItemCount(newItemCount)
    setMessage(`"${newItem}" をPushしました。`)
  }

  const popItem = () => {
    if (stack.length === 0) {
      setMessage('スタックは空です。')
      return
    }
    const poppedItem = stack[stack.length - 1]
    setStack(stack.slice(0, -1))
    setMessage(`"${poppedItem}" をPopしました。`)
  }

  return (
    <div className="demo-section">
      <div className="demo-controls" style={{ marginBottom: '20px' }}>
        <button className="demo-button" onClick={pushItem} style={{ margin: '0 10px' }}>
          Push
        </button>
        <button className="demo-button pop" onClick={popItem} style={{ margin: '0 10px' }}>
          Pop
        </button>
      </div>
      <p id="demo-message" style={{ marginTop: '25px', fontSize: '1.5em', fontWeight: 'bold', minHeight: '1.5em' }}>
        {message}
      </p>
      <div
        id="stack-visualizer"
        style={{
          minHeight: '100px',
          border: '2px dashed #ddd',
          padding: '20px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#f9f9f9',
          marginTop: '20px'
        }}
      >
        {stack.map((item, index) => (
          <div
            key={index}
            className="stack-item"
            style={{
              backgroundColor: '#8abdea',
              margin: '2px',
              padding: '10px',
              borderRadius: '5px',
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
