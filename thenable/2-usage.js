const getPerson = id => {
    const thenable = {
        then(isFulfilled) {
            const data = { id, name: 'JaoodxD' };
            setTimeout(() => {
                isFulfilled(data);
            }, 1000);
        }
    }
    return thenable;
};

(async () => {
    const person = await getPerson(13);
    console.dir({ person });
})();
