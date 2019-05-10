## 打包图片

+ 安装使用file-loader实现：npm install file-loader -D
+ 在webpack.config.js中添加loader的配置

```js

module: {
  rules: [
    {
      test: /\.(jpe?g|png|gif)$/, //打包以jpg、png、gif结尾的所有图片文件
      use: {
        loader: 'file-loader',
        options: {
          // placeholders--占位符
          name: '[name]_[hash].[ext]', //保持原图片的名字+hash值、后缀(ext)
          /* 可配置为
            name() {
              if (env === 'development) {
                return '[name]_[hash].[ext]'
              }
              return '[hash].[ext]'
            }
          */
          outputPath: '/images' //打包图片的位置
        }
      }
    }
  ]
}

```