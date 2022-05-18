/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {  
    n = n.toString(2)
  var counter = 0

  for ( let i = 0; i < n.length; i++ ) {
    if( n[i] === '1' ) {
      counter++
    }
  }
  return counter
};