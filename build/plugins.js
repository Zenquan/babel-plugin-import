const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  {resolve} = require('./utils');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: resolve('build/index.html'),
  })
];

module.exports = plugins