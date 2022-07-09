/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNeg = false;

  if ( x < 0 ) {
    isNeg = true;
    x = Math.abs(x)
  }
  x = x.toString().split('').reverse();

  let result = parseInt(x.join(''))
  if ( result > 2**31 ) {
    return 0
  }

  return isNeg ? result * -1 : result

};