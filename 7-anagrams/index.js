// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charMapA = {}
    const charMapB = {}
    
    // const regStringA = stringA.replace()
    
    for (let char of stringA) {
        charMapA[char] = charMapA[char] + 1 || 1
    }
    
    for (let char of stringB) {
        charMapB[char] = charMapB[char] + 1 || 1
    }
    
    if (stringA.length !== stringB.length) {
        console.log(false)
        return
    } else {
        console.log(true)
    }
    
    console.log(charMapB)
    }
    
    anagrams('hihi', 'byebye')
    
    module.exports = anagrams;