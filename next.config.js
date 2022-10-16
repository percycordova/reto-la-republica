/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['cloudfront-us-east-1.images.arcpublishing.com', 'cdn.larepublica.pe'],
    layoutRaw: true
  }
}

module.exports = nextConfig
