const babelImportPlugin = require('@jomsou/babel-plugin-import');

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    babelImportPlugin()
  ]
}
