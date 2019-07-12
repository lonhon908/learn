// TypeScript的核心原则之一是对值所具有的结构进行类型检查

interface PersonMan {
  age: number;
  weight: number;
  height: number;
  likeColor?: string; // 可选属性
  readonly sex: string; // 只读属性
  readonly initialMoney: number
}


// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!


// 额外的属性检查
// 当将它们赋值给变量或作为参数传递的时候，对象字面量会被特殊对待而且会经过 额外属性检查
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): void {
  // ...
}
let mySquare = createSquare({ data: "red", width: 100 });
// 绕过额外的属性检查
// 1、断言
let qu = createSquare({ data: "red", width: 100 } as SquareConfig);
// 2、将对象赋值给另外一个变量，传递对象引用而不直接传递兑现字面量
let j = { data: "red", width: 100 };
let u = createSquare(j);
// 3、最佳的方式是给接口添加索引签名
// interface SquareConfig {
//   [propName: string]: any
// }
// let mySquare2 = createSquare({ data: "red", width: 100 });



/* 任意属性 */
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person {
  name: string;
  age?: number;
  [propName: string]: any; // 定义了任意属性取 string 类型的值
}
let tom: Person = {
  name: 'Tom',
  gender: 'male'
};

interface NumberArray {
  [index: number]: number; // 只要 index 的类型是 number，那么值的类型必须是 number
  [propName: string]: any;
}
let fibonacci: NumberArray = {
  a: 1
};
let fibonacci2: NumberArray = [1, 2]

// 类数组
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function sum() {
  let args: IArguments = arguments;
}
let nodeArr: NodeList = document.querySelectorAll('div');