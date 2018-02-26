const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    home:  './src/index.js',
    adminLogin: './src/admin/login',
    adminDash: './src/admin/dash'
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/')
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
  }
  // plugins: [new UglifyJSPlugin()]
};
