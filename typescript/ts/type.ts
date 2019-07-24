// 1
type A = {                 // 定义复杂结构
  b: number
  c: string
}
// 2
type Func = () => number   // 定义函数
// 3
type Key = number | string // 多个类型

// 4 组合类型  &
type Animal = {
  weight: number
  height: number
}
type Dog = Animal & {
  leg: number
}
const dog: Dog = {
  weight: 100,
  height: 100,
  leg: 20
}


// 4 动态的 JSON 类型指定 只需要简单的指定一个通配符即可
type info = {
  [propName: string]: string | number // 指定多个类型
}
const infos: info = {
  a: 1,
  b: '2',
  c: 'true', // error 类型不匹配
}
infos.d = 1;

// 5 在新的版本中更推荐使用内置函数Record来实现
const infos2: Record<string, string|number> = {
  a: 1,
  b: '2',
  c: 'true', // error 类型不匹配
}
infos2.d = 1;
