const babelImportPlugin = require('@jomsou/babel-plugin-import');

module.exports = {
  presets: [
  ],
  plugins: [
    // [babelImportPlugin, {
    //   libName: 'antd',
    //   libPath: 'lib',
    //   disable: process.env.NODE_ENV === 'development'
    // }]
  ]
}
