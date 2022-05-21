/**
 * @param {number[]} nums
 * @return {number}
 */
 
var arraySign = function(nums) {

  let prod = nums.reduce((a, b) => a * b)
  return  signFunc(prod)

};

var signFunc = function (num) {

  return num > 0 ? 1 : num < 0 ? -1 : 0
}
