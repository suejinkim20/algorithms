// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // How do you deal with even and odd stairs?

    for (let i = 0; i < n; i++) {
        let line = []
        for (let j = 0; j < n; j++) {
            const hash = '#'
            const space = ' '
            if (j <= i) {
                line.push(hash)
            } else {
                line.unshift(space)
                line.push(space)
            }

        }
        console.log(line)
        const stair = line.join('')
        // console.log(stair)
    }

}

module.exports = pyramid;
