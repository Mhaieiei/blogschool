const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS(withOptimizedImages({
  // webpack(config, options) {
  //   const { isServer } = options;
  //   if (!options.defaultLoaders) {
  //     throw new Error(
  //       'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
  //     )
  //   }


  //   config.module.rules.push({
  //     test: /\.(jpe?g|png|svg|gif)$/,
  //     use: [
  //       {
  //         loader: "url-loader",
  //         options: {
  //           limit: 8192,
  //           fallback: "file-loader",
  //           publicPath: '/_next/static/images/',
  //           outputPath: 'static/images/',
  //           name: "[name]-[hash].[ext]"
  //         }
  //       }
  //     ]
  //   });

  //   // if (typeof nextConfig.webpack === 'function') {
  //   //   return nextConfig.webpack(config, options)
  //   // }

  //   return config
  // }
}));

