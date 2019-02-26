
const path = require('path');
// extract-text-webpack-plugin不支持webpack4，请使用 extract-text-webpack-plugin@next 
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空打包输出目录
const webpack = require('webpack');
// 复制静态资源
const CopyWebpackPlugin = require('copy-webpack-plugin');
// html插件
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({ // mode=development时无效
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin(), // mode=development时无效
    ]
  },
  mode: "development", // 打包模式,可以通过脚本命令覆盖
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    test: path.resolve(__dirname, 'src/test.js')
  }, // //入口文件，src下的index.js
  output: {
    path: path.join(__dirname, 'dist'), // // 出口目录，dist文件
    filename: '[name]_[hash:8].js', // //这里name就是打包出来的文件名，因为是单入口，就是main，多入口下回分解
    publicPath: './', // 同时要处理打包图片路径问题
    chunkFilename: "[name].chunk.js"
  },
  // 1. source-map 
  // 把映射文件生成到单独的文件，最完整最慢,代码报错时，将错误映射到源代码上（单独打包一个文件.map）
  // 2. cheap-module-source-map 
  // 在一个单独的文件中产生一个不带列映射的Map（可以将其保存，以便将来某个时间查询使用）
  // 3. eval-source-map 
  // 使用eval打包源文件模块,在同一个文件中生成完整sourcemap，代码报错时，将错误映射到源代码上（打包到同一个文件.js）
  // 4. cheap-module-eval-source-map 
  // sourcemap和打包后的JS同行显示，没有映射列,只映射到行
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // //静态文件根目录
    port: 9090, // 端口
    host: 'localhost',
    overlay: true,
    progress: true, // 打包有进度条
    compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
    proxy: { // 设置代理
      '/api': 'http://localhost:3000', // 以api开头的请求，将代理到这里
      pathRewrite: {
        '/api': '', // 重写路径，将url上的/api设置为''
      }
    }
  },
  /* watch: true, // 可以在打包监控文件，文件变化时，自动打包
  watchOptions: { // 监控打包的选项
    poll: 1000,
    aggregateTimeout: 1000,
    ignored: /node_modules/
  }, */
  resolve: {
    //自动补全后缀，注意第一个必须是空字符串,后缀一定以点开头
    extensions: ['*', '.js', '.jsx', '.json', '.css'], // 依次匹配，先找.js,再找.jsx,再找.json
    // 配置别名
    alias: {
      // "jQ": path.resolve(__dirname, "src/vendor/jquery.min.js")
    }
  },
  module: {
    rules: [
      {
        // 确保将webpack更新到版本4.2.0。否则，mini-css-extract-plugin将无法使用！
        // 选用新的CSS文件提取插件 mini-css-extract-plugin
        test: /\.css$/,
        // 从js中分离css
        use: [
          MiniCssExtractPlugin.loader, // 去掉style-loader因为与MiniCss...相冲突
          'css-loader',
          'postcss-loader',
        ]
      },
      /* {
        test: /\.css$/,
        // 从js中分离css
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          // npm install -D autoprefixer postcss-loader
          use: ['css-loader', 'postcss-loader'], // 处理css3属性前缀
        })
      }, */
      /* {
        // css-loader用来处理css中url的路径, @import
        // style-loader可以把css文件变成style标签插入head中
        // 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // include: path.join(__dirname, 'src'), //限制范围，提高打包速度
        exclude: /node_modules/
      }, */
      {
        // babel-loader @babel/core @babel/preset-env
        test: /\.jsx?$/,
        use: ["babel-loader"], // 根目录配置.babelrc
        /* 
          可以直接在这里配置
          use: {
            loader: 'babel-loader',
            query: {
              presets: ["@babel/preset-env"]
            }
          }, 
        */
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        // file-loader是解析图片地址，把图片从源文件拷贝到目标文件并且修改源文件名字
        // 可以处理任意二进制，bootstrap里的字体
        // url-loader可以在文件比较小的时候，直接变成base64字符串内嵌到页面中
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'images/', // 图片输出的路径
            limit: 5 * 1024
          }
        }
      },
      /* {
        test: /\.html$/,
        use: {
          loader: 'html-loader', // 压缩html
          options: { minimize: true }
        }
      } */
    ]
  },
  // 如果是CDN在.html里面引入的，不想打包到项目.js文件下，可以配置
  // externals: {
  //   jquery: "$"
  // },
  plugins: [
    // 从js中分离css
    /* new ExtractTextWebpackPlugin({
      filename: 'css/[name].[hash].css', //放到dist/css/下
    }), */
    // 建议选用新的CSS文件提取插件mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // 清空打包输出目录
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    /* 
      区分环境变量 许多 library 将通过与 process.env.NODE_ENV 环境变量关联，
      以决定 library 中应该引用哪些内容。
      我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量：
      "build": "cross-env NODE_ENV=production webpack --mode development", // 设置NODE_ENV为production
    */
    new webpack.DefinePlugin({
      NODE_ENV:JSON.stringify(process.env.NODE_ENV)
    }),
    // 暴露全局变量
    new webpack.ProvidePlugin({ // 在每个模块中注入$对象
      '$': 'jquery', // npm
      jQ: "jQuery" // 本地Js文件
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static'),
        to: path.resolve(__dirname, 'dist/static'),
        ignore: ['.*']
      }
    ]),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["index"], // entry中的app入口才会被打包
      minify: {
        // 压缩选项
        collapseWhitespace: true,
        // hash: true,
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./test.html",
      chunks: ["test"], // entry中的app入口才会被打包
      minify: {
        // 压缩选项
        collapseWhitespace: true,
        // hash: true,
      }
    }),
    new webpack.BannerPlugin('make in 2019 lb'), // 版权申明插件，可以看打包后的文件最顶部会有这句话
    // new UglifyjsWebpackPlugin(), // 压缩js
  ]
}
