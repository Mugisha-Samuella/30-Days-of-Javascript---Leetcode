function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    function memoizedFunction(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            callCount++;
            return result;
        }
    }

    memoizedFunction.getCallCount = function() {
        return callCount;
    };

    return memoizedFunction;
}

// Test examples
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // "call" - returns 4
console.log(memoizedSum(2, 2)); // "call" - returns 4 (cached)
console.log(memoizedSum.getCallCount()); // "getCallCount" - total call count: 1
console.log(memoizedSum(1, 2)); // "call" - returns 3
console.log(memoizedSum.getCallCount()); // "getCallCount" - total call count: 2

const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(2)); // "call" - returns 2
console.log(memoizedFactorial(3)); // "call" - returns 6
console.log(memoizedFactorial(2)); // "call" - returns 2 (cached)
console.log(memoizedFactorial.getCallCount()); // "getCallCount" - total call count: 2
console.log(memoizedFactorial(3)); // "call" - returns 6 (cached)
console.log(memoizedFactorial.getCallCount()); // "getCallCount" - total call count: 2

const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
const memoizedFib = memoize(fib);

console.log(memoizedFib(5)); // "call" - returns 8
console.log(memoizedFib.getCallCount()); // "getCallCount" - total call count: 1
