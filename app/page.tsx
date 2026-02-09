import Image from "next/image"
import { Spacer } from "@/components/Spacer"
import { Navbar } from "@/components/Navbar"

import styles from "./Home.module.css"

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.me}>
          <Image
            priority
            unoptimized
            src="/avatars/edward.png"
            alt="My Notion avatar!"
            width={100}
            height={100}
            className={styles.pfp}
          />
          <div className={styles.text}>
            <span className={styles.hi}>Hi! I&apos;m</span>
            <h1 className={styles.name}>Edward Shturman</h1>
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
            I&apos;m an engineering intern on the Primitive Foundations team at
            Notion, working on blocks, database views, and general polish across
            the app
          </p>
          <p>
            I study at the University of San Francisco, where I founded
            compsigh, the social computer science club for meeting cool people
            &amp;&amp; building cool things
          </p>
        </div>
        <Spacer size={4} />
        <Navbar />
      </main>
    </>
  )
}
