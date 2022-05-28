/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
   arr.sort((a, b) => a - b)

   const accArr = []
   for ( let i = 0; i < arr.length; i++ ) {
     let bits = arr[i].toString(2).split('').reduce((a, b) => +a + +b)
   
     if ( !accArr[bits] ) {
       accArr[bits] = []
     }
     accArr[bits].push(arr[i])
   }
return accArr.flat()
};