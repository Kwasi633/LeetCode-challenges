// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

const compactObject = function(obj) {
    // Base case: if obj is not an object or is null
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    
    // Handle arrays
    if (Array.isArray(obj)) {
        return obj
            .map(item => compactObject(item))  // Recursively compact items
            .filter(Boolean);                   // Remove falsy values
    }
    
    // Handle objects
    const result = {};
    for (const key in obj) {
        const value = compactObject(obj[key]);  // Recursively compact value
        if (Boolean(value)) {                   // Only keep truthy values
            result[key] = value;
        }
    }
    
    return result;
};

/*
Base case: if input isn't an object or is null, return as-is
For arrays:

Map each item through compactObject recursively
Filter out falsy values


For objects:

Recursively compact each value
Only keep key-value pairs with truthy values
*/

// Simple object
console.log(compactObject({"a": null, "b": [false, 1]}))


// Nested objects
compactObject({"a": {"b": null, "c": 2}, "d": 3});


// Arrays with falsy values
compactObject([null, 0, false, 1]);


// Complex nested structure
compactObject([null, {}, [false, 1]]);


/*
Falsy values in JavaScript that will be removed:

false
0
"" (empty string)
null
undefined
NaN

Key features:

Handles both objects and arrays
Preserves object/array type in output
Deep recursion for nested structures
Removes all falsy values at all levels
Preserves object references for truthy nested objects

Time Complexity: O(n) where n is total number of properties
Space Complexity: O(n) for the compacted result
*/