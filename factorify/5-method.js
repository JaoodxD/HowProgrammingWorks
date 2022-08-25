//@ts-check

class Person {
    constructor(name) {
        this.name = name;
    }
    static factory(name) {
        return new Person(name);
    }
}

const p1 = new Person('Maksym');
console.dir({ p1 });

const p2 = Person.factory('Maksym');
console.log({p2})

module.exports = {}
