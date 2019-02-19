/************ 1、函数参数的默认值 ************/
function foo(x = 5) {}

/************ 2、与解构赋值默认值结合使用 ************/
function foo({x, y = 5} = {}) { }
// 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
function foo(x = 5, y = 6) {
  console.log(x, y);
}
foo(undefined, null); // undefined不会传递默认参数
// 5 null

/************ 3、rest 参数 ************/
function add(...arr) {
  console.log(arr)
}
add(1, 2); // [1, 2]

/************ 4、name 属性 ************/
function foo() {}
foo.name // "foo" // 这个属性早就被浏览器广泛支持，但是直到 ES6，才将其写入了标准。
// ES6 对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量
var f = function () {};
// ES5
f.name // ""
// ES6
f.name // "f"

export default {}
