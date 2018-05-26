const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const publicPath = '/';
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
	devtool: 'cheap-module-source-map',
    devServer: {
        // contentBase: '../dist',
        inline:true,
        port: 3005
    },
    output: {
        pathinfo: true,
        filename: 'static/js/[name].bundle.js',
        chunkFilename: 'static/js/[name].chunkBundle.js',
        path: paths.appBuild,
        // path: path.resolve(__dirname, 'dist'),
        publicPath: publicPath,
    },

});