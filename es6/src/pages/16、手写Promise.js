class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // pending(未决议状态)，fulfilled(成功状态) 或 rejected(失败状态)
    this.value = undefined; // 成功状态的值
    this.reason = undefined; // 失败的原因
    this.onResolvedCallbacks = []; // 成功存放的数组
    this.onRejectedCallbacks = []; // 失败存放法数组
    let resolve = value => {
      // 状态只能变更一次，变更之后不可再次改变
      if (this.state === 'pending') { // 先判断状态是否有改变过
        this.state = 'fulfilled';
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }
    let reject = reason => {
      // 状态只能变更一次，变更之后不可再次改变
      if (this.state === 'pending') { // 先判断状态是否有改变过
        this.state = 'rejected';
        this.reason = reason;
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    // 如果executor执行报错，直接执行reject
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  // Promise/A+
  // 一个promise必须提供一个 then 方法用于读取此promise的当前或最终值(value或reason)
  // 一个promise的 then 方法接受两个参数 promise.then(onFulfilled, onRejected) onFulFilled 和 onRejected 都是可选参数
  then(onFulfilled, onRejected) {
    // Promise/A+ then 方法必须返回一个promise,以实现链式调用
    const promise2 = new MyPromise((resolve, reject) => {
      // Promise/A+ 若 onFulFilled 不是函数，则必须忽略它
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value; // value => value 实现值传递 p.then().then()
      // Promise/A+ 若 onRejected 不是函数，则必须忽略它
      onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
      const _this = this;
      if (_this.state === 'fulfilled') {
        // Promise/A+ 如果 onFulfilled 或 onRejected 返回了一个值 x, 则执行Promise Resolution Procedure(Promise决议程序) 
        let x = onFulfilled(_this.value);
        resolvePromise(promise2, x, resolve, reject);
      }
      if (_this.state === 'rejected') {
        // 确定promise2的状态
        let x = onRejected(_this.reason);
        resolvePromise(promise2, x, resolve, reject);
      }
      // 当resolve在setTomeout内执行，then时state还是pending等待状态 我们就需要在then调用的时候，将成功和失败存到各自的数组，一旦reject或者resolve，就调用它们
      if (_this.state === 'pending') {
        this.onResolvedCallbacks.push(() => {
          // 确定promise2的状态
          let x = onFulfilled(_this.value);
          resolvePromise(promise2, x, resolve, reject);
        })
        this.onRejectedCallbacks.push(() => {
          // 确定promise2的状态
          let x = onRejected(_this.reason);
          resolvePromise(promise2, x, resolve, reject);
        })
      }
    })
    return promise2;
  }
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // Promise/A+ 如果 promise 和 x 指向同一个对象，则 reject promise 并且以 TypeError 作为 reason
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  }
  // 防止多次调用
  let called;
  // Promise/A+ 如果 x 是一个对象或函数, 如果 x 是一个promise
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      // 令 then 指向 x.then
      let then = x.then;
      // 如果then是函数，就默认是Promise了
      if (typeof then === 'function') {
        // Promise/A+ 如果 then 是一个函数，则调用它，并且以 x 作为 this,以 resolvePromise 作为第一个参数，以 rejectPromise 作为第二个参数
        then.call(x, y => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          // resolve的结果依旧是promise 那就继续解析
          resolvePromise(promise2, y, resolve, reject);
        }, err => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          reject(err);// 失败了就失败了
        })
      } else {
        // Promise/A+ 如果 then 不是函数，则以 x 来 fulfill promise
        resolve(x); // 直接成功即可
      }
    } catch (error) {
      // 也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(error); 
    }
  } else {
    // Promise/A+ 如果 x 既不是对象也不是函数，则以 x 来 fulfill promise
    resolve(x);
  }
}

MyPromise.resolve = function(value) {
  return new MyPromise(resolve => resolve(value));
}
MyPromise.reject = function(reason) {
  return new MyPromise((undefined, reject) => reject(reason));
}
// race只要promises其中有一个promise状态发生改变，立即整体状态发生改变
MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    for(let i = 0; i < promises.length; i++) {
      // promises[i]的状态确定后立即会调用then
      promises[i].then(resolve, reject)
    }
  })
}
// all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
MyPromise.all = function(promises) {
  let arr = [];
  let i = 0;
  function processData(index, data, resolve) {
    arr[index] = data;
    i++;
    if (i === promises.length) { // 全部成功之后
      resolve(arr);
    }
  }
  return new MyPromise((resolve, reject) => {
    for(let i = 0; i < promises.length; i++) {
      promises[i].then(data => {
        processData(i, data, resolve);
      }, reject)
    }
  })
}




const p1 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(100)
  }, 1000);
})
const p2 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(1000)
  }, 2000);
})
const p = MyPromise.all([p1, p2]);
p.then(res => {
  console.log(res); // [100, 1000]
})
const r = p.then().then().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

export default MyPromise;