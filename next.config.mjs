/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  // Ensure the app works properly on GitHub Pages
  trailingSlash: true,
};

export default nextConfig; 