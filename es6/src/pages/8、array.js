// 字符串
[...'hello']; // [ "h", "e", "l", "l", "o" ]
// 实现了 Iterator 接口的对象
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];
// 任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
const go = function*(){
  yield 1;
  yield 2;
  yield 3;
};
console.log([...go()]) // [1, 2, 3]

/************** 1、Array.of() Array.of方法用于将一组值，转换为数组 **************/
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(undefined) // [undefined]
// 模拟实现
function ArrayOf(){
  return [].slice.call(arguments);
}

/************** 2、find(当前的值,当前的位置,原数组) 和 findIndex() **************/
[1, 4, -5, 10].find((n) => n < 0); // -5
// 接受三个参数，依次为当前的值、当前的位置和原数组
[1, 5, 10, 15].find((value, index, arr) => value > 9); // 10
// 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}); // 2
// 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26

/************** 3、数组实例的 fill() **************/
// fill方法使用给定值，填充一个数组。
['a', 'b', 'c'].fill(7); // [7, 7, 7]
new Array(3).fill(7); // [7, 7, 7]
// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
['a', 'b', 'c'].fill(7, 1, 2); // ['a', 7, 'c']


/************** 4、数组实例的 flat()，flatMap()  **************/
// Array.prototype.flat()用于将嵌套的数组“拉平”，
// 变成一维的数组。该方法返回一个新数组，对原数据没有影响。
[1, 2, [3, 4]].flat(); // [1, 2, 3, 4]
// 默认只会“拉平”一层
[1, 2, [3, [4, 5]]].flat(); // [1, 2, 3, [4, 5]] 
// 将flat()方法的参数写成一个整数
[1, 2, [3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]
// 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]