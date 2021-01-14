const importPlugin = require('../src/lib/babel-plugin-import');

const assetsLoaders = [{
  test: /.txt/,
  use: 'raw-loader'
}, ]

const scriptLoaders = [{
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          'env',
          'react'
        ],
        plugins: [
          importPlugin
        ]
      }
    },
    exclude: /node_modules/
  }
]

module.exports = assetsLoaders.concat(scriptLoaders);