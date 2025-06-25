/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/bornviral',
  assetPrefix: '/bornviral',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig