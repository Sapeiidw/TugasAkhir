/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'https://inposery.com',
  },
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   credentials: true,
  // },
  // headers() {
  //   return [
  //     {
  //       source: "/_next/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //       ],
  //     },
  //   ]
  // },
}

module.exports = nextConfig
