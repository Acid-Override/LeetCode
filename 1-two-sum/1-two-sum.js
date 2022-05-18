/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {  
  while(nums) {
    var idx1 = nums.length - 1
    var num1 = nums[idx1]
    var num2 = target - num1
    nums.pop()

    let idx2 = nums.indexOf(num2)
    if( idx2 > -1 ) {
      return [idx1, idx2]
    }
  }
  return null
}