const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const PATH = require('path')
const webpack = require('webpack')

const PUBLIC_DIR = 'public'

module.exports = {
  devServer: {
    contentBase: PATH.join(__dirname, PUBLIC_DIR),
    hot: true,
    port: 3340
  },
  entry: PATH.resolve(__dirname, 'src', 'main.js'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env'
          ]
        },
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name]-[hash].js',
    path: PATH.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      template: PATH.resolve(__dirname, PUBLIC_DIR, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  target: 'web'
}