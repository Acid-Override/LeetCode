/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
  debugger
  let cache = {}
  let shouldSkip = false;
  var result = []

nums.forEach((element, index) => {
    if (shouldSkip) return;

    var res = target - element

    if (res in cache) {
      shouldSkip = true
      result = [index, cache[res]]
    }
    cache[element] = index
  });
  return result
}