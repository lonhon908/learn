const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude:'/node_modules/'
      }
    ]
  }
}