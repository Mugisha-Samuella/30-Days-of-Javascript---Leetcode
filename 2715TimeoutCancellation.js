/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);
    
    return function() {
        clearTimeout(timeoutId);
    };
};

// Test examples
const result = [];

const fn1 = (x) => x * 5;
const args1 = [2], t1 = 20, cancelTimeMs1 = 50;

const start1 = performance.now();

const log1 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start1);
    result.push({"time": diff, "returned": fn1(...argsArr)});
}

const cancel1 = cancellable(log1, args1, t1);

const maxT1 = Math.max(t1, cancelTimeMs1);

setTimeout(cancel1, cancelTimeMs1);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT1 + 15);

// Another example
const result2 = [];

const fn2 = (x) => x ** 2;
const args2 = [2], t2 = 100, cancelTimeMs2 = 50;

const start2 = performance.now();

const log2 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start2);
    result2.push({"time": diff, "returned": fn2(...argsArr)});
}

const cancel2 = cancellable(log2, args2, t2);

const maxT2 = Math.max(t2, cancelTimeMs2);

setTimeout(cancel2, cancelTimeMs2);

setTimeout(() => {
    console.log(result2); // []
}, maxT2 + 15);

// Another example
const result3 = [];

const fn3 = (x1, x2) => x1 * x2;
const args3 = [2, 4], t3 = 30, cancelTimeMs3 = 100;

const start3 = performance.now();

const log3 = (...argsArr) => {
    const diff = Math.floor(performance.now() - start3);
    result3.push({"time": diff, "returned": fn3(...argsArr)});
}

const cancel3 = cancellable(log3, args3, t3);

const maxT3 = Math.max(t3, cancelTimeMs3);

setTimeout(cancel3, cancelTimeMs3);

setTimeout(() => {
    console.log(result3); // [{"time":30,"returned":8}]
}, maxT3 + 15);
