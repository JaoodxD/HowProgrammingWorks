const poolify = (factory, size) => {
    const items = new Array(size).fill(null).map(() => factory());

    return item => {
        if (item) {
            items.push(item);
            console.log(`Recycle items. Current pool size: ${items.length}`);
            return;
        }
        const res = items.pop() ?? factory();
        console.log(`Get from pool. Current pool size: ${items.length}`);
        return res;
    };
};

const buffer = () => new Int32Array(1024);

const pool = poolify(buffer, 10);

for (let i = 0; i < 15; i++) {
    const a = pool();
    console.log(`Buffer size: ${a.length * 32}`);
}
