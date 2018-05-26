const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const paths = require('./paths');
const publicPath = './';

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
         })
    ],
    output: {
        pathinfo: true,
        filename: 'static/js/[name].bundle.js',
        chunkFilename: 'static/js/[name].chunkBundle.js',
        path: paths.appBuild,
        // path: path.resolve(__dirname, 'dist'),
        publicPath: publicPath,
    },
});