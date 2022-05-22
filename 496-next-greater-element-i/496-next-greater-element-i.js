/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
     const ans = []

        for (let i = 0; i < nums1.length; i++) {
          const idx = nums2.indexOf(nums1[i])
          for (let j = idx; j < nums2.length; j++ ) {
            if(nums2[j] > nums1[i]) {
              ans.push(nums2[j])
              break
            }
          }
          if (ans.length < i + 1) {
            ans.push(-1)
          }
        }
        return ans
};