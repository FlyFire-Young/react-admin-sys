const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const paths = require('./paths');
const publicPath = '/';
var publicUrl = paths.appPublic;
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    entry:
    //     {
    //         appIndexJs: '../src/index.js',
    //     // app: './srcTest/indexTest.js',
    //     // another: './srcTest/another-module.js'
    //     // [paths.appIndexJs],
    // },
        [ paths.appIndexJs],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
				// options: {
				// 	javascriptEnabled: true
				// }
			},
            {
                test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["es2015","react", "react-app"],
					plugins: [
						["import", { libraryName: "antd", style: "css"}] // `style: true` 会加载 less 文件
					]
				},
				include: paths.appSrc,
            },
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}

        ]

    },
    plugins: [
        new CleanWebpackPlugin(['../dist']),
		// new InterpolateHtmlPlugin({
		// 	PUBLIC_URL: publicUrl
		// }),
		new HtmlWebpackPlugin({
			inject: true,
			template: paths.appHtml,
		}),
    ],
    output: {
        pathinfo: true,
        filename: 'static/js/[name].bundle.js',
        chunkFilename: 'static/js/[name].chunkBundle.js',
        path: paths.appBuild,
        // path: path.resolve(__dirname, 'dist'),
        publicPath: publicPath,
    },
	resolve: {
		extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
	}
};