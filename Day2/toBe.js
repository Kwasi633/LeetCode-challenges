/*
Write a function (expect) that helps developers test their code. 
It should take in any value (val) and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they 
are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they 
are equal, it should throw an error "Equal".
*/

const expect = (val) => {
    return {
        toBe: function(x){
            if(x === val){
                return "True"
            }
            else return "Not equal"
        },

        notToBe: function(y){
            if(y !== val){
                return "True"
            }
            else return "Equal"
        }
    }
}

console.log(expect(5).toBe(8))
console.log(expect(8).notToBe(8))

/*
toBe property in the object checks if two values are exactly the same(===)
notToBe property in the object checks if two values are different(!==)
*/