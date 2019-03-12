// 类型推论
window.onmousedown = function (mouseEvent) { // mouseEvent: MouseEvent
  console.log(mouseEvent.button);
};

// 类型别名
// 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型
type Named = string;
type NameResolver = () => string;
type NameOrResolver = Named | NameResolver;

function getName(n: NameOrResolver): Named {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

getName('haha'); // haha
getName(() => '嘎嘎嘎'); // 嘎嘎嘎
// 尽量去使用接口代替类型别名
type Alias = { num: number }
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    }
    else if (easing === "ease-out") {
    }
    else if (easing === "ease-in-out") {
    }
    else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// 你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误
button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here