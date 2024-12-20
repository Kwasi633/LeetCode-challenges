// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.
// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.
// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
// Please solve it without the built-in Array.flat method.

const flat = function (arr, n) {
    // Base case: if n is 0 or array is flat, return array
    if (n === 0) {
        return arr;
    }
    
    // Create result array
    const result = [];
    
    // Process each element
    for (const item of arr) {
        if (Array.isArray(item)) {
            // Recursively flatten with depth-1 and spread results
            result.push(...flat(item, n - 1));
        } else {
            // Add non-array elements directly
            result.push(item);
        }
    }
    
    return result;
};

// Base case: if depth n is 0, return array as-is
// For each element in the array:

// If it's an array, recursively flatten it with depth-1
// If it's not an array, add it directly to result


// Use spread operator to combine flattened subarrays

// Flatten one level
flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12]], 1);


// Flatten two levels
flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12]], 2);


// Zero depth (no flattening)
flat([1, 2, 3, [4, 5, 6]], 0);


// Key features of the function
// Handles any level of nesting
// Preserves element order
// Works with mixed types (arrays and non-arrays)
// Efficient recursion that stops at specified depth

// Time Complexity: O(n) where n is total number of elements across all arrays
// Space Complexity: O(n) for the flattened result