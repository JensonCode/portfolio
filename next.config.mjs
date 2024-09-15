/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //React Three Fiber
  transpilePackages: ['three'],

  //GitHub Pages deploy config
  basePath: '/portfolio',
  output: 'export',
};

export default nextConfig;
