/* 接口 */
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
interface LabelledValue {
  label: string;
}
function printLabel(labelObj: LabelledValue): void {
  console.log(labelObj)
}
const myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// 1、可选属性
interface Person {
  name: string,
  age: number,
  weight?: number // 可选
}
function createPerson(config: Person): Person {
  return config
}
const data: Person = {
  name: '张三',
  age: 25
}
createPerson(data);


// 2、只读属性
interface Point {
  readonly sum: string,
  readonly flag: boolean,
}
const p: Point = {
  sum: '',
  flag: false
}
// p.sum = 'abc'; // Cannot assign to 'sum' because it is a read-only property


// 3、额外的属性检查
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): void {
// do something
}
const config = {
  color: 'red',
  widdth: 100
};
createSquare(config);
// 当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// TypeScript会认为这段代码可能存在bug。 对象字面量会被特殊对待而且会经过 额外属性检查，
createSquare({color: 'red', widdth: 100}); // 对象字面量会被特殊对待而且会经过 额外属性检查
// 使用断言绕过额外的属性检测
createSquare({color: 'red', widdth: 100} as SquareConfig);

// 4、函数类型 --- 接口也可以描述函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}
const addd: SearchFunc = function(sou: string, sub: string): boolean {
  return false;
};

// 5、可索引的类型
// TypeScript支持两种索引签名：字符串和数字
interface StringArray { // 字符串
  [index: string]: string
}
let myArray: StringArray = {a: 'bind'};
interface NumberArray { // 数字
  [index: number]: any
}
let array: NumberArray = ['bind'];
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
interface NotOkay {
  [index: number]: number; // 数字索引的返回值不是string，所以会报错
  [index: string]: string;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
// 将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
const list: ReadonlyStringArray = ['Alice', 'Bob'];
list[1] = ''; // error!


// 6、类类型 --- 用它来明确的强制一个类去符合某种契约
interface ClockInterfaceMode {
  currentTime: Function;
  setTime(str: string): number; // 也可以在接口中描述一个方法，在类里实现它
}
class Clock implements ClockInterfaceMode {
  currentTime: () => {};
  constructor() {}
  setTime(str: string): number {
    return str.length;
  }
}
// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
class Lock implements ClockInterfaceMode {
  currentTime: () => {};
  constructor() {}
  static setTime(str: string): number { // 接口只描述公共部分，这里的静态方法(还有static，private，protected)不计
    return str.length;
  }
}
// 因为当一个类实现了一个接口时，只对其实例部分进行类型检查

// 7、继承接口 --- 和类一样，接口也可以相互继承
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface PenStroke extends Shape, Square {
  penWidth: number
}

// 8、混合类型
interface Counter {
  (start: string): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(value: string): string {
    return value;
  }
  counter.interval = 23;
  counter.reset = () => {};
  return counter;
}
let c = getCounter();
c('abc');
c.reset();
c.interval = 5.0;

// 9、接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现
class Control {
  private state = '10001';
}
interface SelectableControl extends Control {
  add(arr: number[]): number
}
class Button extends Control implements SelectableControl {
  constructor() {
    super()
  }
  add(arr: Array<number>): number {
    return 1
  }
}
// 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
class Img implements SelectableControl {
  private state = '';
  constructor() {}
  add(arr: Array<number>): number {
    return 1
  }
}

export default {}
