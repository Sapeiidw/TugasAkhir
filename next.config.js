/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'http://103.183.75.5/',
  },
}

module.exports = nextConfig
