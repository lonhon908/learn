# 开始从零配置webpack
<a href="https://juejin.im/post/5ab79fa75188255582525400">webpack4之基础篇</a>

<a href="https://juejin.im/post/5ab7c222f265da237f1e4434">webpack4之高级篇</a>

## 1、覆盖默认入口
```js
"scripts": {
    "build": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
    "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
},
```

## 2、使用最新ECMAscript特性 --- @babel/core babel-loader @babel/preset-env
```js
// .babelrc
<a href="https://www.jianshu.com/p/d078b5f3036a">Babel 7.1介绍 transform-runtime polyfill env</a>
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage", // 自动检测语法帮你require你代码中使用到的功能,无需@babel/polyfill,但需要安装，"@babel/preset-env"会去使用这个
            }
        ]
    ]
}
```

## 3、react --- react react-dom @babel/preset-react
```js
// .babelrc
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

## 4、HTML webpack 插件 --- html-webpack-plugin html-loader
```js
// webapck.config.js
plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
]
{
    test: /\.html$/,
    use: {
        loader: 'html-loader', // 压缩html
        options: { minimize: true }
    }
}
```