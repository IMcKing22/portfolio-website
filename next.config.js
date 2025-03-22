/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  trailingSlash: false,
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig; 