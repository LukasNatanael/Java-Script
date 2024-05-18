const path = require('path')

module.exports = {
    presets: [
        ["@babel/preset-env"]
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    }
}