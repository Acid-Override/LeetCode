/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(s1, s2) {
  if ( s1.length > s2.length ) {return false}
  //frequency counter
  let obj1 = {}
  let obj2 = {}

  for ( let i = 0; i < s2.length; i++ ) {
    if ( s1[i] !== undefined) {
      obj1[s1[i]] = (obj1[s1[i]] || 0 ) + 1
    }
    obj2[s2[i]] = (obj2[s2[i]] || 0 ) + 1
  }

  for ( let key in obj1 ) {
    if ( !(key in obj2)) {return false}
    if (obj1[key] > obj2[key]) {return false}
  }
  return true
};