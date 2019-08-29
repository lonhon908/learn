### 枚举类型 enum

> 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举

##### 1、数字枚举
<a href="../ts/enum.ts">enum</a>

```js
// 数字枚举 如果没有指定值， 会从 0 开始自增，
enum Direction {
  Up, // 0
  Down, // 1
  Left = 3, // 3 有设置具体的值，则下方以此节点开始自增
  Right, // 4
}
```

##### 2、使用枚举
<a href="../ts/enum.ts">enum</a>

```js
// 使用枚举 通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型
enum Res {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: Res): void {
  // ...
}
respond('Princess', Res.Yes);
```

##### 3、字符串枚举

```js
// 字符串枚举
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
// 字符串枚举
enum Direction2 {
  Up = "UP",
  Down = 1, // 字符串枚举中下一项，必须初始化，如果不为number,则将规则往下匹配
  Left,
  Right,
}
```

##### 4、运行时的枚举

```js
// 枚举是在运行时真正存在的对象
enum E {
  X, Y, Z
}
// 编译后
var E;  // 会在当前环境生成真实对象
(function (E) {
  E[E["X"] = 0] = "X";
  E[E["Y"] = 1] = "Y";
  E[E["Z"] = 2] = "Z";
})(E || (E = {}));
```

##### 5、const枚举

> 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在<font color=red size=6>**编译阶段会被删除**</font>

```js
// 常量枚举通过在枚举上使用 const修饰符来定义
const enum Enum {
  A = 1,
  B = A * 2
}
```