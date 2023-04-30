/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
        protocol: "https",
        pathname: "/t/p/w500/**",
        port:""
      }
    ]
  }
}

module.exports = nextConfig
