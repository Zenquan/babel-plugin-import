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
                    presets: [
                        'env',
                        'react'
                    ],
                    plugins: [
                        'czq-import'
                    ]
                }
            },exclude: /node_modules/}
        ]
    }
}