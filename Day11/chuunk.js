// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.


const chunk = function(arr, size) {
    const result = [];
    
    // Iterate through array in steps of size
    for (let i = 0; i < arr.length; i += size) {
        // Slice chunks of size and add to result
        result.push(arr.slice(i, i + size));
    }
    
    return result;
};

// Creates an empty result array to store the chunks
// Iterates through the input array in steps of size
// Uses slice() to extract chunks of specified size
// The last chunk will automatically be smaller if arr.length isn't divisible by size

console.log(chunk([1, 2, 3], 1));        
console.log(chunk([1, 2, 3], 2));        
console.log(chunk([1, 2, 3, 4, 5], 2));  
console.log(chunk([], 1));               