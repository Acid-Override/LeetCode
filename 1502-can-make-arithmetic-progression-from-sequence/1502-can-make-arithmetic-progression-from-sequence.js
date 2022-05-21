/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {


  if ( arr.length < 2 ) {
    return false
  }

  let isProgress = true

  const result = arr.sort((a, b) => a - b)
  const diff = arr[1] - arr[0]

  for (let i = 0; i < result.length - 1; i++ ) {
    if( isProgress ) {
      if (result[i + 1] - result[i] !== diff){
        isProgress =  false
      }
    }
  }
  return isProgress
};