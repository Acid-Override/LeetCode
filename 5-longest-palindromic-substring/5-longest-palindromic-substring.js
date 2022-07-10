/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  
  let longest = '';
  let section = '';

  for (let i = 0; i < s.length && (s.length - i) > longest.length; i++ ) {
    section = '';
    for ( let j = i; j < s.length; j++ ) {
      section += s[j];

      if ( isPalindrome(section) ) {
        if ( section.length > longest.length ) {
          longest = section
        }
      }
    }
  }
  return longest
};

var isPalindrome = function(str) {  

  if ( str.length < 2 ) {
    return true
  }

  if ( str[0] !== str[str.length - 1]) {
    return false
  }

  return isPalindrome(str.slice(1, str.length - 1))
}