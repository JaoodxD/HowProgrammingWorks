class Result {
    then(onFulfilled) {
        this.onFulfilled = onFulfilled;
    }
    ready(data) {
        if (this.onFulfilled) this.onFulfilled(data);
    }
}

class Security {
    static getPerson(id) {
        const res = new Result();
        setTimeout(() => {
            const person = { id, name: 'JaoodxD' };
            res.ready(person);
        }, 1000)

        return res;
    }
}

(async () => {
    const person = await Security.getPerson(14);
    console.log({ person });
})();
