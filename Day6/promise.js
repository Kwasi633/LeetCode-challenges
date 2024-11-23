/*
Given two promises promise1 and promise2, return a new promise. promise1 and 
promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
*/

const addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises and add their values
    const value1 = await promise1;
    const value2 = await promise2;
    
    return value1 + value2;
};

// Example usage:
// Create two promises that resolve with numbers
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

// Use our function and log the result
addTwoPromises(promise1, promise2)
    .then(result => console.log(result)); // 7


/*
How it works:

Takes two promises as input
Waits for both to finish
Adds their values together
Returns the sum

Like waiting for two deliveries:

Order two packages (promises)
Wait for first package (await promise1)
Wait for second package (await promise2)
Once both arrive, add them together
*/