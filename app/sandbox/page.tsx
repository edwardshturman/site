import Link from 'next/link'

export default function Sandbox() {
  return (
    <>
      <h1>Sandbox</h1>
      <p>Raw experiments and thoughts</p>
      <ul>
        <li><Link href="/sandbox/imagewrapper"><code>ImageWrapper</code> component</Link></li>
        <li><Link href="/sandbox/checkbox">Checkbox experiment</Link></li>
      </ul>
    </>
  )
}
