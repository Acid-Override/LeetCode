/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    for ( let i = 0; i < words.length - 1; i++ ) {
      for ( let j = 0; j < words[i].length; j++ ) {
        idx1 = order.indexOf(words[i][j])
        idx2 = order.indexOf(words[i + 1][j])

        if ( idx1 < idx2 ) {
          break;
        }
        if ( idx1 > idx2 ) {
          return false
        }

      }
    }

    return true
};