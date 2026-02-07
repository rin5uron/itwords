'use client'

import { useState, useEffect, useCallback } from 'react'

type CellData = {
  value: string
  row: number
  col: number
}

type ExcelGridProps = {
  onKeyPress?: (e: KeyboardEvent) => void
  initialData?: string[][]
}

export default function ExcelGrid({ onKeyPress, initialData }: ExcelGridProps) {
  const ROWS = 10
  const COLS = 10
  const COL_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  // 初期データ（財務モデルサンプル）
  const defaultData = initialData || [
    ['', '2023', '2024', '2025', '', '', '', '', '', ''],
    ['売上高', '1000', '1100', '1210', '', '', '', '', '', ''],
    ['売上原価', '600', '660', '726', '', '', '', '', '', ''],
    ['売上総利益', '400', '440', '484', '', '', '', '', '', ''],
    ['営業費用', '200', '220', '242', '', '', '', '', '', ''],
    ['営業利益', '200', '220', '242', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]

  const [data, setData] = useState<string[][]>(defaultData)
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 })
  const [selectedRange, setSelectedRange] = useState<{ start: { row: number; col: number }; end: { row: number; col: number } } | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [copiedCells, setCopiedCells] = useState<{ row: number; col: number }[] | null>(null)

  // セルの値を取得
  const getCellValue = (row: number, col: number) => {
    return data[row]?.[col] || ''
  }

  // セルの値を設定
  const setCellValue = (row: number, col: number, value: string) => {
    const newData = [...data]
    newData[row][col] = value
    setData(newData)
  }

  // セル選択
  const selectCell = (row: number, col: number) => {
    if (row >= 0 && row < ROWS && col >= 0 && col < COLS) {
      setSelectedCell({ row, col })
      setSelectedRange(null)
    }
  }

  // 範囲選択
  const selectRange = (startRow: number, startCol: number, endRow: number, endCol: number) => {
    setSelectedRange({
      start: { row: startRow, col: startCol },
      end: { row: endRow, col: endCol }
    })
  }

  // セルが選択範囲内かチェック
  const isCellInRange = (row: number, col: number) => {
    if (!selectedRange) return false
    const minRow = Math.min(selectedRange.start.row, selectedRange.end.row)
    const maxRow = Math.max(selectedRange.start.row, selectedRange.end.row)
    const minCol = Math.min(selectedRange.start.col, selectedRange.end.col)
    const maxCol = Math.max(selectedRange.start.col, selectedRange.end.col)
    return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol
  }

  // セルがコピー元かチェック
  const isCellCopied = (row: number, col: number) => {
    if (!copiedCells) return false
    return copiedCells.some(cell => cell.row === row && cell.col === col)
  }

  // 編集モード開始
  const startEditing = () => {
    setIsEditing(true)
    setEditValue(getCellValue(selectedCell.row, selectedCell.col))
  }

  // 編集モード終了
  const finishEditing = () => {
    if (isEditing) {
      setCellValue(selectedCell.row, selectedCell.col, editValue)
      setIsEditing(false)
    }
  }

  // キーボードイベント処理
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // 外部イベントリスナー呼び出し
      if (onKeyPress) {
        onKeyPress(e)
      }

      // 編集モード中
      if (isEditing) {
        if (e.key === 'Enter' || e.key === 'Escape') {
          e.preventDefault()
          finishEditing()
        }
        return
      }

      // F2: 編集モード
      if (e.key === 'F2') {
        e.preventDefault()
        startEditing()
        return
      }

      // Ctrl+C: コピー
      if (e.ctrlKey && e.key.toLowerCase() === 'c') {
        e.preventDefault()
        if (selectedRange) {
          const cells = []
          const minRow = Math.min(selectedRange.start.row, selectedRange.end.row)
          const maxRow = Math.max(selectedRange.start.row, selectedRange.end.row)
          const minCol = Math.min(selectedRange.start.col, selectedRange.end.col)
          const maxCol = Math.max(selectedRange.start.col, selectedRange.end.col)
          for (let r = minRow; r <= maxRow; r++) {
            for (let c = minCol; c <= maxCol; c++) {
              cells.push({ row: r, col: c })
            }
          }
          setCopiedCells(cells)
        } else {
          setCopiedCells([{ row: selectedCell.row, col: selectedCell.col }])
        }
        return
      }

      // Ctrl+V: 貼り付け
      if (e.ctrlKey && e.key.toLowerCase() === 'v') {
        e.preventDefault()
        if (copiedCells && copiedCells.length > 0) {
          const firstCell = copiedCells[0]
          const value = getCellValue(firstCell.row, firstCell.col)
          setCellValue(selectedCell.row, selectedCell.col, value)
        }
        return
      }

      // Ctrl+D: 下にコピー
      if (e.ctrlKey && e.key.toLowerCase() === 'd') {
        e.preventDefault()
        if (selectedRange) {
          const minRow = Math.min(selectedRange.start.row, selectedRange.end.row)
          const maxRow = Math.max(selectedRange.start.row, selectedRange.end.row)
          const col = selectedRange.start.col
          const value = getCellValue(minRow, col)
          for (let r = minRow + 1; r <= maxRow; r++) {
            setCellValue(r, col, value)
          }
        }
        return
      }

      // Ctrl+R: 右にコピー
      if (e.ctrlKey && e.key.toLowerCase() === 'r') {
        e.preventDefault()
        if (selectedRange) {
          const row = selectedRange.start.row
          const minCol = Math.min(selectedRange.start.col, selectedRange.end.col)
          const maxCol = Math.max(selectedRange.start.col, selectedRange.end.col)
          const value = getCellValue(row, minCol)
          for (let c = minCol + 1; c <= maxCol; c++) {
            setCellValue(row, c, value)
          }
        }
        return
      }

      // Ctrl+矢印: ジャンプ
      if (e.ctrlKey && !e.shiftKey) {
        e.preventDefault()
        let newRow = selectedCell.row
        let newCol = selectedCell.col

        if (e.key === 'ArrowRight') {
          // 右端まで移動（データがある最後の列 or 最後の列）
          for (let c = selectedCell.col + 1; c < COLS; c++) {
            if (getCellValue(selectedCell.row, c) === '') {
              newCol = c - 1
              break
            }
            newCol = c
          }
        } else if (e.key === 'ArrowLeft') {
          // 左端まで移動
          for (let c = selectedCell.col - 1; c >= 0; c--) {
            if (getCellValue(selectedCell.row, c) === '') {
              newCol = c + 1
              break
            }
            newCol = c
          }
        } else if (e.key === 'ArrowDown') {
          // 下端まで移動
          for (let r = selectedCell.row + 1; r < ROWS; r++) {
            if (getCellValue(r, selectedCell.col) === '') {
              newRow = r - 1
              break
            }
            newRow = r
          }
        } else if (e.key === 'ArrowUp') {
          // 上端まで移動
          for (let r = selectedCell.row - 1; r >= 0; r--) {
            if (getCellValue(r, selectedCell.col) === '') {
              newRow = r + 1
              break
            }
            newRow = r
          }
        }

        selectCell(newRow, newCol)
        return
      }

      // Ctrl+Shift+矢印: 範囲選択
      if (e.ctrlKey && e.shiftKey) {
        e.preventDefault()
        let endRow = selectedCell.row
        let endCol = selectedCell.col

        if (e.key === 'ArrowRight') {
          for (let c = selectedCell.col + 1; c < COLS; c++) {
            if (getCellValue(selectedCell.row, c) === '') {
              endCol = c - 1
              break
            }
            endCol = c
          }
        } else if (e.key === 'ArrowLeft') {
          for (let c = selectedCell.col - 1; c >= 0; c--) {
            if (getCellValue(selectedCell.row, c) === '') {
              endCol = c + 1
              break
            }
            endCol = c
          }
        } else if (e.key === 'ArrowDown') {
          for (let r = selectedCell.row + 1; r < ROWS; r++) {
            if (getCellValue(r, selectedCell.col) === '') {
              endRow = r - 1
              break
            }
            endRow = r
          }
        } else if (e.key === 'ArrowUp') {
          for (let r = selectedCell.row - 1; r >= 0; r--) {
            if (getCellValue(r, selectedCell.col) === '') {
              endRow = r + 1
              break
            }
            endRow = r
          }
        }

        selectRange(selectedCell.row, selectedCell.col, endRow, endCol)
        return
      }

      // 通常の矢印キー: セル移動
      if (!e.ctrlKey && !e.shiftKey) {
        e.preventDefault()
        if (e.key === 'ArrowRight') selectCell(selectedCell.row, Math.min(selectedCell.col + 1, COLS - 1))
        if (e.key === 'ArrowLeft') selectCell(selectedCell.row, Math.max(selectedCell.col - 1, 0))
        if (e.key === 'ArrowDown') selectCell(Math.min(selectedCell.row + 1, ROWS - 1), selectedCell.col)
        if (e.key === 'ArrowUp') selectCell(Math.max(selectedCell.row - 1, 0), selectedCell.col)
      }
    },
    [selectedCell, isEditing, editValue, selectedRange, copiedCells, data, onKeyPress]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div
      tabIndex={0}
      role="application"
      aria-label="擬似Excelグリッド（キー操作可）"
      style={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        overflow: 'auto',
        backgroundColor: '#fff',
        maxWidth: '100%',
        outline: 'none'
      }}
      onFocus={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 2px #14b8a6'
      }}
      onBlur={(e) => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      <table style={{
        borderCollapse: 'collapse',
        width: '100%',
        fontSize: 'clamp(11px, 2.5vw, 13px)'
      }}>
        <thead>
          <tr>
            <th style={{
              border: '1px solid #ddd',
              padding: '4px',
              backgroundColor: '#f0f0f0',
              minWidth: '30px',
              fontSize: 'clamp(10px, 2.3vw, 12px)'
            }}></th>
            {COL_LABELS.map((label, i) => (
              <th key={i} style={{
                border: '1px solid #ddd',
                padding: '4px',
                backgroundColor: '#f0f0f0',
                minWidth: '60px',
                fontWeight: 'bold',
                fontSize: 'clamp(10px, 2.3vw, 12px)'
              }}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: ROWS }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td style={{
                border: '1px solid #ddd',
                padding: '4px',
                backgroundColor: '#f0f0f0',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 'clamp(10px, 2.3vw, 12px)'
              }}>
                {rowIndex + 1}
              </td>
              {Array.from({ length: COLS }).map((_, colIndex) => {
                const isSelected = selectedCell.row === rowIndex && selectedCell.col === colIndex
                const isInRange = isCellInRange(rowIndex, colIndex)
                const isCopied = isCellCopied(rowIndex, colIndex)

                return (
                  <td
                    key={colIndex}
                    onClick={() => selectCell(rowIndex, colIndex)}
                    style={{
                      border: '1px solid #ddd',
                      padding: '4px 8px',
                      minWidth: '60px',
                      backgroundColor: isSelected ? '#d4e3fc' : isInRange ? '#e8f0fe' : '#fff',
                      outline: isSelected ? '2px solid #0066cc' : isCopied ? '2px dashed #28a745' : 'none',
                      cursor: 'cell',
                      position: 'relative'
                    }}
                  >
                    {isEditing && isSelected ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={finishEditing}
                        autoFocus
                        style={{
                          width: '100%',
                          border: 'none',
                          outline: 'none',
                          padding: 0,
                          fontSize: 'inherit',
                          backgroundColor: 'transparent'
                        }}
                      />
                    ) : (
                      getCellValue(rowIndex, colIndex)
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
