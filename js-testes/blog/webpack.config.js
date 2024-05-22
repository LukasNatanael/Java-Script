const path = require('path')
module.exports = {
    devServer: {
        static: path.resolve(__dirname, 'dist')
    },
    entry: {
        index: './src/index.js',
        // author: './src/Author.js',
        // comment: './src/Comment.js',
        // post: './src/Post.js',
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
        filename: '[name].min.js'
        // filename: 'bundle.js'
    }
}