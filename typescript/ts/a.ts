
// 单列模式
class Person {
    static person: Person = null;
    constructor() {
        console.log('Person')
    }
    static getInstance(): Person {
        if (!Person.person) {
            Person.person = new Person();
        }
        return Person.person;
    }
}

const a = Person.getInstance();
const b = Person.getInstance();
console.log(a===b)
console.log(a);