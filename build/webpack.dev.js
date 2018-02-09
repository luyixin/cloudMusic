const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootPath = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    build: rootPath + '/src/main.js'
  },
  output: {
    filename: '[name].[hash:6].js',
    chunkFilename: '[chunkhash].[hash:6].js',
    path: rootPath + '/dist'
  },
   resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Develop environment created by luyixin <410780496@qq.com> on 2018/02/09'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true
    }),
    // 拆分依赖包JS到自己的文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // node_modules内的任何必需模块都将提取给依赖包
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    })
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    clientLogLevel: 'none',
    hot: true,
    compress: true,
    port: 3000,
    noInfo: true
  }
}