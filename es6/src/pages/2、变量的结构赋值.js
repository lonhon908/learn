/*********************** 数组的结构赋值 ***********************/
// let [a, b, c] = [1, 2, 3];
// 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo) // 1
console.log(bar) // 2
console.log(baz) // 3

let [ , , third] = ["foo", "bar", "baz"];
console.log(third) // "baz"

let [x, , y] = [1, 2, 3];
console.log(x) // 1
console.log(y) // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head) // 1
console.log(tail) // [2, 3, 4]

let [xx, yy, ...zz] = ['a'];
console.log(xx) // "a"
console.log(yy) // undefined
console.log(zz) // []


// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
let [x1, y1, z1] = new Set(['a', 'b', 'c']);
console.log(x1) // "a"
// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
function f() {
  console.log('aaa');
}
let [m = f()] = [1]; // 因为x能取到值，所以函数f根本不会执行


/*********************** 对象的结构赋值 ***********************/

// 如果变量名与属性名不一致，必须写成下面这样
let { fooo:bazz, vim: gun = '默认值'} = { fooo: 'aaa', bar: 'bbb' };
console.log(bazz, gun) // aaa 默认值
// 与数组一样，解构也可以用于嵌套结构的对象。
let obj = {
  p: [
    'Hello',
    { value: 'World' }
  ]
};
let { p: [str, { value }] } = obj;
console.log(str) // "Hello"
console.log(value) // "World"


/*********************** 字符串的解构赋值 ***********************/
const [a, b, c, d, e] = 'hello';
console.log(a) // "h"
console.log(b) // "e"
console.log(c) // "l"
console.log(d) // "l"
console.log(e) // "o"
// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
const { length: len } = 'hello';
console.log(len) // 5

export default {}
