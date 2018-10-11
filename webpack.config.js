const path = require('path');
const nodeExternals = require('webpack-node-externals');

const {
  NODE_ENV,
} = process.env;

const base = {
  mode: NODE_ENV || "development",
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
};

const development = {
  devtool: "source-map",
}

module.exports = {
  ...base,
  ...(NODE_ENV === 'development' && development),
};