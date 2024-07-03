function flattenArray(arr, n) {
    function flattenHelper(arr, n, currentDepth) {
        let result = [];
        for (let item of arr) {
            if (Array.isArray(item)) {
                if (currentDepth < n) {
                    result.push(...flattenHelper(item, n, currentDepth + 1));
                } else {
                    result.push(item);  // append the sublist as it is
                }
            } else {
                result.push(item);
            }
        }
        return result;
    }
    
    return flattenHelper(arr, n, 0);
}

// Example usage:
let arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n1 = 0;
console.log(flattenArray(arr1, n1));  // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

let arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n2 = 1;
console.log(flattenArray(arr2, n2));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n3 = 2;
console.log(flattenArray(arr3, n3));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
