/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function(n) {
    debugger

    if ( n === 1 ) {
      if ( isBadVersion(1) ) {
        return 1;
      }
      return n + 1
    }

    let min = 1;
    let max = n;
    let mid = Math.floor((max + min) / 2 );

    while(min <= max ) {
      if ( !isBadVersion(mid) ) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
      mid = Math.floor( (max + min) / 2 );
    }
    return mid + 1
  };
};