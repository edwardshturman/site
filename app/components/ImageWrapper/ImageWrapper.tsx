'use client'

import { useEffect, useState } from 'react'
import styles from './ImageWrapper.module.css'

export function ImageWrapper(
  { caption, children }:
  { caption?: string, children: React.ReactNode }
) {
  const CELL_SIZE = 30
  const ROWS = 17
  const [cols, setCols] = useState(0)
  const GRID_HEIGHT = 510
  const STROKE_WIDTH = 1
  const PADDING = 20

  useEffect(() => {
    function handleReize() {
      const viewportWidth = window.innerWidth - PADDING * 2
      const newCols = Math.floor(viewportWidth / CELL_SIZE)
      setCols(newCols)
    }

    window.addEventListener('resize', handleReize)
    handleReize()
    return () => {
      document.body.classList.remove('no-constraints')
      window.removeEventListener('resize', handleReize)
    }
  }, [])

  const colIndices = [...Array(cols).keys()]
  const rowIndices = [...Array(ROWS).keys()]
  const gridWidth = cols * CELL_SIZE

  return (
    <div id={styles.container}>
      <svg
        id={styles.grid}
        width={`${gridWidth}px`}
        height={`${GRID_HEIGHT}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer border */}
        <rect
          x={STROKE_WIDTH / 2}
          y={STROKE_WIDTH / 2}
          width={`${gridWidth - STROKE_WIDTH}px`}
          height={`${GRID_HEIGHT - STROKE_WIDTH}px`}
          fill="none"
          stroke="hsl(0, 0%, 10%)"
          strokeWidth={`${STROKE_WIDTH * 2}px`}
        />
        {/* Grid */}
        {rowIndices.map((row) => (
          colIndices.map((col) => (
            <rect
              key={`${row}-${col}`}
              x={col * CELL_SIZE + STROKE_WIDTH / 2}
              y={row * CELL_SIZE + STROKE_WIDTH / 2}
              width={`${CELL_SIZE - STROKE_WIDTH}px`}
              height={`${CELL_SIZE - STROKE_WIDTH}px`}
              fill="none"
              stroke="hsl(0, 0%, 10%)"
              strokeWidth={`${STROKE_WIDTH}px`}
            />
          ))
        ))}
      </svg>
        <div id={styles.imageContainer}>
          {children}
          {caption && <p>{caption}</p>}
        </div>
    </div>
  )
}

// Attempt with `pattern`
{/*
  <div id={styles.container}>
    <svg
      id={styles.grid}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize.toString()} 0 L 0 0 0 ${cellSize.toString()}`}
            fill="none"
            stroke="#fdbb30"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <div id={styles.imageContainer}>
      {children}
    </div>
  </div>
*/}
