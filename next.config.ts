/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Explicitly disable App Router
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig