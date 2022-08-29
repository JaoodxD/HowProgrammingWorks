class Timer {
    constructor(interval, listener) {
        this.interval = interval;
        this.timer = null;
        this.enabled = false;
        this.listener = listener;
    }
    start() {
        if (this.enabled) return;
        this.enabled = true;
        this.timer = setInterval(this.listener, this.interval);
    }
    stop() {
        if (!this.enabled) return;
        clearInterval(this.timer);
        this.enabled = false;
    }
}

const timer = new Timer(1000, () => console.log('Timer sends you "Hello"'));
timer.start();
setTimeout(() => timer.stop(), 5000);
