module.exports = {
    presets: [
        ["@babel/preset-env"]
    ],
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
}