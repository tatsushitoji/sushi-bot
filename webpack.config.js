const path = require('path');
const nodeExternals = require('webpack-node-externals');

const {
  NODE_ENV,
} = process.env;

module.exports = {
  mode: NODE_ENV || "development",
  devtool: "source-map",
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: __dirname + "/dist",
    libraryTarget: 'commonjs'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: [nodeExternals()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
};