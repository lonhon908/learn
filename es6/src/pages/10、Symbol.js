// js中的原始数据类型
/* 
    undefined, null, String, Number, Boolean, Object, Symbol(es6新增), Set, Map
*/

// Symbol是一种原始类型的值，类似String，不能Symbol()前使用new

import Person from './test';

const s1 = Symbol('say');
const s2 = Symbol('run');

Person[s1] = function() {
    console.log(this.name)
}
Person[s2] = function() {
    console.log('run')
}
console.log(Person)

Person[s2]()

/* 
    Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
    也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
    但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
*/
// 不会遍历Symbol作为健名的属性
for(let key in Person) {
    console.log(key + '--'); // name-- value--  say--  run--
}
// 不会遍历Symbol作为健名的属性
console.log(Object.keys(Person)); // ["name", "value", "say", "run"]
console.log(Object.values(Person)); // ["张三", "hello world", ƒ say(), ƒ run()]
// 获取指定对象的所有 Symbol 属性名的集合
console.log(Object.getOwnPropertySymbols(Person)); // [Symbol(say), Symbol(run)]
// 一个新的 API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名
console.log(Reflect.ownKeys(Person)); // ["name", "value", "say", "run", Symbol(say), Symbol(run)]


// Symbol.for()，Symbol.keyFor()
// 搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
let s3 = Symbol.for('foo');
let s4 = Symbol.for('foo');

console.log(s3 === s4) // true
// Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key
console.log(Symbol.keyFor(s3)) // "foo"
// 变量s5属于未登记的 Symbol 值，所以返回undefined
let s5 = Symbol("foo");
Symbol.keyFor(s5) // undefined