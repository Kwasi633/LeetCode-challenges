// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

class TimeLimitedCache {
    constructor() {
        // Use a Map to store key-value pairs with additional metadata
        this.cache = new Map();
    }
    
    /**
     * Set a key-value pair with expiration
     * @param {number} key 
     * @param {number} value 
     * @param {number} duration 
     * @returns {boolean}
     */
    set(key, value, duration) {
        // Check if the key already exists and is not expired
        const existingEntry = this.cache.get(key);
        const keyExists = existingEntry && existingEntry.expiresAt > Date.now();
        
        // Set or update the entry with new expiration time
        this.cache.set(key, {
            value,
            expiresAt: Date.now() + duration
        });
        
        // Return whether the key existed before setting
        return !!keyExists;
    }
    
    /**
     * Get the value for a key if not expired
     * @param {number} key 
     * @returns {number}
     */
    get(key) {
        const entry = this.cache.get(key);
        
        // Check if entry exists and is not expired
        if (entry && entry.expiresAt > Date.now()) {
            return entry.value;
        }
        
        return -1;
    }
    
    /**
     * Count the number of un-expired keys
     * @returns {number}
     */
    count() {
        let activeCount = 0;
        const now = Date.now();
        
        // Iterate through all entries to count un-expired keys
        for (const [_, entry] of this.cache) {
            if (entry.expiresAt > now) {
                activeCount++;
            }
        }
        
        return activeCount;
    }
}

const timeLimitedCache = new TimeLimitedCache();

// Set a key-value pair for 1000ms
timeLimitedCache.set(1, 42, 1000); // Returns false
timeLimitedCache.set(1, 50, 1000); // Returns true (overwrites previous)

// Get the value
console.log(timeLimitedCache.get(1)); // 50

// Wait for expiration
setTimeout(() => {
    console.log(timeLimitedCache.get(1)); // -1
    console.log(timeLimitedCache.count()); // 0
}, 1500);

/**
 Uses Date.now() for precise timing
Handles key overwriting
Efficiently tracks and retrieves un-expired entries
O(1) time complexity for set and get
O(n) time complexity for count 
 */