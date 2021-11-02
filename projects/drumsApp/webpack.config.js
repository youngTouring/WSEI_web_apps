const path = require('path')
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname,'src')]
            }
        ]
    },
    output:{
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
};