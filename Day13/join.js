// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 
// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
// If two objects share an id, their properties should be merged into a single object:
// * If a key only exists in one object, that single key-value pair should be included in the object.
// * If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

const join = function(arr1, arr2) {
    // Create a map to store objects by id
    const idMap = new Map();
    
    // Process arr1
    for (const obj of arr1) {
        idMap.set(obj.id, { ...obj });
    }
    
    // Process arr2 and merge with existing objects
    for (const obj of arr2) {
        if (idMap.has(obj.id)) {
            // Merge with existing object from arr1
            // obj's properties will override existing ones
            idMap.set(obj.id, { ...idMap.get(obj.id), ...obj });
        } else {
            // Add new object
            idMap.set(obj.id, { ...obj });
        }
    }
    
    // Convert map to array and sort by id
    return Array.from(idMap.values())
        .sort((a, b) => a.id - b.id);
};

/*
Uses a Map to store objects by their id:

Keys are the id values
Values are the merged objects


Processing stages:

First processes arr1, adding each object to the map
Then processes arr2, either:

Merging with existing objects from arr1
Adding new objects not in arr1




Merging strategy:

Uses spread operator (...) for object merging
Properties from arr2 override those from arr1
Preserves properties unique to either object
*/

const arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];
const arr2 = [
    {"id": 3, "x": 5},
    {"id": 2, "x": 41}
];

console.log(join(arr1, arr2));
// [
//   {"id": 1, "x": 1},
//   {"id": 2, "x": 41},
//   {"id": 3, "x": 5}
// ]

// Example with overlapping properties
const arr3 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
];
const arr4 = [
    {"id": 2, "x": 10, "z": 8},
    {"id": 3, "x": 15, "z": 12}
];

console.log(join(arr3, arr4));
