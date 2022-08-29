const scalarConstant = 3;
const functionConstant = () => 5;
const callbackConstant = f => f(7);

const obj = (z, x, c) => {
    console.log({ z });
    console.log({ x: x() });
    c(c => console.log({ c }));
};

obj(scalarConstant, functionConstant, callbackConstant);
