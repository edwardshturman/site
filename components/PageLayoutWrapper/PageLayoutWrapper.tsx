"use client"

import { Spacer } from "@/components/Spacer"
import { usePathname } from "next/navigation"

import styles from "./PageLayoutWrapper.module.css"

export function PageLayoutWrapper({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: path === "/" ? "center" : undefined
      }}
    >
      <div className={styles["inner-wrapper"]}>
        {children}
        {path !== "/" && <Spacer size="20vh" />}
      </div>
    </div>
  )
}
