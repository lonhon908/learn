// 1、布尔值
let isDone: boolean = false;

// 2、数字
let decLiteral: number = 0xf00d;

// 3、字符串
let nameTitle: string = 'bob';

// 4、数组
let list: number[] = [1, 9];
let arr: Array<string> = ['a', 'b', 'c']; // 数组泛型  Array<元素类型>

// 5、元组 Tuple   可以定义一对值分别为 string和number类型的元组
let x: [number, string] = [9, '元祖'];

// 6、枚举 enum  使用枚举类型可以为一组数值赋予友好的名字
enum Status {
  error = '10004',
  success = '10001',
  timeOut = '50002',
}
let responseCode: Status = Status.success;

// 7、any类型
let data: any[] = [1, true, "free"]; // 当你只知道一部分数据的类型时，any类型也是有用的

// 8、Void
let unusable: void = undefined; // 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
function warnUser(): void {
  console.log("void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void");
}

// 9、Null 和 Undefined 默认情况下null和undefined是所有类型的子类型
let a: number = null;
let b: string = undefined;
let u: undefined = undefined; // undefined类型只能赋值undefined
let n: null = null; // null类型只能赋值 null
// * 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// 可以使用联合类型 string | null | undefined

// 10、Object类型
declare function create(o: object | null): void;
create({a: 0});

// 11、类型断言
// 类型断言有两种形式。 其一是“尖括号”语法； 另一个为as语法；
let someValue: any;
let strlength: number = (<string>someValue).length;
let strlength2: number = (someValue as string).length; // 在TypeScript里使用JSX时，只有 as语法断言是被允许的
