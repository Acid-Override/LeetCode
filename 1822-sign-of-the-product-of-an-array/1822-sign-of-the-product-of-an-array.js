/**
 * @param {number[]} nums
 * @return {number}
 */
 
 var arraySign = function(nums) {
   if(nums.includes(0)) {
     return 0
   }
  let prod = nums.reduce((a, b) => a * b)
  return prod > 0 ? 1 : prod < 0 ? -1 : 0
};
