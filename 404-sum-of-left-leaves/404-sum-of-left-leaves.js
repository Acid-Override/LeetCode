/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root, isLeft = false) {
   

if(!root) {return 0}
  let sum = 0;

  if(isLeft  && !root.left && !root.right) {
    sum += root.val
  }

  sum += sumOfLeftLeaves(root.left, true)
  sum += sumOfLeftLeaves(root.right)

  return sum
};