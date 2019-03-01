// ES6 的类，完全可以看作构造函数的另一种写法
class Point {
  // do something
  constructor() {}
  toString() {}
  toValue() {}
}
typeof Point; // function
Point instanceof Function; // true
Point === Point.prototype.constructor; // true

// 1、向类添加方法
Object.assign(Point.prototype, {
  add() {},
  miuse() {}
})
console.log(Object.getOwnPropertyNames(Point.prototype)); // ["constructor", "toString", "toValue", "add", "miuse"]
// Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致。
console.log(Object.keys(Point.prototype)); // ["add", "miuse"]


// 2、constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象
class Foo {
  constructor() {
    return Object.create(null);
  }
}
console.log(new Foo() instanceof Foo); // false

// 3、取值函数（getter）和存值函数（setter）
// 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为
class MyClass {
  constructor() {
    this.a = 100;
  }
  get age() {
    return this.a;
  }
  set age(value) {
    this.a = value;
  }
}
const c = new MyClass();
console.log(c.age); // 100
c.age = 200;
console.log(c.age); // 200

// 4、Class 表达式 与立即执行class

const person = new class {
  constructor(name) {
    this.name = name;
  }
}('张三')
console.log(person); // {name: "张三"}

// 5、类的静态方法 -- static
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class Bar {
  static add() {
    return 'static'
  }
}
console.log(Bar.add()); // static

// 6、父类的静态方法可以被子类继承
class Man extends Bar {
  static getFn() {
    return super.add() + '*****'
  }
}
console.log(Man.add()); // static
console.log(Man.getFn()); // static*****

// 7、super 关键字

// 作为函数使用
class GG extends Man {
  constructor() {
    super()
  }
}
// 作为对象使用 -- 见：6、父类的静态方法可以被子类继承