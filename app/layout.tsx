import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const Geist = localFont({
  src: '../public/fonts/GeistVariableVF.woff2',
  variable: '--font-geist'
})

const GeistMono = localFont({
  src: '../public/fonts/GeistMonoVariableVF.woff2',
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
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
    <html lang="en" className={`${Geist.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
