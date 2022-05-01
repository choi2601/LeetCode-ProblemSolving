/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    const len = dx.length;
    
    const mx = grid.length;
    const my = grid[0].length;
    
    let max = 0;
    let area = 0; 
    
    function DFS(x, y) {
        grid[x][y] = 0;
        
        for(let z = 0; z < len; z++) {
            const nx = x + dx[z];
            const ny = y + dy[z];
            
            if(nx >= 0 && nx < mx && ny >= 0 && ny < my && grid[nx][ny]) {
                area++;
                DFS(nx, ny);
            }
        }
    }
    
    for(let i = 0; i < mx; i++) {
        for(let j = 0; j < my; j++) {
            if(grid[i][j]) {
                area = 1;
                DFS(i, j);
                max = Math.max(area, max);
                area = 0;
            }
        }
    }
    
    return max;
};