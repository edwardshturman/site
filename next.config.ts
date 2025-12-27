import { type NextConfig } from "next"
import withPlaiceholder from "@plaiceholder/next"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote", "shiki"]
}

export default withPlaiceholder(nextConfig)
