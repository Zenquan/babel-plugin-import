const babelImportPlugin = require('@jomsou/babel-plugin-import');

module.exports = {
  presets: [
  ],
  plugins: [
    babelImportPlugin(null, 'antd')
  ]
}
