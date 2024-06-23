function reduce(nums, fn, init) {
    // Initialize the accumulator with the initial value
    let val = init;
    
    // Iterate through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        // Update the accumulator by applying the reducer function fn
        val = fn(val, nums[i]);
    }
    
    // Return the final accumulated value
    return val;
}

// Example usage:

// Example 1
const nums1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) { return accum + curr; };
const init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

// Example 2
const nums2 = [1, 2, 3, 4];
const fn2 = function sum(accum, curr) { return accum + curr * curr; };
const init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

// Example 3
const nums3 = [];
const fn3 = function sum(accum, curr) { return 0; };
const init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25
