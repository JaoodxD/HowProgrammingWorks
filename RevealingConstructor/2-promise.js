{
    const promise = Promise.resolve(5);
    console.log({ promise });
}

{
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
    console.log({ promise });
    promise.then(x => console.log({ x }));
    setTimeout(() => {
        promise.then(y => console.log({ y }));
    }, 1500);
}
