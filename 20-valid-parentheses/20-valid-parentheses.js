/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 2 === 1) {
    return false
  }

      let arr = []

      for ( let i = 0; i < s.length; i++ ) {
        if ( s[i] === '(' || s[i] === '[' || s[i] === '{' ) {
          arr.push(s[i]);
          continue
        }
        if ( s[i] === ')' && arr[arr.length - 1] === '(' ) {
          arr.pop();
          continue;
        }
        if ( s[i] === ']' && arr[arr.length - 1] === '[' ) {
          arr.pop();
          continue;
        }
        if ( s[i] === '}' && arr[arr.length - 1] === '{' ) {
          arr.pop()
          continue;
        }
          return false;
      }
      return arr.length === 0
 }
 