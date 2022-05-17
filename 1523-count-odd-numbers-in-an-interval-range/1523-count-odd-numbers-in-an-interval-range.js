/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  if ( low % 2 === 1 ) {
    return Math.ceil((high + 1 - low)/2)
  }
  return Math.floor((high + 1 - low)/2)
}
