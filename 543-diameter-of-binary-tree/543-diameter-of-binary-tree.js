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
var diameterOfBinaryTree = function (root) {
  debugger
  let depth = 0;

  function innerFunc(root) {
    if ( ! root ) {
      return 0
    }
    let left = innerFunc(root.left)
    let right = innerFunc(root.right)
    depth = Math.max(depth, left + right)
    return Math.max(right, left) + 1


  }
  innerFunc(root)
  return depth
}