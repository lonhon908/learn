// 1、https://www.baidu.com?name=jawil&age=23  获取参数

// 正常实现
function getParamName(attr) {
  if (!attr) return '';
  let search = window.location.search; // ?name=jawil&age=23
  let search_str = search.split('?')[1];
  let search_arr = search_str.split('&');
  const params = {};
  search_arr.forEach(item => {
    const p = item.split('=');
    params[p[0]] = p[1];
  })
  return params[attr] || '';
}
console.log(getParamName('name')); // jawil
console.log(getParamName('age')); // 23

// 正则实现
function getParamName2(attr) {
  if (!attr) return '';
  let search = window.location.search; // ?name=jawil&age=23
  const pattern = new RegExp(`(?:\\?|&)${attr}=([^&]*)`);
  const match = search.match(pattern);
  return match&&match[1] || ""
}
console.log(getParamName2('name')); // jawil
console.log(getParamName2('age')); // 23


// 2、数字格式化问题，1234567890 --> 1,234,567,890

// 正常实现
function formatCash(str) {
  if (!str || isNaN(Number(str))) return str;
  let nb = String(str);
  const arr = [...nb].reverse();
  let nb2 = '';
  for (let i=1; i<arr.length+1; i++) {
    nb2 += arr[i-1];
    if (i % 3 === 0 && i < arr.length) {
      nb2 += ','
    }
  }
  return [...nb2].reverse().join('')
}
console.log(formatCash('1234567')); // 1,234,567

// 正则实现
function formatCash2(str) {
  typeof str !== 'string' && (str = String(str));
  // * `/\B(?=(\d{3})+(?!\d))/g`：正则匹配边界`\B`，边界后面必须跟着`(\d{3})+(?!\d)`;
  // * `(\d{3})+`：必须是1个或多个的3个连续数字;
  // * `(?!\d)`：第2步中的3个数字不允许后面跟着数字;
  // * `(\d{3})+(?!\d)`：所以匹配的边界后面必须跟着`3*n`（n>=1）的数字。
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
console.log(formatCash2(1234567)); // 1,234,567


// 3、判断一个数是否是质数 3 --> true
// > 质数又称[素数](http://baike.baid
// u.com/item/%E7%B4%A0%E6%95%B0)。指在一个大于1的自然数中，除了1和此整数自身外，没法被其他自然数整除的数。

// 正常实现
function isPrime(num) {
  // 不是数字或者数字小于2
  if(typeof num !== "number" || !Number.isInteger(num)){　　　　　　
    // Number.isInterget 判断是否为整数
    return false
  }
  //2是质数
  if(num == 2){
    return true
  }else if(num % 2 == 0){  //排除偶数
    return false
  }
  //依次判断是否能被奇数整除，最大循环为数值的开方
  let squareRoot = Math.sqrt(num)
  //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
  for(let i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) {
       return false
    }
  }
  return true
}
console.log(isPrime(19)) // true

// 正则实现
function isPrime2(num) {
  return !/^1?$|^(11+?)\1+$/.test(Array(num+1).join('1'))
}
// 要使用这个正规则表达式，你需要把自然数转成多个1的字符串，
// 如：2 要写成 “11”， 3 要写成 “111”, 17 要写成“11111111111111111”，
// 这种工作使用一些脚本语言可以轻松的完成，JS实现也很简单，我用`Array(num+1).join('1')`这种方式实现了一下。

// * **第一部分：/^1?$/**， 这个部分相信不用我多说了，其表示匹配“空串”以及字串中只有一个“1”的字符串。
// * **第二部分：/^(11+?)\1+$/** ，这个部分是整个表达式的关键部分。其可以分成两个部分，**(11+?)** 和 **\1+$** ，
// 前半部很简单了，匹配以“11”开头的并重复0或n个1的字符串，后面的部分意思是把前半部分作为一个字串去匹配还剩下的字符串1次或多次
// （这句话的意思是——剩余的字串的1的个数要是前面字串1个数的整数倍）
console.log(isPrime2(19)); // true