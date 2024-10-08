/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function(n){
    return function(count){
        return n++
    }
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */