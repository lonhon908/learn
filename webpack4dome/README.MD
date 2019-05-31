npm | 依赖 | 描述
-- | :--: | --
webpack | D |
webpack-cli | D |你使用 webpack 4+ 版本，你还需要安装 CLI
style-loader | D | 把css文件变成style标签插入head中
css-loader | D | 用来处理css中url的路径, @import 和 url()
file-loader | D | file-loader是解析图片地址，js引入， css背景图, @font-face字体
html-webpack-plugin | D | 该插件将为你生成一个 HTML5 文件,如果你有多个 webpack 入口点， 他们都会在生成的HTML文件中的 script 标签内,如果你有任何CSS assets 在webpack的输出中（例如， 利用ExtractTextPlugin提取CSS）， 那么这些将被包含在HTML head中的<link>标签内.
clean-webpack-plugin | D | 管理插件,在每次构建前清理 /dist 文件夹 const { CleanWebpackPlugin } = require('clean-webpack-plugin');

webpack-manifest-plugin | D | 直接将数据提取到一个 json 文件,这将在根输出目录中生成manifest.json文件，其中包含所有源文件名到其对应输出文件的映射

webpack-dev-server | D | 为你提供了一个简单的 web 服务器，并且能够实时重新加载