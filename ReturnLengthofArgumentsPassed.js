function argumentsLength() {
    return arguments.length;
}

// Example usage:

// Example 1
console.log(argumentsLength(5)); // Output: 1

// Example 2
console.log(argumentsLength({}, null, "3")); // Output: 3

// Additional example with no arguments
console.log(argumentsLength()); // Output: 0
