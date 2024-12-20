
// Given a function fn and a time in milliseconds t, return a debounced version of that function.
// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.
// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.
// The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.
// If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

const debounce = function(fn, t) {
    let timeoutId = null;
    
    return function(...args) {
        // Clear any existing timeout
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        
        // Create a new timeout
        return new Promise((resolve) => {
            timeoutId = setTimeout(() => {
                // Execute the function and resolve with its result
                const result = fn.apply(this, args);
                resolve(result);
                
                // Reset timeout ID
                timeoutId = null;
            }, t);
        });
    };
};

// Example function to debounce
const log = (x) => console.log(x);
const debouncedLog = debounce(log, 50);

// Simulate function calls
debouncedLog(1); // Called at 30ms
debouncedLog(2); // Called at 60ms - cancels previous
debouncedLog(3); // Called at 100ms - will execute at 150ms

// Async function example
const fetchData = async (x) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return x * 2;
};
const debouncedFetch = debounce(fetchData, 50);

/*
The debounce function takes two arguments:

fn: The original function to be debounced
t: The delay time in milliseconds


It returns a new function that:

Captures all arguments passed to it
Clears any existing timeout to cancel previous scheduled executions
Creates a new timeout to delay the function execution
Returns a Promise that resolves with the function's result


Key characteristics:

Each new call cancels the previous scheduled execution
The function is only executed after the specified time has passed without another call
Works with both synchronous and asynchronous functions
Preserves the context (this) and arguments of the original function
*/