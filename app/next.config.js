/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.OUTPUT_MODE === 'static' ? 'export' : 'standalone', // use 'static' to put ssg files in out/ folder
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
