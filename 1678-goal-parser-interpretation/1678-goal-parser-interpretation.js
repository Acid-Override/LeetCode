/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
   
  let accStr = ''

  //recursion : pure
  //base case
  if (!command) {
    return ''
  }

  //slice off section and call helper function
  for ( let i = 0; i < command.length; i++ ) {
    if ( command[i] === 'G' ) {
      return accStr += command[i] + interpret(command.slice(1))
    }
    if ( command[i] === '(' && command[i+1] === ')' ) {
      return accStr += 'o' + interpret(command.slice(2))
    }
    if ( command[i] === '(' && command [i+1] === 'a' ) {
      return accStr += 'al' + interpret(command.slice(4))
    }

  }



};