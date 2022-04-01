/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'http://103.183.75.5/',
  },
}

module.exports = nextConfig
