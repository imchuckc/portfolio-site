/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-site' : ''
};

export default nextConfig;
