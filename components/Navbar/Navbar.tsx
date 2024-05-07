import Link from 'next/link'

export function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={"/notes"}>Notes</Link>
          </li>
          <li>
            <Link href={"/roadmap"}>Roadmap</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/workshop"}>Workshop</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
