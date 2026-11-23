"use client"

import { useEffect, useRef, useState } from "react"
import { Tooltip } from "@/components/Tooltip"
import { CheckIcon, LinkIcon } from "@/components/Icon"

import styles from "./CopyLinkButton.module.css"

// Copies a link that lands on the element with the given ID on this page
export function CopyLinkButton({ id, title }: { id: string; title?: string }) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timeout.current), [])

  async function copyLink() {
    const { origin, pathname } = window.location
    try {
      await navigator.clipboard.writeText(`${origin}${pathname}#${id}`)
    } catch {
      return
    }
    setCopied(true)
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => setCopied(false), 1500)
  }

  const label = copied
    ? "Link copied"
    : title
      ? `Copy link to ${title}`
      : "Copy link"

  return (
    <Tooltip content={copied ? "Link copied" : "Copy link"}>
      <button
        type="button"
        className={styles["copy-link"]}
        onClick={copyLink}
        aria-label={label}
        data-copied={copied}
      >
        {copied ? <CheckIcon aria-hidden /> : <LinkIcon aria-hidden />}
      </button>
    </Tooltip>
  )
}
