const importPlugin = require('@jomsou/babel-import-plugin')

module.exports = {
    entry: "./test.js",
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module: {
        rules: [
            {test: /\.js$/, use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        // importPlugin
                    ]
                }
            },exclude: /node_modules/}
        ]
    }
}