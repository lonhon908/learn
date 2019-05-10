## 打包图片成base64格式

1、url-loader基本能实现file-loader的打包功能，适用于小图片的打包
  + 好处：图片打包成js文件，不用加载图片的地址，页面快速显示
  + 坏处：图片过大导致js文件过大

2、当图片的大小小于limit值时会把图片打包成base64格式，大于limit值则按照file-loader打包成图片文件
  + 安装使用url-loader实现：npm install url-loader -D
  + 在webpack.config.js中添加loader的配置

```js

module: {
  rules: [{//打包以jpg、png、gif结尾的所有图片文件
    test: /\.(jpe?g|png|gif)$/,
    use: {
      loader:'url-loader',
      options: {
        //placeholder 占位符 
        name: '[name]_[hash].[ext]', //保持原图片的名字+hash值和后缀,主要单引号
        outputPath: 'image/', //打包图片的位置
        limit: 2048
      }
    }
  }]
}

```
 