/* 枚举 enum */

// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。

// 定义一组有意义的值
enum Status {
  Pending,
  Fulfilled,
  Rejected,
}

// 在一个字符串枚举里，每个成员都必须用字符串字面量
enum Color {
  Red = "red",
  Blue = "blue",
  Yellow = "yellow",
}
enum Direction { // 符串枚举没有自增长的行为
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}