/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Test examples
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); // Should be around 100
});

t = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t); // Should be around 200
});
