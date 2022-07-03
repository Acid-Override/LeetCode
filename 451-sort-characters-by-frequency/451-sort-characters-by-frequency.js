/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let obj = {}
    
    for ( let i = 0; i < s.length; i++ ) {
        obj[s[i]] = (obj[s[i]] || 0 ) + 1
    }
    
    let arr = []
    
    
    
    for ( let key in obj ) {
        arr.push({key, val: obj[key]})
    }
//     return arr.sort((a, b) => b.val - a.val)
//     .map(ea => new Array(ea.val).fill(ea.key).join(''))
//     .join('')
    
  let str = '';
  let j;

  arr.sort((a, b) => b.val - a.val)
  for ( let i = 0; i < arr.length; i++ ) {
    j = 0
      while ( j < arr[i].val ) {
          str += arr[i].key
          j++
      }
  }
return str   
};