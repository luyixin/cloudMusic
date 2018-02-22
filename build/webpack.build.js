const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rm = require('rimraf')
const loader = require('./webpack.loader.js')
const plugins = require('./webpack.plugins.js')

// 打包前，清空dist目录
rm(resolve('dist') + '/*', err => {
  if (err) throw err
})

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

loader.rules.push({
  test: /\.(css|less)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'less-loader']
  })
})

plugins.push(new ExtractTextPlugin('../css/[name].[hash:6].min.css'))

// 将webpack运行时和模块清单提取到其自己的文件，以防止在更新应用程序包时更新依赖包
plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
  chunks: ['vendor']
}))

module.exports = {
  entry: {
    build: resolve('src') + '/main.js'
  },
  output: {
    filename: '[name].[hash:6].js',
    path: resolve('dist') + '/static/js'
  },
   resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: loader,
  plugins,
  stats: 'minimal'
}