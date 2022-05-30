/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if ( s.length !== t.length ) {return false}

  const ObjS = {}
  const ObjT = {}

  for ( let i = 0; i < s.length; i++ ) {
    if (!ObjS[s[i]]) {ObjS[s[i]] = 0}
    if (!ObjT[t[i]]) {ObjT[t[i]] = 0}
    ObjS[s[i]]++
    ObjT[t[i]]++
  }
  for( let letter in ObjS ) {
    if ( ObjS[letter] !== ObjT[letter] ) { return false }
  }
  return true

};



