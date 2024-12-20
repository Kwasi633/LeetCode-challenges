// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

class EventEmitter {
    constructor() {
        // Map to store event names and their callbacks
        this.events = new Map();
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // Get or create array of callbacks for this event
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        
        const callbacks = this.events.get(eventName);
        callbacks.push(callback);
        
        // Return object with unsubscribe method
        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                    // If no more callbacks, remove the event
                    if (callbacks.length === 0) {
                        this.events.delete(eventName);
                    }
                }
                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // If no subscribers, return empty array
        if (!this.events.has(eventName)) {
            return [];
        }
        
        // Call all callbacks with args and collect results
        const callbacks = this.events.get(eventName);
        return callbacks.map(callback => callback(...args));
    }
}

// Constructor:

// Initializes a Map to store event names and their callbacks
// Uses Map for efficient lookup and modification


// subscribe method:

// Creates callback array for new events
// Adds callback to the array
// Returns object with unsubscribe method that:

// Removes the specific callback
// Cleans up empty event arrays
// Returns undefined




// emit method:

// Returns empty array if no subscribers
// Calls all callbacks in subscription order
// Passes provided arguments to callbacks
// Returns array of results

const emitter = new EventEmitter();

// Subscribe to event
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);

// Emit event
console.log(emitter.emit("firstEvent", [5])); // [6, 7]

// Unsubscribe
sub1.unsubscribe(); // undefined

// Emit again with one subscriber
console.log(emitter.emit("firstEvent", [5])); // [7]

// Subscribe to different event
const sub3 = emitter.subscribe("secondEvent", (x, y) => x + y);
console.log(emitter.emit("secondEvent", [1, 2])); // [3]

// Emit non-existent event
console.log(emitter.emit("nonexistent")); // []