// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
// The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// Please solve it without lodash's _.groupBy function.


Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {
        // Get the key for this item using the provided function
        const key = fn(item);
        
        // If this key doesn't exist yet, create an empty array for it
        if (!grouped[key]) {
            grouped[key] = [];
        }
        
        // Add the item to its group
        grouped[key].push(item);
        
        return grouped;
    }, {});
};

// Uses reduce to build up the grouped object
// For each item:

// Gets the key by calling fn(item)
// Creates an array for that key if it doesn't exist
// Pushes the current item into the appropriate group

// Returns the final grouped object

[1,2,3].groupBy(String);

// Group numbers by whether they're even
[1,2,3,4,5,6].groupBy((n) => n % 2 === 0 ? 'even' : 'odd');

// Group array of objects
[{id:"1"},{id:"2"},{id:"1"}].groupBy((item) => item.id);

// Key features:

// Maintains order of elements within groups
// Works with any valid JavaScript callback that returns a string key
// Handles all JSON-compatible data types
// Creates groups lazily (only when needed)

// Time Complexity: O(n), where n is the length of the array
// Space Complexity: O(n) to store all items in their groups
