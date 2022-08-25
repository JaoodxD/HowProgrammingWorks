const logable = fields => {

    function Logable(data) {
        this.values = data;
    }

    for (const key in fields) {
        Object.defineProperty(Logable.prototype, key, {
            get() {
                console.log('Reading key: ', key);
                return this.values[key];
            },
            set(value) {
                console.log('Writing key: ', key, value);
                const def = fields[key];
                const isValid = def.type === typeof value && def.validate(value);
                if (isValid) this.values[key] = value;
                else console.log('Validation failed: ',key,value);

            }
        })
    }

    Logable.prototype.toString = function () {
        let output = this.constructor.name + ': ';
        for (const key in fields) {
            output += this.values[key] + ' ';
        }
        return output;
    };

    return Logable;
};

const Person = logable({
    name: { type: 'string', validate: name => name.length > 0 },
    age: { type: 'number', validate: age => !(age % 1) }
});

const p1 = new Person({ name: 'Maksym', age: 26 });
console.log(p1.toString());
p1.age = 25;
console.log(p1.age);
p1.age = 25.5;
p1.name = 'Maksym Shenderuk';
console.log(p1.toString());
