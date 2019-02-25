const promise = new Promise((resolve, reject) => {
  const n = Math.random();
  n > 0.5 ? resolve(n) : reject(n);
})

promise
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    // console.log(err);
  })
  .finally(() => {
    // console.log('都会执行finally方法');
  })

// Promise.all([])

// 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
// Promise.race([p1, p2, p3])

// Promise.resolve() 相当于 new Promise(resolve => { resolve() })

// Promise.reject() 相当于 new Promise((resolve, reject) => { reject() })

/*************************** Promise.resolve() ***************************/
// Promise.resolve方法的参数分成四种情况

// 1、参数是一个 Promise 实例
const p1 = Promise.resolve(promise); // 不做任何修改、原封不动地返回这个实例
// console.log(p1)
// 2、参数是一个thenable对象（如下： thenable）
const thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
// Promise.resolve方法会将这个对象看做 Promise 对象，然后就立即执行thenable对象的then方法
const p2 = Promise.resolve(thenable);
// console.log(p2)
// 3、参数不是具有then方法的对象，或根本就不是对象
const p3 = Promise.resolve('hello'); // Promise.resolve方法返回一个新的 Promise 对象，状态为resolved,value = 'hello'
// console.log(p3)
// 4、不带有任何参数
const p4 = Promise.resolve(); // 直接返回一个resolved状态的 Promise 对象
// console.log(p4)


/*************************** Promise.reject() ***************************/
// 注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致
const thenable2 = {
  then(resolve, reject) {
    reject('出错了');
  }
};
// Promise.reject方法的参数是一个thenable对象，执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象
const p5 = Promise.reject(thenable2);
p5.catch(err => {
  console.log(err); // {then: ƒ}
})


import MyPromise from './16、手写Promise';