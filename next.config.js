const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  trailingSlash: true,
  target: 'serverless',
  // future: {
  //   webpack5: true,
  // },
  images: {
    domains: [
      'pbs.twimg.com', // Twitter Images
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/generate-cache');
      require('./scripts/generate-rss');
    }

    return config;
  },
});