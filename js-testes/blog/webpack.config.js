const path = require('path')
module.exports = {
    devServer: {
        static: path.resolve(__dirname, 'dist')
    },
    entry: {
        index: path.resolve(__dirname, 'index.js')
        // index: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        // filename: '[name].bundle.js'
        filename: 'bundle.js'
    }
}