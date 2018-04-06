var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  // What I need to build and bundle.
  entry: APP_DIR + '/main.js',
  // Where do I put this stuff.
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  // Tells it how to load different file extensions.
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  // Create a webpack dev server config so we can see our application.
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 8080 
  }
};

module.exports = config;