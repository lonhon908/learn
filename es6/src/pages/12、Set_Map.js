// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值

/******************** Set ********************/
// 1、Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]); // [1, 2, 3, 4]
console.log(set.size); // 4
set.add(100); // 添加成员 set.add()
console.log(set.size); // 5

// 数组去重
console.log([...new Set([1, 1, 2, 3, 3])]); // [1, 2, 3]
// 字符串去重
console.log([...new Set('ababbc')].join('')); // abc

const a = new Set();
a.add(1).add(2).add(3); // 添加某个值，返回 Set 结构本身
a.delete(1); // 删除某个值，返回一个布尔值，表示删除是否成功
a.has(1); // 返回一个布尔值，表示该值是否为Set的成员
a.clear(); // 清除所有成员，没有返回值s.add(1).add(2).add(2);

// Array.from方法可以将 Set 结构转为数组
console.log(Array.from(new Set([1, 2, 3, 4, 5, 5]))); // [1, 2, 3, 4, 5]另一种去重方法

/* 
    Set 结构的实例有四个遍历方法，可以用于遍历成员
        keys()：返回键名的遍历器
        values()：返回键值的遍历器
        entries()：返回键值对的遍历器
        forEach()：使用回调函数遍历每个成员
*/

let setter = new Set(['red', 'green', 'blue']);
console.log(setter.keys());
console.log(setter.values());
console.log(setter.entries());
for (let item of setter.entries()) {
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]
    console.log(item);
}



/******************** Map ********************/
// 1、传统Object对象只能使用字符串当做健名（或Symbol类型）
// Map可以使用各种类型的值（包括对象）都可以当作键
const m = new Map();
const obj = {};
m.set(obj, 'content')
console.log(m); // Map(1) {{…} => "content"}
// 2、Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
/* 
    事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）
    都可以当作Map构造函数的参数。这就是说，Set和Map都可以用来生成新的 Map
*/
const map2 = new Map(map);
console.log(map2); // Map(2) {"name" => "张三", "title" => "Author"}
const map3 = new Map(new Set([['name', '张三']])); // 成员都是一个双元素的数组
console.log(map3); // Map(1) {"name" => "张三"} 

// 3、实例的属性和操作方法
// size 属性
console.log(map2.size); // 2
// set(key, value)添加成员
map3.set('lisi', '李四').set('wangwu', '王五');
console.log(map3); // Map(3) {"name" => "张三", "lisi" => "李四", "wangwu" => "王五"}
// get(key)  get方法读取key对应的键值，如果找不到key，返回undefined
console.log(map3.get('lisi')); // 李四
// has(key) -- has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
const o = {};
console.log(map3.has(o)); // false
// delete(key) -- delete方法删除某个键，返回true。如果删除失败，返回false
console.log(map3.delete('wangwu')); // true
// clear() -- 方法清除所有成员，没有返回值
map3.clear();
console.log(map3); // Map(0) {}

// 4、遍历方法
/* 
    Map 结构原生提供三个遍历器生成函数和一个遍历方法。
        keys()：返回键名的遍历器。
        values()：返回键值的遍历器。
        entries()：返回所有成员的遍历器。
        forEach()：遍历 Map 的所有成员。
        ** 需要特别注意的是，Map 的遍历顺序就是插入顺序。
*/

// 5、Map 转为数组
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
console.log(JSON.stringify([...myMap])); // [[true,7],[{"foo":3},["abc"]]]
console.log(JSON.stringify([...myMap.keys()])); // [true,{"foo":3}]
console.log(JSON.stringify([...myMap.values()])); // [7,["abc"]]
console.log(JSON.stringify([...myMap.entries()])) // [[true,7],[{"foo":3},["abc"]]]


// 6、WeakMap只接受对象作为键名, WeakSet 的成员只能是对象