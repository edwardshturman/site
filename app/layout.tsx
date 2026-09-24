import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ThemeProvider } from "@/components/ThemeProvider"
import { PageLayoutWrapper } from "@/components/PageLayoutWrapper"
import { FORCED_SEASON } from "@/lib/seasons"

import "./globals.css"

// Accent is pinned, so the stored season is ignored here too.
const initHueScript = `try{document.documentElement.style.setProperty('--hue',${JSON.stringify(String(FORCED_SEASON.hue))});}catch(e){}`

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
    "Web developer, interface designer, and community builder based in San Francisco"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${iAWriterQuattro.variable} ${iAWriterMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script>{initHueScript}</script>
      </head>
      <body>
        <ThemeProvider>
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
