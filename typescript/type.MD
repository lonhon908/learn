## 定义类型


##### 1、组合类型 <font color=orange>&</font>
<a href="./ts/type.ts">type.td</a>

```js
// 一个Animal类型，以及一个Dog类型，可以使用&来进行复用
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
```

##### 2、动态的 JSON 类型指定
<a href="./ts/type.ts">type.td</a>

```js
type info = {
  [propName: string]: string | number // 指定多个类型
}
const infos: info = {
  a: 1,
  b: '2',
  c: 'true',
}
infos.d = 1;

// 在新的版本中更推荐使用内置函数Record来实现
const infos: Record<string, string | number> = {
  a: 1,
  b: '2',
  c: true, // error
}
```