// 布尔型
let isDone: boolean = false;

// 数值型
let num: number = 0b1100 || 12 || 0o14 || 0xc;

// 字符串
let str: string = `abc${isDone}`;

// 数组
let arr: string[] = ['a', 'b', 'c'];
let list: Array<number> = [1, 2]; // 泛型

// 元祖 -- 表示一个已知元素数量和类型的数组
let tuple: [string, number] = ['a', 1];

// 枚举
enum Color {Red = 2, Blue, Blank};

// any
let noType: any = 2;
// noType.baby(); // 在它上面调用任意的方法
// noType.run(); // 在它上面调用任意的方法

// Void
function add(): void {}
let unusable: void = undefined || null; // 只能为它赋予undefined和null

// Null 和 Undefined -- 默认情况下null和undefined是所有类型的子类型
let a: number = null;
let s: string = undefined;

// 类型断言
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息
// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”
// 两种形式
let someValue = null;
let number: number = (<string>someValue).length;
let n: number = (someValue as string).length;

export default {}
