import type { Metadata } from "next"
import { cookies } from "next/headers"
import localFont from "next/font/local"
import type { CSSProperties } from "react"
import { Analytics } from "@vercel/analytics/react"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ThemeProvider } from "@/components/ThemeProvider"
import { PageLayoutWrapper } from "@/components/PageLayoutWrapper"
import {
  ACCENT_STORAGE_KEY,
  DEFAULT_SEASON,
  seasonByLabel
} from "@/lib/seasons"

import "./globals.css"

const iAWriterQuattro = localFont({
  src: [
    {
      path: "../public/fonts/iAWriterQuattroS-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/iAWriterQuattroS-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/iAWriterQuattroS-Bold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/iAWriterQuattroS-BoldItalic.woff2",
      weight: "600",
      style: "italic"
    }
  ],
  variable: "--font-ia-writer-quattro"
})

const iAWriterMono = localFont({
  src: [
    {
      path: "../public/fonts/iAWriterMonoS-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/iAWriterMonoS-Italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/iAWriterMonoS-Bold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/iAWriterMonoS-BoldItalic.woff2",
      weight: "600",
      style: "italic"
    }
  ],
  variable: "--font-ia-writer-mono"
})

let metadataBase: URL
if (process.env.VERCEL_URL) metadataBase = new URL("https://edwardshturman.com")
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: "Edward Shturman",
  description:
    "Web developer, interface designer, and community builder based in San Francisco",
  openGraph: {
    images: "/og/root.png"
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const stored = cookieStore.get(ACCENT_STORAGE_KEY)?.value
  const season = seasonByLabel(stored) ?? DEFAULT_SEASON
  const hueStyle = { "--hue": season.hue } as CSSProperties

  return (
    <html
      lang="en"
      className={`${iAWriterQuattro.variable} ${iAWriterMono.variable}`}
      style={hueStyle}
    >
      <body>
        <ThemeProvider initial={season}>
          <PageLayoutWrapper>
            <Breadcrumbs />
            {children}
          </PageLayoutWrapper>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
