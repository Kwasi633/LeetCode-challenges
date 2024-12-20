// Given an object or an array, return if it is empty.
// * An empty object contains no key-value pairs.
// * An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse


const isEmpty = function(obj) {
    // For arrays, check length property
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    
    // For objects, check if there are any keys
    return Object.keys(obj).length === 0;
};

// First checks if the input is an array using Array.isArray()
// If it's an array, simply checks the length property
// If it's an object, uses Object.keys() to get all keys and checks their length

console.log(isEmpty({}));           
console.log(isEmpty([]));           
console.log(isEmpty([1, 2, 3]));    
console.log(isEmpty({"x": 5}));     