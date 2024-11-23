/*
Write a function argumentsLength that returns the count of arguments passed to it.
*/


const argumentsLength = function(...args) {
    const test = args
    return test.length
};

console.log(argumentsLength("Smashing leetcode problems!", 555, 'pass multiple args'))