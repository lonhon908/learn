// es5 RegExp构造函数的参数有两种情况
// 1、参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
const pattern1 = new RegExp('abc', 'i');
console.log(pattern1.test('Abcd')); // true
// 2、第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
var regex = new RegExp(/xyz/i);
// 等价于
var regex = /xyz/i;
// *******但是，ES5 不允许此时使用第二个参数添加修饰符，否则会报错。
// var regex = new RegExp(/xyz/, 'i');

// es6
/* 
    ES6 改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，
    那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，
    只使用新指定的修饰符。
*/
// 1、ES6 为正则表达式新增了flags属性，会返回正则表达式的修饰符。
const p = new RegExp(/abc/g, 'i').flags; // flags 属性
console.log(p); // i

// 2、y 修饰符
/* 
    y修饰符的作用与g修饰符类似，也是全局匹配，
    后一次匹配都从上一次匹配成功的下一个位置开始。
    不同之处在于，g修饰符只要剩余位置中存在匹配就可，
    而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
*/
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s)) // ["aaa"]
console.log(r2.exec(s)) // ["aaa"]

console.log(r1.exec(s)) // ["aa"]
console.log(r2.exec(s)) // null