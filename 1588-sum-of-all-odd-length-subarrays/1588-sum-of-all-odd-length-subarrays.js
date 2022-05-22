/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {

  let accArr = []
  let sum = 0

  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = arr.length; j >= 0 && j > i; j-- ) {
      let curSlice = arr.slice(i, j)
      if ( curSlice.length % 2 === 1) {
        curSlice.forEach(num => sum += num)
      }
    }
  }
//return accArr.flat().reduce((a, b) => a + b)
return sum
};