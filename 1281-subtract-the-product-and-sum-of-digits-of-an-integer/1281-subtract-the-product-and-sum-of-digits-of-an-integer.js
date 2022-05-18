/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  n = n.toString()
  let sum = 0;
  let prod = 1;

  for ( let i = 0; i < n.length; i++ ) {
    sum += +n[i]
    prod *= +n[i]
  }
   return prod - sum
};