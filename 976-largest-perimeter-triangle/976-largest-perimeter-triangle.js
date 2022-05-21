/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  debugger
  if (nums < 3) {
    return 0
  }
  nums.sort((a, b) => b - a)
  let largest = 0
  for (let i = 0; i < nums.length - 2; i++ ){
    let current = [nums[i], nums[i+1], nums[i+2]]
    if ( current[2] + current[1] > current[0] ) {
      return current.reduce((a,b) => a + b)
    }
  }
  return 0
};