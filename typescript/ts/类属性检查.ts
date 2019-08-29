// https://www.tslang.cn/docs/release-notes/typescript-2.7.html

class Pdf {
  title: string
  pageNumber: number
  constructor(page: number) {
    this.pageNumber = page;
  }
}

class C {
  foo: number;
  bar = "hello";
  baz: boolean;
//  ~~~
//  Error! Property 'baz' has no initializer and is not assigned directly in the constructor.
  constructor() {
      this.foo = 42;
  }
}

// 显式赋值断言

class C1 {
  foo: number;
  bar = "hello";
  haha: number | undefined; // 如果本意是 值可以为undefined,那么应该声明它的类型为 xxx | undefined
  baz!: boolean; // ok
  constructor() {
      this.foo = 42;
  }
}


let xo!: number[];
initialize();
xo.push(4);

function initialize() {
  xo = [0, 1, 2, 3];
}

// Has type
//  | { a: boolean, aData: number, b?: undefined }
//  | { b: boolean, bData: string, a?: undefined }
let bar = Math.random() < 0.5 ?
    { a: true, aData: 100 } :
    { b: true, bData: "hello" };

if (bar.b) {
    // TypeScript now knows that 'bar' has the type
    //
    //   '{ b: boolean, bData: string, a?: undefined }'
    //
    // so it knows that 'bData' is available.
    bar.bData.toLowerCase()
}


// in操作符细化和精确的 instanceof
interface AA { a: number };
interface B { b: string };

function foo(x: AA | B) {
  if ("a" in x) {
    return x.a;
  }
  return x.b;
}