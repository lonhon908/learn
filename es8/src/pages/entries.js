
/* 
  Object.entries() 将一个对象中可枚举属性的键名和键值按照二维数组的方式返回

  注：如果键值为数字时，返回按键值升序返回

*/

const data = {
  id: 1,
  name: '张三',
  value: 'hello world'
}
console.log(JSON.stringify(Object.entries(data))); // [["id",1],["name","张三"],["value","hello world"]]

// 数组的下标作为键值返回
const arr = ['a', 'b', 'c'];
console.log(JSON.stringify(Object.entries(arr))); // [["0","a"],["1","b"],["2","c"]]

// 若是键名是Symbol，编译时会被自动忽略
const a = Symbol();
const sy = {
  [a]: 100,
  b: 101,
  c: 102
}
console.log(JSON.stringify(Object.entries(sy))); // [["b",101],["c",102]]