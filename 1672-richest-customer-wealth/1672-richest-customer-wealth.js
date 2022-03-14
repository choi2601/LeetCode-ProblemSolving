/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    
    for(let account of accounts) {
        const sum = account.reduce((a, b) => a + b);
        if(sum > max) max = sum;
    }
    
    return max;
};