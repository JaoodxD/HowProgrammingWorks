const asyncResult = () => ({
    value: undefined,
    onDone: null,
    done(callback) {
        this.onDone = callback;
        if(this.value) this.onDone(this.value);
        return this;
    },
    resolve(value) {
        this.value = value;
        if (this.onDone) this.onDone(this.value);
        return this;
    }
});

const persons = {
    10: 'Maksym Shenderuk',
    11: 'Maksym Kerimov'
};

const getPerson = id => {
    const result = asyncResult();
    setTimeout(() => {
        result.resolve({ id, name: persons[id] });
    }, 1000);
    return result;
};

const d1 = getPerson(10);
d1.done(res => console.log(res));

const d2 = getPerson(11);
setTimeout(() => d2.done(res => console.log(res)),1500);
