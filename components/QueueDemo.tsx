'use client'

import { useState } from 'react'

export default function QueueDemo() {
  const [queue, setQueue] = useState<string[]>(['客1', '客2'])
  const [personCount, setPersonCount] = useState(2)
  const [message, setMessage] = useState('')

  const enqueueItem = () => {
    if (queue.length >= 5) {
      setMessage('行列が長すぎます！')
      return
    }
    const newPersonCount = personCount + 1
    const newPerson = `客${newPersonCount}`
    setQueue([...queue, newPerson])
    setPersonCount(newPersonCount)
    setMessage(`"${newPerson}" が列に並びました。`)
  }

  const dequeueItem = () => {
    if (queue.length === 0) {
      setMessage('誰も並んでいません。')
      return
    }
    const servedPerson = queue[0]
    setQueue(queue.slice(1))
    setMessage(`"${servedPerson}" がレジを終えました。`)
  }

  return (
    <div className="demo-section">
      <button
        className="demo-button"
        onClick={enqueueItem}
        style={{ backgroundColor: '#82c9a0', margin: '0 10px' }}
      >
        Enqueue (追加)
      </button>
      <button
        className="demo-button dequeue"
        onClick={dequeueItem}
        style={{ backgroundColor: '#ea9b8a', margin: '0 10px' }}
      >
        Dequeue (取り出し)
      </button>
      <p id="demo-message" style={{ marginTop: '25px', fontSize: '1.5em', fontWeight: 'bold', minHeight: '1.5em' }}>
        {message}
      </p>
      <div
        id="queue-visualizer"
        style={{
          border: '2px solid #ccc',
          borderRadius: '5px',
          padding: '20px',
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          overflowX: 'auto',
          marginTop: '20px'
        }}
      >
        {queue.map((item, index) => (
          <div
            key={index}
            className="queue-item"
            style={{
              backgroundColor: '#82c9a0',
              color: 'white',
              padding: '10px 20px',
              marginRight: '10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap'
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
