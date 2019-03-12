/* 泛型 */
`软件工程中，我们不仅要创建一致的定义良好的API，
同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，
同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。`

// 不用泛型的 --- 只支持number类型
function identity(arg: number): number {
  return arg;
}
// 或者用any --- 等于放弃类型检测
function identity2(arg: any): any {
  return arg;
}
// 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity3<T>(arg: T): T { // 类型变量T
  return arg;
}
// 调用方法一
const s = identity3<string>('张三');
const b = identity3<number>(25);
// 调用方法二  ---  利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
const c = identity3('使用类型推断');


// 泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}
let fn: GenericIdentityFn = identity3;
