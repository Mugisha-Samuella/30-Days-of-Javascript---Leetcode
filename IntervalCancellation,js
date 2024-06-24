/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // Call the function immediately
    fn(...args);

    // Set up the interval to repeatedly call the function
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return the cancel function that clears the interval
    return function() {
        clearInterval(intervalId);
    };
};

// Test examples
const result = [];

const fn1 = (x) => x * 2;
const args1 = [4], t1 = 35, cancelTimeMs1 = 190;

const start1 = performance.now();

const log1 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start1);
    result.push({"time": diff, "returned": fn1(...argsArr)});
}

const cancel1 = cancellable(log1, args1, t1);

setTimeout(cancel1, cancelTimeMs1);

setTimeout(() => {
    console.log(result); // [{"time": 0, "returned": 8}, {"time": 35, "returned": 8}, {"time": 70, "returned": 8}, {"time": 105, "returned": 8}, {"time": 140, "returned": 8}, {"time": 175, "returned": 8}]
}, cancelTimeMs1 + t1 + 15);

// Another example
const result2 = [];

const fn2 = (x1, x2) => x1 * x2;
const args2 = [2, 5], t2 = 30, cancelTimeMs2 = 165;

const start2 = performance.now();

const log2 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start2);
    result2.push({"time": diff, "returned": fn2(...argsArr)});
}

const cancel2 = cancellable(log2, args2, t2);

setTimeout(cancel2, cancelTimeMs2);

setTimeout(() => {
    console.log(result2); // [{"time": 0, "returned": 10}, {"time": 30, "returned": 10}, {"time": 60, "returned": 10}, {"time": 90, "returned": 10}, {"time": 120, "returned": 10}, {"time": 150, "returned": 10}]
}, cancelTimeMs2 + t2 + 15);

// Another example
const result3 = [];

const fn3 = (x1, x2, x3) => x1 + x2 + x3;
const args3 = [5, 1, 3], t3 = 50, cancelTimeMs3 = 180;

const start3 = performance.now();

const log3 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start3);
    result3.push({"time": diff, "returned": fn3(...argsArr)});
}

const cancel3 = cancellable(log3, args3, t3);

setTimeout(cancel3, cancelTimeMs3);

setTimeout(() => {
    console.log(result3); // [{"time": 0, "returned": 9}, {"time": 50, "returned": 9}, {"time": 100, "returned": 9}, {"time": 150, "returned": 9}]
}, cancelTimeMs3 + t3 + 15);
