const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css']
  },
  node: {
    fs: 'empty'
  },
  plugins: [new UglifyJSPlugin()]
};
