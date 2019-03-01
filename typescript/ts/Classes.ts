/* Classes类 */
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return `Hello,${this.greeting}`;
  }
}
let greeter = new Greeter('给点颜色');

// 公共，私有与受保护的修饰符
// private 只能在类内部中使用，不能再实例中使用，不能再派生类中使用
// protected可以在类内部、派生类中使用，不能再实例中使用

class Person {
  name: string; // 默认是”public“,相当于 public name: string;
  private title = 'header'; // private 只能在类内部中使用
  protected income: number; // protected可以在派生类中使用
  constructor(name: string, income: number) {
    this.name = name;
    this.income = income;
  }
  add(): string {
    return this.title;
  }
}
class Employee extends Person {
  protected department: string;
  constructor(title: string, department: string, income: number) {
    super(title, income);
    this.department = department;
  }
  add(): string {
    return this.title; // 私有属性不能再派生类中使用
  }
  come() {
    console.log(this.income); // protected可以在派生类中使用
  }
}
const person = new Person('张三', 1000000);
console.log(person.title); // 私有属性不能再实例中使用

// 1、readonly修饰符
class Octopus {
  readonly name = "张三"; //  只读属性必须在声明时或构造函数里被初始化
}
const dad = new Octopus();
dad.name = '李四'; // Cannot assign to 'name' because it is a read-only

// 2、参数属性 --- 参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样
class OctopusName {
  readonly numberOfLegs: number = 8;
  // 直接初始化成类的成员
  constructor(readonly name: string, public title: string, private height: number, protected weight: number) {
    // do ...
  }
}
const n = new OctopusName('李四', '头部', 170, 130);
console.log(n.name, n.title);


// 3、存取器 get set --- 只带有 get不带有 set的存取器自动被推断为 readonly
class Employeeeeed {
  private _phone: number;
  constructor(phone: number) {
    this._phone = phone;
  }
  get phone() {
    return this._phone;
  }
  set phone(value: number) {
    if (String(value).length < 11) {
      console.log("号码格式不对")
    } else {
      this._phone = value;
    }
  }
}

// 4、静态属性 --- static

// 5、抽象类 --- 抽象类做为其它派生类的基类使用
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化
abstract class Haaaa {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch...');
  }
}

// 6、把类当做接口使用

export default {}
