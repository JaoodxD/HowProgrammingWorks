const DEFERRED = {
    PENDING: 1,
    RESOLVED: 2,
    REJECTED: 3
};

const deferred = () => ({
    value: undefined,
    onDone: null,
    onFail: null,
    status: DEFERRED.PENDING,
    isPending() {
        return this.status === DEFERRED.PENDING;
    },
    isResolved() {
        return this.status === DEFERRED.RESOLVED;
    },
    isRejected() {
        return this.status === DEFERRED.REJECTED;
    },
    done(callback) {
        this.onDone = callback;
        if (this.isResolved()) this.onDone(this.value);
        return this;
    },
    fail(callback) {
        this.onFail = callback;
        if (this.isRejected()) this.onFail(this.value);
    },
    resolve(value) {
        this.value = value;
        this.status = DEFERRED.RESOLVED;
        if (this.onDone) this.onDone(this.value);
        return this;
    },
    reject(value) {
        this.value = value;
        this.status = DEFERRED.REJECTED;
        if (this.onFail) this.onFail(this.value);
        return this;
    }

})

const persons = {
    10: 'Maksym Shenderuk',
    11: 'Maksym Kerimov'
};

const getPerson = id => {
    const result = deferred();
    setTimeout(() => {
        const name = persons[id];
        if (name) result.resolve({ id, name });
        else result.reject(new Error('No such Person was found'));
    }, 1000);
    return result;
};

const d1 = getPerson(10);
d1.done(res => console.log(res)).fail(error => console.error(error));

const d2 = getPerson(20);
d2.done(res => console.log(res)).fail(error => console.error(error.message));
