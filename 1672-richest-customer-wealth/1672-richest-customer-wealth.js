/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts, curMax = 0) {

  if ( !Array.isArray(accounts[0]) ) {
    const total = accounts.reduce((a, b) => a + b)
    if ( total > curMax ) {
      return total
    } else {
      return curMax
    }
  }

  let result = 0;
  for (let i = 0; i< accounts.length; i++ ) {
    result = maximumWealth(accounts[i], result)
  }
  return result
};