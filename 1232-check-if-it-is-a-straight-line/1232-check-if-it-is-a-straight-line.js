/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
   debugger
  coordinates.sort((a, b) => a[1] - b[1])

   let isStraight = true



   let Xdiff = (coordinates[1][0]-coordinates[0][0])
   let Ydiff = (coordinates[1][1]-coordinates[0][1])
   //let offset = Math.abs(coordinates[0][0] - coordinates[0][1])
   let slope = Ydiff/Xdiff

   for ( let i = 2; i < coordinates.length; i++ ) {

     let curXDiff = (coordinates[i][0] - coordinates[0][0])
     let curYDiff = (coordinates[i][1] - coordinates[0][1])
     const currentSlope = curYDiff/curXDiff
     if (currentSlope !== slope) {
       isStraight = false
       break;
     }
   }
   return isStraight
};