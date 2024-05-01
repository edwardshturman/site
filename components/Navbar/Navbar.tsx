import Link from 'next/link'

export function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={"/craft"}>Craft</Link>
          </li>
          <li>
            <Link href={"/notes"}>Notes</Link>
          </li>
          <li>
            <Link href={"/roadmap"}>Roadmap</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
