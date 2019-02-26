// 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）
/* 
    Iterator 的作用有三个
        一是为各种数据结构，提供一个统一的、简便的访问接口；
        二是使得数据结构的成员能够按某种次序排列；
        三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费
*/

const p = {
  name: '张三',
  age: 28,
  height: 178,
  weight: 68
}
p.__proto__[Symbol.iterator] = function() {
  const keys = Object.keys(this);
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < keys.length ? {
        value: this[keys[nextIndex++]],
        done: false
      }: {
        value: undefined,
        done: true
      };
    }
  }
}

for(let value of p) {
  console.log(value)
}
const r = p[Symbol.iterator]();
// console.log(r.next())
// console.log(r.next())
// console.log(r.next())
// console.log(r.next())
// console.log(r.next())
// console.log(r.next())


/***************** 原生具备 Iterator 接口的数据结构如下 *****************/
/* 
  Array
  Map
  Set
  String
  TypedArray
  函数的 arguments 对象
  NodeList 对象
*/
// 遍历对象的正确姿势
const p2 = new Map(Object.entries(p));
for(let [key, value] of p2) {
  console.log(key, value)
}


/**************************** Iterator 的遍历过程 ****************************/
/* 

  （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

  （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

  （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

  （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
*/

const str = 'abcd';
const Iterable2 = str[Symbol.iterator]();
// console.log(Iterable2.next()); // {value: "a", done: false}
// console.log(Iterable2.next()); // {value: "c", done: false}
// console.log(Iterable2.next()); // {value: "d", done: false}
// console.log(Iterable2.next()); // {value: undefined, done: true}


/****************************** 调用 Iterator 接口 ******************************/

// 有一些场合会默认调用 Iterator 接口（即Symbol.iterator方法）
// 1）解构赋值  数组和 Set 结构进行解构赋值
const set = new Set(['a', 'b', 'c']);
let [x, y] = set;
let [first, ...rest] = set;

// 2）扩展运算符 ---- 只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组
[...'abcd'];
const arr = ['a', 'b'];
['v', ...arr, 't'];

// 3）yield* --- yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
let generator = function* () {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
};
var iterator = generator();
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: 4, done: false }
console.log(iterator.next()) // { value: 5, done: false }
console.log(iterator.next()) // { value: undefined, done: true }


// for of 遍历arguments对象
function for_of() {
  for(let value of arguments) {
    console.log(value)
  }
}
for_of('a', 'f', 1); // a f 1

// NodeList可以使用for of
const nodelist = document.querySelectorAll('.box');
for(let value of nodelist) {
  console.log(value.nodeName);
}