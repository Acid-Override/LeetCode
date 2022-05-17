/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++ ) {
    let counter = i + 1
    while( counter !== nums.length) {
      if (nums[i] + nums[counter] === target) {
        return [i, counter]
      }
      counter++
    }
  }
return null
};
