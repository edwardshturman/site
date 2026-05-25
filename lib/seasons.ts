export type Season = {
  label: string
  hue: number
  order: number
}

export const SEASONS: Season[] = [
  { label: "Spring 2024", hue: 38, order: 1 },
  { label: "Spring 2026", hue: 210, order: 2 },
  { label: "Summer 2026", hue: 30, order: 3 }
]

export const DEFAULT_SEASON = SEASONS.reduce((acc, s) =>
  s.order > acc.order ? s : acc
)

export function seasonColors(hue: number) {
  return {
    white: `hsl(${hue}, 100%, 100%)`, // --color-white
    black: `hsl(${hue}, 100%, 4%)`, // --color-black
    gray: `hsl(${hue}, 10%, 50%)` // --color-gray
  }
}

export const ACCENT_STORAGE_KEY = "accent-season"

export function seasonByLabel(label: string | null | undefined) {
  if (!label) return undefined
  return SEASONS.find((s) => s.label === label)
}
