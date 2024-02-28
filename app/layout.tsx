import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Breadcrumb } from '@/app/components/Breadcrumb'
import './globals.css'

const Geist = localFont({
  src: '../public/fonts/GeistVariableVF.woff2',
  variable: '--font-geist'
})

const GeistMono = localFont({
  src: '../public/fonts/GeistMonoVariableVF.woff2',
  variable: '--font-geist-mono'
})

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

const MonaspaceNeon = localFont({
  src: '../public/fonts/MonaspaceNeonVarVF[wght,wdth,slnt].woff2',
  variable: '--font-monaspace-neon'
})

let metadataBase: URL
if (process.env.VERCEL_URL)
  metadataBase = new URL('https://edwardshturman.com')
else
  metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: 'Edward Shturman',
  description: 'Web developer, interface designer, and community builder based in San Francisco',
  openGraph: {
    images: '/assets/pfp-bitmap.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${Geist.variable} ${GeistMono.variable} ${iAWriterQuattro.variable} ${iAWriterMono.variable} ${MonaspaceNeon.variable}`}>
      <body>
        <Image
          unoptimized
          src="/assets/pfp-bitmap-transparent.png"
          alt="A bitmapped image of Edward Shturman"
          width={200}
          height={200}
        />
        <Breadcrumb />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
