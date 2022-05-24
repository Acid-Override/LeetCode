/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   
  const args = [...arguments]
  //grab longest word
  let length = 0
  for (let i = 0; i < args.length; i++ ) {
    if ( args[i].length > length ) {
      length = args[i].length
    }
  }
  let accStr = '';

  // iterate down the longest word
    // iterate down the args array
      // add letter from each word along the way

  for (let i = 0; i < length; i++ ) {
    for (let j = 0; j < args.length; j++ ) {
      if( args[j][i]) {
        accStr += args[j][i]
      }
    }
  }
return accStr
};