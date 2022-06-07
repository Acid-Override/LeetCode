/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    //iterate array
      // set letter to variable
      // check if each letter matches
        // if not break
      // otherwise
        // concate onto string
    
    let curLet = ''
    let accStr = ''
    
    for ( let i = 0; i < strs[0].length; i++ ) {
        curLet = strs[0][i]
      for( let j = 0; j < strs.length; j++ ) {
          if ( curLet !== strs[j][i] ) {
              return accStr
          }
    
      }
        accStr += curLet
        
    }
    return accStr
    
};