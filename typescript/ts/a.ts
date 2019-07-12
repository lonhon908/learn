
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



interface Person {
    sex: '男'|'女'
    age: number,
}


let abcd: 1|2|3|'' = 2;

abcd = 1;
abcd = 2;
abcd = 3;
abcd = '';
abcd = 100;
