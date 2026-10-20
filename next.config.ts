import { type NextConfig } from "next"
import withPlaiceholder from "@plaiceholder/next"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote", "shiki"],
  // Cache assets for a week
  async headers() {
    return ["/assets/:path*", "/avatars/:path*"].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "public, max-age=604800" }]
    }))
  }
}

export default withPlaiceholder(nextConfig)
