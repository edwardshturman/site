"use client"

import { useEffect, useRef } from "react"

// Nothing is fetched until the video nears the viewport, and it pauses offscreen
export function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { rootMargin: "200px" }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video ref={ref} loop muted playsInline preload="none">
      <source src={src} type="video/mp4" />
    </video>
  )
}
