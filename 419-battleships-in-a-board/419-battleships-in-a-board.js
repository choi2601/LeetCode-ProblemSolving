/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let cnt = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const m = dx.length;
    
    let mx = board.length;
    let my = board[0].length;
    
    function DFS(x, y) {
        board[x][y] = '.';
        
        for(let i = 0; i < m; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && nx < mx && ny >= 0 && ny < my && board[nx][ny] === 'X') {
                DFS(nx, ny);
            }
        }
    }
    
    for(let i = 0; i < mx; i++) {
        for(let j = 0; j < my; j++) {
            if(board[i][j] === 'X') {
                cnt++;
                DFS(i, j);
            }
        }
    }
    
    return cnt;
};