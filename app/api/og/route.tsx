import { ImageResponse } from "next/og"
import { ogColors, ogSize, loadOgAssets } from "@/lib/og"

function truncate(text: string, max: number) {
  if (text.length <= max) return text
  const clipped = text.slice(0, max)
  const lastSpace = clipped.lastIndexOf(" ")
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = truncate(searchParams.get("title") || "Edward Shturman", 100)
  const description = truncate(searchParams.get("description") || "", 160)

  const { avatarSrc, fonts } = await loadOgAssets()
  const { background, foreground, subtle } = ogColors

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 100,
        backgroundColor: background,
        color: foreground,
        fontFamily: "iA Writer Quattro"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.15 }}>
          {title}
        </span>
        {description && (
          <span
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.4,
              color: subtle,
              maxWidth: 1000
            }}
          >
            {description}
          </span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- next/image isn't available inside ImageResponse */}
        <img
          width={64}
          height={64}
          src={avatarSrc}
          alt=""
          style={{ borderRadius: 16, objectFit: "cover" }}
        />
        <span style={{ fontSize: 30 }}>Edward Shturman</span>
      </div>
    </div>,
    { ...ogSize, fonts }
  )
}
