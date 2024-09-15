/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //React Three Fiber
  transpilePackages: ['three'],

  //GitHub Pages deploy config
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
