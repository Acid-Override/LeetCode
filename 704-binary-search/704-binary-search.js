/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let min = 0, max = nums.length, mid = Math.floor((max + min) / 2)
    
    while ( target !== nums[mid] && min <= max ) {
        if ( target < nums[mid] ) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
        mid = Math.floor((max + min) / 2 )
    }
    return target === nums[mid] ? mid : -1
};