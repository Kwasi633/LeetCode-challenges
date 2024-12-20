// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

const timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve, reject) => {
            // Set a timeout to reject if fn takes too long
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            
            // Execute the original function
            fn(...args)
                .then((result) => {
                    // Clear the timeout and resolve with the result
                    clearTimeout(timeoutId);
                    resolve(result);
                })
                .catch((error) => {
                    // Clear the timeout and reject with the original error
                    clearTimeout(timeoutId);
                    reject(error);
                });
        });
    };
};

// Example async function that takes time
const slowFunction = async (n) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return n * n;
};

// Create a time-limited version with 50ms limit
const timeLimitedSlowFunction = timeLimit(slowFunction, 50);

// This will reject with "Time Limit Exceeded"
timeLimitedSlowFunction(10)
    .then(console.log)
    .catch(console.error);