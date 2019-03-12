/* 类型推论 */

// 1、最佳通用类型
let x = [1, null, 'a', false]; // 当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型
// 
window.onmousedown = function(mouseEvent: MouseEvent) {
  console.log(mouseEvent);
}
