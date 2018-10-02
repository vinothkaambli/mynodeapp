'use strict';

var path = require('path'),
   webpack = require('webpack');

var config = JSON.parse(JSON.stringify(require('./config/config.json')));

module.exports = {
    mode: 'development',
    entry: [
        './public/src/entry.js'
    ],
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, '.build/js'),
        filename: 'bundle.js',
        publicPath: config.mountpath + '/js/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env','react']
                }
            }
        ]
    },
    plugins: [
    ],
    devServer: {
        contentBase: "./public/src",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};