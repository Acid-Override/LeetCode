/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  debugger
  //build a hash map
  let max = 0;
  let key = ''
  let hash = {};

  for (let i = 0; i < nums.length; i++ ) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1
  }

  for ( let key in hash ) {
    if (hash[key] > max) {
      max = hash[key]
      maj = key
    }
  }
    return maj
};