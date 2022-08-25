const iterableObject = {
    begin: 1,
    end: 12
};
iterableObject[Symbol.iterator] = function () {
    let value = this.begin;
    return {
        next: () => ({
            value,
            done: value++ === this.end + 1
        })
    };
};

for (const value of iterableObject) {
    console.log(value)
}
