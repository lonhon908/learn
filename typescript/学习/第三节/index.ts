/* 函数的类型 */

// 1、用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(): () => {}
}
// ⚠️输入多余或小于个数的参数ts发出
const mySearch: SearchFunc = function (url: string, sub: string): boolean {
  return url.search(sub) !== -1;
}

// 2、可选参数 ------- ？
// ⚠️需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了
function buildName(firstName: string, lastName?: number) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 1);
let tom = buildName('Tom');

// 3、默认参数 ---- TypeScript 会将添加了默认值的参数识别为可选参数，此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName2(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2(undefined, 'Cat'); // undefined不会传入

// 4、剩余参数   事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

function add(num: number): number;
function add(str: string): string;
function add(arr: number[]): number[];
function add(data): any {
  return data;
}

add(1);
add('a');
add([1]);
