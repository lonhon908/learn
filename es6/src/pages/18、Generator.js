// Generator
// Generator 函数是一个状态机
// Generator 是一个遍历器对象生成函数

function* helloWorldGenerator() {
  yield 1;
  yield 2;
  return 3;
}
// 调用 Generator 函数后，该函数并不执行，而是返回遍历器对象（Iterator Object）代表 Generator 函数的内部指针
const hw = helloWorldGenerator();
hw.next(); // {value: 1, done: false}
hw.next(); // {value: 2, done: false}
hw.next(); // {value: 3, done: true}
hw.next(); // {value: undefined, done: true}

/********************** 与 Iterator 接口的关系 **********************/
// 由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
}
console.log([...myIterable]); // [1, 2, 3]

// Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身
function* gen() {}
const p = gen();
p[Symbol.iterator]() === p; // true

/************************** next 方法的参数 **************************/
// yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}
const g = f();
g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }


/******************************** for...of 循环 ********************************/
// for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}
// 这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，所以”6“不会被执行
for(let value of foo()) {
  // console.log(value); // 1 2 3 4 5
}

/*********************************** yield* 表达式 ***********************************/
// 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的
function* foo1() {
  yield 'a';
  yield 'b';
}
function* bar1() {
  yield 'x';
  foo1();
  yield 'y';
}
for(let v of bar1()) {
  console.log(v); // x y
}

// yield*
function* bar2() {
  yield 'x';
  yield* foo1();
  yield 'y';
}
for(let v of bar2()) {
  console.log(v); // a b x y
}
// 等同于
function* bar2() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}

// 作为对象属性的 Generator 函数 
const obj = {
  * add() { // 写法
    yield 2
  }
}