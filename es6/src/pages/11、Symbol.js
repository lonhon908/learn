import Person from './test';

const s1 = Symbol();
const s2 = Symbol();

Person[s1] = function() {
    console.log(this.name)
}
Person[s2] = function() {
    console.log('run2')
}
console.log(Person)

Person[s2]()