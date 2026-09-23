/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a self-contained .next/standalone server for the Docker image.
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
