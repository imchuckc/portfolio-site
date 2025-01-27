/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/portfolio-site',
    assetPrefix: '/portfolio-site'
  } : {})
};

export default nextConfig;
