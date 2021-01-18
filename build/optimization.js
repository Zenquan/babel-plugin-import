const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  minimizer: [
    new UglifyJsPlugin({
      include: /\/src/,
      exclude: /\/node_modules/,
    }),
  ],
}