/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Keep paths simple for GitHub Pages with custom domain
  basePath: '',
  trailingSlash: true,
};

export default nextConfig; 