function compactObject(obj) {
    if (Array.isArray(obj)) {
        // Process array elements
        let result = [];
        for (let i = 0; i < obj.length; i++) {
            if (Boolean(obj[i])) { // Check for truthiness
                if (typeof obj[i] === 'object') {
                    result.push(compactObject(obj[i])); // Recurse for nested objects/arrays
                } else {
                    result.push(obj[i]); // Add non-object values directly
                }
            }
        }
        return result;
    } else if (typeof obj === 'object' && obj !== null) {
        // Process object keys
        let result = {};
        for (let key in obj) {
            if (Boolean(obj[key])) { // Check for truthiness
                if (typeof obj[key] === 'object') {
                    result[key] = compactObject(obj[key]); // Recurse for nested objects/arrays
                } else {
                    result[key] = obj[key]; // Add non-object values directly
                }
            }
        }
        return result;
    } else {
        // For non-object types (string, number, boolean, null)
        return obj;
    }
}

// Example usage:
console.log(compactObject([null, 0, false, 1])); // Output: [1]
console.log(compactObject({"a": null, "b": [false, 1]})); // Output: {"b": [1]}
console.log(compactObject([null, 0, 5, [0], [false, 16]])); // Output: [5, [], [16]]
