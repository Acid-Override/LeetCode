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

  return str.split('').reverse().join('') === str
};