/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
   
      const hashmap = {}
      const hashcomp = {}

      for ( let i = 0; i < t.length; i++ ) {
        if (!hashmap[s[i]] && s[i] !== undefined) {
          hashmap[s[i]] = 0
        }
        hashmap[s[i]]++

        if (!hashcomp[t[i]]) {
          hashcomp[t[i]] = 0
        }
        hashcomp[t[i]]++
      }

      for ( let letter in hashcomp ) {
        if (hashcomp[letter] !== hashmap[letter]) {
          return letter
        }
      }

};