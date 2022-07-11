/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
if ( s.length < 2 ) {return s.length}

  let acc = []
  let longest = []

  let pointer = 0

  for ( let i = 0; i < s.length; i++ ) {

    pointer = i
    acc = []
    while ( pointer < s.length ) {

      if ( !acc.includes(s[pointer] ) ) {
        acc.push(s[pointer])
        pointer++
      }
       else {
        if ( acc.length > longest.length ) {
          longest = acc
          break;
        }
        break;

      }

    }
    if ( acc.length > longest.length ) {
      longest = acc
    }

  }
  return longest.length;

};