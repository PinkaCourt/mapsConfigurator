const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
	API_HOST = 'http://localhost',
	API_AUTH = 'root:root',
	BUILD_DIR = '0', //'dist',
	BUILD_ROOT = 'D:\\Program Files\\AxxonSoft\\AxxonNext\\public_html', //__dirname,
} = process.env; // eslint-disable-line no-process-env

const BUILD_PATH = path.resolve(BUILD_ROOT, BUILD_DIR);
/*
const SRC_PATH = path.resolve(__dirname, 'src');
*/

//const AUTH = 'Basic ' + btoa(USER + ':' + PASS);
module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  mode: "development",
  output: {
    filename: "./index.js",
    path: BUILD_PATH,
  },
  devServer: {
		proxy: {
			'/': {
				target: API_HOST,
				headers: {
					Authorization: `Basic ${Buffer.from(API_AUTH).toString('base64')}`, //const AUTH = 'Basic ' + btoa(USER + ':' + PASS);
				},
				//ws: true,
			},
		},
	},
  /*devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },*/
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {importLoaders: 1}},
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
   ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}
