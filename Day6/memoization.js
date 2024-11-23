/*

*/

const memoize = function(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
};

// Example usage:
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount)        // 1 (function was only called once)

/*
How memoization works:

Creates a cache (like a memory storage)
Checks cache before running function
If result exists in cache, returns it
If not, runs function and stores result

Step by step process:

Get function arguments
Create unique key from arguments
Check if result exists in cache
If yes: return cached result
If no:

Run function
Store result
Return result

Real-world analogy:
Think of it like a calculator that writes down answers:

Someone asks "what's 2 + 3?"
Check notebook:

If answer is written down: read it
If not: calculate it and write it down


Next time someone asks same question:

Just read the written answer
Don't calculate again

First time: do the work, save result
Next time: just look up saved result
Saves time by avoiding repeated calculations
*/