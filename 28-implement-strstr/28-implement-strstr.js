/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // look for needle string in haystack
    let counter = 0
    
    for ( let i = 0; i < haystack.length; i++ ) {
        if ( haystack[i] === needle[0] ) {
            for ( let j = 0; j < needle.length; j++ ) {
                if (haystack [i + j] === needle[j] ) {
                    counter++                    
                }
            }
            if ( counter === needle.length ) {
                return i
            }
        }
        counter = 0
    }
    return -1
    
};