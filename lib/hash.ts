// 32-bit integer finalizer (murmur3 fmix32): a cheap, deterministic scramble
// that keeps server and client renders in sync
export function mix(n: number): number {
  n |= 0
  n ^= n >>> 16
  n = Math.imul(n, 0x85ebca6b)
  n ^= n >>> 13
  n = Math.imul(n, 0xc2b2ae35)
  n ^= n >>> 16
  return n
}
