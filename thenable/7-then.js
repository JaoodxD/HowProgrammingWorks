const getNumbers = () => {
    const numbers = [1, 2, 3];
    return () => new Promise((resolve, reject) => {
        const num = numbers.shift();
        if (num) {
            resolve(num);
        }
        else {
            reject(new Error('No numbers available :('));
        }
    });
};

const next = getNumbers();
for (let i = 0; i < 5; i++) {
    next().then(
        res => console.log({ res }),
        err => console.error({ error: err.message })
    )
}
