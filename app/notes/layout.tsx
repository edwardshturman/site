import Image from 'next/image'
import { Breadcrumb } from '@/app/components/Breadcrumb'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Image
      unoptimized
      src="/assets/pfp-bitmap-transparent.png"
      alt="Vercel Logo"
      width={100}
      height={100}
      />
      <Breadcrumb />

      <main>
        {children}
      </main>
    </>
  )
}
