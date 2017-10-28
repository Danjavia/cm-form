const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./FormData.js",
  output: {
    path: path.join(__dirname, 'lib'),
    filename: "index.js",
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react-app', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  watch: true,
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
};
