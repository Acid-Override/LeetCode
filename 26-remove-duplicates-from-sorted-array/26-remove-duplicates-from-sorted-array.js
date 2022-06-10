/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  newNums = Array.from(new Set(nums))

  for ( let i = 0; i < nums.length; i++ ) {
    if ( i < newNums.length ) {
    nums[i] = newNums[i]
  } else {
    nums[i] = '_'
  }
  }
  return newNums.length

};