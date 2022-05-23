/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {

  let adjLength = mat.length - 1
  let sum = 0;

  for (let i = 0; i < mat.length; i++ ) {
    if ( i === adjLength - i) {
      sum += mat[i][i]
    } else {
      sum += mat[i][i] + mat[i][adjLength - i] //+ mat[adjLength - i][i] + mat[adjLength - i][adjLength - i]
    }
  }
return sum
};