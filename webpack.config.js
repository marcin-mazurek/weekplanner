var webpack = require('webpack');
var path = require('path');
var isProduction = process.argv.indexOf('-p') !== -1;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel'],
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style',
			    'css?modules&importLoaders=1&localIdentName='
					+ (isProduction ? '[hash:base64:5]' : '[name]__[local]__[hash:base64:3]')
					+ '!sass'
				)
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			},
			{
				test: /\.(woff|woff2)$/,
				loader: "url?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			},
			{
				test: /\.gif/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.png/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			}
		]
	},
	devServer: {
		contentBase: "./public",
		noInfo: true, //  --no-info option
		hot: true,
		inline: true
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
  	new ExtractTextPlugin(path.join(__dirname, 'public', 'stylesheet.css'), { allChunks: true })
	]
};

if (isProduction) {
	config.plugins.push(
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
	);

	config.devtool = 'source-map';
}

module.exports = config;
