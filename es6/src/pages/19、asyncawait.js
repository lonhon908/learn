// async 函数是什么？一句话，它就是 Generator 函数的语法糖


`1、一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。`

// async函数的改进
/* 
    1）内置执行器
    2）更好的语义
    3）更广的适用性
    4）返回值是 Promise
*/

async function fn() {
  return 1
}
// 返回的是promise
fn().then(res => console.log(res)); // 1

async function fn2() {
  throw new Error('async内部出错了，会使返回的promise的状态变为rejected');
}
fn2().then(() => {
  console.log('then')
}).catch(err => {
  // console.log(err); // Error: async内部出错了，会使返回的promise的状态变为rejected
})


// await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到
async function fn3() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
fn3().catch(err => console.log(err)); // 出错了

// 错误处理
async function fn4() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了');
    });
  } catch(e) {}
  return await('hello world');
}
// 错误被trycatch捕获
fn4().then(res => console.log(res)).catch(err => console.log(err)); // hello world
function add() {
  return new Promise((resolve, reject) => {
    const n = Math.random();
    n > 0.5 ? resolve(n) : reject(n)
  })
}
async function fn5() {
  for(let i=0; i<5; i++) {
    console.log(i + '***')
    try {
      await add()
      break;
    } catch (error) {}
  }
}
fn5()

/********************************* async 函数的实现原理 *********************************/
