// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunkedArray = []
    let index = 0

    while (index < array.length) {
        let splitArray = array.slice(index, (size + index))
        chunkedArray.push(splitArray)

        index += size
    }

    // let chunkedArray = []

    // for (let element of array) {
    //    const lastChunk = chunkedArray[chunkedArray.length - 1]

    //    if (!lastChunk || lastChunk.length === size) {
    //        chunkedArray.push([element])
    //        console.log(chunkedArray)
    //    } else {
    //        lastChunk.push(element)
    //        console.log(chunkedArray)
    //    }
    // }

    return chunkedArray

}
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)

module.exports = chunk;
