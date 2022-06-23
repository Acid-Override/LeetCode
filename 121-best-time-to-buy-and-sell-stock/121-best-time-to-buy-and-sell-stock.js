/**
 * @param {number[]} prices
 * @return {number}
 */
  var maxProfit = function(prices) {
    let max = 0
    let start = 0;
    let end = 1

    while ( end <= prices.length ) {
      if ( prices[start] < prices[end] ) {
        max = Math.max(prices[end] - prices[start], max)
      } else {
        start = end
      }
      end++
    }

    return max
};