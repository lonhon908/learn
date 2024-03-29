/* let const */



// 1、不存在变量提升
// 2、不允许重复声明
// 3、块级作用域
// 4、顶层对象的属性,let、const、class申明的变量不再是顶层对象的属性




/* ES6 为了改变这一点，一方面规定，为了保持兼容性，
var命令和function命令声明的全局变量，依旧是顶层对象的属性；
另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。 */

// const 命令
// const声明一个只读的常量。一旦声明，常量的值就不能改变


// ES6 声明变量的六种方法
/* 
    ES5 只有两种声明变量的方法：var命令和function命令。
    ES6 除了添加let和const命令，后面章节还会提到，
    另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。
*/

export default {}
