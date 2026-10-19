import Image from "next/image"
import { Spacer } from "@/components/Spacer"
import { Navbar } from "@/components/Navbar"
import { Picture } from "@/components/Picture"

import styles from "./Home.module.css"

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.me}>
          <Picture hover="/avatars/edward.jpeg" className={styles.pfp}>
            <Image
              priority
              unoptimized
              src="/avatars/edward-pixelated.png"
              alt="A picture of me"
              width={70}
              height={70}
            />
          </Picture>
          <div className={styles.text}>
            <span className={styles.hi}>Hi! I&apos;m</span>
            <div className={styles.nameRow}>
              <h1 className={styles.name}>Edward Shturman</h1>
            </div>
          </div>
        </div>
        <div className={styles.bio}>
          <p>
            I&apos;m a web developer, interface designer, <br /> and community
            builder based in San Francisco
          </p>
          <p className={styles.mobile}>
            I&apos;m a web developer, interface designer, and community builder
            based in San Francisco
          </p>
          <p>
            I&apos;m a marketing engineer at Descript, working on the content
            platform
          </p>
          <p>
            Previously at Notion, where we shipped Dashboard View &amp; Number
            Chart, and Vercel, on templates &amp; integrations
          </p>
        </div>
        <Spacer size={4} />
        <Navbar />
      </main>
    </>
  )
}
