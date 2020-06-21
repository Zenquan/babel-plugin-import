const generateConfig = require('./webpack.config.js');
const pkg = require('../package.json');

let config = {
  devtool: 'inline-source-map',
}
config = generateConfig(config, `${pkg.name}`);

module.exports = config;