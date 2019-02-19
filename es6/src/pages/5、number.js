/************** 1、二进制和八进制表示法 **************/
// 二进制 前缀0b（或0B）；八进制前缀0o（或0O）
console.log(0b111110111 === 503) // true
console.log(0o767 === 503) // true
// 转为十进制
Number('0b111')  // 7
Number('0o10')  // 8

/************** 2、Number.isFinite(), Number.isNaN()  **************/
// 它们与传统的全局方法isFinite()和isNaN()的区别在于，
// 传统方法先调用Number()将非数值的值转为数值，再进行判断，
// 而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, 
// Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
console.log(Number.isFinite(15)); // true
console.log(Number.isFinite(0.8)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite('foo')); // false注意，如果参数类型不是数值，Number.isFinite一律返回false。
console.log(Number.isFinite('15')); // false
console.log(Number.isFinite(true)); // false
// Number.isNaN()用来检查一个值是否为NaN。
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true 如果参数类型不是NaN，Number.isNaN一律返回false

/************** 3、Number.parseInt(), Number.parseFloat() **************/
// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
// 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
console.log(Number.parseInt === parseInt) // true
console.log(Number.parseFloat === parseFloat) // true


/************** Number.isInteger() **************/
// Number.isInteger()用来判断一个数值是否为整数。
Number.isInteger(25) // true
Number.isInteger(25.1) // false
// JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
Number.isInteger(25) // true
Number.isInteger(25.0) // true


export default {}
