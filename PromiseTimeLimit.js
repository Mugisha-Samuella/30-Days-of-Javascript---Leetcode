/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        // Create a timeout promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject("Time Limit Exceeded"), t)
        );

        try {
            // Use Promise.race to race between fn and the timeout promise
            return await Promise.race([fn(...args), timeoutPromise]);
        } catch (err) {
            // Propagate the error from fn or the timeout promise
            throw err;
        }
    };
};

// Test examples
const limited1 = timeLimit(async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
}, 50);

const start1 = performance.now();
limited1(5)
    .then(res => console.log({"resolved": res, "time": Math.floor(performance.now() - start1)}))
    .catch(err => console.log({"rejected": err, "time": Math.floor(performance.now() - start1)}));

const limited2 = timeLimit(async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
}, 150);

const start2 = performance.now();
limited2(5)
    .then(res => console.log({"resolved": res, "time": Math.floor(performance.now() - start2)}))
    .catch(err => console.log({"rejected": err, "time": Math.floor(performance.now() - start2)}));

const limited3 = timeLimit(async (a, b) => {
    await new Promise(res => setTimeout(res, 120));
    return a + b;
}, 150);

const start3 = performance.now();
limited3(5, 10)
    .then(res => console.log({"resolved": res, "time": Math.floor(performance.now() - start3)}))
    .catch(err => console.log({"rejected": err, "time": Math.floor(performance.now() - start3)}));

const limited4 = timeLimit(async () => { 
    throw "Error";
}, 1000);

const start4 = performance.now();
limited4()
    .then(res => console.log({"resolved": res, "time": Math.floor(performance.now() - start4)}))
    .catch(err => console.log({"rejected": err, "time": Math.floor(performance.now() - start4)}));
