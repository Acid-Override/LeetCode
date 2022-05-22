/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 function Node(val, children) {
  this.val = val;
  this.children = []
}

var preorder = function(root) {
  
  if (!root) {
    return []
  }

  let result =[]
  result.push(root.val)

  if (root.children.length){
    for (let i = 0; i < root.children.length; i++ ) {
      result = result.concat(preorder(root.children[i]))
    }
  }
  return result
}



// var root = new Node(1)
// var nodeThree = new Node(3)
// var nodeFive = new Node(5)
// nodeThree.children.push(nodeFive)
// var nodeSix = new Node(6)
// nodeThree.children.push(nodeSix)
// root.children.push(nodeThree)
// var nodeTwo = new Node(2)
// root.children.push(nodeTwo)
// var nodeFour = new Node(4)
// root.children.push(nodeFour)

// console.log(preorder(root))