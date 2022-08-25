const person = {
    name: 'Maksym',
    age: 26
};

person[Symbol.toPrimitive] = function (hint) {
    console.log('toPrimitive hint: ', hint);

    const serializers = {
        number: () => this.age,
        string: () => this.name,
        default: () => JSON.stringify(this)
    };
    return serializers[hint]();
};
Symbol.


console.log(+person);
console.log(`${person}`);
console.log(person+'');
