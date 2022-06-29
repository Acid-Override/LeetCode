/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {

  let min = 0
  let diff = -1

  for ( let i = 1; i < nums.length; i++ ) {

   if ( nums[i] < nums[min]) min = i

    if (diff < nums[i] - nums[min] ) diff = nums[i] - nums[min]


  }

    if ( diff === 0 ) diff = -1
    return diff === -1 ? -1 : diff
};