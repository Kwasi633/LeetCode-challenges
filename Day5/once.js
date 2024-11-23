/*
Given a function fn, return a new function that is identical to the original function 
except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/

const once = function(fn) {
    let hasBeenCalled = false;
    let result;
    
    return function(...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    }
};

// Example usage:
let fn = (a,b,c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // undefined
console.log(onceFn(5,7,9)); // undefined

/*
How it works:

Creates a flag to track if function was called
Stores the result from first call
Returns undefined for all later calls


Step by step:

Make new function that wraps original function
Use hasBeenCalled as our tracker
First call:

Run original function
Save result
Mark as called
Return result


Later calls:
Just return undefined


Real-world analogy:
Think of a one-time-use ticket:

First time: ticket works, lets you in
Second time: ticket is used, won't work
Third time: still won't work
*/