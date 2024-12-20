/*
Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
promise resolves:
* When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:
* When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
*/

const promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        // If no functions, resolve with empty array
        if (functions.length === 0) {
            resolve([]);
            return;
        }
        
        // Create results array with same length as input functions
        const results = new Array(functions.length);
        let completedPromises = 0;
        let hasRejected = false;
        
        // Iterate through functions
        functions.forEach((fn, index) => {
            // Execute each function
            fn()
                .then((result) => {
                    // If already rejected, do nothing
                    if (hasRejected) return;
                    
                    // Store result at correct index
                    results[index] = result;
                    completedPromises++;
                    
                    // If all promises completed successfully, resolve
                    if (completedPromises === functions.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // If not already rejected, reject the main promise
                    if (!hasRejected) {
                        hasRejected = true;
                        reject(error);
                    }
                });
        });
    });
};




/*
The function creates a new Promise that will manage the parallel execution of input functions.
Key implementation details:

Handles the edge case of an empty input array by immediately resolving
Creates a results array with the same length as input functions
Tracks the number of completed promises
Uses a hasRejected flag to ensure only the first rejection is processed


Execution strategy:

Calls each function immediately (in parallel)
Stores results in the results array at their original index
Tracks completed promises with completedPromises counter
Resolves when all promises complete successfully
Rejects immediately if any promise fails
*/

// Example async functions
const fn1 = () => new Promise(resolve => setTimeout(() => resolve(1), 200));
const fn2 = () => new Promise(resolve => setTimeout(() => resolve(2), 100));
const fn3 = () => new Promise(resolve => setTimeout(() => resolve(3), 300));

// Parallel execution
promiseAll([fn1, fn2, fn3])
    .then(console.log)  // [1, 2, 3]
    .catch(console.error);

// Rejection example
const fnReject = () => new Promise((_, reject) => setTimeout(() => reject("Error"), 100));
promiseAll([fn1, fnReject, fn3])
    .then(console.log)
    .catch(console.error);  // Rejects with "Error"