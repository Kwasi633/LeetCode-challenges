/*
Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.
If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. 
Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
*/


const cancellable = function(fn, args, t) {
    // Store the timeout so we can cancel it
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);
    
    // Return the cancel function
    return function cancelFn() {
        clearTimeout(timeoutId);
    }
};

// Example usage:
// Example 1: Function executes because cancel wasn't called
const result1 = [];
const fn1 = (x) => x * 5;
const args1 = [2];
const t1 = 20;
const cancelT1 = 50;

const cancel1 = cancellable(fn1, args1, t1);
setTimeout(cancel1, cancelT1);

// After t1 milliseconds, fn1 will execute with args1
// cancel1 is called after fn1 already executed

// Example 2: Function is cancelled before execution
const result2 = [];
const fn2 = (x) => x * 5;
const args2 = [2];
const t2 = 100;
const cancelT2 = 50;

const cancel2 = cancellable(fn2, args2, t2);
setTimeout(cancel2, cancelT2);
// cancel2 is called before fn2 executes, so fn2 never runs

/*
How it works:

Schedules function to run after delay
Returns a function that can cancel it
If cancelled in time, function never runs

// 1. Schedule the function
const timeoutId = setTimeout(...);

// 2. Create cancel function
return function cancelFn() {
    clearTimeout(timeoutId);
}
*/