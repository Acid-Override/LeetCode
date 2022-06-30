/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    let base = image[sr][sc]
    
    let fill = function (sr, sc) {
        
        //if array or arry[item] doesn't exist
          //return
        //if image[sr][sc] is not base OR image[sr][sc] is already color
          //return
        if ( image[sr] === undefined || image[sr][sc] === undefined) {
            return
        }
        if ( image[sr][sc] !== base || image[sr][sc] === color ) {
            return
        }
        
        image[sr][sc] = color
        
        fill(sr + 1, sc)
        fill(sr - 1, sc)
        fill(sr, sc + 1) 
        fill(sr, sc - 1)
        
    }
    
    fill(sr, sc)
    return image
    
};