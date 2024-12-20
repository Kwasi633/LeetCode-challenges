/*
Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
*/


class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    
    /**
     * @param {ArrayWrapper} other
     * @return {number}
     */
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }
    
    /**
     * @return {string}
     */
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

// constructor:

// Stores the input array in the instance


// valueOf():

// JavaScript calls this when using the + operator
// Returns sum of all numbers in array
// Uses reduce for efficient summation


// toString():

// Called when converting object to string
// Returns comma-separated numbers in brackets
// Uses join() for array formatting

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);

console.log(obj1 + obj2); // 10
// When adding, valueOf() is called on each object
// obj1.valueOf() returns 1 + 2 = 3
// obj2.valueOf() returns 3 + 4 = 7
// Final result is 3 + 7 = 10

String(obj1); // "[1,2]"
String(obj2); // "[3,4]"

// Empty array cases
const obj3 = new ArrayWrapper([]);
console.log(obj3 + obj3); // 0
String(obj3); // "[]"

/*
The implementation:

Uses JavaScript's built-in object methods for operator overloading
Handles empty arrays correctly
Returns the right type for each operation (number for addition, string for String())
Is memory efficient (doesn't create unnecessary copies)
*/