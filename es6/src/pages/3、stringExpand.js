/************ 字符串的遍历器接口 ************/
// 1、ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
for (let codePoint of 'foo') {
  console.log(codePoint)
}

// 2、includes()  返回布尔值，表示是否找到了参数字符串
let s = 'Hello world!';
s.includes('o') // true

// 3、repeat()
console.log('x'.repeat(3)) // "xxx"
console.log('hello'.repeat(2)) // "hellohello"
console.log('na'.repeat(0)) // ""




export default {}
