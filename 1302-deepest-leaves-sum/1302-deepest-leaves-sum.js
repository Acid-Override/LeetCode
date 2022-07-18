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
var deepestLeavesSum = function(root) {
  debugger

  var depth = function(root) {
    if (!root.left && !root.right ) {
      return 0
    }

    let left = root.left && depth(root.left)
    let right = root.right && depth(root.right)

    return Math.max(left, right) + 1
  }

  function sum (root, counter) {

    if(!root) {
      return 0
    }
    if ( counter === result) {
      return root.val
    }

    return sum(root.left, counter + 1) + sum(root.right, counter + 1)
  }

  result = depth(root)
  return sum(root, 0)

 }