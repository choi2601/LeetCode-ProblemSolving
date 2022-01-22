var numIslands = function(grid) {
    let answer = 0;
    const n1 = grid.length;
    const n2 = grid[0].length;
    // let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    // let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const m = dx.length;
    const queue = [];
    
//     function DFS(x, y) {
//         grid[x][y] = '0';
//         for(let k = 0; k < m; k++) {
//                 const nx = x + dx[k];
//                 const ny = y + dy[k];
//                 if(nx < n && ny < n && nx >= 0 && ny >= 0 && grid[nx][ny] === '1') {
//                     DFS(nx, ny);
//                 }
//         }
//     }
    
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             const curPos = grid[i][j];
//             if(curPos === '1') {
//                 answer++;
//                 DFS(i, j);
//             }
//         }
//     }
    
    
    for(let i = 0; i < n1; i++) {
        for(let j = 0; j < n2; j++) {
            if(grid[i][j] === '1') {
                grid[i][j] = '0';
                queue.push([i, j]);
                answer++;
                while(queue.length) {
                    const [x, y] = queue.shift();
                    for(let k = 0; k < m; k++) {
                        const nx = x + dx[k];
                        const ny = y + dy[k];
                        if(nx >= 0 && nx < n1 && ny >= 0 && ny < n2 && grid[nx][ny] === '1') {
                            grid[nx][ny] = '0';
                            queue.push([nx, ny]);
                        }
                    }
                }
            }
        }
    }
    return answer;
};