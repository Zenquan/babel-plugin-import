// const babelImportPlugin = require('@jomsou/babel-plugin-import');

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ["@jomsou/import", {
      libName: "element-ui",
      libPath: "lib",
      disable: process.env.NODE_ENV === 'development'
    }]
  ]
}
