const path = require('path');
const pkg = require('./package');

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  pages: {
    index: {
      entry: 'docs/src/main.js',
      template: 'docs/public/index.html',
      filename: 'index.html',
      title: `VV UI - ${pkg.description}`
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@vinsea/vv-ui/src': resolve('./src')
      }
    }
  }
};
