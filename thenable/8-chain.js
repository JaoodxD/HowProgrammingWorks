const thenable = () => ({
    numbers: [1, 2, 3],
    then(onFulfilled, onRejected) {
        const num = this.numbers.shift();
        if (num) {
            onFulfilled(num);
        }
        else {
            onRejected(new Error('No more numbers for you 😈'));
        }
        return this;
    }
});

const onSuccess = res => console.dir({ res });
const onError = err => console.error({ err: err.message });

thenable()
    .then(onSuccess, onError)
    .then(onSuccess, onError)
    .then(onSuccess, onError)
    .then(onSuccess, onError)
    .then(onSuccess, onError);
