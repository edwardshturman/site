import { Suspense } from "react"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ThemeProvider } from "@/components/ThemeProvider"
import { PageLayoutWrapper } from "@/components/PageLayoutWrapper"
import {
  ACCENT_STORAGE_KEY,
  DEFAULT_SEASON,
  seasonByLabel,
  type Season
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

function ThemedShell({
  season,
  children
}: {
  season: Season
  children: React.ReactNode
}) {
  return (
    <ThemeProvider initial={season}>
      <style>{`:root { --hue: ${season.hue}; }`}</style>
      <PageLayoutWrapper>
        <Breadcrumbs />
        {children}
      </PageLayoutWrapper>
    </ThemeProvider>
  )
}

async function CookieThemedShell({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const stored = cookieStore.get(ACCENT_STORAGE_KEY)?.value
  const season = seasonByLabel(stored) ?? DEFAULT_SEASON
  return <ThemedShell season={season}>{children}</ThemedShell>
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
    >
      <body>
        <Suspense
          fallback={
            <ThemedShell season={DEFAULT_SEASON}>{children}</ThemedShell>
          }
        >
          <CookieThemedShell>{children}</CookieThemedShell>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
