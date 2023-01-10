/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/product/[id]',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },
};
