/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var acc = 0;

  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      acc += map[s[i + 1]] - map[s[i]];
      i++;
    } else {
      acc += map[s[i]];
    }
  }
  return acc
};