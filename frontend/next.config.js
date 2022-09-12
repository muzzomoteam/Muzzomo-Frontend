const withPlugins = require('next-compose-plugins');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = withPlugins([], {
  assetPrefix: isProd ? '' : '',
  experimental: {
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  images: {
    domains: []
  }
});
