import Image from 'next/image'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Spacer } from '@/components/Spacer'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import './globals.css'

const iAWriterQuattro = localFont({
  src: [
    {
      path: '../public/fonts/iAWriterQuattroS-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/iAWriterQuattroS-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/iAWriterQuattroS-Bold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/iAWriterQuattroS-BoldItalic.woff2',
      weight: '600',
      style: 'italic'
    }
  ],
  variable: '--font-ia-writer-quattro'
})

const iAWriterMono = localFont({
  src: [
    {
      path: '../public/fonts/iAWriterMonoS-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/iAWriterMonoS-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/iAWriterMonoS-Bold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/iAWriterMonoS-BoldItalic.woff2',
      weight: '600',
      style: 'italic'
    }
  ],
  variable: '--font-ia-writer-mono'
})

let metadataBase: URL
if (process.env.VERCEL_URL) metadataBase = new URL('https://edwardshturman.com')
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: 'Edward Shturman',
  description: 'Web developer, interface designer, and community builder based in San Francisco',
  openGraph: {
    images: '/og/root.png'
  }
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
        <Image
          unoptimized
          src="/avatars/edward.png"
          alt="A bitmapped image of Edward Shturman"
          width={200}
          height={200}
        />
        <Breadcrumbs />
        <main>{children}</main>
        <Spacer size={`20vh`} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
