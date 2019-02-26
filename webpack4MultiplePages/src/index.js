
import React from "react";
import ReactDOM from "react-dom";

import App from './App';
import './main';

ReactDOM.render(
  <App />, 
  document.getElementById("app")
);
// import $ from 'jquery'; // 如果是CDN在.html里面引入的，不想打包到项目.js文件下，可以在webpack.config.js里面配置
/* externals: {
  jquery: "$"
}, */
// webpack.config.js配置了全局变量 jQ $
const node = jQ('body')[0];
console.log(node)
const node2 = $('body')[0];
console.log(node2)

const set = new Set([1, 2])
console.log(set)

async function add() {
  await 1
}
add().then(res => {
  console.log(res);
  console.log('hahaha1111')
})

// 装饰器 cnpm install -D @babel/plugin-proposal-decorators
/* 
  .babelrc
  plugins[
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
*/
@Log
class Person {
  constructor(name) {
    this.name = name;
  }
}
const person = new Person('张三');
console.log(person);

function Log(target) {
  console.log(target)
}
/* 
  webpack支持es6, CommonJS, AMD
  在入口文件app.js中，我们分别用 3 中规范，引用vendor文件夹中的 js 文件。
*/
// ES6
import sum from "./vendor/sum";
console.log("sum(1, 2) = ", sum(1, 2));

// CommonJs
var minus = require("./vendor/minus");
console.log("minus(1, 2) = ", minus(1, 2));

// AMD
require(["./vendor/multi"], multi => {
  console.log("multi(1, 2) = ", multi(1, 2));
});
