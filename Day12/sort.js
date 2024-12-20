// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array


const sortBy = function(arr, fn) {
    return arr
        .map(item => ({ item, key: fn(item) }))
        .sort((a, b) => a.key - b.key)
        .map(({ item }) => item);
};

// Maps each element to an object containing:

// item: The original element
// key: The result of applying fn to that element


// Sorts these objects based on the key values
// Maps back to just the original items in their sorted order

// Sort numbers by themselves
sortBy([5, 4, 1, 2, 3], x => x);

// Sort strings by length
sortBy(['apple', 'pear', 'banana'], x => x.length);

// Sort objects by some property
sortBy([{x: 1}, {x: 0}, {x: 2}], obj => obj.x);