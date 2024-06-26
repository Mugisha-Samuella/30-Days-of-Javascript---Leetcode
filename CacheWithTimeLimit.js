class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        let exists = false;
        if (this.cache.has(key)) {
            clearTimeout(this.cache.get(key).timeout);
            exists = true;
        }

        const timeout = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, timeout });
        return exists;
    }

    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    count() {
        return this.cache.size;
    }
}

// Example usage:
const actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"];
const values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []];
const timeDelays = [0, 0, 40, 50, 120, 200, 250];

const runExample = async (actions, values, timeDelays) => {
    const timeLimitedCache = new TimeLimitedCache();
    const output = [null];

    for (let i = 1; i < actions.length; i++) {
        await new Promise(res => setTimeout(res, timeDelays[i] - (timeDelays[i - 1] || 0)));
        const action = actions[i];
        const params = values[i];
        
        if (action === "set") {
            output.push(timeLimitedCache.set(...params));
        } else if (action === "get") {
            output.push(timeLimitedCache.get(...params));
        } else if (action === "count") {
            output.push(timeLimitedCache.count());
        }
    }

    console.log(output);
};

runExample(actions, values, timeDelays);
