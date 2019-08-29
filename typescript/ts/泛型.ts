// 需求: 实现输入什么类型则输出什么类型
// number => number
// string => string
// boolean => boolean


// 如果 输入的number类型
function identity1(arg: number): number {
  return arg;
}
// 如果 输入的string类型
function identity2(arg: string): string {
  return arg;
}


// 需要一种通用的规范 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 我们定义了泛型函数后，可以用两种方法使用。 
// 第一种是，传入所有的参数，包含类型参数
identity<number>(1);
// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
identity('abcd')



// 使用泛型变量

function loggingIdentity<T>(arg: T[]): number {
  return arg.length;
}

loggingIdentity([1, 2])

interface T {
  a: number
  b: number
  c: number
  d: number
}

function getProperty<K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let xx: T = { a: 1, b: 2, c: 3, d: 4 };

getProperty(xx, "a"); // okay
getProperty(xx, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


class PP {
  name: string
  title: string
  // constructor(title: string) {
  //   this.title = title;
  // }
}

class Point {
  x: number;
  y: number;
}

class Control {
  private state?: number;
}