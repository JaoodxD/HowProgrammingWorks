const thenable = () => ({
    then(onFulfilled) {
        onFulfilled('Hey');
    }
});

(async () => {
    const result = await thenable();
    console.dir({ result });
})();
