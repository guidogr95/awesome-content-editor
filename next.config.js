/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/content-editor",
        permanent: true,
      },
    ];
  },
	experimental: {
    typedRoutes: true,
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;