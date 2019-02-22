const o = {
  _d: 10,
  // 由getter和setter定义的属性称做 "存储器属性"，它不同于 "数据属性"，数据属性就是一个简单的值。
  get r() {
    return this._d;
  },
  set r(value) {
    this._d += value;
  }
}
o.r = 20;
console.log(o.r); // 30

// ES5 中只能使用方法一（标识符）定义属性
const obj = {
  foo: true,
  abc: 123
};
// ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名
let propKey = 'foo';
const obj2 = {
  [propKey]: true,
  ['a' + 'bc']: 123
};

// 对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
let z = { a: 3, b: 4 };
let n = { ...z };
console.log(n) // { a: 3, b: 4 }

// 1、Object.is()用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
// 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// 2、Object.assign
// 克隆对象
function clone(origin) {
  return Object.assign({}, origin);
}

// 3、Object.keys()，Object.values()，Object.entries()，Object.fromEntries()
const obj3 = { foo: 'bar', baz: 42 };
Object.values(obj3); // ["bar", 42]
console.log(JSON.stringify(Object.entries(obj3))); // [["foo","bar"],["baz",42]]
// Object.entries()  原对象的属性名是一个 Symbol 值，该属性会被忽略
console.log(Object.entries({ [Symbol()]: 123, foo: 'abc' })); // [["foo", "abc"]]
for (let [k, v] of Object.entries(obj)) {}

// Object.fromEntries()是Object.entries()的逆操作
// console.log(Object.fromEntries([["foo","bar"],["baz",42]]))

