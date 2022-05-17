/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  const length = salary.length  
    return salary.sort((a,b) => a - b).slice(1,length - 1).reduce((acc, ea) => acc + ea,0)/(length - 2)
};