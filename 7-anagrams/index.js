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
    
    const regStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    const regStringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    for (let char of regStringA) {
        charMapA[char] = charMapA[char] + 1 || 1
    }
    
    for (let char of regStringB) {
        charMapB[char] = charMapB[char] + 1 || 1
    }
    // console.log(regStringA)
    // console.log(regStringB)
    
    if (regStringA.length !== regStringB.length) {
        return false
    } 

    for (let char in charMapA){
        if (charMapA[char] === charMapB[char]) {
            console.log(char)
            console.log(charMapA[char])
            console.log(charMapB[char])
            return true
        } else {
            return false
        }
    }
}
    
    anagrams('hihi', 'byebye')
    
    module.exports = anagrams;