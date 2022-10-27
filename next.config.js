/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com']
  },
  experimental: {
    largePageDataBytes: 220 * 100000,
  }
}

module.exports = nextConfig
