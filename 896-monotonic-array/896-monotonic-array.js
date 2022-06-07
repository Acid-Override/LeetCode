/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if ( nums[0] > nums[nums.length - 1] ) {
    nums = nums.reverse()
  }
  for (let i = 0; i < nums.length - 1; i++ ) {
    if ( nums[i] > nums[i + 1] ) {
      return false
    }
  }
return true
}