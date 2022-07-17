/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  //debugger
  let sign
  let ans
  s = s.trim().split('')
  if (!s.length) {return 0}

  for (let i = 0; i < s.length; i++ ) {
    if ( s[i] === '-' || s[i] === '+' ) {
      if (s.length < 2) {
        return 0
      }
    }
    if ( (s[i] === '-' || s[i] === '+') && (typeof parseInt(s[i+1]) === 'number' && s[i+1] !== ' ')) {
      if ( !(s[i+1] === '-' || s[i+1] === '+') ) {
        sign = s[i]
        s = s.slice(i + 1)
        break
      } else {
        return 0
      }

    }

    if ( !Number.isInteger(parseInt(s[i]))) {
      return 0
    }
    if (Number.isInteger(parseInt(s[i]))) {
      s = s.slice(i)
      break
    }
  }

  sign ? ans = parseInt(sign + parseInt(s.join(''))) : ans = parseInt(s.join(''))
  if (!ans) {
    return 0
  }

  if (ans > (2**31 - 1)) {
    return (2**31 - 1)
  }
  if ( ans < -1 * 2**31 ) {
    return -1 * 2**31
  }
  return ans
};
