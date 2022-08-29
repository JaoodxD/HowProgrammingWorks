const poolify = (factory, min, norm, max) => {
    const duplicate = n => new Array(n).fill().map(() => factory());

    const items = duplicate(norm);

    return item => {
        if (item) {
            if (items.length < max) {
                items.push(item);
            }
            console.log(`Recycle items. Current pool size: ${items.length}`);
            return;
        }
        if (items.length < min) {
            const instances = duplicate(norm - items.length);
            items.push(...instances);
        }
        const res = items.pop();
        console.log(`Get from pool. Current pool size: ${items.length}`);
        return res;
    };
};

const buffer = () => new Int32Array(1024);

const pool = poolify(buffer, 5, 10, 15);

let i = 0;

const next = () => {
    const item = pool();
    console.log(`Buffer size: ${item.length * 32}`);
    i++;
    if (i < 20) {
        setTimeout(next, i * 10);
        setTimeout(() => pool(item), i * 100);
    }
};

next();
