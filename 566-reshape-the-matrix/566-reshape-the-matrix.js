/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
   var matrixReshape = function(mat, r, c) {
    
    //check to make sure it is legal
    // array length * individual array equals r * c
    if ( mat.length * mat[0].length !== r * c ) {
      return mat
    }

    //flatten out array so we can iterate down all nums
    mat = mat.flat()

    let crawler = 0; //mat walker
    let accArr = []; // accumulator bucket

    //set up crawler variable
    //set up accArr

    for (let i = 0; i < r; i++ ) {
      accArr.push([]) //create a new bucket @ each row
      for (let j = 0; j < c; j++ ) {
        //fill up each row bucket by column number
        accArr[i].push(mat[crawler])
        crawler++
      }
    }

    // iterate from 0 to r
      // each row gets its own bucket

      //iterate from 0 to c
        // walk down flatten array
        // deposit number into bucket

return accArr
};