import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Image
        unoptimized
        src="/assets/pfp-bitmap.png"
        alt="Vercel Logo"
        width={200}
        height={200}
      />
      <h1>Edward Shturman</h1>
      <p>Web developer, interface designer, and community builder based in San Francisco</p>
      <br />
      <p>Note: I&apos;m in the process of moving content from <Link href="https://mmm.page/edday/edward">my old site</Link>, you can visit it if you&apos;d like to check out my work in the meantime.</p>
      <h2>Now</h2>
      <p>Focused on running <Link href="https://github.com/compsigh">compsigh</Link>, my CS club</p>
      <h2>Connect</h2>
      <p>
        <Link href="https://twitter.com/edwardshturman">Twitter</Link>
      </p>
      <p>
        <Link href="https://github.com/edwardshturman">GitHub</Link>
      </p>
      <p>
        <Link href="https://read.cv/edwardshturman">read.cv</Link>
      </p>
    </>
  )
}
