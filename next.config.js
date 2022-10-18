/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

const redirects = {
  async redirects() {
    return [
      {
        source: "/dishes/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

// module.exports = nextConfig;

module.exports = redirects;
