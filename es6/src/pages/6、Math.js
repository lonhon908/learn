/*********** 1、Math.trunc() 取整 ***********/
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
// 代码模拟
Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};

/*********** 1、Math.cbrt()  取整 ***********/
Math.cbrt('8') // 2
Math.cbrt('hello') // NaN Math.cbrt方法内部也是先使用Number方法将其转为数值。
// 代码模拟
Math.cbrt = Math.cbrt || function(x) {
  var y = Math.pow(Math.abs(x), 1/3);
  return x < 0 ? -y : y;
};