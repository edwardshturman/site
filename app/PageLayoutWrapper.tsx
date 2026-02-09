"use client"

import { Spacer } from "@/components/Spacer"
import { usePathname } from "next/navigation"

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
      <div style={{ maxWidth: 650 }}>
        {children}
        {path !== "/" && <Spacer size="20vh" />}
      </div>
    </div>
  )
}
