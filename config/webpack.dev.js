const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // devtool: 'inline-source-map',
	devtool: 'cheap-module-source-map',
    devServer: {
        // contentBase: '../dist',
        inline:true,
        port: 3005
    }
});