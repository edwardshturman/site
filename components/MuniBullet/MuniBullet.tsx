"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./MuniBullet.module.css"

const GRID = 16

// LEDs are dealt into this many shimmer phases, in a scrambled order
const SHIMMER_PHASES = 32
// Coprime with SHIMMER_PHASES, so stepping by it visits every phase once
const SPAWN_STRIDE = 13

// Line colors as published on Muni's system map
export const MUNI_LINES = {
  J: { name: "J Church", color: "#E18813" },
  K: { name: "K Ingleside", color: "#549DBF" },
  L: { name: "L Taraval", color: "#932290" },
  M: { name: "M Ocean View", color: "#008851" },
  N: { name: "N Judah", color: "#004988" },
  T: { name: "T Third Street", color: "#D40843" }
} as const

export type MuniLine = keyof typeof MUNI_LINES

// Half-widths of the 16×16 disc, row by row, measured from the center seam
const DISC = [3, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 7, 7, 6, 5, 3]

// 10px-tall glyphs, drawn with 2px strokes like the bold sign lettering
const GLYPHS: Record<MuniLine, string[]> = {
  J: [
    "....##",
    "....##",
    "....##",
    "....##",
    "....##",
    "....##",
    "....##",
    "##..##",
    "######",
    ".####."
  ],
  K: [
    "##...##.",
    "##..##..",
    "##.##...",
    "####....",
    "###.....",
    "####....",
    "##.##...",
    "##..##..",
    "##...##.",
    "##....##"
  ],
  L: [
    "##....",
    "##....",
    "##....",
    "##....",
    "##....",
    "##....",
    "##....",
    "##....",
    "######",
    "######"
  ],
  M: [
    "##......##",
    "###....###",
    "####..####",
    "##.####.##",
    "##..##..##",
    "##......##",
    "##......##",
    "##......##",
    "##......##",
    "##......##"
  ],
  N: [
    "##....##",
    "###...##",
    "###...##",
    "####..##",
    "##.##.##",
    "##.##.##",
    "##..####",
    "##...###",
    "##...###",
    "##....##"
  ],
  T: [
    "########",
    "########",
    "...##...",
    "...##...",
    "...##...",
    "...##...",
    "...##...",
    "...##...",
    "...##...",
    "...##..."
  ]
}

// 32-bit integer finalizer (murmur3 fmix32): a cheap, deterministic scramble
// that keeps server and client renders in sync
function mix(n: number): number {
  n |= 0
  n ^= n >>> 16
  n = Math.imul(n, 0x85ebca6b)
  n ^= n >>> 13
  n = Math.imul(n, 0xc2b2ae35)
  n ^= n >>> 16
  return n
}

// Each LED is a zero-length subpath; a square stroke cap turns it into a pixel
function buildPaths(line: MuniLine, seed: number) {
  const glyph = GLYPHS[line]
  const top = (GRID - glyph.length) / 2
  const left = (GRID - glyph[0].length) / 2
  let disc = ""
  let letter = ""
  const leds: { dot: string; hash: number }[] = []

  for (let row = 0; row < GRID; row++) {
    const half = DISC[row]
    for (let col = GRID / 2 - half; col < GRID / 2 + half; col++) {
      const dot = `M${col + 0.5} ${row + 0.5}h0`
      if (glyph[row - top]?.[col - left] === "#") letter += dot
      else disc += dot
      leds.push({ dot, hash: mix(seed * GRID * GRID + row * GRID + col + 1) })
    }
  }

  // Same idea as the avatar's shimmer: every LED flashes once per cycle, in a
  // hashed order. Grouping them into phases keeps it to a handful of elements.
  leds.sort((a, b) => a.hash - b.hash)
  const shimmer = Array.from({ length: SHIMMER_PHASES }, () => "")
  leds.forEach(({ dot }, i) => {
    shimmer[Math.floor((i / leds.length) * SHIMMER_PHASES)] += dot
  })

  return { disc, letter, shimmer }
}

const PATHS = Object.fromEntries(
  (Object.keys(MUNI_LINES) as MuniLine[]).map((line, i) => [
    line,
    buildPaths(line, i)
  ])
) as Record<MuniLine, ReturnType<typeof buildPaths>>

function Shimmer({ phases }: { phases: string[] }) {
  return (
    <g className={styles.shimmer}>
      {phases.map((d, i) => (
        <path
          key={i}
          d={d}
          style={
            {
              "--phase": i / SHIMMER_PHASES,
              // A second, unrelated order for spawning in and out on hover
              "--spawn": ((i * SPAWN_STRIDE) % SHIMMER_PHASES) / SHIMMER_PHASES
            } as React.CSSProperties
          }
        />
      ))}
    </g>
  )
}

// Flicker choreography: runs of [opacity, milliseconds], played with hard cuts

type Run = [level: number, ms: number]

const rand = (min: number, max: number) => min + Math.random() * (max - min)
const chance = (p: number) => Math.random() < p

function toAnimation(runs: Run[]) {
  const duration = runs.reduce((sum, [, ms]) => sum + ms, 0)
  let elapsed = 0
  const keyframes: Keyframe[] = runs.map(([level, ms]) => {
    const frame = { offset: elapsed / duration, opacity: level }
    elapsed += ms
    return { ...frame, easing: "step-end" }
  })
  keyframes.push({ offset: 1, opacity: runs[runs.length - 1][0] })
  return { keyframes, duration }
}

// A failing tube: a few stutters, sometimes a longer buzzing dropout
function flicker() {
  const runs: Run[] = []
  const blinks = Math.ceil(rand(0, 4))
  for (let i = 0; i < blinks; i++) {
    runs.push([rand(0, 0.45), rand(20, 110)])
    runs.push([rand(0.75, 1), rand(30, 220)])
  }
  if (chance(0.25)) {
    const buzz = Math.ceil(rand(2, 6))
    for (let i = 0; i < buzz; i++) {
      runs.push([rand(0.05, 0.3), rand(40, 160)])
      runs.push([rand(0.3, 0.6), rand(15, 50)])
    }
  }
  runs.push([1, 1])
  return toAnimation(runs)
}

// Striking the tube: dark, a couple of false starts, then it catches
function strike() {
  const runs: Run[] = [[0, rand(40, 120)]]
  const tries = Math.ceil(rand(1, 3))
  for (let i = 0; i < tries; i++) {
    runs.push([rand(0.4, 1), rand(25, 70)])
    runs.push([rand(0, 0.15), rand(50, 160)])
  }
  runs.push([1, 1])
  return toAnimation(runs)
}

function shutdown() {
  return toAnimation([
    [1, rand(20, 50)],
    [rand(0.1, 0.3), rand(30, 60)],
    [rand(0.6, 0.9), rand(30, 70)],
    [0, 1]
  ])
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function MuniBullet({ line }: { line: MuniLine }) {
  const { name, color } = MUNI_LINES[line]
  const { disc, letter, shimmer } = PATHS[line]
  const [on, setOn] = useState(true)
  const lit = useRef<SVGSVGElement>(null)
  const current = useRef<Animation>(null)

  function play({ keyframes, duration }: ReturnType<typeof toAnimation>) {
    current.current?.cancel()
    current.current = lit.current?.animate(keyframes, duration) ?? null
  }

  // Idle flickering, at random intervals. Some tubes are more broken than others.
  useEffect(() => {
    if (!on || prefersReducedMotion()) return
    const brokenness = rand(0.5, 1.6)
    let timer: ReturnType<typeof setTimeout>
    const schedule = () => {
      timer = setTimeout(
        () => {
          play(flicker())
          schedule()
        },
        rand(2500, 12000) * brokenness
      )
    }
    schedule()
    return () => clearTimeout(timer)
  }, [on])

  function toggle() {
    const next = !on
    setOn(next)
    if (prefersReducedMotion()) {
      play({
        keyframes: [{ opacity: next ? 0 : 1 }, { opacity: next ? 1 : 0 }],
        duration: 150
      })
    } else {
      play(next ? strike() : shutdown())
    }
  }

  return (
    <button
      type="button"
      className={`${styles.bullet} ${on ? "" : styles.off}`}
      onClick={toggle}
      aria-label={name}
      aria-pressed={on}
      title={name}
    >
      <svg
        className={styles.unlit}
        viewBox={`0 0 ${GRID} ${GRID}`}
        aria-hidden="true"
      >
        <path d={disc} className={styles.unlitDisc} />
        <path d={letter} className={styles.unlitLetter} />
        <Shimmer phases={shimmer} />
      </svg>
      <svg
        ref={lit}
        className={styles.lit}
        viewBox={`0 0 ${GRID} ${GRID}`}
        aria-hidden="true"
        style={{ "--line-color": color } as React.CSSProperties}
      >
        <path d={disc} stroke={color} />
        <path d={letter} stroke="#fff" />
        <Shimmer phases={shimmer} />
      </svg>
    </button>
  )
}

export function MuniBullets({ className }: { className?: string }) {
  return (
    <div className={`${styles.bullets} ${className || ""}`}>
      {(Object.keys(MUNI_LINES) as MuniLine[]).map((line) => (
        <MuniBullet key={line} line={line} />
      ))}
    </div>
  )
}
