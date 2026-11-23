/**
 * Turns a title into an HTML ID, the way GitHub does for headings: lowercase,
 * punctuation dropped, spaces to hyphens.
 * @example slugify("DEPLOY/24 branding & promo material") // "deploy24-branding-promo-material"
 */
export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/[\s-]+/g, "-")
}
