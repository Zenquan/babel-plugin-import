const generateConfig = require('./webpack.config.js');
const pkg = require('../package.json');

let config = {};
config = generateConfig(config, `${pkg.name}.min`);

module.exports = config;