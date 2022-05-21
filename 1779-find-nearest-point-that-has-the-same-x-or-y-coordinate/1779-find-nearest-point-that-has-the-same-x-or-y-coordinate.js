/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  

  let smallest = Infinity;
  let index = -1;

  for(let i = 0; i < points.length; i ++ ) {
    if ( points[i][0] === x || points[i][1] === y) {
      const result = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
      if ( result < smallest ) {
        smallest = result
        index = i
      }
    }
  }
  return index
};