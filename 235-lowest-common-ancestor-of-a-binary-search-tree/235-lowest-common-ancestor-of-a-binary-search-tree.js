/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) { 
    let rightIsLarger = root.val > p.val && root.val > q.val
    let leftIsLarger = root.val < p.val && root.val < q.val
    
    if(rightIsLarger) return lowestCommonAncestor(root.left, p, q)
    else if(leftIsLarger) return lowestCommonAncestor(root.right, p, q)
    else return root
}