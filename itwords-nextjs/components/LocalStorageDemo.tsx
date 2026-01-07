'use client'

import { useState, useEffect } from 'react'

export default function LocalStorageDemo() {
  const [name, setName] = useState('山田')
  const [age, setAge] = useState('30')
  const [savedData, setSavedData] = useState('なし')

  useEffect(() => {
    displayData()
  }, [])

  const saveData = () => {
    const user = { name, age }
    localStorage.setItem('userData', JSON.stringify(user))
    displayData()
  }

  const displayData = () => {
    const jsonData = localStorage.getItem('userData')
    if (jsonData) {
      const user = JSON.parse(jsonData)
      setSavedData(`名前: ${user.name}, 年齢: ${user.age}`)
    } else {
      setSavedData('なし')
    }
  }

  const clearData = () => {
    localStorage.removeItem('userData')
    setName('山田')
    setAge('30')
    displayData()
  }

  return (
    <div className="demo-section">
      <p>ユーザー情報を入力してください。</p>
      <input
        type="text"
        id="name-input"
        placeholder="名前"
        style={{ width: '40%', padding: '10px', fontSize: '1em', marginBottom: '15px' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        id="age-input"
        placeholder="年齢"
        style={{ width: '30%', padding: '10px', fontSize: '1em', marginBottom: '15px', marginLeft: '10px' }}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button className="demo-button" onClick={saveData}>
        保存
      </button>
      <button
        className="demo-button"
        onClick={clearData}
        style={{ backgroundColor: '#aaa', marginLeft: '10px' }}
      >
        クリア
      </button>
      <p id="demo-message" style={{ marginTop: '20px' }}>
        保存されたデータ: <span id="saved-data">{savedData}</span>
      </p>
    </div>
  )
}
