/*
* created by lu.yixin on 2018/02/22
*/

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'babel-preset-env']
        }
      }
    }
  ]
}
