/**
 Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
**/

var cancelFn = function(fn, args, t) {
    // Immediately call the function with initial arguments
    fn(...args);
    
    // Start the interval
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);
    
    // Return the cancel function
    return () => {
        clearInterval(intervalId);
    };
};