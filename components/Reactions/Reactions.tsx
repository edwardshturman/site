import Image from 'next/image'

import styles from './Reactions.module.css'

export function Reactions() {
  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.reaction}>
          <Image
            unoptimized
            src="/icons/bulb-10-diffusion-transparent.png"
            alt="Light bulb icon"
            width={50}
            height={50}
          />
        </button>
        <button className={styles.reaction}>
          <Image
            unoptimized
            src="/icons/clap-10-diffusion-transparent.png"
            alt="Clapping icon"
            width={50}
            height={50}
          />
        </button>
        <button className={styles.reaction}>
          <Image
            unoptimized
            src="/icons/heart-10-diffusion-transparent.png"
            alt="Heart icon"
            width={50}
            height={50}
            style={{ opacity: 0.8 }}
          />
        </button>
      </div>
    </>
  )
}
