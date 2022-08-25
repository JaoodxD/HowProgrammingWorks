const getNumbers = () => ({
    numbers: [1, 2, 3],
    then(onFulfilled, onRejected) {
        const num = this.numbers.shift();
        if (num) {
            onFulfilled(num);
        }
        else {
            onRejected(new Error('No numbers available :('));
        }
    }
});

(async () => {
    const next = getNumbers();
    for (let i = 0; i < 5; i++) {
        try {
            const res = await next;
            console.log({ res });
        }
        catch (error) {
            console.error({ error: error.message });
        }
    }
})();
