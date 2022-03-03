/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const move = {x: 0, y: 0};
    const xPos = [1, 0, -1, 0];
    const yPos = [0, 1, 0, -1];
    
    const moveOrder = {
        U: 0,
        R: 1,
        D: 2,
        L: 3
    }
    
    for(let x of moves) {
        const curXPos = xPos[moveOrder[x]];
        const curYPos = yPos[moveOrder[x]];
        
        move.x += curXPos;
        move.y += curYPos;
    }
    
    const resultMove = Object.values(move);
    
    for(let x of resultMove) {
        if(x) return false;
    }
    return true;
};