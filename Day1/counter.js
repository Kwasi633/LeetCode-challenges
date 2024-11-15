/*
Given an integer n, return a counter function. 
This counter function initially returns n and then 
returns 1 more than the previous value every subsequent 
time it is called (n, n + 1, n + 2, etc).
*/



const counter = (n) => {
    let count = n

    return function () {
        return count++
    }
}

const newVal = counter(10)

console.log(newVal())
console.log(newVal())
console.log(newVal())

/*
let count = n creates a variable that will remember the initial value
the inner function returns the current value of count
the ++ operator will always return the initial value of a variable before increasing it afterwards 
so count++ becomes +1 only after its initial value was returned
*/