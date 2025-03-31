/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://johnabed.com' : '',
  // Ensure the app works properly with custom domain
  trailingSlash: true,
};

export default nextConfig; 