class Person {
    constructor(name) {
        this.name = name;
    }
}

const factorify = Category => (...args) => new Category(...args);

const p1 = new Person('Maksym');
console.log({p1});

const factorifiedClass = factorify(Person);

const p2 = factorifiedClass('Maksym');
console.log({p2});

