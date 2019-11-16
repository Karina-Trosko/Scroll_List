const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(svg|jpg|png|gif)/,
                use: [{
                    // https://www.npmjs.com/package/file-loader
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './images',
                        useRelativePath: true
                    }
                }, ]
            },
        ]
    }
};