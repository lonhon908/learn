// Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程
const obj = {}
const a = new Proxy(obj, {});
console.log(a)