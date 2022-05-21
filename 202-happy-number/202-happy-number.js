/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

   let counter = 0
   

   while ( n !== 1 && n < Infinity ) {
    let sum = 0
    n = n + ''
    for (let i = 0; i < n.length; i++ ) {
      sum += n[i]**2
    }
    if (sum === 1) {
      return true
    }
    if ( sum === 145) {
      counter++
    }
    if (counter === 2) {
      return false
    }
    n = sum
  }
    return true
};