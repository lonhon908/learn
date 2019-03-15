/* 变量声明 */
// let const

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Man extends Person {
    age: number;
    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
    say() {
        console.log(this.name);
    }
}
const p = new Person("zhangsan");
// p.name = '123';

export default {}
