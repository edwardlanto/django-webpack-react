const path = require('path');
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: ['babel-polyfill', path.resolve(__dirname, 'djsr/frontend/src/index.js')],
    output: {
        // options related to how webpack emits results

        // where compiled files go
        path: path.resolve(__dirname, "djsr/frontend/static/frontend/public/"),

        // 127.0.0.1/static/frontend/public/ where files are served from
        publicPath: "/static/frontend/public/",
        filename: 'main.js',  // the same one we import in index.html
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                test: /\.scss$/,
                include: [
                   path.resolve(__dirname, 'src', 'sass')
                ],
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
             },
            {
                // regex test for js and jsx files
                test: /\.(js|jsx)?$/,
                // don't look in the node_modules/ folder
                exclude: /node_modules/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/preset-react"
                        ]
                    }
                },
            }
        ],
    },
    plugins: [

    ],
    devServer: {
        writeToDisk: true
    }
};