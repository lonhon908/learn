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
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())


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
