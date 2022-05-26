/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'https://inposery.com',
  },
}

module.exports = nextConfig
