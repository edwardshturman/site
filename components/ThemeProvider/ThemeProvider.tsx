"use client"

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore
} from "react"

import {
  ACCENT_STORAGE_KEY,
  DEFAULT_SEASON,
  SEASONS,
  seasonByLabel,
  type Season
} from "@/lib/seasons"

type ThemeContextValue = {
  season: Season
  seasons: Season[]
  setSeason: (next: Season) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const localListeners = new Set<() => void>()

function subscribe(callback: () => void) {
  localListeners.add(callback)
  const onStorage = (e: StorageEvent) => {
    if (e.key === ACCENT_STORAGE_KEY) callback()
  }
  window.addEventListener("storage", onStorage)
  return () => {
    localListeners.delete(callback)
    window.removeEventListener("storage", onStorage)
  }
}

function getSnapshot() {
  return window.localStorage.getItem(ACCENT_STORAGE_KEY)
}

function getServerSnapshot(): string | null {
  return null
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const season = seasonByLabel(stored) ?? DEFAULT_SEASON

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", String(season.hue))
  }, [season.hue])

  function setSeason(next: Season) {
    window.localStorage.setItem(ACCENT_STORAGE_KEY, next.label)
    localListeners.forEach((l) => l())
  }

  return (
    <ThemeContext.Provider value={{ season, seasons: SEASONS, setSeason }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
