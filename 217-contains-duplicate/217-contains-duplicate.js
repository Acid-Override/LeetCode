/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
 newNums = new Set(nums)
return !(newNums.size === nums.length)
};