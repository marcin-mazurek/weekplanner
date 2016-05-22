var webpack = require('webpack');
var path = require('path');
var isProduction = process.argv.indexOf('-p') !== -1;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: [
		'./src/index.jsx'
	],
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['node_modules', 'src'],
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: isProduction ? 'babel' : 'react-hot!babel',
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
		// Disable Webpack process crashes
		new webpack.NoErrorsPlugin()
	]
};

var stylesLoaderConfig = 'css?modules&importLoaders=1&localIdentName='
	+ (isProduction ? '[hash:base64:5]' : '[name]__[local]__[hash:base64:3]')
	+ '!sass';

if (isProduction) {
	// Hardcode NODE_ENV environment variable as 'production' for dead code elimination
	config.plugins.push(
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
	);

	// Bundle styles into one CSS file
	config.plugins.push(
		new ExtractTextPlugin('stylesheet.css', { allChunks: true })
	);

	config.module.loaders.push({
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract('style', stylesLoaderConfig)
	});
}
else {
	// Webpack dev server and hot reloading
	config.entry.push(
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server'
	);

	// Load styles inline for hot reloading
	config.module.loaders.push({
		test: /\.scss$/,
		loader: 'style!' + stylesLoaderConfig
	});

	// Add source maps for debugging
	config.devtool = 'source-map';
}

module.exports = config;
