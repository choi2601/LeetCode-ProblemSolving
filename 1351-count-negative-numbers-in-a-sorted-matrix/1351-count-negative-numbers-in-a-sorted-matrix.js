/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let cnt = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j <grid[i].length; j++) {
            const val = grid[i][j];
            if(val < 0) cnt++;
        }
    }
    
    return cnt
};