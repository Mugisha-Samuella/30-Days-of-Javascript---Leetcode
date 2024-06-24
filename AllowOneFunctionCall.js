function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    }
}

// Test examples
const fn1 = (a, b, c) => (a + b + c);
const calls1 = [[1, 2, 3], [2, 3, 6]];
const onceFn1 = once(fn1);
const results1 = calls1.map(args => ({ calls: 1, value: onceFn1(...args) }));
console.log(results1); // [{"calls":1,"value":6}, {"calls":1,"value": undefined}]

const fn2 = (a, b, c) => (a * b * c);
const calls2 = [[5, 7, 4], [2, 3, 6], [4, 6, 8]];
const onceFn2 = once(fn2);
const results2 = calls2.map(args => ({ calls: 1, value: onceFn2(...args) }));
console.log(results2); // [{"calls":1,"value":140}, {"calls":1,"value": undefined}, {"calls":1,"value": undefined}]
