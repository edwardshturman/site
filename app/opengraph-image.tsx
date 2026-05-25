import { ImageResponse } from "next/og"
import { ogColors, ogContentType, ogSize, loadOgAssets } from "@/lib/og"

export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  const { avatarSrc, fonts } = await loadOgAssets()
  const { background, foreground, subtle } = ogColors

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 100,
        backgroundColor: background,
        color: foreground,
        fontFamily: "iA Writer Quattro"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        <img
          width={180}
          height={180}
          src={avatarSrc}
          alt=""
          style={{ borderRadius: 45, objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 34, color: subtle }}>Hi! I&apos;m</span>
          <span style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.1 }}>
            Edward Shturman
          </span>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: 44, maxWidth: 920 }}>
        <span style={{ fontSize: 40, lineHeight: 1.45 }}>
          Web developer, interface designer, and community builder based in San
          Francisco
        </span>
      </div>
    </div>,
    { ...size, fonts }
  )
}
