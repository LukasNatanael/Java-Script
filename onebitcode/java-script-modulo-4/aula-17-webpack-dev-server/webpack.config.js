const path = require('path')
module.exports = {
    // definindo /home do devServer, a pasta do index.html
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        }
        // , port: 3000 // posso definir a porta de minha escolha caso queira
    },
    entry: {
        index: './src/index.js'
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
    }
}