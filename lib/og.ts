import { join } from "node:path"
import { readFile } from "node:fs/promises"

import { DEFAULT_SEASON, seasonColors } from "@/lib/seasons"

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

const colors = seasonColors(DEFAULT_SEASON.hue)
export const ogColors = {
  background: colors.white,
  foreground: colors.black,
  subtle: colors.gray
}

export async function loadOgAssets() {
  const [regular, bold, avatar] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/iAWriterQuattroS-Regular.ttf")),
    readFile(join(process.cwd(), "public/fonts/iAWriterQuattroS-Bold.ttf")),
    readFile(join(process.cwd(), "public/avatars/edward.jpeg"), "base64")
  ])
  return {
    avatarSrc: `data:image/jpeg;base64,${avatar}`,
    fonts: [
      {
        name: "iA Writer Quattro",
        data: regular,
        weight: 400 as const,
        style: "normal" as const
      },
      {
        name: "iA Writer Quattro",
        data: bold,
        weight: 600 as const,
        style: "normal" as const
      }
    ]
  }
}
