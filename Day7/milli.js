/* 
Given a positive integer millis, write an asynchronous function that 
sleeps for millis milliseconds. It can resolve any value.
*/

async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

// Example usage:
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); // 100ms have passed
});

/*
How it works:

Creates a new Promise
Uses setTimeout to wait
Resolves after specified time

new Promise()           // Creates a promise
setTimeout(resolve,...) // Waits for specified time
millis                 // How long to wait
*/