// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};




// Adds last() method to Array.prototype so it's available on all arrays
// Returns the last element if array is not empty using this[this.length - 1]
// Returns -1 if array is empty

const arr = [1, 2, 3];
console.log(arr.last()); 

console.log([].last()); 

const nums = [1];
console.log(nums.last()); 

const mixed = [null, {}, 3];
console.log(mixed.last()); 

// Since we're working with JSON-parsed arrays, the elements can be:

// Numbers
// Strings
// Booleans
// null
// Objects
// Arrays

// The function will work correctly with any of these types.