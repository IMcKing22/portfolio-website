/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  trailingSlash: false,
  images: {
    domains: ['localhost'],
  },
  // Add basePath if your site is not served from the root
  // basePath: '',
  // Add assetPrefix if your assets are served from a different domain
  // assetPrefix: '',
};

module.exports = nextConfig; 