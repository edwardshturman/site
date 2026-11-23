import { type JSX } from "react"
import styles from "./Icon.module.css"

export function ExternalLinkIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.25 3.75H5.35C4.78995 3.75 4.50992 3.75 4.29601 3.85899C4.10785 3.95487 3.95487 4.10785 3.85899 4.29601C3.75 4.50992 3.75 4.78995 3.75 5.35V18.65C3.75 19.2101 3.75 19.4901 3.85899 19.704C3.95487 19.8922 4.10785 20.0451 4.29601 20.141C4.50992 20.25 4.78995 20.25 5.35 20.25H18.65C19.2101 20.25 19.4901 20.25 19.704 20.141C19.8922 20.0451 20.0451 19.8922 20.141 19.704C20.25 19.4901 20.25 19.2101 20.25 18.65V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 3.75H5.35C4.78995 3.75 4.50992 3.75 4.29601 3.85899C4.10785 3.95487 3.95487 4.10785 3.85899 4.29601C3.75 4.50992 3.75 4.78995 3.75 5.35V18.65C3.75 19.2101 3.75 19.4901 3.85899 19.704C3.95487 19.8922 4.10785 20.0451 4.29601 20.141C4.50992 20.25 4.78995 20.25 5.35 20.25H18.65C19.2101 20.25 19.4901 20.25 19.704 20.141C19.8922 20.0451 20.0451 19.8922 20.141 19.704C20.25 19.4901 20.25 19.2101 20.25 18.65V14.75M13.75 3.75H20.25M20.25 3.75V10.25M20.25 3.75L11 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NoteIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.75 14H13.25M8.75 10H15.25M4.75 20.25H19.25C19.8023 20.25 20.25 19.8023 20.25 19.25V4.75C20.25 4.19772 19.8023 3.75 19.25 3.75H4.75C4.19772 3.75 3.75 4.19772 3.75 4.75V19.25C3.75 19.8023 4.19772 20.25 4.75 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BackIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.25 5.75L3.75 12L10.25 18.25M4.75 12H20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// A stack of cards: more where this came from
export function SeeMoreIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.75 3.75H16.25M5.75 6.75H18.25M4.75 20.25H19.25C19.8023 20.25 20.25 19.8023 20.25 19.25V10.75C20.25 10.1977 19.8023 9.75 19.25 9.75H4.75C4.19772 9.75 3.75 10.1977 3.75 10.75V19.25C3.75 19.8023 4.19772 20.25 4.75 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LinkIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheckIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.75 12.75L9.5 17.5L19.25 6.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function UnreadIndicator(props: JSX.IntrinsicElements["div"]) {
  return (
    <div
      className={styles["unread-indicator"]}
      {...props}
      style={{
        ...props.style
      }}
    />
  )
}
