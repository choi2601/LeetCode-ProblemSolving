/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let sum = 0;
    let cnt = 0;
    
    for(let x of s) {
        if(x === 'R') sum -= 1;
        else sum += 1;
        
        if(sum === 0) cnt++;
    }
    
    return cnt;
};