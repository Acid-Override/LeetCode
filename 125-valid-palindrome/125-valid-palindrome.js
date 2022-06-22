/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {

    s = s.toLowerCase().split('')
    let str = ''
    let letMap = 'abcdefghijklnmopqrstuvwxyz0123456789'

    for ( let i = 0; i < s.length; i++ ) {
      if (letMap.indexOf(s[i]) > -1 ){
        str += s[i]
      }
    }

  for ( let i = 0; i < Math.ceil(str.length/2); i++ ) {
    if ( str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
};