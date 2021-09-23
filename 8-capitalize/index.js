// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
function capitalize(str) {
    const capitalized = []
    const array = str.split(' ')

    for (let word of array) {
       const changedWord = word[0].toUpperCase() + word.slice(1)
       capitalized.push(changedWord)
    }
    return capitalized.join(' ')

}

capitalize('look, it is working!')


module.exports = capitalize;
