function debounce(fn, t) {
    let timer;
    
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
}

// Example usage:
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}

const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

// This will log:
// [125, [2]]
