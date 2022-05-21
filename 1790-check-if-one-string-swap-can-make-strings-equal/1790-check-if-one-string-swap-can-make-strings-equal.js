/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
  var areAlmostEqual = function(s1, s2) {
   if (s1.length !== s2.length) {
     return false
   }

  if (JSON.stringify(s1) === JSON.stringify(s2)) {
    return true;
  }

  let cache = {}

  for (let i = 0; i < s1.length; i++ ) {
    if ( s1[i] === s2[i]) {
      continue;
    }
    if (s1[i] !== s2[i] && !cache[s1[i]] ) {
      cache[s1[i]] = s2[i]
      continue;
    }
    return false;
  }
  if (Object.keys(cache).length > 2) {
    return false;
  }

  for (let key in cache) {
    let temp = cache[key] // cache[b] = k  cache[k] = b
    if (cache[temp] === key) {
      return true;
    }
  }
return false;
};