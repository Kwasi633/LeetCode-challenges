/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn 
that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

const compose = function(functions) {
    return function(x) {
        // If array is empty, return identity function (returns x as is)
        if (functions.length === 0) return x;
        
        // Start with the last result
        let result = x;
        
        // Loop through functions from right to left
        for(let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        
        return result;
    }
};

// Example usage:
const fn = compose([x => x + 1, x => x * 2, x => 2 * x]);
console.log(fn(4)); 
// Step by step:
// 1. 2 * 4 = 8    (last function)
// 2. 8 * 2 = 16   (middle function)
// 3. 16 + 1 = 17  (first function)

const fn2 = compose([]);
console.log(fn2(4)); // 4 (returns input as is)

/*
What function composition means:

Takes array of functions
Applies them from right to left
Each function's output becomes input for next function

Explanation of solution
It creates a new function that takes one input (x)
If functions array is empty, returns x unchanged
Otherwise, applies each function in reverse order
Returns final result
*/