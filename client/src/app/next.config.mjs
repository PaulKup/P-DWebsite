/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react', 'next'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig

