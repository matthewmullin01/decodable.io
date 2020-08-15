/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

// eslint-disable-next-line import/prefer-default-export
module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/'],
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/scss/_variables.scss";
              @import "@/scss/_mixins.scss";
            `,
      },
    },
  },
};
