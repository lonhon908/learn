// 申明合并

// 合并接口
interface Person {
  name: string
  age: number
  run(speed: number): void // 同名函数被当成重载
}
interface Person {
  weight: number
  run(str: string): void // 同名函数被当成重载
}
let person: Person = {
  name: '张三',
  age: 22,
  weight: 110,
  run(s) {
    console.log(s)
  }
}
person.run('s');
person.run(1);