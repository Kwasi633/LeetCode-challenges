/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final 
result obtained by executing the fn function on each element of the array, sequentially, passing in the return 
value from the calculation on the preceding element.
This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), 
val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then 
returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/


const reduce = function(nums, fn, init) {
    let val = init;
    
    for(let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    
    return val;
};

//sum all nums
const nums1 = [1, 2, 3, 4];
const sum = function(acc, curr) { return acc + curr; };
console.log(reduce(nums1, sum, 0)); // 10

// Example 2: Multiply all numbers
const nums2 = [1, 2, 3, 4];
const multiply = function(acc, curr) { return acc * curr; };
console.log(reduce(nums2, multiply, 1)); // 24

/*
The code creates a version of reduce() in JS
Takes array (nums), function (fn), and starting value (init)
Starts with init value
Uses function to combine each array element with previous result
Returns final combined result

Step by step for the sum example with [1, 2, 3, 4], init = 0:

Start: val = 0 (init)
First: val = fn(0, 1) = 0 + 1 = 1
Second: val = fn(1, 2) = 1 + 2 = 3
Third: val = fn(3, 3) = 3 + 3 = 6
Fourth: val = fn(6, 4) = 6 + 4 = 10
Return: 10
*/