function sumPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(values => values[0] + values[1]);
}

// Test examples
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

sumPromises(promise1, promise2).then(result => {
    console.log(result); // Output: 7
});

const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

sumPromises(promise3, promise4).then(result => {
    console.log(result); // Output: -2
});
