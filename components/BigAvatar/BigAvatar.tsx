import Image from "next/image"

import styles from "./BigAvatar.module.css"

export function BigAvatar() {
  return (
    <>
      <Image
        priority
        unoptimized
        src="/avatars/edward.png"
        alt="A bitmapped image of Edward Shturman"
        width={200}
        height={200}
        className={styles.pfp}
      />
    </>
  )
}
