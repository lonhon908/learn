const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    // webpack-dev-server --host 0.0.0.0
    // host: "0.0.0.0",

    // webpack-dev-server --port 8080
    port: 8080,
    // webpack-dev-server --open 自动打开浏览器
    // open: true,

    // 启用 webpack 的模块热替换特性
    hot: true,
    proxy: {
      // 请求到 /api/users 现在会被代理到请求 http://localhost:3000/api/users
      "/api": "http://localhost:3000"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            // file-loader是解析图片地址，js引入， css背景图
            loader: 'file-loader',
            options: {
              // 输出的图片名，可以配置，下面是使用图片原名
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            // file-loader是解析图片地址，js引入， css背景图
            loader: 'file-loader',
            options: {
              // 输出的图片名，可以配置，下面是使用图片原名
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 要生成多个HTML文件，请在插件数组中多次声明插件
    new HtmlWebpackPlugin(), // 可以生成多个HTML文件
    new HtmlWebpackPlugin({
      title: '我是插件生成的标题', // 生成html文件的标题
      filename: 'app.html', // 就是html文件的文件名，默认是index.html, 还可以插入路径：如： html/app.html
      template: './index.html', // 指定你生成的文件所依赖哪一个html文件模板，模板类型可以是html、jade、ejs等
      
      // true 默认值，script标签位于html文件的 body 底部
      // body script标签位于html文件的 body 底部
      // head script标签位于html文件的 head中
      // false 不插入生成的js文件，这个几乎不会用到的
      inject: 'body',
      favicon: './60.png', // 给你生成的html文件生成一个 favicon ,值是一个路径
      // chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
      // chunks: [], // 如果你没有设置chunks选项，那么默认是全部显示
      excludeChunks: [], // 排除掉一些js
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      }
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}