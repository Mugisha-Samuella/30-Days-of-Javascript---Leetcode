function compose(functions) {
    // Return the composed function
    return function(x) {
        // Apply each function from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
}

// Example usage:

// Example 1
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const composedFn1 = compose(functions1);
console.log(composedFn1(4)); // Output: 65

// Example 2
const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composedFn2 = compose(functions2);
console.log(composedFn2(1)); // Output: 1000

// Example 3
const functions3 = [];
const composedFn3 = compose(functions3);
console.log(composedFn3(42)); // Output: 42
