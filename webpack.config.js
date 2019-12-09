const PATH = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: PATH.join(__dirname),
    hot: true,
    port: 3000
  },
  entry: PATH.resolve(__dirname, 'index.js'),
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
    filename: 'index.js',
    path: PATH.resolve(__dirname)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  target: 'web'
}