// 单列模式
var Person = /** @class */ (function () {
    function Person() {
        console.log('Person');
    }
    Person.getInstance = function () {
        if (!Person.person) {
            Person.person = new Person();
        }
        return Person.person;
    };
    Person.person = null;
    return Person;
}());
var a = Person.getInstance();
var b = Person.getInstance();
console.log(a === b);
console.log(a);
