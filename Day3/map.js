/* 
Given an integer array arr and a mapping function fn, return a new 
array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.
*/

const map = function(arr, fn){
    const newArray  = []

    for(let i = 0; arr.length; i++){
        newArray[i] = fn(arr[i], i);
    }
    return newArray;
}

const arr1 = [1, 2, 3];
const plusOne = function(n) { return n + 1; };
console.log(map(arr1, plusOne)); 

/* 
The code creates a version of map() in JS
It starts with empty newArray = []

    For each element in original array:
        Get the element and its position (index)
        Apply the function to them
        Store the result in the new array at same position
*/