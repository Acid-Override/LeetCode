/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   if ( target > nums[nums.length - 1] ) {
     return nums.length
   }
   if ( target < nums[0] ) {
     return 0
   }

   let min = 0;
   let max = nums.length
   let middle = Math.floor( (max + min) / 2)

   while ( target !== nums[middle] ) {

    if ( nums[middle] === target || target > nums[middle] && target < nums[middle + 1]) {
      return middle + 1
    }

    if ( target > nums[middle - 1] && target < nums[middle] ) {
      return middle
    }

    if ( target < nums[middle] ) {
      max = middle;
      middle = Math.floor( ( max + min ) / 2 )
      continue
    }

    if (target > nums[middle] ) {
      min = middle
      middle = Math.ceil ( (max + min) / 2 )
    }
   }
   return middle

};