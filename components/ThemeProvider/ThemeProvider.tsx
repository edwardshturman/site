"use client"

import { createContext, useContext, useState } from "react"
import { ACCENT_STORAGE_KEY, SEASONS, type Season } from "@/lib/seasons"

type ThemeContextValue = {
  season: Season
  seasons: Season[]
  setSeason: (next: Season) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

function writeCookie(label: string) {
  document.cookie = `${ACCENT_STORAGE_KEY}=${encodeURIComponent(label)}; max-age=${ONE_YEAR_SECONDS}; path=/; samesite=lax`
}

export function ThemeProvider({
  initial,
  children
}: {
  initial: Season
  children: React.ReactNode
}) {
  const [season, setSeasonState] = useState<Season>(initial)

  function setSeason(next: Season) {
    setSeasonState(next)
    document.documentElement.style.setProperty("--hue", String(next.hue))
    writeCookie(next.label)
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
