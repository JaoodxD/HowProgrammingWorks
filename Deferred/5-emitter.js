const { EventEmitter } = require('events');

const DEFERRED = {
    PENDING: 1,
    RESOLVED: 2,
    REJECTED: 3
};

class Deferred extends EventEmitter {
    constructor(onDone = null, onFail = null) {
        super();
        this.value = undefined;
        if (onDone) this.on('done', onDone);
        if (onFail) this.on('fail', onFail);
        this.status = DEFERRED.PENDING;
    }
    isPending() {
        return this.status === DEFERRED.PENDING;
    }
    isResolved() {
        return this.status === DEFERRED.RESOLVED;
    }
    isRejected() {
        return this.status === DEFERRED.REJECTED;
    }
    done(callback) {
        this.on('done', callback);
        if (this.isResolved()) callback(this.value);
        return this;
    }
    fail(callback) {
        this.on('fail', callback);
        if (this.isRejected()) callback(this.value);
    }
    resolve(value) {
        this.value = value;
        this.status = DEFERRED.RESOLVED;
        this.emit('done', this.value);
        return this;
    }
    reject(value) {
        this.value = value;
        this.status = DEFERRED.REJECTED;
        this.emit('fail', this.value);
        return this;
    }

}

const persons = {
    10: 'Maksym Shenderuk',
    11: 'Maksym Kerimov'
};

const getPerson = id => {
    const result = new Deferred();
    setTimeout(() => {
        const name = persons[id];
        if (name) result.resolve({ id, name });
        else result.reject(new Error('No such Person was found'));
    }, 1000);
    return result;
};

const d1 = getPerson(10)
    .done(res => console.log(res))
    .fail(error => console.error(error));

const d2 = getPerson(20)
    .done(res => console.log(res))
    .fail(error => console.error(error.message));
