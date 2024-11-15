/*
Write a function createHelloWorld. It should return a new 
function that always returns "Hello World".
Any arguments could be passed to the function but it should 
still always return "Hello World"
*/

const createHelloWorld = () => {
    
    return function (...args) {
        return "Hello World"
    }
}

const alwaysHello = createHelloWorld()

console.log(alwaysHello(20))
console.log(alwaysHello("Test function"))
console.log(alwaysHello([2,4,6]))

/*
...args will accept any arguments at all and ignore it so that only "Hello World" is run always
return "Hello World" gives back the exact string 
when alwaysHello() is called it return "Hello World" no matter the value of the argument passed 
*/