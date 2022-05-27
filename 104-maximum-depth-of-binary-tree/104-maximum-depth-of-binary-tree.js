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
var maxDepth = function(root, counter = 1, max = 0) {
    
    if(!root){
        return 0
    }
  
   if ( counter > max ) {
     max = counter
   }

   if(root.left) {
     max = maxDepth(root.left, ++counter, max) 
     counter--   
   }
   if(root.right) {
     max = maxDepth(root.right, ++counter, max)
     counter--   
   }
return max
};