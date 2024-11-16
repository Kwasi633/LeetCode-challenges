/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

const createCounter = function(init) {
    let currentValue = init;
    
    
    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        
        
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
};

const counter = createCounter(24);

console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset()); 