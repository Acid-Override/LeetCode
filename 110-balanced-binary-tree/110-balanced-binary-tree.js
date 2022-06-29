 const isBalanced = function (root) {
  debugger

  let balanced = true

  const innerFunc = function (root) {
    if ( !root ) {
      return 0
    }

    const left = innerFunc(root.left)
    const right = innerFunc(root.right)

    if(Math.abs(left - right) > 1) {
      balanced = false
    }
    return Math.max(left, right) + 1
  }
  innerFunc(root)
  return balanced;
}