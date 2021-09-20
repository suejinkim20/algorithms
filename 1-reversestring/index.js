// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // SOLUTION USING REDUCE HELPER
        return str.split('').reduce((reversed, character) => character + reversed, '')
    
    
    // SOLUTION USING FOR LOOP
        // let reversed = ''
    
        // // old school for loop
        //     // for (let i = 0; i < str.length; i++) {
        //     //     reversed = str[i] + reversed
        //     // }
    
        // // new for loop
        //     // for (character of str) {
        //     //     reversed = character + reversed
        //     // }
    
        // console.log("reversed==>", reversed)
        // return reversed
    
    
    // SOLUTION USING THE REVERSE HELPER
    
        // const array = str.split("")
        // const newArray = array.reverse()
        // return newArray.join("")
    
        // return str.split("").reverse().join("")
    
        // maybe can also do implicit return on arrow function
    
    }
    
    module.exports = reverse;
    