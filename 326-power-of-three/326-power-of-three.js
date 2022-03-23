/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let num = 0;
    let acc = 0;
    
    while(num <= n) {
        num = Math.pow(3, acc);
        if(num === n) return true;
        acc++;
    }
    
    return false;
};