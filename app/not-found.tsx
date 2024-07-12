import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Hey there, this page doesn&apos;t exist at the moment.</p>
      <p>If you think this is a mistake — especially if someone sent you this link — please <Link href="https://x.com/edwardshturman">let me know</Link>!</p>
      <p>In the meantime, check out some pages that do exist:</p>
      <Navbar />
    </div>
  )
}
