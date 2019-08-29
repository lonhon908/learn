enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 使用枚举
enum Res {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: Res): void {
  // ...
}
respond('Princess', Res.Yes);

// 
function fns() {
  return 100;
}

enum E {
  A = fns(),
  B = 2,
  C
}

// 字符串枚举
enum Direction2 {
  Up = "UP",
  Down = false,
  Left,
  Right,
}

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let cd: Circle = {
  kind: ShapeKind.Square,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
}

enum ES {
  Foo,
  Bar,
}

function f(x: ES) {
  if (x !== ES.Foo || x !== ES.Bar) {
      //             ~~~~~~~~~~~
      // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
  }
}