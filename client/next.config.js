const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCSS({
  webpack(config, options) {
    const { isServer } = options;
    if (!options.defaultLoaders) {
      throw new Error(
        'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
      )
    }


    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: '/_next/static/images',
            outputPath: '/',
            name: "[name]-[hash].[ext]"
          }
        }
      ]
    });

    // if (typeof nextConfig.webpack === 'function') {
    //   return nextConfig.webpack(config, options)
    // }

    return config
  }
});

